import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Mac Raith Audio Engineering",
  description: "Terms of service for Mac Raith Audio Engineering services and website usage.",
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {currentDate}
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing our website or using Mac Raith Audio Engineering services, you agree 
                to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Offered</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mac Raith Audio Engineering provides professional audio services including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Professional Mixing:</strong> Multi-track audio mixing and balancing</li>
                <li><strong>Audio Mastering:</strong> Final polishing and optimization for distribution</li>
                <li><strong>Full Production:</strong> Complete song production from arrangement to master</li>
                <li><strong>Consultation:</strong> Audio engineering advice and guidance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Project Process and Timeline</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">3.1 Project Initiation</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>All projects begin with a consultation to discuss requirements and expectations</li>
                <li>Project scope, timeline, and pricing must be agreed upon before work begins</li>
                <li>50% deposit required to commence work on most projects</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">3.2 Delivery Timeline</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Standard turnaround times are estimates and may vary based on project complexity</li>
                <li>Rush delivery available for additional fees with 24-hour advance notice</li>
                <li>Delays due to client feedback or additional requests may extend timeline</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">4.1 Pricing and Fees</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>All prices are quoted in USD and subject to change</li>
                <li>Custom quotes provided for unique or complex projects</li>
                <li>Additional fees may apply for revisions beyond the included limit</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">4.2 Payment Schedule</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Deposit required before work begins (typically 50%)</li>
                <li>Final payment due upon project completion</li>
                <li>Payment accepted via bank transfer, PayPal, or other agreed methods</li>
                <li>Late payments may incur additional fees and project delays</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">5.1 Client Rights</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>You retain all rights to your original musical compositions and lyrics</li>
                <li>You receive full ownership of the final mixed/mastered audio files</li>
                <li>No additional royalties or ongoing fees for completed work</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">5.2 Portfolio and Credits</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We may showcase completed work in our portfolio with your permission</li>
                <li>Engineering credits appreciated but not required</li>
                <li>Confidential projects will not be disclosed without explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Revisions and Modifications</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Each service includes a specified number of revisions (typically 1-2)</li>
                <li>Additional revisions available at hourly rates</li>
                <li>Major changes to project scope may require new agreement</li>
                <li>Revision requests must be specific and detailed</li>
                <li>Final approval constitutes project completion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. File Delivery and Formats</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Final files delivered in industry-standard formats (WAV, AIFF, etc.)</li>
                <li>Multiple format delivery available upon request</li>
                <li>Files delivered via secure cloud storage or file transfer</li>
                <li>Backup copies maintained for 90 days after project completion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We maintain strict confidentiality regarding:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Unreleased musical content and compositions</li>
                <li>Project details and creative direction</li>
                <li>Personal information and contact details</li>
                <li>Business relationships and collaborations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Cancellation and Refunds</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">9.1 Client Cancellation</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Projects may be cancelled with 24-hour notice</li>
                <li>Refunds based on work completed at time of cancellation</li>
                <li>Deposits are non-refundable once work has commenced</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">9.2 Service Provider Cancellation</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We reserve the right to refuse or cancel projects</li>
                <li>Full refund provided if we cannot complete agreed services</li>
                <li>Alternative solutions offered when possible</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our liability is limited to the total amount paid for services. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Lost profits or consequential damages</li>
                <li>Third-party copyright or licensing issues</li>
                <li>Technical issues beyond our control</li>
                <li>Market reception or commercial success of completed work</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Quality Standards</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We commit to delivering professional-quality work that meets industry standards. 
                If you are not satisfied with the final deliverable, we will work with you to 
                address specific technical concerns within the agreed revision policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Communication and Support</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Primary communication via email with 24-hour response time</li>
                <li>Project updates provided at key milestones</li>
                <li>Technical support included for 30 days after delivery</li>
                <li>Additional consultation available at standard rates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Website Usage</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website is provided for informational and business purposes. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use the site for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to systems</li>
                <li>Interfere with the website's functionality</li>
                <li>Copy or distribute content without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these terms or our services will be resolved through 
                good faith negotiation. If resolution cannot be reached, disputes will be 
                handled through binding arbitration in accordance with the laws of Massachusetts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Updated terms will be 
                posted on this page with a revised date. Continued use of our services constitutes 
                acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">16. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
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