import { whyUsFeatures } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

export function WhyUs() {
  return (
    <section className="section-padding bg-accent/20">
      <div className="container mx-auto">
        <AnimatedSection as="div" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Pet Parents Trust Us</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsFeatures.map((feature, index) => (
            <AnimatedSection as="div" key={feature.title} delay={index * 100}>
              <Card className="text-center border-none shadow-lg bg-background h-full transition-transform duration-300 hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
