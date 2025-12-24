"use client";

import { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { siteConfig } from '@/lib/data';
import { cn } from '@/lib/utils';

export function FloatingCtaBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        "lg:hidden fixed bottom-0 left-0 right-0 z-30 h-16 bg-background/80 backdrop-blur-sm p-2 transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
      style={{ boxShadow: '0 -4px 12px rgba(0,0,0,0.08)' }}
    >
      <div className="container mx-auto h-full flex items-center justify-center gap-2">
        <Button asChild size="lg" className="flex-1 font-button text-white">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg" className="flex-1 font-button bg-green-100 text-green-800 hover:bg-green-200">
           <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
