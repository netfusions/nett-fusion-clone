import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get <span className="gradient-text">Connected</span> Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to experience premium internet and cable services? Our team is here to help you 
              find the perfect plan and get you connected in no time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="interactive-card text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <p className="text-muted-foreground mb-6">
                Speak with our sales team or get technical support
              </p>
              <div className="space-y-2">
                <a href="tel:8662407507" className="text-lg font-semibold text-primary">(866) 240-7507</a>
                <div className="text-sm text-muted-foreground">Sales & New Service</div>
              </div>
            </Card>

            <Card className="interactive-card text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
              <p className="text-muted-foreground mb-6">
                Get instant answers from our support team
              </p>
              <a href="tel:8662407507">
                <Button className="bg-gradient-to-r from-secondary to-primary hover-lift">
                  Start Chat
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </Card>

            <Card className="interactive-card text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-6">
                Send us a detailed message about your needs
              </p>
              {/* Email removed as requested */}
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a customized 
                solution for your internet and cable needs.
              </p>

              <Card className="glass-card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-muted/20 border-border/20"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="bg-muted/20 border-border/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="bg-muted/20 border-border/20"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Interest</label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-muted/20 border-border/20">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential-internet">Residential Internet</SelectItem>
                        <SelectItem value="business-internet">Business Internet</SelectItem>
                        <SelectItem value="cable-tv">Cable TV</SelectItem>
                        <SelectItem value="bundle">Internet + Cable Bundle</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell us about your internet and cable needs..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-muted/20 border-border/20"
                    />
                  </div>

                  <a href="tel:8662407507">
                    <Button 
                      type="button" 
                      className="w-full bg-gradient-to-r from-primary to-primary-glow hover-lift glow-primary"
                    >
                      Call (866) 240-7507
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Multiple ways to reach us for sales, support, or general inquiries. 
                We're here to help you stay connected.
              </p>

              <div className="space-y-8">
                {/* Office Location and Business Hours removed as requested */}

                {/* Support Channels */}
                <Card className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Support Channels</h3>
                      <div className="text-muted-foreground text-sm space-y-2">
                        <div>
                          <span className="text-primary font-medium">Sales:</span> <a href="tel:8662407507">(866) 240-7507</a>
                        </div>
                        {/* Tech Support and Email removed as requested */}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Service Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're expanding our fiber-optic network to bring premium internet and cable services 
              to communities across the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Card className="interactive-card text-center p-6">
              <h3 className="font-bold text-lg mb-2">Metro Area</h3>
              <p className="text-muted-foreground text-sm">Downtown and surrounding districts</p>
            </Card>
            
            <Card className="interactive-card text-center p-6">
              <h3 className="font-bold text-lg mb-2">Suburban</h3>
              <p className="text-muted-foreground text-sm">Residential neighborhoods and developments</p>
            </Card>
            
            <Card className="interactive-card text-center p-6">
              <h3 className="font-bold text-lg mb-2">Business District</h3>
              <p className="text-muted-foreground text-sm">Commercial and industrial zones</p>
            </Card>
            
            <Card className="interactive-card text-center p-6">
              <h3 className="font-bold text-lg mb-2">Expansion</h3>
              <p className="text-muted-foreground text-sm">New areas coming soon</p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Not sure if we serve your area?</p>
            <a href="tel:8662407507">
              <Button variant="outline" className="hover-lift border-primary/20 hover:border-primary">
                Check Service Availability
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Experience <span className="gradient-text">Premium Internet?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers and upgrade to Nett Fusion today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8662407507">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover-lift glow-primary">
                  Order Online Now
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

export default Contact;