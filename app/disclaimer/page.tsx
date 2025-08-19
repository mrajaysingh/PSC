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
    content: `This disclaimer outlines important information about your use of PSC Classes' services and website. By accessing or using our services, you acknowledge and agree to the terms of this disclaimer.`
  },
  {
    id: 'accuracy',
    title: '2. Information Accuracy',
    content: 'Regarding the accuracy of information provided:',
    list: [
      'Content is provided "as is" without warranties',
      'We strive for accuracy but cannot guarantee it',
      'Information may be updated without notice',
      'Users should verify critical information independently'
    ]
  },
  {
    id: 'educational',
    title: '3. Educational Purpose',
    content: 'Our educational services disclaimer:',
    list: [
      'Results may vary based on individual effort',
      'Success depends on multiple factors',
      'Past performance does not guarantee future results',
      'Individual dedication is essential for achievement'
    ]
  },
  {
    id: 'liability',
    title: '4. Limitation of Liability',
    content: 'PSC Classes is not liable for:',
    list: [
      'Individual academic performance outcomes',
      'Technical issues or service interruptions',
      'Third-party content or services',
      'Personal decisions based on provided information'
    ]
  },
  {
    id: 'third-party',
    title: '5. Third-Party Content',
    content: 'Regarding external content and links:',
    list: [
      'We do not endorse third-party content',
      'External links are provided for convenience',
      'We are not responsible for external content',
      'Users access external content at their own risk'
    ]
  },
  {
    id: 'intellectual-property',
    title: '6. Intellectual Property',
    content: 'Regarding our content and materials:',
    list: [
      'All materials are protected by copyright',
      'Unauthorized use is strictly prohibited',
      'Trademarks and logos are our property',
      'Content sharing requires written permission'
    ]
  },
  {
    id: 'medical',
    title: '7. Medical Disclaimer',
    content: 'For health-related matters:',
    list: [
      'We are not medical professionals',
      'Content is not medical advice',
      'Consult healthcare providers for medical issues',
      'Emergency situations require immediate medical attention'
    ]
  },
  {
    id: 'professional',
    title: '8. Professional Advice',
    content: 'Our content should not be considered as professional advice:',
    list: [
      'Not a substitute for professional consultation',
      'Seek appropriate expert guidance',
      'Individual circumstances may vary',
      'Verify information with qualified professionals'
    ]
  },
  {
    id: 'changes',
    title: '9. Changes to Disclaimer',
    content: 'We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on our website.'
  },
  {
    id: 'contact',
    title: '10. Contact Information',
    content: 'For questions about this disclaimer, contact us at:',
    list: [
      'Email: legal@pscclasses.com',
      'Phone: +91 94532 57979',
      'Address: PSC Classes, Shankargarh, Uttar Pradesh, India - 212108',
      'Office Hours: Monday to Saturday, 9:00 AM to 6:00 PM'
    ]
  }
];

export default function DisclaimerPage() {
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
                Disclaimer
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