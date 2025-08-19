'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: `At PSC Classes, we strive to ensure complete satisfaction with our educational services. This Refund Policy outlines the terms and conditions for refunds and cancellations. Please read this policy carefully before enrolling in any of our courses.`
  },
  {
    id: 'eligibility',
    title: '2. Refund Eligibility',
    content: 'Our refund policy is based on the following criteria:',
    list: [
      'Full refund within 7 days of enrollment if no classes attended',
      'Partial refund if withdrawal within first month of course',
      'Pro-rated refund based on course completion percentage',
      'No refund for completed courses or after course completion'
    ]
  },
  {
    id: 'process',
    title: '3. Refund Process',
    content: 'To request a refund, please follow these steps:',
    list: [
      'Submit a written refund request to our administration',
      'Include your enrollment details and reason for refund',
      'Provide necessary documentation if applicable',
      'Allow 7-14 business days for processing'
    ]
  },
  {
    id: 'calculation',
    title: '4. Refund Calculation',
    content: 'Refund amounts are calculated based on:',
    list: [
      'Course duration and completion percentage',
      'Administrative and material costs deducted',
      'Payment method and processing fees',
      'Timing of withdrawal request'
    ]
  },
  {
    id: 'exceptions',
    title: '5. Non-Refundable Items',
    content: 'The following items are non-refundable:',
    list: [
      'Registration fees and admission charges',
      'Study materials and course supplies',
      'Online access credentials and digital resources',
      'Examination fees and certification charges'
    ]
  },
  {
    id: 'cancellation',
    title: '6. Course Cancellation',
    content: 'In the event of course cancellation by PSC Classes:',
    list: [
      'Full refund of course fees',
      'Option to transfer to another course',
      'Compensation for unused services',
      'Immediate processing of refunds'
    ]
  },
  {
    id: 'payment',
    title: '7. Refund Payment Methods',
    content: 'Refunds will be processed through:',
    list: [
      'Original payment method when possible',
      'Bank transfer for cash payments',
      'Digital payment platforms as applicable',
      'Cheque payment if requested'
    ]
  },
  {
    id: 'disputes',
    title: '8. Dispute Resolution',
    content: 'In case of refund disputes:',
    list: [
      'Contact our administration department',
      'Provide all relevant documentation',
      'Allow up to 30 days for resolution',
      'Option for mediation if needed'
    ]
  },
  {
    id: 'updates',
    title: '9. Policy Updates',
    content: 'We reserve the right to modify this refund policy. Any changes will be communicated through our website and direct notification to enrolled students.'
  },
  {
    id: 'contact',
    title: '10. Contact Information',
    content: 'For refund-related queries, please contact us at:',
    list: [
      'Email: refunds@pscclasses.com',
      'Phone: +91 94532 57979',
      'Address: PSC Classes, Shankargarh, Uttar Pradesh, India - 212108',
      'Office Hours: Monday to Saturday, 9:00 AM to 6:00 PM'
    ]
  }
];

export default function RefundPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Refund Policy
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Last updated: March 2024
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content Section with Table of Contents */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents - Fixed on Desktop */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-1"
              >
                <div className="lg:sticky lg:top-24">
                  <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
                    <nav className="space-y-2">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors hover:bg-primary/10 ${
                            activeSection === section.id ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground'
                          }`}
                        >
                          {section.title}
                        </button>
                      ))}
                    </nav>
                  </Card>
                </div>
              </motion.div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <h2 className="text-2xl font-semibold mb-4 text-primary">{section.title}</h2>
                      <p className="text-muted-foreground mb-4">{section.content}</p>
                      {section.list && (
                        <ul className="space-y-2">
                          {section.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollTop ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8"
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-lg"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      </main>
      <Footer />
    </>
  );
} 