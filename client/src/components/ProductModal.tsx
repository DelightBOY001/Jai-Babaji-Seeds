import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, CheckCircle, Zap, Droplets, Calendar } from "lucide-react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    image: string;
    description: string;
    details: {
      variety: string;
      yield: string;
      maturity: string;
      soilType: string;
      waterRequirement: string;
      germination: string;
      purity: string;
      seedTreatment: string;
    };
  };
}

/**
 * Design System: Modern Agricultural Minimalism - Professional Edition
 * Product modal with detailed information and premium animations
 * Uses semantic colors, smooth transitions, and professional styling
 */

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const specs = [
    { icon: Zap, label: "Variety", value: product.details.variety, color: "text-yellow-600" },
    { icon: TrendingUp, label: "Expected Yield", value: product.details.yield, color: "text-green-600" },
    { icon: Calendar, label: "Days to Maturity", value: product.details.maturity, color: "text-blue-600" },
    { icon: Droplets, label: "Soil Type", value: product.details.soilType, color: "text-amber-600" },
    { icon: Droplets, label: "Water Requirement", value: product.details.waterRequirement, color: "text-cyan-600" },
    { icon: CheckCircle, label: "Germination Rate", value: product.details.germination, color: "text-emerald-600" },
    { icon: CheckCircle, label: "Seed Purity", value: product.details.purity, color: "text-indigo-600" },
    { icon: CheckCircle, label: "Seed Treatment", value: product.details.seedTreatment, color: "text-purple-600" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-background border-border shadow-premium overflow-y-auto max-h-screen">
        <DialogHeader className="animate-fade-in-up">
          <DialogTitle className="text-3xl text-primary font-bold">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base mt-2">
            Premium quality rice seeds for optimal harvest and maximum yield
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Product Image */}
          <div className="relative h-72 rounded-xl overflow-hidden shadow-premium group animate-scale-in">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl"></div>
            <div className="absolute inset-0 rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"></div>
          </div>

          {/* Description */}
          <div className="space-y-3 animate-fade-in-up stagger-1">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full"></span>
              Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base bg-muted/30 p-4 rounded-lg border border-border/50 transition-colors duration-300 hover:bg-muted/50">
              {product.description}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="space-y-4 animate-fade-in-up stagger-2">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full"></span>
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specs.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <div 
                    key={idx}
                    className={`product-item bg-muted/40 hover:bg-muted/60 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 ${spec.color} flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1 transition-colors duration-300 group-hover:text-primary">
                          {spec.label}
                        </p>
                        <p className="font-bold text-foreground text-sm transition-colors duration-300 group-hover:text-primary break-words">
                          {spec.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Premium Features */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 rounded-xl border border-primary/20 animate-fade-in-up stagger-3">
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full"></span>
              Why Choose This Variety?
            </h3>
            <ul className="space-y-3">
              {[
                "High germination rate ensures maximum crop establishment",
                "Disease-resistant varieties for better yield protection",
                "Certified and tested for purity and quality standards",
                "Expert support and guidance throughout the season"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-foreground transition-colors duration-300 group-hover:text-primary">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 animate-fade-in-up stagger-4">
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-premium hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold text-base"
              onClick={onClose}
            >
              Add to Cart
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary/10 shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 font-semibold text-base"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Icon component for trending up (not from lucide-react)
function TrendingUp(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
}
