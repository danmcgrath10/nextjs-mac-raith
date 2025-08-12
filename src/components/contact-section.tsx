"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Rocket, Satellite, Radio, MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s\-'\.]+$/, "Name contains invalid characters"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(254, "Email address is too long"),
  projectType: z.enum(["mixing", "mastering", "both", "consultation"], {
    required_error: "Please select a project type",
  }),
  subject: z.string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z.string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be less than 2000 characters"),
  // Honeypot field - should always be empty
  website: z.string().max(0).optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [submitAttempts, setSubmitAttempts] = React.useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // Watch form values for real-time validation
  const watchedMessage = watch("message", "");
  const watchedSubject = watch("subject", "");

  const onSubmit = async (data: ContactFormData) => {
    // Rate limiting on client side
    if (submitAttempts >= 3) {
      setErrorMessage("Too many attempts. Please wait before trying again.");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

          try {
        // Remove honeypot field before sending
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { website, ...submitData } = data;
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to send message');
      }

      setSubmitStatus("success");
      setSubmitAttempts(0);
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitAttempts(prev => prev + 1);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
      {/* Space Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-20 w-24 h-24 sm:w-40 sm:h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 sm:w-60 sm:h-60 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
            Ready to take your music to the next level? Get in touch to discuss your project 
            and let&apos;s create something exceptional together.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 sm:mt-16 grid max-w-6xl grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center">
                <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                Project Details
              </h3>

              {submitStatus === "success" && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-600 text-xs sm:text-sm">
                    ✓ Message sent successfully! I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-600 text-xs sm:text-sm">
                    ⚠️ {errorMessage || "Failed to send message. Please try again or contact me directly at collab@macraithmusic.com."}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  {...register("website")}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      {...register("name")}
                      className="focus-ring h-10 sm:h-11"
                      maxLength={100}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email")}
                      className="focus-ring h-10 sm:h-11"
                      maxLength={254}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="projectType"
                    {...register("projectType")}
                    className="focus-ring h-10 sm:h-11 w-full rounded-md border border-border bg-background px-3 py-2 text-foreground text-sm sm:text-base"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option value="mixing">Mixing</option>
                    <option value="mastering">Mastering</option>
                    <option value="both">Mixing & Mastering</option>
                    <option value="consultation">Consultation</option>
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.projectType.message as string}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject <span className="text-red-500">*</span>
                    <span className="text-xs text-muted-foreground ml-2">
                      ({watchedSubject.length}/200)
                    </span>
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Project subject or title"
                    {...register("subject")}
                    className="focus-ring h-10 sm:h-11"
                    maxLength={200}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details <span className="text-red-500">*</span>
                    <span className="text-xs text-muted-foreground ml-2">
                      ({watchedMessage.length}/2000)
                    </span>
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project, vision, timeline, and any specific requirements..."
                    {...register("message")}
                    className="focus-ring resize-none min-h-[120px] sm:min-h-[140px]"
                    maxLength={2000}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full group h-10 sm:h-11 text-sm sm:text-base"
                  disabled={isSubmitting || submitAttempts >= 3}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : submitAttempts >= 3 ? (
                    "Too Many Attempts - Wait"
                  ) : (
                    <>
                      <Satellite className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
                
                {/* Security notice */}
                <p className="text-xs text-muted-foreground text-center">
                  This form is protected against spam and abuse. 
                  Your message will be reviewed before response.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:pl-4"
          >
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center">
                  <Radio className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                  Get In Touch
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Ready to start your next project? I&apos;m here to help bring your musical 
                  vision to life with professional audio engineering services.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground">Email</h4>
                    <a 
                      href="mailto:collab@macraithmusic.com"
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      collab@macraithmusic.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground">Location</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">Boston, MA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground">Response Time</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 border border-primary/20 rounded-lg bg-primary/5 relative overflow-hidden">
                <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 opacity-30">
                  <div className="w-full h-full bg-primary rounded-full"></div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center">
                  <Satellite className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
                  Quick Turnaround
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Professional results with competitive rates and fast delivery. 
                  Most projects completed within 48-72 hours.
                </p>
              </div>

              <div className="p-4 sm:p-6 border border-border rounded-lg bg-background/50">
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
                  What to Include
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li>• Project type and timeline</li>
                  <li>• Number of tracks/stems</li>
                  <li>• Reference tracks or style preferences</li>
                  <li>• Budget and delivery format</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}