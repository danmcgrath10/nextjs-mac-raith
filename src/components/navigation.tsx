"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Rocket, User, Briefcase, Music, MessageCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "About", href: "#about", icon: User },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Portfolio", href: "#portfolio", icon: Music },
  { name: "Contact", href: "#contact", icon: MessageCircle },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  // Track active section
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen) {
        const target = event.target as Element;
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.contains(target)) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="stars"></div>
      
      {/* Desktop Navigation - Only visible on desktop */}
      <header className="hidden lg:block fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
              <div className="relative w-12 h-12 spaceman-glow float-spaceman">
                <Image
                  src="/MacRaithSpaceMan-NoBackground.png"
                  alt="Mac Raith Spaceman"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground">Mac Raith</span>
                <span className="text-xs text-primary font-medium">Audio Engineer</span>
              </div>
            </Link>
          </div>
          
          <div className="flex gap-x-8 xl:gap-x-12">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors relative group py-2",
                  activeSection === item.href 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                  activeSection === item.href ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </button>
            ))}
          </div>
          
          <div className="flex flex-1 justify-end">
            <Button 
              onClick={() => scrollToSection("#contact")} 
              className="ml-4 relative group"
              size="default"
            >
              <Rocket className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-out",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Navigation Panel */}
        <div 
          id="mobile-menu"
          className={cn(
            "absolute inset-x-4 top-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-md rounded-3xl shadow-2xl border border-border transition-all duration-500 ease-out transform max-h-[80vh] overflow-y-auto",
            mobileMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 spaceman-glow float-spaceman">
                <Image
                  src="/MacRaithSpaceMan-NoBackground.png"
                  alt="Mac Raith Spaceman"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">Mac Raith</span>
                <span className="text-xs text-primary font-medium">Audio Engineer</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 rounded-full hover:bg-muted/50"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Navigation Items */}
          <div className="p-6 space-y-3">
            {/* Home Button */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="flex items-center space-x-4 w-full p-4 rounded-2xl transition-all duration-200 hover:bg-muted/50 text-foreground touch-manipulation"
            >
              <div className="p-2 rounded-xl bg-muted/50">
                <Home className="h-5 w-5 text-muted-foreground" />
              </div>
              <span className="text-base font-semibold">Home</span>
            </button>

            {/* Main Navigation */}
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "flex items-center space-x-4 w-full p-4 rounded-2xl transition-all duration-200 touch-manipulation",
                    isActive 
                      ? "bg-primary/10 text-primary border border-primary/20" 
                      : "hover:bg-muted/50 text-foreground"
                  )}
                >
                  <div className={cn(
                    "p-2 rounded-xl",
                    isActive ? "bg-primary/20" : "bg-muted/50"
                  )}>
                    <Icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-muted-foreground")} />
                  </div>
                  <span className="text-base font-semibold">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="p-6 pt-0">
            <Button 
              onClick={() => scrollToSection("#contact")} 
              className="w-full py-4 text-base rounded-2xl group bg-primary hover:bg-primary/90"
              size="lg"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Start Your Project
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile FAB (Floating Action Button) - Always visible on mobile, never scrolls */}
      <Button
        onClick={() => setMobileMenuOpen(true)}
        className={cn(
          "lg:hidden fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-2xl transition-all duration-300 ease-out",
          "bg-primary hover:bg-primary/90 hover:scale-110 active:scale-95",
          mobileMenuOpen && "scale-0 opacity-0 pointer-events-none"
        )}
        size="icon"
        aria-label="Open navigation menu"
      >
        <Menu className="h-6 w-6" />
      </Button>
    </>
  );
} 