import type { Metadata } from "next";
import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { siteConfig, quickContact } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { PetIcon } from "@/components/decorative-icons";
import { Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Pet's Need | Pet Care Center in Alipore, Kolkata",
  description:
    "Contact Pet's Need at 10/1D Diamond Harbour Rd, Alipore, Kolkata. Call 7411576879 for grooming, vet services, pet supplies. Open daily 10 AM - 10 PM. Serving South Kolkata pet families.",
};

const heroImage = PlaceHolderImages.find((p) => p.id === "contact-hero");

const faqs = [
  {
    question: "What's the best way to reach you?",
    answer:
      "For immediate assistance, call us at 7411576879. For non-urgent questions, you can also WhatsApp us or email contact@petsneed.in.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "For grooming and shopping, walk-ins are welcome daily from 10 AM to 10 PM. For veterinary services, please call ahead to confirm doctor availability.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, parking is available near our location on Diamond Harbour Road, Alipore, Kolkata.",
  },
  {
    question: "How do I get directions?",
    answer:
      "Click 'Get Directions' on our contact cards or map, or search \"Pet's Need Alipore\" on Google Maps. We're easily accessible from all parts of South Kolkata.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-accent/20 pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden">
        <PetIcon
          as={Mail}
          className="top-24 left-10 h-24 w-24 -rotate-12 opacity-50"
        />
        <PetIcon
          as={MessageCircle}
          className="bottom-24 right-10 h-20 w-20 rotate-12 opacity-50"
        />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Come Say Hi!
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0">
                Visit us in Alipore, Kolkata, give us a call, or send a message.
                We're here to help with all your pet care needs, from expert
                advice to scheduling an appointment. We look forward to
                welcoming you and your furry friend!
              </p>
              <Button asChild size="lg" className="font-button">
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
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
        {/* Quick Contact Cards */}
        <AnimatedSection as="section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickContact.map((contact, index) => (
              <AnimatedSection as="div" key={contact.title} delay={index * 100}>
                <Card className="text-center group hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:-translate-y-1 h-full">
                  <a
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : "_self"
                    }
                    rel="noopener noreferrer"
                    className="block p-6"
                  >
                    <contact.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg">{contact.title}</h3>
                    <p className="text-sm font-semibold">{contact.value}</p>
                    <p className="text-xs text-foreground/60">
                      {contact.label}
                    </p>
                  </a>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Store Hours & Map */}
        <AnimatedSection
          as="section"
          className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="lg:order-2">
            <h2 className="text-3xl font-bold mb-6">Store Hours & Location</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg">
                    Store, Grooming & Pharmacy
                  </h3>
                  <p className="text-2xl font-semibold text-primary">
                    Open Daily: 10:00 AM - 10:00 PM
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-amber-900">
                    Veterinary Clinic
                  </h3>
                  <p className="text-lg font-semibold text-amber-800">
                    Please call before visiting
                  </p>
                  <p className="text-sm text-amber-700">
                    Doctor availability varies. Call{" "}
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="font-bold underline"
                    >
                      {siteConfig.phone}
                    </a>{" "}
                    to confirm.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="lg:order-1 p-2 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl shadow-lg h-full w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28332.296805898855!2d88.2868882!3d22.5228595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277cd1afad30f%3A0xa5e03916921fc384!2sPet&#39;s%20Need!5e1!3m2!1sen!2sin!4v1763391106493!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pet's Need Location Map"
              ></iframe>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQs */}
        <AnimatedSection
          as="section"
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Contact FAQ</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/#faq">View All FAQs</Link>
            </Button>
          </div>
        </AnimatedSection>
      </PageShell>
    </>
  );
}
