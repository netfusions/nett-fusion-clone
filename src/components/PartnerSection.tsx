const PartnerSection = () => {
  const partners = [
    {
      name: "Cisco",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/Cisco-Logo.png"
    },
    {
      name: "Netgear", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Netgear-Logo.png"
    },
    {
      name: "TP-Link",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/TP-Link-Logo.png"
    },
    {
      name: "Ubiquiti",
      logo: "https://cdn.worldvectorlogo.com/logos/ubiquiti.svg"
    },
    {
      name: "Arris",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/ARRIS-Logo.png"
    },
    {
      name: "Motorola",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Motorola-Logo.png"
    },
    {
      name: "Linksys",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Linksys-Logo.png"
    },
    {
      name: "D-Link",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/D-Link-Logo.png"
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We partner with industry-leading brands to deliver the best technology and service to our customers.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="partners-scroll">
          {/* First set */}
          {partners.map((partner, index) => (
            <div key={`first-${index}`} className="partner-logo">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
          {/* Second set for seamless loop */}
          {partners.map((partner, index) => (
            <div key={`second-${index}`} className="partner-logo">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;