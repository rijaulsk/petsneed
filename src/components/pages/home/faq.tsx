import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { homeFaqs } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";

type FaqCategory = keyof typeof homeFaqs;

export function Faq() {
  const categories = Object.keys(homeFaqs) as FaqCategory[];
  
  return (
    <AnimatedSection as="section" id="faq" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection as="div" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        </AnimatedSection>
        
        <Tabs defaultValue="General" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-8">
            {categories.map(category => (
               <TabsTrigger key={category} value={category} className="py-2">{category}</TabsTrigger>
            ))}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <Accordion type="single" collapsible className="w-full">
                {homeFaqs[category].map((faq, index) => (
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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </AnimatedSection>
  );
}
