"use client";

import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials, siteConfig } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <AnimatedSection className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection as="div" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Pet Parents Say</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4">
            Don't just take our word for it—hear from families who trust us with their furry friends in Alipore, Kolkata.
          </p>
        </AnimatedSection>

        <Carousel
          setApi={setApi}
          plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
          className="w-full"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-foreground/80">
                        "{testimonial.review}"
                      </blockquote>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <p className="font-bold text-sm">{testimonial.name}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
           <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={cn(
                      'h-2 rounded-full bg-muted transition-all duration-300',
                      i === current ? 'w-6 bg-primary' : 'w-2 bg-primary/50'
                    )}
                  />
                ))}
              </div>
        </Carousel>

        <AnimatedSection as="div" className="text-center mt-20">
          <Button asChild variant="outline">
            <a href={siteConfig.googleReviewsLink} target="_blank" rel="noopener noreferrer">
              Read All 242+ Reviews on Google
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
