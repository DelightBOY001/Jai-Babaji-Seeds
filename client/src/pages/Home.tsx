import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProductModal from "@/components/ProductModal";
import { Leaf, Sprout, Droplets, Sun, MapPin, Phone, Mail, Award, TrendingUp, Shield } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Modern Agricultural Minimalism - Professional Edition
 * - Advanced animations with cubic-bezier easing
 * - Premium shadow effects and hover states
 * - Staggered animations for visual hierarchy
 * - Sophisticated purple (#190019) and cream (#FBE4D8) palette
 * - Elegant color hierarchy with mauve accent (#854F5C)
 * - Luxury agricultural brand aesthetic
 */

const riceProducts = [
  {
    id: 1,
    name: "Basmati Rice Seeds",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663374864814/WD6kB3SQowSUiYmqVrLYFZ/hero-seeds-field-e3Gz3fdRDmQ9WtkXWEuFPg.webp",
    description: "Premium long-grain basmati rice seeds with exceptional aroma and taste. Perfect for high-value cultivation with guaranteed market demand.",
    details: {
      variety: "Basmati 1121",
      yield: "45-50 quintals/hectare",
      maturity: "120-125 days",
      soilType: "Alluvial, well-drained loamy soil",
      waterRequirement: "1000-1200 mm",
      germination: "95%+",
      purity: "99%",
      seedTreatment: "Fungicide & Insecticide treated"
    }
  },
  {
    id: 2,
    name: "Jasmine Rice Seeds",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663374864814/WD6kB3SQowSUiYmqVrLYFZ/hero-seed-packets-JGnzW3dS5B3T96zGxwebvP.webp",
    description: "Fragrant jasmine rice variety with excellent cooking properties. High demand in domestic and international markets.",
    details: {
      variety: "Jasmine 85",
      yield: "40-45 quintals/hectare",
      maturity: "110-115 days",
      soilType: "Clay loam, moderately fertile soil",
      waterRequirement: "900-1100 mm",
      germination: "94%+",
      purity: "98.5%",
      seedTreatment: "Fungicide treated"
    }
  },
  {
    id: 3,
    name: "Sona Masuri Rice Seeds",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663374864814/WD6kB3SQowSUiYmqVrLYFZ/hero-harvest-ff5HgKmZbCUCgBSP5iYHL3.webp",
    description: "High-yielding medium-grain rice variety with excellent milling quality. Resistant to common diseases and pests.",
    details: {
      variety: "Sona Masuri",
      yield: "50-55 quintals/hectare",
      maturity: "115-120 days",
      soilType: "Loamy to clay loam soil",
      waterRequirement: "1000-1200 mm",
      germination: "96%+",
      purity: "99.2%",
      seedTreatment: "Full fungicide & insecticide treatment"
    }
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof riceProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleViewDetails = (product: typeof riceProducts[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-premium">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3 group">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663374864814/WD6kB3SQowSUiYmqVrLYFZ/jb-logo_b6b16bb6.png" 
              alt="Jai Babaji Seeds Logo"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline transition-all duration-300 group-hover:text-accent">
              Jai Babaji Seeds
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Products', 'Contact'].map((item, idx) => (
              <a 
                key={idx}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-b from-background via-background to-muted/20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 hero-content ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest animate-fade-in-up stagger-1">
                ✨ Premium Quality Seeds
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight animate-fade-in-up stagger-2">
                Grow Your Future
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up stagger-3">
                Trusted by farmers across Haryana. Premium quality rice seeds with guaranteed germination rates and exceptional yields.
              </p>
            </div>
            <div className="flex gap-4 pt-4 animate-fade-in-up stagger-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-premium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Shop Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 shadow-premium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-8 pt-8 text-sm animate-fade-in-up stagger-4">
              <div className="flex items-center gap-2 group cursor-pointer">
                <Sprout className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="transition-colors duration-300 group-hover:text-primary">25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <Sun className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="transition-colors duration-300 group-hover:text-primary">100% Organic</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative h-96 lg:h-full transition-all duration-1000 hero-image ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-premium group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663374864814/WD6kB3SQowSUiYmqVrLYFZ/hero-seeds-field-e3Gz3fdRDmQ9WtkXWEuFPg.webp"
                alt="Lush agricultural field at sunset"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"></div>
            </div>
          </div>
        </div>

        {/* Decorative SVG Divider */}
        <svg className="absolute bottom-0 left-0 w-full h-20 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2 animate-fade-in-up">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in-up stagger-1">
              Excellence in Every Seed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-2">
              We are committed to providing the highest quality rice seeds with exceptional germination rates and customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                description: "Carefully selected and tested rice seeds with high germination rates for guaranteed success."
              },
              {
                icon: Droplets,
                title: "Sustainable Farming",
                description: "Organic and eco-friendly rice seeds that support sustainable agricultural practices."
              },
              {
                icon: Shield,
                title: "Expert Support",
                description: "Dedicated team of agricultural experts ready to guide you through every season."
              }
            ].map((feature, idx) => (
              <Card 
                key={idx} 
                className="feature-card border-border hover:border-primary/50 bg-background shadow-premium hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-accent mb-2 icon-animate transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  <CardTitle className="text-primary transition-colors duration-300 group-hover:text-accent">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section id="products" className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2 animate-fade-in-up">
              Our Collection
            </p>
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in-up stagger-1">
              Premium Rice Varieties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-2">
              Explore our premium collection of rice seed varieties for maximum yield and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riceProducts.map((product, idx) => (
              <Card 
                key={product.id} 
                className={`product-item product-card overflow-hidden border-border hover:border-primary/50 bg-background shadow-premium transition-all duration-300`}
              >
                <div className="relative h-48 overflow-hidden bg-muted group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-primary transition-colors duration-300 group-hover:text-accent">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-premium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    onClick={() => handleViewDetails(product)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-primary/5 py-20 relative">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">About Us</p>
            <h2 className="text-4xl font-bold text-primary">About Jai Babaji Seeds</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 25 years of experience in agriculture, Jai Babaji Seeds has become a trusted name in quality seed distribution across Haryana.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in premium rice seeds, supporting farmers with expert guidance and sustainable farming practices to maximize yields and profitability.
            </p>
            <div className="space-y-3 pt-4">
              {[
                { icon: Leaf, title: "Certified Quality", desc: "All rice seeds tested for germination and purity" },
                { icon: Sprout, title: "Expert Team", desc: "Dedicated agricultural specialists on staff" },
                { icon: TrendingUp, title: "Sustainable Practices", desc: "Promoting organic and eco-friendly farming" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group cursor-pointer">
                  <item.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <div className="transition-colors duration-300 group-hover:text-primary">
                    <h4 className="font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-premium group animate-slide-in-right">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663374864814/WD6kB3SQowSUiYmqVrLYFZ/hero-harvest-ff5HgKmZbCUCgBSP5iYHL3.webp"
              alt="Harvest with fresh vegetables"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2 animate-fade-in-up">
              Get In Touch
            </p>
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in-up stagger-1">
              Contact Us Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-2">
              Have questions? We'd love to hear from you. Reach out anytime!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: MapPin, title: "Location", content: "Sirsa, Haryana 125055\nIndia" },
              { icon: Phone, title: "Phone", content: "+91 (XXX) XXX-XXXX\nAvailable 9 AM - 6 PM" },
              { icon: Mail, title: "Email", content: "info@jaibabajiseeds.com\nsupport@jaibabajiseeds.com" }
            ].map((contact, idx) => (
              <Card 
                key={idx}
                className={`product-item border-border hover:border-primary/50 bg-background text-center shadow-premium hover:shadow-lg transition-all duration-300 group`}
              >
                <CardHeader>
                  <contact.icon className="w-10 h-10 text-accent mx-auto mb-2 icon-animate transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  <CardTitle className="text-primary transition-colors duration-300 group-hover:text-accent">
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground whitespace-pre-line transition-colors duration-300 group-hover:text-foreground">
                    {contact.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-border shadow-lg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {[
              {
                title: "About",
                content: "Premium quality rice seeds for sustainable agriculture."
              },
              {
                title: "Products",
                links: ["Basmati Rice", "Jasmine Rice", "Sona Masuri Rice"]
              },
              {
                title: "Company",
                links: ["About Us", "Contact", "Blog"]
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Service"]
              }
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold mb-4 transition-colors duration-300 hover:text-accent">
                  {section.title}
                </h4>
                {section.content ? (
                  <p className="text-sm opacity-90 transition-opacity duration-300 hover:opacity-100">
                    {section.content}
                  </p>
                ) : (
                  <ul className="text-sm space-y-2 opacity-90">
                    {section.links?.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90 transition-opacity duration-300 hover:opacity-100">
            <p>&copy; 2026 Jai Babaji Seeds. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
