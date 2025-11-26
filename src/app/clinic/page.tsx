import type { Metadata } from "next";
import Image from "next/image";
import {
  AlertCircle,
  Phone,
  Dog,
  Cat,
  Rabbit,
  Check,
  Bone,
} from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { siteConfig, doctors } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";
import { PetIcon } from "@/components/decorative-icons";
import { Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Vet Clinic in Alipore, Kolkata | Veterinary Doctor Near Me",
  description:
    "Trusted veterinary clinic in Alipore, Kolkata. Experienced vets provide checkups, vaccinations, treatments for dogs, cats, birds, and large animals. Serving South Kolkata. Call 9748337732 for appointment.",
};

const heroImage = PlaceHolderImages.find((p) => p.id === "clinic-hero");

const services = [
  {
    title: "General Consultation",
    description:
      "Walk-in consultations for health concerns. Our vets perform thorough physical examinations and provide clear diagnosis and treatment plans.",
  },
  {
    title: "Vaccination & Preventive Care",
    description:
      "Protect your pet from serious diseases with our comprehensive vaccination programs, including annual boosters and anti-rabies shots.",
  },
  {
    title: "Diagnostics (Partnered)",
    description:
      "Accurate diagnosis starts here. We arrange for blood work, stool analysis, and urine tests through our trusted partner diagnostic facilities.",
  },
  {
    title: "Treatment Services",
    description:
      "We treat a wide range of health issues including fever, infections, wound care, dehydration therapy, and various skin conditions.",
  },
  {
    title: "Minor Surgical Procedures",
    description:
      "Our vets perform routine surgical procedures like spaying/neutering, wound suturing, and lump removals with appropriate care.",
  },
  {
    title: "Home Visit Services",
    description:
      "Our doctors provide at-home veterinary visits for aged, immobile, or anxious pets, offering care in the comfort of your home.",
  },
  {
    title: "Pet Health Certificates",
    description:
      "Planning to travel? We provide fit-to-travel certificates and health documentation required for airline journeys and relocation.",
  },
  {
    title: "Pet Health Counseling",
    description:
      "Our vets offer expert guidance on proper feeding, parasite management, grooming, weight control, and vaccination schedules.",
  },
];

const commonIssues = {
  Dogs: [
    "Digestive problems (vomiting, diarrhea)",
    "Skin conditions (allergies, hot spots)",
    "Ear infections and mites",
    "Dental issues and bad breath",
    "Arthritis and joint problems",
    "Tick-borne diseases",
  ],
  Cats: [
    "Upper respiratory infections",
    "Urinary tract issues",
    "Hairballs and digestive upset",
    "Skin parasites and allergies",
    "Dental disease",
    "Kidney and liver concerns",
  ],
  "Small & Large Animals": [
    "Nutritional deficiencies (Rabbits, Birds)",
    "Overgrown teeth and nails (Small Pets)",
    "Respiratory problems in birds",
    "Parasites (internal & external)",
    "Digestive issues (e.g., GI stasis in rabbits)",
    "General wellness for larger animals",
  ],
};

const wellnessTips = [
  "Regular Checkups",
  "Stay Current on Vaccines",
  "Quality Nutrition",
  "Maintain Healthy Weight",
  "Dental Care",
  "Parasite Prevention",
  "Exercise Daily",
  "Fresh Water Always",
  "Grooming Routine",
  "Watch for Changes",
];

const faqs = [
  {
    question: "Do you handle emergency cases?",
    answer:
      "We provide first-aid and stabilization for many urgent situations during our operating hours. For life-threatening emergencies outside our doctor's availability or beyond our facility's scope, we can guide you to 24-hour emergency veterinary hospitals in Kolkata.",
  },
  {
    question: "How much do consultations cost?",
    answer:
      "Please call us for current consultation fees and treatment costs. Prices vary based on the services needed, and we're always transparent about costs before proceeding with treatment.",
  },
  {
    question: "Can I get pet medicines from your pharmacy?",
    answer:
      "Yes! Our pharmacy stocks commonly needed pet medications, supplements, vitamins, and preventive treatments. Prescription medications are dispensed when the doctor is available or with a valid prescription from another vet.",
  },
  {
    question: "Do you treat birds and large animals?",
    answer:
      "Yes, our vets have experience with various species beyond just dogs and cats, including rabbits, hamsters, guinea pigs, parrots, and larger animals.",
  },
];

