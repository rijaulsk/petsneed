import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { ArrowRight, Phone, Map } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function Cta() {
  return (
    <AnimatedSection className="section-padding gradient-background text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Come Say Hi!</h2>
        <p className="text-lg max-w-2xl mx-auto mt-4 text-primary-foreground/90">
          Visit us at 10/1D Diamond Harbour Road, Alipore, Kolkata or give us a call. We're here to make your pet's day brighter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-button">
            <a href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white bg-white/10 text-white font-button group">
            <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer">
                <Map className="mr-2 h-5 w-5" />
                Get Directions
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
