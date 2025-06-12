"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Satellite, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden space-gradient">
      {/* Animated Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content - Mobile First */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="block">Professional Audio</span>
                  <span className="block text-primary mt-1 lg:mt-2">Engineering</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0"
              >
                Modern techniques meet passionate dedication. I bring fresh perspective and 
                cutting-edge approaches to transform your recordings into polished, professional tracks.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-x-6"
              >
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("portfolio")}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base group"
                >
                  <Satellite className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                  Listen to My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base group"
                >
                  <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-[-2px] transition-transform" />
                  Start Your Project
                </Button>
              </motion.div>
            </div>

            {/* Spaceman Character - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <Image
                  src="/MacRaithSpaceMan-NoBackground.png"
                  alt="Mac Raith Audio Engineer"
                  fill
                  className="object-contain float-spaceman spaceman-glow"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Section - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 lg:gap-16"
          >
            <div className="text-center group">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>
              <dt className="text-xl sm:text-2xl font-bold leading-7 text-foreground">2 Years</dt>
              <dd className="text-xs sm:text-sm text-muted-foreground">Focused Experience</dd>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>
              <dt className="text-xl sm:text-2xl font-bold leading-7 text-foreground">100%</dt>
              <dd className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</dd>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Satellite className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>
              <dt className="text-xl sm:text-2xl font-bold leading-7 text-foreground">24hr</dt>
              <dd className="text-xs sm:text-sm text-muted-foreground">Response Time</dd>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
} 