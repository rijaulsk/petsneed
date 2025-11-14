import type { Metadata } from 'next';
import Image from 'next/image';

import { PageShell } from '@/components/page-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { siteConfig, allProducts, productCategories, type Product } from '@/lib/data';
import { Check, Pill, ShoppingBasket } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { PetIcon } from '@/components/decorative-icons';
import { Bone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Pet Supplies & Pharmacy in Alipore, Kolkata | Pet Food, Toys, Accessories",
  description: "Quality pet supplies in Alipore, Kolkata - food, toys, accessories, health products & medicines for dogs, cats, birds, small pets. Brands: Royal Canin, Pedigree, Drools, Farmina. Visit our store near Tollygunge!",
};

const heroImage = PlaceHolderImages.find(p => p.id === 'products-hero');

const ProductCard = ({ product }: { product: Product }) => {
    const image = PlaceHolderImages.find(p => p.id === product.imageId);
    return (
        <Card className="h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {image && (
                 <div className="aspect-square relative w-full bg-muted rounded-t-lg overflow-hidden">
                    <Image src={image.imageUrl} alt={product.name} data-ai-hint={image.imageHint} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                 </div>
            )}
            <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
                <p className="text-sm text-foreground/70 flex-grow">{product.description}</p>
                {product.brands && <p className="text-xs text-foreground/50 mt-2">Brands: {product.brands}</p>}
            </CardContent>
        </Card>
    )
}

const faqs = [
    { question: "Do you offer delivery?", answer: "Currently, we operate as a walk-in store. Visit us in Alipore, Kolkata to shop our full range of products. Our convenient location makes shopping easy for pet parents across Kolkata." },
    { question: "Can I return products?", answer: "Please check products before purchase. For any concerns about product quality or issues, speak with our team in-store and we'll do our best to help." },
    { question: "Do you stock prescription medications?", answer: "Yes, our in-store pharmacy stocks common prescription medications. These are dispensed when our veterinarian is available or with a valid prescription from another vet." },
    { question: "What if you don't have what I'm looking for?", answer: "We're always happy to help! If we don't currently stock an item, let us know and we'll see if we can order it for you or recommend suitable alternatives." },
    { question: "Are your products authentic?", answer: "Absolutely. We source all products through authorized distributors and official brand channels to ensure authenticity and quality." },
];

const whyShopReasons = [
    "Wide Selection: Products for dogs, cats, birds, fish, and small animals",
    "Trusted Brands: Royal Canin, Pedigree, Drools, and more",
    "Expert Advice: Our staff helps you choose the right products",
    "Quality Assured: We stock only safe, tested pet products",
    "Convenient Location: Easy to reach from anywhere in South Kolkata",
    "In-Store Pharmacy: Health products and medicines available"
]

export default function ProductsPage() {
  return (
    <>
      <section className="relative bg-accent/20 pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden">
        <PetIcon as={ShoppingBasket} className="top-24 left-10 h-24 w-24 -rotate-12 opacity-50" />
        <PetIcon as={Bone} className="bottom-24 right-10 h-20 w-20 rotate-12 opacity-50" />
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection className="space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Pet Supplies in Alipore, Kolkata</h1>
                    <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0">
                      Everything your dog, cat, bird, or small pet needs—all in one store. Quality food, fun toys, comfy accessories, and health essentials from brands you trust. Visit us in Alipore, Kolkata to browse our full selection!
                    </p>
                    <Button asChild size="lg" className="font-button"><a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer">Visit Our Store</a></Button>
                </AnimatedSection>
                <AnimatedSection animation="fade-in-left" delay={200} className="relative aspect-[4/3] group">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl shadow-lg h-full w-full">
                    {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} data-ai-hint={heroImage.imageHint} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-2xl" priority />}
                  </div>
                </AnimatedSection>
            </div>
        </div>
      </section>
      
      <PageShell>
        {/* Introduction */}
        <AnimatedSection as="section" className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-foreground/80">At Pet's Need, we stock hundreds of pet care products for every species, breed, and life stage. Whether you're looking for nutritious food, entertaining toys, practical accessories, or health supplies, you'll find it here in our Alipore, Kolkata store. We carefully select items from trusted brands to ensure quality, safety, and value. Can't find what you need? Just ask—we're always happy to help you find the perfect products for your pet.</p>
        </AnimatedSection>
        
        {/* Products */}
        <AnimatedSection as="section" className="mt-16 md:mt-24">
            <Tabs defaultValue="Pet Food" className="w-full">
                <div className="flex justify-center">
                    <TabsList className="h-auto flex-wrap justify-center">
                       {productCategories.map(cat => (
                         <TabsTrigger key={cat.name} value={cat.name} className="py-2"><cat.icon className="mr-2 h-4 w-4" />{cat.name}</TabsTrigger>
                       ))}
                    </TabsList>
                </div>
                {Object.entries(allProducts).map(([category, products]) => (
                    <TabsContent key={category} value={category}>
                        {products.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                                {products.map((product, index) => <AnimatedSection as="div" key={product.id} delay={index * 50}><ProductCard product={product} /></AnimatedSection>)}
                            </div>
                        ) : (
                            <div className="text-center py-16 text-foreground/60">
                                <h3 className="text-xl font-semibold">Coming Soon!</h3>
                                <p>Products for this category will be listed shortly.</p>
                            </div>
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </AnimatedSection>

        {/* Pharmacy Section */}
        <AnimatedSection id="pharmacy" as="section" className="mt-16 md:mt-24 p-8 rounded-2xl bg-accent/30 flex flex-col md:flex-row items-center gap-8">
          <div className="text-primary bg-primary/10 p-5 rounded-full">
            <Pill className="h-12 w-12" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold">In-Store Pet Pharmacy</h2>
            <p className="text-lg text-foreground/80 mt-2">
              For your convenience, Pet's Need has an in-store pharmacy stocking essential veterinary medicines, supplements, and health products. From flea & tick prevention to prescription diets, we provide authentic products to support your pet's health. Prescription medications are dispensed by our vets or with a valid prescription.
            </p>
          </div>
        </AnimatedSection>

        {/* Why Shop Here */}
        <AnimatedSection as="section" className="mt-16 md:mt-24">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Why Shop at Pet's Need?</h2>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {whyShopReasons.map(reason => (
                    <div key={reason} className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-lg">{reason}</span>
                    </div>
                ))}
            </div>
        </AnimatedSection>

        {/* FAQs */}
        <AnimatedSection as="section" className="mt-16 md:mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Products & Pharmacy FAQ</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-foreground/70">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
        </AnimatedSection>
        
        {/* CTA */}
        <AnimatedSection as="section" className="mt-16 md:mt-24 text-center max-w-3xl mx-auto p-8 rounded-2xl gradient-background text-white">
            <h2 className="text-3xl font-bold">Visit Our Store to Explore Our Full Range!</h2>
            <p className="mt-4 mb-6">We stock hundreds of items beyond what's listed here. Come browse our complete selection at 10/1D Diamond Harbour Road, Alipore, Kolkata. Open daily 10 AM to 10 PM!</p>
            <Button asChild size="lg" variant="secondary" className="font-button bg-white text-primary hover:bg-white/90"><a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer">Get Store Directions</a></Button>
        </AnimatedSection>

      </PageShell>
    </>
  );
}
