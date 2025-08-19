'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScheduleMeetingDialog } from '@/components/schedule-meeting-dialog';

export function FounderSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-card shadow-lg">
              <img
                src="/founder.png"
                alt="Akhilesh Kumar Panday - Founder of PSC Classes"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pl-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Meet Our Founder</h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Akhilesh Kumar Panday</h3>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience in education and technology, Akhilesh Kumar Panday founded PSC Classes with a vision to transform the way people learn and grow. His innovative approach to education combines traditional teaching methods with cutting-edge technology, making quality education accessible to everyone.
            </p>
            <p className="text-muted-foreground mb-8">
              Under his leadership, PSC Classes has helped thousands of students achieve their career goals through comprehensive courses, personalized mentoring, and industry-relevant training programs.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919453257979" className="hover:text-primary transition-colors">+91 94532 57979</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="h-5 w-5 text-primary" />
                <a href="https://wa.me/919453257979" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp: +91 94532 57979</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:adpanday@pscclasses.com" className="hover:text-primary transition-colors">adpanday@pscclasses.com</a>
              </div>
            </div>

            <div className="mt-8">
              <ScheduleMeetingDialog />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}