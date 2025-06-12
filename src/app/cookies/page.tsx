import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Mac Raith Audio Engineering",
  description: "Cookie policy explaining how Mac Raith Audio Engineering uses cookies and tracking technologies.",
};

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {currentDate}
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience by remembering your preferences 
                and analyzing how you use our site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This Cookie Policy explains what cookies are, how we use them, and how you can control them 
                when visiting the Mac Raith Audio Engineering website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">2.1 Essential Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                These cookies are necessary for the website to function properly and cannot be switched off.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Session cookies:</strong> Keep you logged in during your visit</li>
                <li><strong>Security cookies:</strong> Protect against cross-site request forgery</li>
                <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">2.2 Analytics Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                These cookies help us understand how visitors interact with our website.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Google Analytics:</strong> Tracks page views, user behavior, and site performance</li>
                <li><strong>Performance cookies:</strong> Monitor website speed and functionality</li>
                <li><strong>Usage statistics:</strong> Help us improve our content and services</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">2.3 Marketing Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                These cookies track your browsing habits to show you relevant advertisements.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Social media cookies:</strong> Enable sharing on social platforms</li>
                <li><strong>Advertising cookies:</strong> Deliver targeted advertisements</li>
                <li><strong>Retargeting cookies:</strong> Show relevant ads on other websites</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website may include content from third-party services that set their own cookies:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Spotify:</strong> Embedded music players and portfolio content</li>
                <li><strong>Google Analytics:</strong> Website traffic analysis and reporting</li>
                <li><strong>Social Media Platforms:</strong> Share buttons and embedded content</li>
                <li><strong>Payment Processors:</strong> Secure transaction processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Essential website functionality:</strong> Enable core features and navigation</li>
                <li><strong>User experience improvement:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics and insights:</strong> Understand how visitors use our site</li>
                <li><strong>Performance optimization:</strong> Monitor and improve site speed</li>
                <li><strong>Security:</strong> Protect against malicious activities</li>
                <li><strong>Marketing effectiveness:</strong> Measure campaign performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookie Duration</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">5.1 Session Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies are temporary and are deleted when you close your browser.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3">5.2 Persistent Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies remain on your device for a set period or until you delete them:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Preference cookies:</strong> 1 year</li>
                <li><strong>Analytics cookies:</strong> 2 years</li>
                <li><strong>Marketing cookies:</strong> 30 days to 2 years</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">6.1 Browser Settings</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control cookies through your browser settings:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Block all cookies:</strong> Prevent all cookies from being stored</li>
                <li><strong>Block third-party cookies:</strong> Allow only first-party cookies</li>
                <li><strong>Delete cookies:</strong> Remove existing cookies from your device</li>
                <li><strong>Notification settings:</strong> Get alerts when cookies are being set</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">6.2 Browser-Specific Instructions</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Opt-Out Options</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">7.1 Analytics Opt-Out</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can opt out of Google Analytics tracking by:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Installing the Google Analytics Opt-out Browser Add-on</li>
                <li>Using browser Do Not Track settings</li>
                <li>Configuring your browser to block analytics cookies</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">7.2 Marketing Opt-Out</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To opt out of targeted advertising:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Visit the Digital Advertising Alliance opt-out page</li>
                <li>Use the Network Advertising Initiative opt-out tool</li>
                <li>Adjust your social media privacy settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Disabling cookies may affect your browsing experience:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Reduced functionality:</strong> Some features may not work properly</li>
                <li><strong>Lost preferences:</strong> Settings and customizations will not be saved</li>
                <li><strong>Repeated information:</strong> You may see the same content repeatedly</li>
                <li><strong>Security concerns:</strong> Some protection features may be disabled</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Cookie Consent</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By continuing to use our website, you consent to our use of cookies as described in this policy. 
                You can withdraw your consent at any time by:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Changing your browser cookie settings</li>
                <li>Clearing your browser cookies and site data</li>
                <li>Contacting us to request cookie preference changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Mobile Device Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On mobile devices, similar tracking technologies may be used:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Local storage:</strong> HTML5 local storage for preferences</li>
                <li><strong>Device fingerprinting:</strong> Analyzing device characteristics</li>
                <li><strong>App-specific tracking:</strong> Mobile app analytics and performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some cookies may transfer data to servers located outside your country. 
                We ensure appropriate safeguards are in place for international data transfers 
                in accordance with applicable privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or applicable laws. We will post any updates on this page with a 
                revised effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg border">
                <p className="text-foreground font-medium">Mac Raith Audio Engineering</p>
                <p className="text-muted-foreground">Email: collab@macraithmusic.com</p>
                <p className="text-muted-foreground">Location: Boston, MA</p>
                <p className="text-muted-foreground mt-2">
                  <strong>Subject:</strong> Cookie Policy Inquiry
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 