import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedSection } from "@/components/animated-section";

export function Services() {
  return (
    <AnimatedSection id="services" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection as="div" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">All Your Pet's Needs</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mt-4">
            From playtime to checkups, we've got you covered under one friendly roof. Quality care for dogs, cats, and small pets across Alipore and South Kolkata.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const image = PlaceHolderImages.find(p => p.id === service.imageId);
            return (
              <AnimatedSection as="div" key={service.title} delay={index * 100}>
                <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                  <CardHeader className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                        <service.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                    <p className="text-foreground/70">{service.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link href={service.cta.href} className="font-semibold text-primary inline-flex items-center gap-2 group/link">
                      {service.cta.text}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
