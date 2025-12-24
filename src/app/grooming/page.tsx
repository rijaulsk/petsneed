import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { placeholderImages } from "@/lib/image-data";
import { siteConfig } from "@/lib/data";
import { Phone, Scissors } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { PetIcon } from "@/components/decorative-icons";
import { GroomingImageGallery } from "@/components/grooming-image-gallery";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Pet Grooming in Alipore, Kolkata | Dog & Cat Grooming",
  description:
    "Professional pet grooming services in Alipore, Kolkata for dogs, cats, and small animals. Expert groomers, safe products, gentle handling. Book grooming near Behala, Tollygunge. Call 9748337732 today!",
};

const heroImage = placeholderImages["grooming-hero"];

const services = [
  {
    title: "Full Grooming Packages",
    description:
      "Our comprehensive grooming includes a soothing bath, blow-dry, stylish haircut, coat trimming and shaping, sanitary trim, and paw pad trimming. Perfect for dogs and cats who need the complete spa experience.",
    imageId: "service-full-groom",
  },
  {
    title: "Basic Grooming",
    description:
      "For routine maintenance, our basic grooming covers bath, nail clipping, and ear cleaning. We also offer de-shedding and tick/flea baths with medicated washes when needed.",
    imageId: "service-basic-groom",
  },
  {
    title: "Spa Treatments",
    description:
      "Treat your pet to something extra! We offer spa sessions with aromatherapy shampoos, teeth cleaning, and coat conditioning masks to keep their coat shiny and healthy.",
    imageId: "service-spa",
  },
  {
    title: "Specialized Cat Grooming",
    description:
      "Cats deserve pampering too! We specialize in long-hair and Persian-specific grooming, including gentle de-matting, thorough brushing, and supervised cat baths with careful drying.",
    imageId: "service-cat-groom",
  },
  {
    title: "Puppy & Kitten's First Groom",
    description:
      "First grooming experience? We offer gentle introduction sessions designed for young pets to help them get comfortable with grooming early on.",
    imageId: "service-puppy-groom",
  },
  {
    title: "Just a Trim",
    description:
      "Need a quick touch-up? We offer standalone services like nail clipping, ear cleaning, and face/sanitary trims.",
    imageId: "grooming-gallery-3",
  },
];

const seasonalTips = [
  {
    title: "🌞 Summer Grooming (March - June)",
    description:
      "Keep your pet cool during Kolkata's hot months with summer coat thinning. Regular brushing removes excess undercoat and improves air circulation. Schedule baths more frequently to help them stay fresh, and don't forget paw pad moisturizing—hot pavements can dry out their pads. Consider a shorter haircut for long-haired breeds, but never shave double-coated dogs completely as their coat protects them from heat too.",
  },
  {
    title: "🌧️ Monsoon Grooming (July - September)",
    description:
      "The rainy season brings humidity and moisture—perfect conditions for fungal infections and skin issues. Keep your pet's coat completely dry after walks, paying special attention to paws, underarms, and ears. Increase grooming frequency to prevent matting in long-haired pets. Use anti-fungal shampoos if recommended by your vet, and check for ticks more often as they thrive in monsoon conditions.",
  },
  {
    title: "❄️ Winter Grooming (November - February)",
    description:
      "Cold weather means dry skin for pets too. Switch to moisturizing shampoos and consider coat conditioning treatments to prevent flaking and itching. Brush regularly to distribute natural oils throughout their coat. For short-haired breeds sensitive to cold, you might reduce bath frequency slightly, but never skip brushing. Paw care is crucial—cold surfaces and winter dryness can crack paw pads, so use pet-safe moisturizers.",
  },
  {
    title: "🌸 Spring Grooming (February - March)",
    description:
      "Spring is shedding season! As the weather warms up, dogs and cats shed their winter coats. Schedule professional de-shedding treatments to remove loose fur before it takes over your home. This is also a great time for a thorough coat inspection—check for any skin issues that may have developed under the thick winter coat. Spring cleaning applies to pets too!",
  },
];

const galleryImages = [
  placeholderImages["grooming-gallery-1"],
  placeholderImages["grooming-gallery-2"],
  placeholderImages["grooming-gallery-3"],
  placeholderImages["grooming-gallery-4"],
  placeholderImages["service-full-groom"],
  placeholderImages["service-basic-groom"],
  placeholderImages["service-spa"],
  placeholderImages["service-puppy-groom"],
].filter(Boolean);

