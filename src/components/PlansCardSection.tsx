import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlansCardSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$39.99",
      period: "/month",
      description: "Perfect for casual browsing and light streaming",
      speed: "100 Mbps",
      features: [
        "100 Mbps download speed",
        "20 Mbps upload speed",
        "Unlimited data",
        "Free modem rental",
        "Email support"
      ],
      popular: false,
      buttonText: "Choose Basic"
    },
    {
      name: "Pro",
      price: "$69.99", 
      period: "/month",
      description: "Ideal for families and remote work",
      speed: "500 Mbps",
      features: [
        "500 Mbps download speed",
        "50 Mbps upload speed", 
        "Unlimited data",
        "Free modem & router",
        "Priority support",
        "Security suite included"
      ],
      popular: true,
      buttonText: "Choose Pro"
    },
    {
      name: "Ultra",
      price: "$99.99",
      period: "/month", 
      description: "Maximum performance for power users",
      speed: "1 Gbps",
      features: [
        "1 Gbps download speed",
        "100 Mbps upload speed",
        "Unlimited data",
        "Premium equipment",
        "24/7 priority support",
        "Security suite + VPN",
        "Static IP address"
      ],
      popular: false,
      buttonText: "Choose Ultra"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the internet plan that fits your lifestyle and budget. All plans include free installation and no contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`interactive-card relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="py-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <div className="text-3xl font-bold text-secondary mt-2">{plan.speed}</div>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/plans" className="block">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary hover-lift glow-primary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We offer tailored plans for businesses and special requirements.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Contact Sales for Custom Plans
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlansCardSection;