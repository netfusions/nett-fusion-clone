import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StatsCard from '@/components/StatsCard';
import GallerySection from '@/components/GallerySection';
import ServicesCardSection from '@/components/ServicesCardSection';
import PlansCardSection from '@/components/PlansCardSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnerSection from '@/components/PartnerSection';
import { Wifi, Zap, Shield, Award, ArrowRight, Globe, Router, Signal, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-internet.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Floating Stats */}
        <StatsCard 
          icon={<Zap className="w-5 h-5 text-white" />}
          number="1Gbps"
          label="Max Speed"
          position="top-20 left-10 md:left-20"
          delay="0.5s"
        />
        <StatsCard 
          icon={<Users className="w-5 h-5 text-white" />}
          number="50K+"
          label="Happy Customers"
          position="top-40 right-10 md:right-20"
          delay="1s"
        />
        <StatsCard 
          icon={<Signal className="w-5 h-5 text-white" />}
          number="99.9%"
          label="Uptime"
          position="bottom-40 left-10 md:left-32"
          delay="1.5s"
        />
        <StatsCard 
          icon={<Router className="w-5 h-5 text-white" />}
          number="24/7"
          label="Support"
          position="bottom-20 right-10 md:right-32"
          delay="2s"
        />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary">
              <Wifi className="w-4 h-4" />
              Premium Internet Provider
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Ultra-Fast Internet &<br />
              <span className="gradient-text">Premium Cable</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience lightning-fast internet speeds and crystal-clear cable TV with our premium fiber-optic network. Connect, stream, and work without limits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/plans">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover-lift glow-primary">
                  View Plans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="hover-lift border-primary/20 hover:border-primary">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Nett Fusion</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide cutting-edge technology and exceptional service to keep you connected.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="interactive-card">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lightning Fast Speeds</h3>
              <p className="text-muted-foreground">
                Experience internet speeds up to 1Gbps with our advanced fiber-optic network technology.
              </p>
            </Card>

            <Card className="interactive-card">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reliable Connection</h3>
              <p className="text-muted-foreground">
                99.9% uptime guarantee ensures you stay connected when it matters most.
              </p>
            </Card>

            <Card className="interactive-card">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Award Winning Support</h3>
              <p className="text-muted-foreground">
                24/7 customer support from our certified technical experts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Services Card Section */}
      <ServicesCardSection />

      {/* Plans Card Section */}
      <PlansCardSection />

      {/* Partners Section */}
      <PartnerSection />

      {/* Stats Section */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
              <div className="text-muted-foreground">Network Uptime</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-primary mb-2">1Gbps</div>
              <div className="text-muted-foreground">Max Speed</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Tech Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Experience <span className="gradient-text">Premium Internet?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers and upgrade to Nett Fusion today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/plans">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover-lift glow-primary">
                  Choose Your Plan
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="hover-lift border-primary/20 hover:border-primary">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;