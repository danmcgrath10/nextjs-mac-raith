import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  projectType: z.enum(["mixing", "mastering", "both", "consultation"])
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    // Create nodemailer transporter (you'll need to configure this with your email provider)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose email
    const emailContent = `
      New Contact Form Submission

      Name: ${validatedData.name}
      Email: ${validatedData.email}
      Project Type: ${validatedData.projectType}
      Subject: ${validatedData.subject}

      Message:
      ${validatedData.message}

      ---
      Sent from Mac Raith Portfolio Contact Form
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@macraith.com",
      to: process.env.CONTACT_EMAIL || "hello@macraith.com",
      subject: `New Contact: ${validatedData.subject}`,
      text: emailContent,
      replyTo: validatedData.email,
    });

    // Send auto-reply to the user
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@macraith.com",
      to: validatedData.email,
      subject: "Thank you for your message - Mac Raith Audio",
      text: `Hi ${validatedData.name},

Thank you for reaching out! I've received your message about "${validatedData.subject}" and will get back to you within 24 hours.

In the meantime, feel free to check out my latest work on the website or follow me on social media for updates.

Best regards,
Mac Raith

---
This is an automated response. Please do not reply to this email.`,
    });

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

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
} 