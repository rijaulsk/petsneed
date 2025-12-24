"use client";

import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { AnimatedSection } from '@/components/animated-section';
import { PetIcon } from '@/components/decorative-icons';
import React from 'react';
import { cn } from '@/lib/utils';
import { PawPrint } from '@/components/icons';

const heroSlides = [
  {
    imageUrl: '/images/happy-dog-customer-pets-need-grooming.jpg',
    description: 'Happy dog receiving care',
    alt: 'Happy dog customer at Pets Need grooming service',
    keywords: ['dog grooming', 'happy dog', 'pet care']
  },
  {
    imageUrl: '/images/pet-shop-supplies-medicines-alipore-kolkata.jpg',
    description: 'Pet shop supplies and medicines',
    alt: 'Pet shop supplies and medicines in Alipore, Kolkata',
    keywords: ['pet shop', 'pet medicines', 'Alipore pet supplies']
  },
  {
    imageUrl: '/images/veterinary-clinic-room-alipore.jpg',
    description: 'Expert Care You Can Trust',
    alt: 'The well-equipped veterinary clinic room at Pets Need in Alipore',
    keywords: ['veterinary clinic', 'pet health', 'Alipore vet']
  },
  {
    imageUrl: '/images/professional-dog-haircut-trimming-service.jpg',
    description: 'Professional dog haircut and trimming',
    alt: 'Professional dog haircut and trimming service',
    keywords: ['dog haircut', 'dog trimming', 'pet grooming']
  },
];

export function Hero() {
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
    <section className="relative bg-background pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden">
      <PetIcon className="top-20 left-10 h-24 w-24 -rotate-12" />
      <PetIcon as={PawPrint} className="bottom-10 right-10 h-16 w-16 rotate-12" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection className="space-y-6 text-center lg:text-left">
            <div className="inline-block bg-white shadow-md rounded-full p-3 mb-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold text-sm text-foreground">
                  5.0 • 242+ Happy Reviews
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              All the Love, All the Care.
              <br />
              <span className="gradient-text">All in One Place.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0">
              Your pet's happy place in Alipore, Kolkata! We offer expert vet care, joyful grooming, and all the supplies your best friend deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="font-button">
                <a href={`tel:${siteConfig.phone}`}>Book an Appointment</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-left" delay={200} className="relative">
             <Carousel
                setApi={setApi}
                className="w-full"
                plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
                opts={{ loop: true, align: "start" }}
              >
              <CarouselContent className="-ml-4">
                {heroSlides.map((slide, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full">
                    <div className="aspect-[4/3] rounded-3xl group bg-gradient-to-tr from-primary/20 to-secondary/20 p-2">
                      <div className="relative h-full w-full overflow-hidden rounded-2xl">
                        {slide && (
                          <Image
                            src={slide.imageUrl}
                            alt={slide.alt}
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            priority={index === 0}
                          />
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={cn(
                      'h-2 rounded-full bg-white/50 transition-all duration-300',
                      i === current ? 'w-6 bg-white' : 'w-2'
                    )}
                  />
                ))}
              </div>
            </Carousel>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
