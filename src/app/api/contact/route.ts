import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

// Rate limiting storage (in production, use Redis or database)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const EMAIL_RATE_LIMIT = new Map<string, { count: number; resetTime: number }>();

// Security constants
const MAX_REQUESTS_PER_IP = 5; // per hour
const MAX_REQUESTS_PER_EMAIL = 3; // per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_MESSAGE_LENGTH = 2000;
const MAX_SUBJECT_LENGTH = 200;
const MAX_NAME_LENGTH = 100;

// Enhanced validation schema with security rules
const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(MAX_NAME_LENGTH, `Name must be less than ${MAX_NAME_LENGTH} characters`)
    .regex(/^[a-zA-Z\s\-'\.]+$/, "Name contains invalid characters"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(254, "Email address is too long")
    .toLowerCase(),
  subject: z.string()
    .min(5, "Subject must be at least 5 characters")
    .max(MAX_SUBJECT_LENGTH, `Subject must be less than ${MAX_SUBJECT_LENGTH} characters`),
  message: z.string()
    .min(20, "Message must be at least 20 characters")
    .max(MAX_MESSAGE_LENGTH, `Message must be less than ${MAX_MESSAGE_LENGTH} characters`),
  projectType: z.enum(["mixing", "mastering", "mixing/mastering", "consultation"])
});

// Get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  return 'unknown';
}

// Rate limiting function
function checkRateLimit(identifier: string, map: Map<string, { count: number; resetTime: number }>, maxRequests: number): boolean {
  const now = Date.now();
  const userLimit = map.get(identifier);
  
  if (!userLimit || now > userLimit.resetTime) {
    map.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (userLimit.count >= maxRequests) {
    return false;
  }
  
  userLimit.count++;
  return true;
}

// Input sanitization
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/data:/gi, '') // Remove data: URLs
    .trim();
}

// Check for suspicious patterns
function detectSuspiciousContent(text: string): boolean {
  const suspiciousPatterns = [
    /https?:\/\/[^\s]+/gi, // URLs (except in email field)
    /\b(viagra|cialis|casino|poker|lottery|winner|congratulations)\b/gi,
    /\b(click here|act now|limited time|urgent|guaranteed)\b/gi,
    /[^\w\s\-'\.@,!?()]/g, // Excessive special characters
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(text));
}

// Honeypot field check (add to frontend form as hidden field)
function checkHoneypot(body: Record<string, unknown>): boolean {
  // Check for common honeypot field names
  const honeypotFields = ['website', 'url', 'phone2', 'fax', 'address'];
  return honeypotFields.some(field => body[field] && typeof body[field] === 'string' && (body[field] as string).trim() !== '');
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    
    // Check IP rate limit
    if (!checkRateLimit(clientIP, rateLimit, MAX_REQUESTS_PER_IP)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
    
    const body = await request.json();
    
    // Check for honeypot
    if (checkHoneypot(body)) {
      console.warn(`Potential bot detected from IP: ${clientIP}`);
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // Check email rate limit
    if (!checkRateLimit(validatedData.email, EMAIL_RATE_LIMIT, MAX_REQUESTS_PER_EMAIL)) {
      return NextResponse.json(
        { error: "Too many requests from this email. Please try again later." },
        { status: 429 }
      );
    }
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(validatedData.name),
      email: validatedData.email, // Already validated and lowercased
      subject: sanitizeInput(validatedData.subject),
      message: sanitizeInput(validatedData.message),
      projectType: validatedData.projectType
    };
    
    // Check for suspicious content
    const textToCheck = `${sanitizedData.name} ${sanitizedData.subject} ${sanitizedData.message}`;
    if (detectSuspiciousContent(textToCheck)) {
      console.warn(`Suspicious content detected from ${clientIP}: ${validatedData.email}`);
      return NextResponse.json(
        { error: "Message contains prohibited content" },
        { status: 400 }
      );
    }
    
    // Create nodemailer transporter with Gmail-compatible settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // Use SSL for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Remove problematic SSLv3 ciphers - let nodemailer use modern TLS
    });
    
    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP connection failed:', error);
      return NextResponse.json(
        { error: "Email service temporarily unavailable" },
        { status: 503 }
      );
    }
    
    // Compose email with security headers
    const emailContent = `
NEW CONTACT FORM SUBMISSION

Security Info:
- IP Address: ${clientIP}
- Timestamp: ${new Date().toISOString()}
- User Agent: ${request.headers.get('user-agent')?.substring(0, 200) || 'Unknown'}

Contact Details:
- Name: ${sanitizedData.name}
- Email: ${sanitizedData.email}
- Project Type: ${sanitizedData.projectType}
- Subject: ${sanitizedData.subject}

Message:
${sanitizedData.message}

---
Sent from Mac Raith Portfolio Contact Form
Security: Rate limited and validated
    `;
    
    // Send notification email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@macraithmusic.com",
      to: process.env.CONTACT_EMAIL || "collab@macraithmusic.com",
      subject: `🎵 New Contact: ${sanitizedData.subject}`,
      text: emailContent,
      replyTo: sanitizedData.email,
      headers: {
        'X-Mailer': 'Mac Raith Contact Form',
        'X-Priority': '3',
      }
    });
    
    // Send auto-reply to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@macraithmusic.com",
      to: sanitizedData.email,
      subject: `Thanks for reaching out about ${sanitizedData.projectType}`,
      text: `Hi ${sanitizedData.name},

Thanks for getting in touch about your ${sanitizedData.projectType} project! I've received your message and I'm excited to learn more about your vision.

I'll review the details you've shared and get back to you within 24 hours with some thoughts on how we can bring your project to life. I'm looking forward to discussing your music and exploring how we can work together.

In the meantime, feel free to check out some of my recent work on the website to get a sense of my style and approach.

Talk soon,
Mac

P.S. If you have any reference tracks or specific ideas you'd like to share, feel free to include them in your next message.

---
This is an automated confirmation. For urgent matters, you can reach me directly at collab@macraithmusic.com`,
      headers: {
        'X-Mailer': 'Mac Raith Contact Form',
        'X-Auto-Response': 'true',
      }
    });
    
    // Log successful submission (without sensitive data)
    console.log(`Contact form submission from ${clientIP} - ${validatedData.email} - ${sanitizedData.subject}`);
    
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 }
    );
  }
} 