"use client";

import { motion } from "framer-motion";
import { Sliders, Volume2, Rocket, Clock, Check, Satellite } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Service } from "@/types";

const services: Service[] = [
  {
    id: "mixing",
    title: "Professional Mixing",
    description: "Transform your raw recordings into polished, balanced tracks that translate perfectly across all playback systems.",
    features: [
      "Professional mixing up to 48 stems",
      "2 revisions included",
      "High-quality digital delivery",
      "Detailed notes and feedback",
      "48-72 hour turnaround"
    ],
    price: "Starting at $150",
    duration: "2-3 days"
  },
  {
    id: "mastering",
    title: "Audio Mastering",
    description: "Final polish and optimization for streaming platforms, radio, and physical media distribution.",
    features: [
      "Professional mastering services",
      "Multi-format delivery",
      "1 revision included",
      "DDP & digital delivery",
      "24-48 hour completion"
    ],
    price: "Starting at $75",
    duration: "1-2 days"
  },
  {
    id: "full-production",
    title: "Full Production",
    description: "Complete song production from arrangement to final master, including session musicians and additional instrumentation.",
    features: [
      "Arrangement & production",
      "Session musician coordination",
      "Mixing & mastering included",
      "Unlimited revisions",
      "Custom timeline"
    ],
    price: "Contact for Quote",
    duration: "1-4 weeks"
  }
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 relative">
      {/* Space Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-24 h-24 sm:w-40 sm:h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-32 h-32 sm:w-60 sm:h-60 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Professional Audio Services
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
            From raw recordings to radio-ready masters, I offer comprehensive 
            audio engineering services tailored to your artistic vision and budget.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-border bg-background p-6 sm:p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
            >
              {/* Floating background spaceman */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="w-full h-full bg-primary rounded-full"></div>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  {service.id === "mixing" && <Sliders className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />}
                  {service.id === "mastering" && <Volume2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />}
                  {service.id === "full-production" && <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    {service.price}
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full group-hover:bg-primary/90 transition-colors relative group text-sm sm:text-base py-2 sm:py-3"
                  size="default"
                >
                  <Satellite className="mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:rotate-12 transition-transform" />
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center justify-center">
              <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
              Custom Packages Available
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Every project is unique. I offer flexible package deals 
              combining multiple services at discounted rates for EPs, albums, and ongoing 
              collaborations.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="px-6 sm:px-8 group text-sm sm:text-base"
            >
              <Satellite className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Discuss Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 