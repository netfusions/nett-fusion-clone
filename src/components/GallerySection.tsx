import { Card } from '@/components/ui/card';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558618666-fbd6c327cd04?w=400&h=300&fit=crop",
      title: "Fiber Installation",
      description: "Professional fiber-optic cable installation"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=300&fit=crop",
      title: "Network Infrastructure", 
      description: "Advanced network equipment and setup"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop",
      title: "Smart Home Setup",
      description: "Complete smart home connectivity solutions"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=400&h=300&fit=crop",
      title: "Cable Management",
      description: "Clean and organized cable installations"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
      title: "Router Configuration",
      description: "Optimized router setup and configuration"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551808525-cd5bf6ca05c1?w=400&h=300&fit=crop",
      title: "Speed Testing",
      description: "Professional speed testing and optimization"
    }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Work Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See our professional installations and network setups in action.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="gallery-scroll">
          {/* First set */}
          {galleryItems.map((item) => (
            <Card key={`first-${item.id}`} className="gallery-card">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          {/* Second set for seamless loop */}
          {galleryItems.map((item) => (
            <Card key={`second-${item.id}`} className="gallery-card">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;