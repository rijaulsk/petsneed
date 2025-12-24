import Link from 'next/link';
import { PawPrint, Facebook } from '../icons';
import { siteConfig, footerLinks } from '@/lib/data';
import { Phone, MessageCircle, Mail, MapPin, Clock, Star, ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

export function Footer() {
  return (
    <footer class="bg-dark-teal text-background/80 overflow-hidden">
      <AnimatedSection as="div" class="container mx-auto section-padding">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Branding */}
          <div class="space-y-4">
            <Link href="/" class="flex items-center gap-2 font-headline text-2xl font-semibold text-white">
              <PawPrint class="h-7 w-7 text-primary" />
              <span>Pet's Need</span>
            </Link>
            <p class="text-sm">
              All the love, all the care.
              <br />
              Your pet's happy place in Alipore, Kolkata.
            </p>
            <div class="flex items-center gap-4">
              <a href="https://www.facebook.com/petsneedkolkata/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" class="text-white hover:text-primary transition-colors">
                <Facebook class="h-6 w-6" />
              </a>
              <div class="flex items-center gap-2 rounded-lg bg-white/10 p-2 text-sm text-white">
                <Star class="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <strong>5.0</strong>
                <span>• 242+ Happy Reviews</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div class="space-y-4">
            <h3 class="font-headline text-lg font-semibold text-white">Quick Links</h3>
            <ul class="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} class="text-sm hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div class="space-y-4">
            <h3 class="font-headline text-lg font-semibold text-white">Our Services</h3>
            <ul class="space-y-2">
              {footerLinks.ourServices.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} class="text-sm hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div class="space-y-4">
            <h3 class="font-headline text-lg font-semibold text-white">Get in Touch</h3>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start gap-3">
                <Phone class="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} class="hover:text-primary transition-colors">{siteConfig.phone}</a>
              </li>
              <li class="flex items-start gap-3">
                <MessageCircle class="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">WhatsApp Us</a>
              </li>
              <li class="flex items-start gap-3">
                <Mail class="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} class="hover:text-primary transition-colors">{siteConfig.email}</a>
              </li>
              <li class="flex items-start gap-3">
                <MapPin class="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">{siteConfig.address}</a>
              </li>
               <li class="flex items-start gap-3">
                <Clock class="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span>Open Daily: 10 AM - 10 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection as="div" class="border-t border-white/10 py-6">
        <div class="container mx-auto text-center text-xs text-white/60 space-y-2 md:space-y-0 md:flex justify-between items-center">
          <p>© {new Date().getFullYear()} Pet's Need. All rights reserved. | Trusted Pet Care Center in Alipore, Kolkata</p>
          <p>
            Powered by 
            <a href="https://debugswift.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold ml-1">
              Debugswift
              <ArrowUpRight class="h-3 w-3 ml-1" />
            </a>
          </p>
        </div>
      </AnimatedSection>
    </footer>
  );
}
