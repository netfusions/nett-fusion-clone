import { Card } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 gradient-text">Terms of Service</h1>
            <p className="text-muted-foreground text-lg mb-12">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    By subscribing to Nett Fusion's internet and cable services, you agree to be bound 
                    by these Terms of Service. These terms constitute a legally binding agreement between 
                    you and Nett Fusion.
                  </p>
                  <p>
                    If you do not agree to these terms, you may not use our services. We reserve the 
                    right to modify these terms at any time, with notice provided to customers.
                  </p>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Service Description</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Nett Fusion provides the following services:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>High-speed internet access via fiber-optic and cable networks</li>
                    <li>Cable television programming and on-demand content</li>
                    <li>WiFi equipment rental and technical support</li>
                    <li>Business-grade internet and networking solutions</li>
                    <li>Installation, maintenance, and customer support services</li>
                  </ul>
                  <p>
                    Service availability and speeds may vary by location and network capacity. 
                    We strive to provide consistent service but cannot guarantee uninterrupted access.
                  </p>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Customer Responsibilities</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>As a customer, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information during service setup</li>
                    <li>Pay all charges and fees associated with your service plan</li>
                    <li>Use services in compliance with applicable laws and regulations</li>
                    <li>Not interfere with or disrupt network operations</li>
                    <li>Protect your account credentials and report unauthorized use</li>
                    <li>Allow reasonable access for installation and maintenance</li>
                    <li>Return equipment in good condition upon service termination</li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Acceptable Use Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You may not use our services for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Illegal activities or violations of applicable laws</li>
                    <li>Transmission of harmful, threatening, or offensive content</li>
                    <li>Unauthorized access to other networks or systems</li>
                    <li>Distribution of malware, viruses, or malicious code</li>
                    <li>Spam, unsolicited communications, or fraud</li>
                    <li>Activities that consume excessive bandwidth or degrade service</li>
                    <li>Reselling or redistributing service without authorization</li>
                  </ul>
                  <p>
                    Violation of this policy may result in service suspension or termination.
                  </p>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Billing and Payment</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Billing terms and conditions:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Monthly service fees are billed in advance</li>
                    <li>Payment is due by the date specified on your bill</li>
                    <li>Late payments may result in service suspension and late fees</li>
                    <li>Price changes require 30 days advance notice</li>
                    <li>Installation, equipment, and early termination fees may apply</li>
                    <li>Automatic payment options are available for your convenience</li>
                    <li>Refunds are subject to our refund policy terms</li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Service Availability and Performance</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    While we strive to provide reliable service, we cannot guarantee 100% uptime. 
                    Service may be affected by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Scheduled maintenance and network upgrades</li>
                    <li>Weather conditions and natural disasters</li>
                    <li>Power outages and infrastructure failures</li>
                    <li>Third-party network or equipment issues</li>
                    <li>Force majeure events beyond our control</li>
                  </ul>
                  <p>
                    We will make reasonable efforts to restore service quickly and provide 
                    advance notice of scheduled maintenance when possible.
                  </p>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nett Fusion's liability is limited to the monthly service charges paid by the customer. 
                    We are not liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of data, revenue, or business opportunities</li>
                    <li>Service interruptions or performance variations</li>
                    <li>Third-party content or services accessed via our network</li>
                    <li>Customer equipment damage not caused by our negligence</li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Termination</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Either party may terminate service:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Customers may cancel with 30 days written notice</li>
                    <li>We may terminate for non-payment or policy violations</li>
                    <li>Early termination fees may apply to contracted services</li>
                    <li>Equipment must be returned within 30 days of termination</li>
                    <li>Final billing will include prorated charges and applicable fees</li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    For questions about these Terms of Service or your account:
                  </p>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <p><strong>Nett Fusion Customer Service</strong></p>
                    <p>123 Network Avenue</p>
                    <p>Digital City, DC 12345</p>
                    <p>Email: legal@nettfusion.com</p>
                    <p>Phone: 1-800-NET-FUSION</p>
                    <p>Hours: 24/7 Support Available</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;