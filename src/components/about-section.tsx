"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Satellite, Zap, Radio, Star, Music, Headphones } from "lucide-react";
import { useState, useEffect } from "react";

export function AboutSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: {
    quote: string;
    author: string;
    role: string;
    genre: string;
    rating: number;
    icon: React.ElementType;
  }[] = [
    // {
    //   quote: "Mac brought incredible energy and fresh perspective to my track. The mix sounds exactly how I envisioned it - modern, punchy, and professional.",
    //   author: "Sarah Chen",
    //   role: "Singer-Songwriter",
    //   genre: "Indie Pop",
    //   rating: 5,
    //   icon: Music
    // }, 
  ];

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

  // Auto-scroll testimonials
  useEffect(() => {
    // Start from the middle set to allow smooth infinite scrolling
    setCurrentTestimonial(testimonials.length);
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const next = prev + 1;
        // Reset to middle when we reach the end to maintain infinite scroll
        if (next >= testimonials.length * 2) {
          return testimonials.length;
        }
        return next;
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

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
            {/* Testimonials Carousel Container */}
            <div className="relative h-96 sm:h-[28rem] overflow-hidden rounded-2xl">
              {/* Scrolling Container */}
              <motion.div
                animate={{
                  y: -currentTestimonial * 120 // Adjust spacing between cards
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                className="space-y-4"
              >
                {/* Render testimonials multiple times for infinite scroll effect */}
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => {
                  const actualIndex = index % testimonials.length;
                  const position = index - currentTestimonial;
                  const isVisible = Math.abs(position) <= 2; // Show 2 cards above and below
                  
                  // Calculate opacity and scale based on position
                  let opacity = 1;
                  let scale = 1;
                  
                  if (position === 0) {
                    // Center card - fully visible
                    opacity = 1;
                    scale = 1;
                  } else if (Math.abs(position) === 1) {
                    // Adjacent cards - slightly faded
                    opacity = 0.7;
                    scale = 0.95;
                  } else if (Math.abs(position) === 2) {
                    // Far cards - more faded
                    opacity = 0.4;
                    scale = 0.9;
                  } else {
                    // Hidden cards
                    opacity = 0;
                    scale = 0.8;
                  }
                  
                  return (
                    <motion.figure
                      key={`${actualIndex}-${Math.floor(index / testimonials.length)}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isVisible ? opacity : 0,
                        scale: scale,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`border border-border rounded-xl bg-background p-3 sm:p-4 relative overflow-hidden h-28 sm:h-32 ${
                        position === 0 
                          ? 'shadow-lg shadow-primary/10 border-primary/20' 
                          : 'shadow-sm'
                      }`}
                    >
                      {/* Floating Spaceman */}
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8">
                        <Image
                          src="/MacRaithSpaceMan-NoBackground.png"
                          alt="Mac Raith Spaceman"
                          fill
                          className="object-contain float-spaceman opacity-20"
                        />
                      </div>
                      
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <blockquote className="text-xs sm:text-sm font-medium leading-4 sm:leading-5 tracking-tight text-foreground mb-2 line-clamp-2">
                        <p>&ldquo;{testimonial.quote}&rdquo;</p>
                      </blockquote>
                      
                      <figcaption className="flex gap-x-2 items-center">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <testimonial.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                        </div>
                        <div className="text-xs leading-4 min-w-0">
                          <div className="font-semibold text-foreground truncate">{testimonial.author}</div>
                          <div className="text-muted-foreground truncate">{testimonial.role} • <span className="text-primary font-medium">{testimonial.genre}</span></div>
                        </div>
                      </figcaption>
                    </motion.figure>
                  );
                })}
              </motion.div>
              
              {/* Gradient Overlays for smooth fade effect */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-muted/30 to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-muted/30 to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Progress Indicator
            <div className="flex justify-center gap-1.5 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index + testimonials.length)} // Offset to middle set
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    (currentTestimonial % testimonials.length) === index
                      ? 'bg-primary w-4 sm:w-5' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div> */}

            {/* Auto-scroll indicator
            <div className="text-center mt-3">
              <span className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                Auto-scrolling testimonials
              </span>
            </div> */}
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