export default function ClinicPage() {
  return (
    <>
      <section className="relative bg-accent/20 pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden">
        <PetIcon
          as={Stethoscope}
          className="top-24 left-10 h-24 w-24 -rotate-12 opacity-50"
        />
        <PetIcon
          as={Rabbit}
          className="bottom-24 right-10 h-20 w-20 rotate-12 opacity-50"
        />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Veterinary Clinic in Alipore, Kolkata
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0">
                Expert veterinary care for your dog, cat, or any other pet. From
                checkups to treatments, our experienced vets in Alipore, Kolkata
                are here when your furry friend needs us most.
              </p>
              <Button asChild size="lg" className="font-button">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="mr-2 h-4 w-4" /> Call for Appointment
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
        <AnimatedSection className="max-w-4xl mx-auto">
          <Alert
            variant="destructive"
            className="bg-red-50 border-red-200 text-red-800"
          >
            <AlertCircle className="h-4 w-4 !text-red-800" />
            <AlertTitle className="font-bold">
              Please call before visiting for clinic services
            </AlertTitle>
            <AlertDescription>
              Clinic hours vary based on doctor availability. Our store and
              grooming are open daily 10 AM - 10 PM. Call{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-semibold underline"
              >
                {siteConfig.phone}
              </a>{" "}
              to confirm doctor availability before your visit.
            </AlertDescription>
          </Alert>
        </AnimatedSection>

        {/* Introduction */}
        <AnimatedSection
          as="section"
          className="mt-12 max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-foreground/80">
            Your pet's health is our priority. At Pet's Need Veterinary Clinic
            in Alipore, Kolkata, we provide comprehensive medical care for dogs,
            cats, rabbits, birds, and other animals. Our qualified veterinarians
            bring years of experience treating everything from routine checkups
            to complex health concerns. We believe in clear communication—we'll
            always explain what's happening with your pet and discuss treatment
            options in language you understand.
          </p>
        </AnimatedSection>

        {/* Meet Our Team */}
        <AnimatedSection as="section" className="mt-16 md:mt-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet Our Veterinary Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => {
              const colorSchemes = [
                {
                  bg: "bg-blue-100",
                  icon: "text-blue-600",
                  border: "border-blue-200",
                },
                {
                  bg: "bg-green-100",
                  icon: "text-green-600",
                  border: "border-green-200",
                },
                {
                  bg: "bg-purple-100",
                  icon: "text-purple-600",
                  border: "border-purple-200",
                },
                {
                  bg: "bg-orange-100",
                  icon: "text-orange-600",
                  border: "border-orange-200",
                },
                {
                  bg: "bg-teal-100",
                  icon: "text-teal-600",
                  border: "border-teal-200",
                },
                {
                  bg: "bg-pink-100",
                  icon: "text-pink-600",
                  border: "border-pink-200",
                },
              ];
              const scheme = colorSchemes[index % colorSchemes.length];
              return (
                <AnimatedSection as="div" key={doctor.name} delay={index * 100}>
                  <Card className="text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                    <CardContent className="p-6">
                      <div
                        className={`relative w-32 h-32 mx-auto mb-4 rounded-full ${scheme.bg} ${scheme.border} border-4 flex items-center justify-center overflow-hidden group`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <Stethoscope
                          className={`w-16 h-16 ${scheme.icon} transition-transform duration-300 group-hover:scale-110`}
                        />
                        <Bone
                          className={`absolute top-2 right-2 w-5 h-5 ${scheme.icon} opacity-30`}
                        />
                      </div>
                      <h3 className="text-xl font-bold">{doctor.name}</h3>
                      <p className="text-primary font-semibold text-sm">
                        {doctor.specialization}
                      </p>
                      <p className="text-sm text-foreground/60 mb-4">
                        {doctor.experience} experience
                      </p>
                      <p className="text-foreground/70 text-sm">
                        {doctor.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Our Services */}
        <AnimatedSection
          as="section"
          className="mt-16 md:mt-24 section-padding -mx-5 md:-mx-12 lg:-mx-24 bg-accent/20"
        >
          <div className="text-center mb-12 md:mb-16 container">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Veterinary Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container">
            {services.map((service, index) => (
              <AnimatedSection as="div" key={service.title} delay={index * 100}>
                <Card className="bg-background border-none transition-shadow hover:shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Common Health Issues */}
        <AnimatedSection as="section" className="mt-16 md:mt-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Common Health Issues We Treat
            </h2>
          </div>
          <Tabs defaultValue="Dogs" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="Dogs">
                <Dog className="mr-2 h-4 w-4" />
                Dogs
              </TabsTrigger>
              <TabsTrigger value="Cats">
                <Cat className="mr-2 h-4 w-4" />
                Cats
              </TabsTrigger>
              <TabsTrigger value="Small & Large Animals">
                <Rabbit className="mr-2 h-4 w-4" />
                Small & Large Animals
              </TabsTrigger>
            </TabsList>
            {Object.entries(commonIssues).map(([pet, issues]) => (
              <TabsContent key={pet} value={pet}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-6">
                  {issues.map((issue) => (
                    <div key={issue} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedSection>

        {/* Wellness Tips */}
        <AnimatedSection
          as="section"
          className="mt-16 md:mt-24 section-padding -mx-5 md:-mx-12 lg:-mx-24 bg-accent/20"
        >
          <div className="text-center mb-12 md:mb-16 container">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pet Wellness Tips
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto mt-4">
              Keep your pet healthy year-round with these simple tips.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto container">
            {wellnessTips.map((tip, index) => (
              <AnimatedSection as="div" key={tip} delay={index * 50}>
                <Card className="text-center transition-transform duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                    <Check className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">{tip}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* FAQs */}
        <AnimatedSection
          as="section"
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Clinic FAQs</h2>
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
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection
          as="section"
          className="mt-16 md:mt-24 text-center max-w-3xl mx-auto p-8 rounded-2xl gradient-background text-white"
        >
          <h2 className="text-3xl font-bold">Schedule Your Pet's Checkup</h2>
          <p className="mt-4 mb-6">
            Keep your furry friend healthy and happy with regular veterinary
            care. Call Pet's Need to book an appointment with our experienced
            vets in Alipore, Kolkata.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="font-button bg-white text-primary hover:bg-white/90"
          >
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="mr-2 h-4 w-4" /> Call for Appointment
            </a>
          </Button>
        </AnimatedSection>
      </PageShell>
    </>
  );
}
