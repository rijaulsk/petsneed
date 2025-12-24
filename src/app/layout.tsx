import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingCtaBar } from '@/components/layout/floating-cta-bar';
import { Fredoka, Quicksand, Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';

const DynamicSchemaMarkup = dynamic(() => import('@/components/dynamic-schema-markup'), { ssr: false });

const fredoka = Fredoka({ subsets: ['latin'], weight: ['600'], variable: '--font-fredoka' });
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand' });
const poppins = Poppins({ subsets: ['latin'], weight: ['600'], variable: '--font-poppins' });

export const metadata: Metadata = {
  metadataBase: new URL('https://petsneed.in'),
  title: {
    default: "Pet's Need | Complete Pet Care Center in Alipore, Kolkata | Grooming, Vet, Supplies",
    template: "%s | Pet's Need"
  },
  description: "Pet's Need is Alipore, Kolkata's trusted all-in-one pet care center offering professional grooming, veterinary services, and quality pet supplies for dogs, cats, and small pets. 5.0★ rated. Open daily 10 AM-10 PM. Call 9748337732.",
  keywords: ['pet care center Alipore', 'pet grooming Kolkata', 'vet clinic Alipore', 'pet shop near me', 'dog grooming Kolkata', 'cat grooming Alipore', 'pet supplies Kolkata', 'veterinary doctor Kolkata', 'pet store Diamond Harbour Road', 'pet care center South Kolkata'],
  authors: [{ name: "Pet's Need" }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://petsneed.in',
    siteName: "Pet's Need",
    title: "Pet's Need | Complete Pet Care Center in Alipore, Kolkata",
    description: "Your pet's happy place in Alipore, Kolkata! We offer expert vet care, joyful grooming, and all the supplies your best friend deserves.",
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pet's Need | Complete Pet Care Center in Alipore, Kolkata",
    description: "Your pet's happy place in Alipore, Kolkata! We offer expert vet care, joyful grooming, and all the supplies your best friend deserves.",
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#fff8f3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${quicksand.variable} ${poppins.variable} !scroll-smooth`}>
      <body className="font-body antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCtaBar />
        <Toaster />
        <DynamicSchemaMarkup />
      </body>
    </html>
  );
}
