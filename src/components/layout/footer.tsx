import Link from 'next/link';
import { PawPrint, Facebook } from '../icons';
import { siteConfig, footerLinks } from '@/lib/data';
import { Phone, MessageCircle, Mail, MapPin, Clock, Star, ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

export function Footer() {
  return (
    <footer className="bg-dark-teal text-background/80 overflow-hidden">
      <AnimatedSection as="div" className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-semibold text-white">
              <PawPrint className="h-7 w-7 text-primary" />
              <span>Pet's Need</span>
            </Link>
            <p className="text-sm">
              All the love, all the care.
              <br />
              Your pet's happy place in Alipore, Kolkata.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/petsneedkolkata/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <div className="flex items-center gap-2 rounded-lg bg-white/10 p-2 text-sm text-white">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <strong>5.0</strong>
                <span>• 242+ Happy Reviews</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.ourServices.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold text-white">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{siteConfig.address}</a>
              </li>
               <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span>Open Daily: 10 AM - 10 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection as="div" className="border-t border-white/10 py-6">
        <div className="container mx-auto text-center text-xs text-white/60 space-y-2 md:space-y-0 md:flex justify-between items-center">
          <p>© {new Date().getFullYear()} Pet's Need. All rights reserved. | Trusted Pet Care Center in Alipore, Kolkata</p>
          <p>
            Powered by 
            <a href="https://debugswift.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold ml-1">
              Debugswift
              <ArrowUpRight className="h-3 w-3 ml-1" />
            </a>
          </p>
        </div>
      </AnimatedSection>
    </footer>
  );
}
