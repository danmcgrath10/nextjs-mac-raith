"use client";
import Link from "next/link";
import Image from "next/image";
import { Rocket, Instagram, Youtube, Mail, Satellite } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/mac_raith/",
        icon: Instagram,
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/@macraithofficial",
        icon: Youtube,
      },
      {
        name: "Email",
        href: "mailto:collab@macraithmusic.com",
        icon: Mail,
      },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border relative">
      {/* Space Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-primary/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-1/3 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 xl:py-32 relative">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 sm:space-y-8">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 spaceman-glow">
                <Image
                  src="/MacRaithSpaceMan-NoBackground.png"
                  alt="Mac Raith Spaceman"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl text-foreground">Mac Raith</span>
                <span className="text-xs sm:text-sm text-primary font-medium">Audio Engineer</span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-muted-foreground max-w-md">
              Fresh perspective meets focused expertise. Passionate audio engineer bringing 
              modern techniques and innovative approaches to mixing and mastering. 
              Dedicated to elevating your music with competitive rates and personalized attention.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground flex items-center">
                  <Satellite className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-1 sm:mr-2" />
                  Navigation
                </h3>
                <ul role="list" className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="text-xs sm:text-sm leading-6 text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground flex items-center">
                  <Rocket className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-1 sm:mr-2" />
                  Contact Details
                </h3>
                <ul role="list" className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  <li>
                    <span className="text-xs sm:text-sm leading-6 text-muted-foreground">
                      Location: Boston, MA
                    </span>
                  </li>
                  <li>
                    <span className="text-xs sm:text-sm leading-6 text-muted-foreground">
                      Response: 24 Hour Turnaround
                    </span>
                  </li>
                  <li>
                    <a
                      href="mailto:collab@macraithmusic.com"
                      className="text-xs sm:text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                    >
                      Email: collab@macraithmusic.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 sm:flex-row">
            <div className="flex items-center space-x-4">
              <p className="text-xs leading-5 text-muted-foreground text-center sm:text-left">
                &copy; {currentYear} Mac Raith, LLC. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 