const faqs = [
  {
    question: "How often should I get my dog groomed?",
    answer:
      "It depends on breed and coat type. Long-haired breeds like Shih Tzus, Golden Retrievers, and Persians benefit from grooming every 4-6 weeks. Short-haired pets typically need grooming every 8-12 weeks. We'll recommend a schedule based on your pet's specific needs.",
  },
  {
    question: "Is grooming stressful for cats?",
    answer:
      "Not when done properly! Our groomers are trained in feline handling and create a calm, quiet environment. Many cats relax once they realize grooming feels good. We take breaks if needed and never force a stressed cat.",
  },
  {
    question: "Can you groom aggressive or anxious pets?",
    answer:
      "We have experience with nervous pets and use gentle handling techniques. For extremely anxious pets, we recommend shorter sessions or consulting with your vet about mild sedation options for their comfort and safety.",
  },
  {
    question: "Do you use safe products?",
    answer:
      "Absolutely. We use only pet-safe, dermatologically tested shampoos and products. For pets with sensitive skin or allergies, we offer hypoallergenic and medicated options.",
  },
  {
    question: "How long does grooming take?",
    answer:
      "Basic grooming typically takes 1-2 hours, while full grooming packages take 2-3 hours depending on your pet's size, coat condition, and temperament. You're welcome to wait or we can call you when they're ready.",
  },
];

export default function GroomingPage() {
  return (
    <>
      <section className="relative bg-accent/20 pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden">
        <PetIcon
          as={Scissors}
          className="top-24 left-10 h-24 w-24 -rotate-12 opacity-50"
        />
        <PetIcon
          as={require("@/components/icons").PawPrint}
          className="bottom-24 right-10 h-20 w-20 rotate-12 opacity-50"
        />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Pet Grooming in Alipore, Kolkata
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0">
                Gentle, professional grooming that keeps your dog or cat looking
                great and feeling even better. Book your pet's spa day at Pet's
                Need in Alipore, Kolkata today.
              </p>
              <Button asChild size="lg" className="font-button">
                <a href={`tel:${siteConfig.phone}`}>
                  Book Grooming Appointment
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
                  {" "}
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
        {/* Introduction */}
        <AnimatedSection as="section" className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-foreground/80">
            A clean, comfortable pet is a happy pet. At Pet's Need, we offer
            complete grooming services for dogs, cats, and small animals right
            here in Alipore, Kolkata. Whether your furry friend needs a simple
            bath and nail trim or a full grooming makeover, our experienced
            groomers treat every pet with patience, care, and professionalism.
            We use safe, pet-friendly products and create a stress-free
            environment so your pet actually enjoys their grooming session.
          </p>
        </AnimatedSection>

        {/* Our Grooming Services */}
        <AnimatedSection as="section" className="mt-16 md:mt-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Grooming Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const image = placeholderImages[service.imageId as keyof typeof placeholderImages];
              return (
                <AnimatedSection
                  as="div"
                  key={service.title}
                  delay={index * 100}
                >
                  <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                    {image && (
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={image.imageUrl}
                          alt={service.title}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Gallery */}
        <AnimatedSection as="section" className="mt-16 md:mt-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Happy & Handsome</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto mt-4">
              A glimpse of our happy customers after their pampering session in
              Alipore, Kolkata.
            </p>
          </div>
          <GroomingImageGallery images={galleryImages} />
        </AnimatedSection>

        {/* Seasonal Grooming Tips */}
        <AnimatedSection
          as="section"
          className="mt-16 md:mt-24 section-padding -mx-5 md:-mx-12 lg:-mx-24 bg-accent/20"
        >
          <div className="text-center mb-12 md:mb-16 container">
            <h2 className="text-3xl md:text-4xl font-bold">
              Seasonal Grooming Tips for Kolkata Pets
            </h2>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-4xl mx-auto"
          >
            {seasonalTips.map((tip, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-xl hover:no-underline">
                  {tip.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/70">
                  {tip.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

        {/* Why Professional Grooming Matters */}
        <AnimatedSection
          as="section"
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Professional Grooming Matters
            </h2>
          </div>
          <div className="space-y-4 text-lg text-foreground/80 text-center">
            <p>
              Regular grooming isn't just about looks—it's essential for your
              pet's health and happiness. Professional groomers can spot skin
              issues, lumps, parasites, or infections early, often before you
              notice them at home. Proper nail trimming prevents painful
              overgrowth and posture problems.
            </p>
            <p>
              Ear cleaning reduces infection risk, de-shedding minimizes
              hairballs in cats, and it keeps your home cleaner. Plus, many pets
              genuinely enjoy the attention from experienced groomers who know
              how to make them comfortable. At Pet's Need in Alipore, Kolkata,
              we combine health-focused care with that spa day feeling every pet
              deserves.
            </p>
          </div>
        </AnimatedSection>

        {/* FAQs */}
        <AnimatedSection
          as="section"
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Grooming FAQs</h2>
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
          <h2 className="text-3xl font-bold">Book Your Pet's Grooming Today</h2>
          <p className="mt-4 mb-6">
            Ready to pamper your pet? Call us to schedule a grooming appointment
            at Pet's Need in Alipore, Kolkata. Walk-ins are welcome daily from
            10 AM to 10 PM, but appointments ensure minimal wait time.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="font-button bg-white text-primary hover:bg-white/90"
          >
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call to Book Now
            </a>
          </Button>
        </AnimatedSection>
      </PageShell>
    </>
  );
}
