import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Privacy Policy | Mac Raith Audio Engineering",
  description: "Privacy policy for Mac Raith Audio Engineering services and website usage. Learn how we protect your personal information and musical content.",
  url: "/privacy",
  keywords: [
    "privacy policy",
    "Mac Raith audio",
    "data protection",
    "music privacy",
    "audio engineering privacy",
    "GDPR compliance",
    "personal information protection"
  ]
});

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {currentDate}
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mac Raith Audio Engineering (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our audio engineering services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">2.1 Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Name and contact information (email address, phone number)</li>
                <li>Project details and musical content you share with us</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Device information and operating system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Respond to inquiries and provide audio engineering services</li>
                <li>Communicate about projects and service updates</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Send promotional communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may share information in these limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> Third-party tools for email services, analytics, and embedded media</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                <li><strong>With Your Consent:</strong> When you explicitly agree to information sharing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Audio Content and Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Regarding your musical content:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You retain all rights to your original musical compositions and recordings</li>
                <li>We maintain confidentiality of your unreleased projects</li>
                <li>Audio files are securely stored and deleted after project completion (unless otherwise agreed)</li>
                <li>We may showcase completed work in our portfolio with your explicit permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure file transfer protocols for audio content</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website uses cookies to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Improve website functionality and user experience</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can control cookie settings through your browser preferences. See our 
                <a href="/cookies" className="text-primary hover:underline"> Cookie Policy</a> for more details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website may integrate with third-party services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Analytics Services:</strong> For website performance monitoring</li>
                <li><strong>Contact Form Services:</strong> For processing inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to children under 13. We do not knowingly collect 
                personal information from children under 13. If you believe we have collected 
                information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are located outside the United States, please note that we may transfer 
                your information to the United States for processing. By using our services, 
                you consent to this transfer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of any 
                material changes by posting the new policy on this page and updating the 
                &quot;Last updated&quot; date. Your continued use of our services constitutes acceptance 
                of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg border">
                <p className="text-foreground font-medium">Mac Raith Audio Engineering</p>
                <p className="text-muted-foreground">Email: collab@macraithmusic.com</p>
                <p className="text-muted-foreground">Location: Boston, MA</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 