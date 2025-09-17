import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Globe, Zap, Shield, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Connecting Communities with <span className="gradient-text">Premium Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              For over a decade, Nett Fusion has been at the forefront of internet and cable technology, 
              delivering reliable connections that empower homes and businesses to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="interactive-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide cutting-edge internet and cable solutions that connect people, 
                businesses, and communities to endless possibilities in the digital world.
              </p>
            </Card>

            <Card className="interactive-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in transparency, reliability, and exceptional customer service. 
                Every decision we make is driven by our commitment to your satisfaction.
              </p>
            </Card>

            <Card className="interactive-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lightning-fast speeds, 99.9% uptime, and 24/7 support. We guarantee 
                a premium experience that exceeds your expectations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-xl text-muted-foreground">
                From humble beginnings to industry leader
              </p>
            </div>

            <div className="space-y-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-right">
                  <h3 className="text-2xl font-bold mb-4 text-primary">2010 - The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Founded by a team of network engineers with a vision to revolutionize internet 
                    connectivity in underserved communities. We started with a simple goal: provide 
                    reliable, high-speed internet to everyone.
                  </p>
                </div>
                <Card className="glass-card p-8 hover-lift">
                  <div className="text-4xl font-bold text-secondary mb-2">2010</div>
                  <div className="text-muted-foreground">Company Founded</div>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <Card className="glass-card p-8 hover-lift md:order-2">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-muted-foreground">Customers Served</div>
                </Card>
                <div className="animate-slide-in-right md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">2018 - Major Expansion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Launched our fiber-optic network across three states, bringing gigabit speeds 
                    to over 50,000 homes and businesses. Received industry recognition for 
                    outstanding customer service.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-right">
                  <h3 className="text-2xl font-bold mb-4 text-primary">2024 - Future Ready</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we continue to innovate with 5G integration, smart home solutions, 
                    and enterprise-grade services. Our commitment to excellence drives us forward 
                    as we shape the future of connectivity.
                  </p>
                </div>
                <Card className="glass-card p-8 hover-lift">
                  <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Network Uptime</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Nett Fusion</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that premium technology and exceptional service can make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-scale-in">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">Lightning Speed</h3>
              <p className="text-muted-foreground">Fiber-optic technology delivering up to 1Gbps speeds</p>
            </div>

            <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">Reliable Network</h3>
              <p className="text-muted-foreground">99.9% uptime with redundant infrastructure</p>
            </div>

            <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">Expert Support</h3>
              <p className="text-muted-foreground">24/7 technical support from certified professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Join the <span className="gradient-text">Nett Fusion Family?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover why thousands of customers trust us for their internet and cable needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/plans">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover-lift glow-primary">
                  View Our Plans
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="hover-lift border-primary/20 hover:border-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;