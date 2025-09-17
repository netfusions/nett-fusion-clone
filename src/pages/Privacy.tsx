import { Card } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 gradient-text">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg mb-12">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Nett Fusion, we collect information to provide you with the best internet and cable services. 
                    The types of information we may collect include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Personal identification information (name, email address, phone number)</li>
                    <li>Service address and billing information</li>
                    <li>Payment and credit information for service billing</li>
                    <li>Technical data related to your internet usage and service performance</li>
                    <li>Customer service interactions and support requests</li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use the information we collect for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Providing and maintaining our internet and cable services</li>
                    <li>Processing payments and managing your account</li>
                    <li>Communicating with you about your service, billing, and support</li>
                    <li>Improving our network performance and service quality</li>
                    <li>Complying with legal obligations and regulatory requirements</li>
                    <li>Detecting and preventing fraud or unauthorized use</li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We respect your privacy and do not sell, rent, or lease your personal information 
                    to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With service providers who assist in delivering our services</li>
                    <li>When required by law or to comply with legal processes</li>
                    <li>To protect our rights, property, or safety, or that of our customers</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                    <li>With your explicit consent for specific purposes</li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We implement appropriate technical and organizational security measures to protect 
                    your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication protocols</li>
                    <li>Employee training on data protection and privacy</li>
                    <li>Incident response procedures for data breaches</li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have certain rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Right to access and review your personal information</li>
                    <li>Right to correct inaccurate or incomplete information</li>
                    <li>Right to request deletion of your personal information</li>
                    <li>Right to restrict or object to certain processing activities</li>
                    <li>Right to data portability where applicable</li>
                    <li>Right to opt-out of marketing communications</li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our website uses cookies and similar tracking technologies to enhance your 
                    browsing experience and provide personalized content.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand website usage</li>
                    <li>Marketing cookies for relevant advertising</li>
                    <li>You can manage cookie preferences in your browser settings</li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us:
                  </p>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <p><strong>Nett Fusion Privacy Office</strong></p>
                    <p>123 Network Avenue</p>
                    <p>Digital City, DC 12345</p>
                    <p>Email: privacy@nettfusion.com</p>
                    <p>Phone: 1-800-NET-FUSION</p>
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

export default Privacy;