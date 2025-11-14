import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { productCategories } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";

export function ProductPreview() {
  return (
    <section className="section-padding bg-accent/20">
      <div className="container mx-auto">
        <AnimatedSection as="div" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our In-Store Products</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mt-4">
            We stock hundreds of items from trusted brands. Visit us in Alipore, Kolkata to browse our full selection for dogs, cats, and small pets.
          </p>
        </AnimatedSection>

        <div className="flex gap-4 pb-4 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:mx-0 md:px-0 overflow-x-auto no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {productCategories.map((category, index) => (
            <AnimatedSection as="div" key={category.name} delay={index * 100}>
              <Card className="flex-shrink-0 w-40 md:w-auto text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-md">{category.name}</h3>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection as="div" className="text-center mt-12">
          <Button asChild size="lg" className="font-button">
            <Link href="/products">Visit Our Store to Explore Full Range!</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
