import { Hero } from "@/components/pages/home/hero";
import { TrustBar } from "@/components/pages/home/trust-bar";
import { Services } from "@/components/pages/home/services";
import { WhyUs } from "@/components/pages/home/why-us";
import { Testimonials } from "@/components/pages/home/testimonials";
import { ProductPreview } from "@/components/pages/home/product-preview";
import { Faq } from "@/components/pages/home/faq";
import { Cta } from "@/components/pages/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Testimonials />
      <ProductPreview />
      <Faq />
      <Cta />
    </>
  );
}
