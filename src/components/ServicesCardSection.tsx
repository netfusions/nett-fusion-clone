import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wifi, Tv, Phone, Shield, Clock, Headphones, ArrowRight } from 'lucide-react';

const ServicesCardSection = () => {
  const services = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed Internet",
      description: "Lightning-fast fiber-optic internet with speeds up to 1Gbps for seamless streaming and browsing.",
      features: ["Up to 1Gbps speed", "99.9% uptime", "No data caps", "Free installation"],
      price: "Starting at $49.99/mo"
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Premium Cable TV",
      description: "Crystal-clear HD channels with premium content packages and on-demand entertainment.",
      features: ["200+ HD channels", "Premium movie channels", "DVR included", "Streaming apps"],
      price: "Starting at $39.99/mo"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Digital Phone Service",
      description: "Reliable digital phone service with unlimited local and long-distance calling.",
      features: ["Unlimited calling", "Voicemail included", "Caller ID", "Call waiting"],
      price: "Starting at $19.99/mo"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Protection",
      description: "Advanced network security and protection for your home and business connections.",
      features: ["Firewall protection", "Antivirus included", "Parental controls", "24/7 monitoring"],
      price: "Starting at $9.99/mo"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Solutions",
      description: "Dedicated business internet and communication solutions for your growing company.",
      features: ["Dedicated bandwidth", "Static IP addresses", "Business support", "SLA guarantee"],
      price: "Custom pricing"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Tech Support",
      description: "Round-the-clock technical support from certified professionals for all your needs.",
      features: ["24/7 availability", "Expert technicians", "Remote assistance", "On-site visits"],
      price: "Included with service"
    }
  ];

  return (
    <section className="py-24 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive internet, cable, and communication solutions for your home and business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="interactive-card group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{service.icon}</div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <div className="text-2xl font-bold text-primary mb-3">{service.price}</div>
                  <Button className="w-full group/btn">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCardSection;