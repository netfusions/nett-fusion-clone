import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wifi, Tv, Building, Home, Zap, Shield, Globe, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium <span className="gradient-text">Internet & Cable</span> Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive connectivity solutions designed to meet your personal and business needs 
              with cutting-edge technology and reliable performance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Residential Internet */}
            <Card className="interactive-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Residential Internet</h3>
                  <p className="text-muted-foreground">Perfect for homes and families</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Up to 1Gbps fiber-optic speeds</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Unlimited data usage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>24/7 technical support</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <p>• Stream 4K content on multiple devices</p>
                <p>• Perfect for remote work and video calls</p>
                <p>• Gaming-optimized low latency</p>
                <p>• Free professional installation</p>
              </div>

              <Link to="/plans">
                <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover-lift">
                  View Residential Plans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Business Internet */}
            <Card className="interactive-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-2xl flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Business Solutions</h3>
                  <p className="text-muted-foreground">Enterprise-grade connectivity</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-secondary" />
                  <span>Dedicated fiber connections</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span>SLA-backed reliability</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-secondary" />
                  <span>Scalable bandwidth options</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-secondary" />
                  <span>Priority business support</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <p>• Symmetrical upload/download speeds</p>
                <p>• Static IP addresses available</p>
                <p>• Network monitoring and management</p>
                <p>• Custom installation and setup</p>
              </div>

              <Link to="/contact">
                <Button variant="outline" className="w-full hover-lift border-secondary/20 hover:border-secondary">
                  Get Business Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete <span className="gradient-text">Connectivity Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a connected lifestyle and productive business environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="interactive-card text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Tv className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cable TV</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Premium HD channels with on-demand content and DVR service.
              </p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• 200+ HD channels</li>
                <li>• Premium movie packages</li>
                <li>• Multi-room DVR</li>
                <li>• Streaming app access</li>
              </ul>
            </Card>

            <Card className="interactive-card text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">WiFi Solutions</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Professional WiFi setup and management for optimal coverage.
              </p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Mesh network setup</li>
                <li>• WiFi 6 technology</li>
                <li>• Guest network access</li>
                <li>• Parental controls</li>
              </ul>
            </Card>

            <Card className="interactive-card text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security Suite</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Advanced network security and monitoring for peace of mind.
              </p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Firewall protection</li>
                <li>• Anti-virus software</li>
                <li>• Network monitoring</li>
                <li>• Threat detection</li>
              </ul>
            </Card>

            <Card className="interactive-card text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Support & Setup</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Expert installation and ongoing technical support services.
              </p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Professional installation</li>
                <li>• 24/7 tech support</li>
                <li>• Equipment maintenance</li>
                <li>• Network optimization</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Service Features Comparison</h2>
            <p className="text-xl text-muted-foreground">Choose the perfect plan for your needs</p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px] glass-card rounded-2xl p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/20">
                    <th className="text-left py-4 font-semibold">Features</th>
                    <th className="text-center py-4 font-semibold text-primary">Basic</th>
                    <th className="text-center py-4 font-semibold text-secondary">Premium</th>
                    <th className="text-center py-4 font-semibold text-primary">Business</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr className="border-b border-border/10">
                    <td className="py-4 text-muted-foreground">Internet Speed</td>
                    <td className="text-center py-4">Up to 100 Mbps</td>
                    <td className="text-center py-4">Up to 500 Mbps</td>
                    <td className="text-center py-4">Up to 1 Gbps</td>
                  </tr>
                  <tr className="border-b border-border/10">
                    <td className="py-4 text-muted-foreground">Data Usage</td>
                    <td className="text-center py-4">Unlimited</td>
                    <td className="text-center py-4">Unlimited</td>
                    <td className="text-center py-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-border/10">
                    <td className="py-4 text-muted-foreground">WiFi Equipment</td>
                    <td className="text-center py-4">Standard Router</td>
                    <td className="text-center py-4">WiFi 6 Router</td>
                    <td className="text-center py-4">Enterprise Grade</td>
                  </tr>
                  <tr className="border-b border-border/10">
                    <td className="py-4 text-muted-foreground">Support</td>
                    <td className="text-center py-4">24/7 Phone</td>
                    <td className="text-center py-4">24/7 Priority</td>
                    <td className="text-center py-4">Dedicated Account Mgr</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-muted-foreground">Installation</td>
                    <td className="text-center py-4">Free</td>
                    <td className="text-center py-4">Free</td>
                    <td className="text-center py-4">Custom Setup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Upgrade Your <span className="gradient-text">Connection?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose from our range of premium services and experience the Nett Fusion difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/plans">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover-lift glow-primary">
                  Compare Plans
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="hover-lift border-primary/20 hover:border-primary">
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;