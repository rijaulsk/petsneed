import type { Metadata } from "next";
import Image from "next/image";
import {
  Handshake,
  Star,
  Store,
  Heart,
  Users,
  MapPin,
  CheckCircle,
} from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { placeholderImages } from "@/lib/image-data";
import { testimonials } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";
import { PetIcon } from "@/components/decorative-icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import Link from "next/link";
import { CountUp } from "@/components/count-up";

export const metadata: Metadata = {
  title: "About Pet's Need | Trusted Pet Care Center in Alipore, Kolkata",
  description:
    "Learn about Pet's Need - Alipore, Kolkata's complete pet care center serving 3000+ happy pet parents. Professional grooming, veterinary care, quality supplies. 5.0★ rated with 242+ reviews. Visit us in Kolkata.",
};

const heroImage = placeholderImages["about-hero"];
const storyImage = placeholderImages["about-story-image"];

const values = [
  {
    icon: Handshake,
    title: "Compassion",
    description:
      "Every pet deserves to be treated with patience, kindness, and respect. We approach every interaction with empathy and understanding.",
  },
  {
    icon: Star,
    title: "Quality",
    description:
      "We never compromise on the products we sell or the services we provide. We maintain high standards in everything we do.",
  },
  {
    icon: Store,
    title: "Convenience",
    description:
      "By bringing grooming, veterinary services, and shopping under one roof, we save you time and give you peace of mind.",
  },
  {
    icon: Heart,
    title: "Trust",
    description:
      "We earn your trust through transparency, consistency, and genuine care. We'll always put your pet's wellbeing first.",
  },
];

const stats = [
  {
    value: "5.0 ★",
    label: "242+ Google Reviews",
    icon: Star,
    isCounter: false,
  },
  {
    value: "3000",
    label: "Happy Pet Parents",
    icon: Heart,
    isCounter: true,
    suffix: "+",
  },
  {
    value: "3",
    label: "Experienced Veterinarians",
    icon: Users,
    isCounter: false,
  },
  { value: "10AM-10PM", label: "Open Daily", icon: Store, isCounter: false },
];

const locations = [
  "Alipore",
  "New Alipore",
  "Kidderpore",
  "Behala",
  "Taratala",
  "Mominpore",
  "Ekbalpur",
  "Majherhat",
  "Bhowanipore",
  "Kalighat",
  "Hastings",
  "Watganj",
  "Garden Reach",
  "Chetla",
  "Sahapur",
  "Tollygunge",
  "Lake Gardens",
  "Behala Chowrasta",
  "Parnashree",
  "Barisha",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-accent/20 pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden">
        <PetIcon
          as={require("@/components/icons").PawPrint}
          className="top-24 left-10 h-24 w-24 -rotate-12 opacity-50"
        />
        <PetIcon
          as={Heart}
          className="bottom-24 right-10 h-20 w-20 rotate-12 opacity-50"
        />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                About Pet's Need
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0">
                Your neighborhood pet care partner in Alipore, Kolkata. We've
                created a friendly, welcoming space where every pet feels safe
                and every pet parent feels confident in the care their companion
                receives.
              </p>
              <Button asChild size="lg" className="font-button">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </AnimatedSection>
            <AnimatedSection
              animation="fade-in-left"
              delay={200}
              className="relative"
            >
              <div className="aspect-[4/3] group">
                <div className="p-2 bg-gradient-to-tr from-accent/40 to-accent/60 rounded-3xl shadow-lg h-full w-full">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    {heroImage && (
                      <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        data-ai-hint={heroImage.imageHint}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        priority
                      />
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <PageShell>
        {/* Our Story */}
        <AnimatedSection
          as="section"
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 items-center"
        >
          <AnimatedSection
            animation="fade-in-right"
            delay={200}
            className="relative"
          >
            <div className="aspect-[5/4] group">
              <div className="p-2 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl shadow-lg h-full w-full">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  {storyImage && (
                    <Image
                      src={storyImage.imageUrl}
                      alt={storyImage.description}
                      data-ai-hint={storyImage.imageHint}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p className="text-lg text-foreground/80">
              Pet's Need was born from a simple belief: every pet deserves
              exceptional care close to home. What started as a small
              neighborhood shop has grown into Alipore, Kolkata's trusted
              complete pet care center, serving thousands of happy pet families
              across Kolkata.
            </p>
            <p className="text-foreground/70">
              We understand the bond between pets and their parents because
              we're pet lovers ourselves. We know that choosing where to take
              your furry friend for care isn't just about convenience—it's about
              trust. That's why we've built Pet's Need to be the kind of place
              we'd want to bring our own pets: clean, welcoming, staffed by
              people who genuinely care, and stocked with products and services
              that meet the highest standards.
            </p>
            <p className="text-foreground/70">
              Thank you for trusting Pet's Need with your beloved companions.
              We're honored to be part of your pet care journey, and we look
              forward to serving you and your furry, feathered, or scaled
              friends for years to come.
            </p>
          </div>
        </AnimatedSection>

        {/* Mission */}
        <AnimatedSection as="section" className="mt-16 md:mt-24">
          <div className="p-8 bg-accent/30 rounded-2xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-foreground/80">
              To provide comprehensive, compassionate, and convenient pet care
              that enriches the lives of pets and their families throughout
              Kolkata. We're committed to combining professional expertise with
              genuine warmth, making quality pet care accessible to every pet
              parent in our community.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection as="section" className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <AnimatedSection
                as="div"
                key={stat.label}
                delay={index * 100}
                className="group"
              >
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-3xl lg:text-4xl font-bold">
                  {stat.isCounter ? (
                    <CountUp end={parseInt(stat.value)} suffix={stat.suffix} />
                  ) : (
                    stat.value
                  )}
                </div>
                <p className="text-sm text-foreground/60">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Our Values */}
        <AnimatedSection
          as="section"
          className="mt-16 md:mt-24 bg-accent/20 section-padding -mx-5 md:-mx-12 lg:-mx-24"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container">
            {values.map((value, index) => (
              <AnimatedSection as="div" key={value.title} delay={index * 100}>
                <Card className="text-center border-none shadow-lg bg-background transition-transform duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 text-primary p-4 rounded-full mb-4 inline-block">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection as="section" className="mt-16 md:mt-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Customers Say
            </h2>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials
              .concat(testimonials)
              .slice(0, 12)
              .map((testimonial, index) => (
                <AnimatedSection
                  as="div"
                  key={index}
                  delay={index * 50}
                  className="break-inside-avoid"
                >
                  <Card className="shadow-md transition-shadow hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <blockquote className="text-foreground/80 mb-4">
                        "{testimonial.review}"
                      </blockquote>
                      <p className="font-bold text-sm text-right">
                        {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
          </div>
        </AnimatedSection>

        {/* Serving Kolkata */}
        <AnimatedSection
          as="section"
          className="mt-16 md:mt-24 text-center max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Serving All of Kolkata
            </h2>
            <p className="text-lg text-foreground/70 mt-4">
              Located in the heart of Alipore, Kolkata, Pet's Need proudly
              serves pet families throughout Kolkata and its surrounding
              neighborhoods. Our convenient Diamond Harbour Road location makes
              us easily accessible from anywhere in the area.
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
                {locations.map((location) => (
                  <div
                    key={location}
                    className="flex items-center gap-2 bg-accent/20 px-3 py-1 rounded-full"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium text-sm">{location}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </PageShell>
    </>
  );
}
