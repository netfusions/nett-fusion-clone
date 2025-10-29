import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Home, Building, Crown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Plans = () => {
  const plans = [
    {
      name: "Essential",
      icon: <Home className="w-6 h-6" />,
      price: "$39.99",
      originalPrice: "$49.99",
      speed: "100 Mbps",
      description: "Perfect for small households",
      features: [
        "Up to 100 Mbps download speed",
        "Unlimited data usage", 
        "Free WiFi modem included",
        "24/7 customer support",
        "Free installation",
        "No contract required"
      ],
      popular: false,
      gradient: "from-muted to-muted/50"
    },
    {
      name: "Premium", 
      icon: <Zap className="w-6 h-6" />,
      price: "$69.99",
      originalPrice: "$89.99", 
      speed: "500 Mbps",
      description: "Ideal for families and streaming",
      features: [
        "Up to 500 Mbps download speed",
        "Unlimited data usage",
        "WiFi 6 router included", 
        "Priority customer support",
        "Free professional installation",
        "Security suite included",
        "Streaming optimizer"
      ],
      popular: true,
      gradient: "from-primary to-secondary"
    },
    {
      name: "Ultra",
      icon: <Crown className="w-6 h-6" />, 
      price: "$99.99",
      originalPrice: "$129.99",
      speed: "1 Gbps",
      description: "Maximum speed and performance",
      features: [
        "Up to 1 Gbps download speed",
        "Unlimited data usage", 
        "Enterprise-grade equipment",
        "Dedicated support line",
        "Free installation & setup",
        "Advanced security package",
        "Gaming optimization",
        "Mesh network setup"
      ],
      popular: false,
      gradient: "from-secondary to-primary"
    }
  ];

  const businessPlans = [
    {
      name: "Business Starter",
      price: "$149.99",
      speed: "200 Mbps",
      description: "Perfect for small offices",
      features: [
        "Dedicated 200 Mbps connection",
        "Static IP address included",
        "99.9% uptime SLA",
        "Business-grade security",
        "Priority technical support",
        "Free equipment & installation"
      ]
    },
    {
      name: "Business Pro", 
      price: "$299.99",
      speed: "500 Mbps", 
      description: "Ideal for growing businesses",
      features: [
        "Dedicated 500 Mbps connection", 
        "Multiple static IP addresses",
        "99.95% uptime SLA",
        "Advanced firewall protection", 
        "Account manager assigned",
        "24/7 network monitoring",
        "Backup connection available"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      speed: "Up to 10 Gbps",
      description: "Scalable solutions for enterprises", 
      features: [
        "Custom bandwidth allocation",
        "Redundant fiber connections", 
        "99.99% uptime guarantee",
        "Enterprise security suite",
        "Dedicated support team",
        "Custom installation & config", 
        "Disaster recovery planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your Perfect <span className="gradient-text">Internet Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lightning-fast speeds, reliable connections, and unbeatable value. 
              Find the plan that matches your lifestyle and budget.
            </p>
            <div className="inline-flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-4 py-2 text-sm text-success">
              <Check className="w-4 h-4" />
              Special Launch Pricing - Limited Time Only
            </div>
          </div>
        </div>
      </section>

      {/* Residential Plans */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Residential Plans</h2>
            <p className="text-xl text-muted-foreground">Perfect for homes and families</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative interactive-card p-8 ${plan.popular ? 'ring-2 ring-primary glow-primary' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground line-through">{plan.originalPrice}</div>
                        <div className="text-xs text-muted-foreground">/month</div>
                      </div>
                    </div>
                    <div className="text-2xl font-semibold text-primary mt-2">{plan.speed}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="tel:8662407507">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary hover-lift glow-primary' 
                        : 'hover-lift'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Business Solutions</h2>
            <p className="text-xl text-muted-foreground">Enterprise-grade connectivity for your business</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessPlans.map((plan, index) => (
              <Card key={plan.name} className="interactive-card p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold mb-2">{plan.price}</div>
                    {plan.price !== "Custom" && <div className="text-xs text-muted-foreground">/month</div>}
                    <div className="text-xl font-semibold text-secondary mt-2">{plan.speed}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="tel:8662407507">
                  <Button variant="outline" className="w-full hover-lift border-secondary/20 hover:border-secondary">
                    {plan.price === "Custom" ? "Get Quote" : "Contact Sales"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Optional Add-ons</h2>
            <p className="text-xl text-muted-foreground">Enhance your plan with premium features</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="interactive-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Premium Security</h3>
              <p className="text-sm text-muted-foreground mb-4">Advanced firewall and antivirus protection</p>
              <div className="text-lg font-semibold text-primary">+$9.99/mo</div>
            </Card>

            <Card className="interactive-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Cable TV Package</h3>
              <p className="text-sm text-muted-foreground mb-4">200+ HD channels with premium content</p>
              <div className="text-lg font-semibold text-secondary">+$49.99/mo</div>
            </Card>

            <Card className="interactive-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Mesh Network</h3>
              <p className="text-sm text-muted-foreground mb-4">Whole-home WiFi coverage solution</p>
              <div className="text-lg font-semibold text-primary">+$19.99/mo</div>
            </Card>

            <Card className="interactive-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Priority Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Dedicated support line and faster response</p>
              <div className="text-lg font-semibold text-secondary">+$14.99/mo</div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our plans</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-3">Is there a contract required?</h3>
              <p className="text-muted-foreground">No contract required for residential plans. Business plans may have flexible terms based on your needs.</p>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-3">What's included in the installation?</h3>
              <p className="text-muted-foreground">Free professional installation includes equipment setup, WiFi configuration, and basic network testing.</p>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-3">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">Yes, you can change your plan anytime. Contact our support team to make adjustments to your service.</p>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-3">Is there a data cap?</h3>
              <p className="text-muted-foreground">All our plans include unlimited data usage with no throttling or overage fees.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Get <span className="gradient-text">Connected?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers enjoying lightning-fast internet with Nett Fusion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8662407507">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover-lift glow-primary">
                  Order Now
                </Button>
              </a>
              <a href="tel:8662407507">
                <Button variant="outline" size="lg" className="hover-lift border-primary/20 hover:border-primary">
                  Call (866) 240-7507
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;