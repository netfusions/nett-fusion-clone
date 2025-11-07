import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, CreditCard, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Refund = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 gradient-text">Refund Policy</h1>
            <p className="text-muted-foreground text-lg mb-12">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Our Commitment to You</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Nett Fusion, we stand behind the quality of our internet and cable services. 
                    We want you to be completely satisfied with your service experience. This refund 
                    policy outlines when refunds may be available and the process for requesting them.
                  </p>
                  <p>
                    Our goal is to resolve any service issues quickly and fairly. We encourage 
                    customers to contact our support team first to address any concerns before 
                    requesting a refund.
                  </p>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Refund Eligibility</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Refunds may be available in the following situations:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Service cancellation within the first 30 days of activation</li>
                    <li>Prolonged service outages exceeding our service level agreements</li>
                    <li>Billing errors or duplicate charges</li>
                    <li>Service downgrade resulting in overpayment</li>
                    <li>Inability to install service at your location due to infrastructure limitations</li>
                    <li>Failure to deliver promised service speeds after troubleshooting attempts</li>
                  </ul>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="interactive-card text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">30-Day Trial</h3>
                  <p className="text-muted-foreground text-sm">
                    New customers can cancel within 30 days for a full refund of monthly charges.
                  </p>
                </Card>

                <Card className="interactive-card text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Service Guarantee</h3>
                  <p className="text-muted-foreground text-sm">
                    If we can't deliver promised speeds after troubleshooting, we'll provide credits or refunds.
                  </p>
                </Card>

                <Card className="interactive-card text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Billing Protection</h3>
                  <p className="text-muted-foreground text-sm">
                    Incorrect charges will be refunded promptly once identified and verified.
                  </p>
                </Card>
              </div>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>To request a refund, follow these steps:</p>
                  <ol className="list-decimal list-inside space-y-3 ml-4">
                    <li>
                      <strong>Contact Customer Service:</strong> Call 1-800-NET-FUSION or email 
                      billing@nettfusion.com with your refund request
                    </li>
                    <li>
                      <strong>Provide Account Information:</strong> Include your account number, 
                      service address, and reason for the refund request
                    </li>
                    <li>
                      <strong>Documentation:</strong> Provide any relevant documentation such as 
                      service tickets or billing statements
                    </li>
                    <li>
                      <strong>Review Process:</strong> Our billing team will review your request 
                      within 3-5 business days
                    </li>
                    <li>
                      <strong>Refund Processing:</strong> Approved refunds are processed within 
                      7-10 business days to your original payment method
                    </li>
                  </ol>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Refund Timeframes</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Credit Card Refunds</h4>
                      <p className="text-sm">3-5 business days after approval</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Bank Transfer Refunds</h4>
                      <p className="text-sm">5-10 business days after approval</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Check Refunds</h4>
                      <p className="text-sm">7-14 business days after approval</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Account Credits</h4>
                      <p className="text-sm">Applied within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Non-Refundable Items</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>The following charges are generally not eligible for refund:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Installation and setup fees (unless service cannot be installed)</li>
                    <li>Equipment rental fees for time equipment was in your possession</li>
                    <li>Activation and connection fees</li>
                    <li>Third-party service charges (premium channels, on-demand purchases)</li>
                    <li>Partial month charges for service already provided</li>
                    <li>Fees resulting from early contract termination</li>
                    <li>Charges for damaged or unreturned equipment</li>
                  </ul>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Service Credits vs. Refunds</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    In some cases, we may offer service credits instead of cash refunds. Service 
                    credits are applied to your account and can be used toward future monthly charges.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">When We Offer Credits:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Minor service interruptions</li>
                        <li>• Speed performance below advertised rates</li>
                        <li>• Customer service issues</li>
                        <li>• Goodwill gestures for inconvenience</li>
                      </ul>
                    </div>
                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">When We Offer Refunds:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Service cancellation within 30 days</li>
                        <li>• Billing errors and overcharges</li>
                        <li>• Failed installation attempts</li>
                        <li>• Extended service outages</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you disagree with a refund decision, you may request a review by our billing 
                    supervisor. For unresolved disputes, you may contact:
                  </p>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <p><strong>Billing Dispute Department</strong></p>
                    <p>Nett Fusion</p>
                    <p>123 Network Avenue</p>
                    <p>Digital City, DC 12345</p>
                    <p>Email: billing@nettfusion.com</p>
                    <p>Phone: 1-800-NET-FUSION (Press 2 for Billing)</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Questions About This Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you have questions about our refund policy or need assistance with a refund 
                    request, our customer service team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-primary to-primary-glow hover-lift">
                        Contact Support
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Button variant="outline" className="hover-lift border-primary/20 hover:border-primary">
                      Call 1-800-NET-FUSION
                    </Button>
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

export default Refund;