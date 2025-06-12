"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Satellite, Zap, Radio } from "lucide-react";

export function AboutSection() {
  const achievements = [
    {
      icon: Rocket,
      title: "Fresh Perspective",
      description: "Modern approach with cutting-edge techniques and trends"
    },
    {
      icon: Satellite,
      title: "2 Years Experience",
      description: "Focused expertise with passionate dedication to craft"
    },
    {
      icon: Zap,
      title: "Multi-Genre Expertise",
      description: "Hip Hop, Indie, Pop, and more"
    },
    {
      icon: Radio,
      title: "State-of-the-Art Home Studio",
      description: "Latest industry-standard equipment and software"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-muted/30 relative">
      {/* Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 sm:w-48 sm:h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              About Mac Raith
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
              Fresh energy meets focused expertise. I&apos;m Mac Raith, a passionate audio engineer 
              who brings modern techniques and an innovative approach to every project.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 sm:gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12 lg:gap-x-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:order-last lg:col-span-5"
          >
            <figure className="border border-border rounded-2xl bg-background p-6 sm:p-8 relative overflow-hidden">
              {/* Floating Spaceman */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16">
                <Image
                  src="/MacRaithSpaceMan-NoBackground.png"
                  alt="Mac Raith Audio Engineer"
                  fill
                  className="object-contain float-spaceman opacity-20"
                />
              </div>
              
              <blockquote className="text-base sm:text-lg font-semibold leading-7 sm:leading-8 tracking-tight text-foreground">
                <p>
                  &ldquo;I believe the best mixes come from combining technical precision with 
                  creative passion. Every project is an opportunity to push boundaries and 
                  discover new sonic possibilities.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 sm:mt-8 flex gap-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center spaceman-glow">
                  <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-sm leading-6">
                  <div className="font-semibold text-foreground">Mac Raith</div>
                  <div className="text-muted-foreground">Audio Engineer & Artist</div>
                </div>
              </figcaption>
            </figure>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground lg:col-span-7"
          >
            <p>
              My journey in audio engineering began with an obsession for perfect sound. Over the past 
              two years, I&apos;ve immersed myself completely in the craft, working with the latest tools 
              and techniques while developing a keen ear for what makes a track truly shine.
            </p>
            <p className="mt-6 sm:mt-8">
              What I lack in decades of experience, I make up for with fresh perspective, unlimited 
              enthusiasm, and a commitment to staying current with industry trends. I approach each 
              project with meticulous attention to detail and the hunger to exceed expectations, 
              ensuring your music gets the modern, polished sound it deserves.
            </p>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-x-3 group"
                >
                  <div className="flex-none">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-12 p-4 sm:p-6 border border-primary/20 rounded-lg bg-primary/5 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 opacity-30">
                <Image
                  src="/MacRaithSpaceMan-NoBackground.png"
                  alt="Spaceman"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center">
                <Satellite className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
                Ready to Elevate Your Sound
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Accepting new projects with competitive rates and personalized attention. 
                Every track receives my full focus and creative energy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 