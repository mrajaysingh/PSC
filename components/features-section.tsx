'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  BrainCircuit, 
  Calendar, 
  CreditCard, 
  GraduationCap, 
  UserCheck, 
  Users 
} from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Comprehensive Curriculum",
    description: "Access a wide range of courses designed by industry experts to provide relevant, up-to-date knowledge."
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Flexible Scheduling",
    description: "Choose between online learning and offline classes to fit your personal schedule and learning style."
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Digital Certificates",
    description: "Earn industry-recognized digital certificates upon course completion to showcase your achievements."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Easy Payment Options",
    description: "Pay your fees conveniently with multiple payment methods including UPI, QR codes, and more."
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: "Personalized Learning",
    description: "Receive individualized attention with customized learning paths tailored to your goals."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Expert Instructors",
    description: "Learn from experienced educators with real-world expertise in their respective fields."
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Hands-on Practice",
    description: "Apply your knowledge through practical exercises, projects, and real-world applications."
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Career Support",
    description: "Access career guidance, job placement assistance, and networking opportunities."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose PSC Classes ?
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We provide a complete learning experience with features designed to help you succeed
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}