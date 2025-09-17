import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      company: "Tech Startup",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "Nett Fusion has been incredible! The internet speed is exactly as promised, and their customer service is outstanding. Installation was quick and professional."
    },
    {
      name: "Michael Chen",
      role: "Remote Developer", 
      company: "Freelancer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "As a developer working from home, reliable internet is crucial. Nett Fusion delivers consistently fast speeds with zero downtime. Highly recommend!"
    },
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      company: "Local Cafe",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "We switched to Nett Fusion for our cafe and couldn't be happier. Fast Wi-Fi for customers and reliable service for our POS systems. Great value!"
    },
    {
      name: "David Thompson",
      role: "Family of 5",
      company: "Streaming Enthusiasts",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "With 5 people streaming, gaming, and working from home, we needed serious bandwidth. Nett Fusion handles it all without any slowdowns."
    },
    {
      name: "Lisa Wang",
      role: "Content Creator",
      company: "YouTube Channel",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "Upload speeds are fantastic for my 4K video content. The reliability means I never miss a deadline. Best decision I made for my business!"
    },
    {
      name: "Robert Martinez",
      role: "IT Manager",
      company: "Mid-size Company",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "Nett Fusion's business solutions are top-notch. Dedicated support, guaranteed SLA, and enterprise-grade reliability. Exactly what we needed."
    }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="testimonials-scroll">
          {/* First set */}
          {testimonials.map((testimonial, index) => (
            <Card key={`first-${index}`} className="testimonial-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {/* Second set for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <Card key={`second-${index}`} className="testimonial-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;