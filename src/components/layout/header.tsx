"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, MessageCircle, Phone } from "lucide-react"

import { navItems, siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PawPrint } from "../icons"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 bg-background/80 backdrop-blur-sm shadow-md h-20"
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-semibold">
          <PawPrint className="h-6 w-6 text-primary" />
          <span>Pet's Need</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-bold text-foreground/80 transition-colors hover:text-primary",
                pathname === item.href && "text-primary"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </a>
          </Button>
          <Button asChild size="sm" className="font-button">
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <SheetHeader className="mb-8">
                 <SheetTitle>
                  <Link href="/" className="flex items-center gap-2 text-xl font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                    <PawPrint className="h-6 w-6 text-primary" />
                    <span>Pet's Need</span>
                  </Link>
                 </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-lg font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary",
                      pathname === item.href && "text-primary bg-primary/10"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t">
                 <Button asChild size="lg" className="w-full font-button">
                    <a href={`tel:${siteConfig.phone}`}>
                      <Phone className="h-5 w-5 mr-3" />
                      Call Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full mt-4">
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 mr-3" />
                      WhatsApp
                    </a>
                  </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
