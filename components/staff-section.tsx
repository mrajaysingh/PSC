'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Mail, Phone } from 'lucide-react';

export function StaffSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Excellent Staff</h2>
          <p className="text-lg text-muted-foreground">
            Meet our dedicated team of educators shaping futures at PSC Classes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative sticky top-24"
          >
            <Card className="overflow-hidden">
              <img
                src="/staff/Vandana-shukla.jpg"
                alt="Vandana Shukla"
                className="w-full h-[500px] object-cover object-center rounded-lg shadow-lg"
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pl-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Vandana Shukla</h3>
            <div className="flex items-center gap-2 text-primary mb-4">
              <GraduationCap className="h-5 w-5" />
              <span className="font-medium">BCA, MCA</span>
            </div>
            
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                A dedicated educator with expertise in computer science and technology. With her strong academic background in BCA and MCA, Vandana brings extensive knowledge and practical experience to the classroom.
              </p>
              <p>
                Her teaching methodology focuses on combining theoretical concepts with hands-on practical applications, ensuring students develop both understanding and practical skills. She specializes in programming fundamentals, web development, and computer applications.
              </p>
              <p>
                Known for her patient and thorough approach to teaching, she ensures every student grasps the concepts completely. Her students consistently achieve excellent results through her personalized attention and comprehensive teaching methods.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>vandana.shukla@pscclasses.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>Contact Administration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 