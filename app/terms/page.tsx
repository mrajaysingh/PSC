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
    content: `Welcome to PSC Classes. These terms and conditions outline the rules and regulations for the use of our services.
    By accessing our website and using our services, you accept these terms and conditions in full. 
    Do not continue to use PSC Classes' services if you do not accept all of the terms and conditions stated on this page.`
  },
  {
    id: 'services',
    title: '2. Services',
    content: 'PSC Classes provides educational services including but not limited to:',
    list: [
      'Technical courses and training programs',
      'Language and communication skills development',
      'Professional development courses',
      'Online and offline learning resources',
      'Certification programs'
    ]
  },
  {
    id: 'registration',
    title: '3. Course Registration and Payment',
    content: 'By enrolling in our courses, you agree to:',
    list: [
      'Provide accurate and complete registration information',
      'Pay all fees and charges associated with your chosen course',
      'Complete payment before accessing course materials',
      'Accept our refund policy terms'
    ]
  },
  {
    id: 'responsibilities',
    title: '4. Student Responsibilities',
    content: 'As a student, you are responsible for:',
    list: [
      'Maintaining regular attendance in enrolled courses',
      'Completing assigned coursework and assessments',
      'Following the code of conduct',
      'Respecting intellectual property rights',
      'Maintaining academic integrity'
    ]
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property',
    content: 'All course materials, including but not limited to text, graphics, videos, and study materials, are the property of PSC Classes and are protected by copyright laws. Students may not:',
    list: [
      'Share or distribute course materials',
      'Record classes without permission',
      'Use materials for commercial purposes',
      'Modify or create derivative works'
    ]
  },
  {
    id: 'refund',
    title: '6. Refund Policy',
    content: 'Our refund policy includes:',
    list: [
      'Full refund within 7 days of enrollment if no classes attended',
      'Partial refund based on course completion percentage',
      'No refund for completed courses',
      'Processing time of 7-14 business days for refunds'
    ]
  },
  {
    id: 'conduct',
    title: '7. Code of Conduct',
    content: 'Students must:',
    list: [
      'Behave respectfully towards staff and fellow students',
      'Follow classroom and facility rules',
      'Maintain academic honesty',
      'Use facilities and resources responsibly'
    ]
  },
  {
    id: 'privacy',
    title: '8. Privacy Policy',
    content: 'We are committed to protecting your privacy. Our privacy policy details how we collect, use, and protect your personal information. For complete information, please refer to our Privacy Policy page.'
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability',
    content: 'PSC Classes shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:',
    list: [
      'Use or inability to use our services',
      'Any unauthorized access to your personal information',
      'Any interruption or cessation of transmission to or from our services',
      'Any bugs, viruses, or other harmful components'
    ]
  },
  {
    id: 'changes',
    title: '10. Changes to Terms',
    content: 'We reserve the right to modify these terms at any time. We will notify students of any changes by posting the new terms on our website. Continued use of our services after changes constitutes acceptance of the new terms.'
  },
  {
    id: 'contact',
    title: '11. Contact Information',
    content: 'If you have any questions about these Terms & Conditions, please contact us at:',
    list: [
      'Email: legal@pscclasses.com',
      'Phone: +91 (555) 123-4567',
      'Address: 123 Education Street, Learning District, ED 54321'
    ]
  }
];

export default function TermsPage() {
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
      const offset = 80; // Adjust based on your header height
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
                Terms & Conditions
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