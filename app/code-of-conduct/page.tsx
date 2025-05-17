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
    content: `Our Code of Conduct outlines the expectations and standards of behavior for all members of the PSC Classes community, including students, faculty, staff, and visitors. This code ensures a safe, respectful, and productive learning environment.`
  },
  {
    id: 'core-values',
    title: '2. Core Values',
    content: 'Our community is built on these fundamental values:',
    list: [
      'Respect for all individuals regardless of background',
      'Academic integrity and honesty',
      'Professional conduct and responsibility',
      'Commitment to excellence in education'
    ]
  },
  {
    id: 'academic-integrity',
    title: '3. Academic Integrity',
    content: 'All members must maintain high standards of academic integrity:',
    list: [
      'No cheating or plagiarism in any form',
      'Proper citation of sources and references',
      'Independent completion of assignments',
      'Honest representation of academic work'
    ]
  },
  {
    id: 'behavior',
    title: '4. Expected Behavior',
    content: 'All community members are expected to:',
    list: [
      'Treat others with respect and courtesy',
      'Maintain professional conduct in all interactions',
      'Follow classroom and institutional rules',
      'Contribute to a positive learning environment'
    ]
  },
  {
    id: 'prohibited',
    title: '5. Prohibited Conduct',
    content: 'The following behaviors are strictly prohibited:',
    list: [
      'Discrimination or harassment of any kind',
      'Disruptive behavior in classrooms',
      'Damage to institution property',
      'Violence or threats of violence'
    ]
  },
  {
    id: 'digital',
    title: '6. Digital Conduct',
    content: 'Guidelines for online behavior:',
    list: [
      'Respectful communication in digital spaces',
      'Proper use of institutional technology',
      'Protection of privacy and confidentiality',
      'Responsible social media usage'
    ]
  },
  {
    id: 'reporting',
    title: '7. Reporting Violations',
    content: 'Process for reporting code violations:',
    list: [
      'Report incidents to appropriate authorities',
      'Maintain confidentiality of reports',
      'Cooperate with investigations',
      'Protection against retaliation'
    ]
  },
  {
    id: 'consequences',
    title: '8. Consequences',
    content: 'Violations may result in:',
    list: [
      'Verbal or written warnings',
      'Disciplinary probation',
      'Suspension from classes',
      'Termination of enrollment'
    ]
  },
  {
    id: 'amendments',
    title: '9. Amendments',
    content: 'PSC Classes reserves the right to modify this Code of Conduct. Changes will be communicated to all members and posted on our website.'
  },
  {
    id: 'contact',
    title: '10. Contact Information',
    content: 'For questions about the Code of Conduct, contact:',
    list: [
      'Email: conduct@pscclasses.com',
      'Phone: +91 94532 57979',
      'Address: PSC Classes, Shankargarh, Uttar Pradesh, India - 212108',
      'Office Hours: Monday to Saturday, 9:00 AM to 6:00 PM'
    ]
  }
];

export default function CodeOfConductPage() {
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
                Code of Conduct
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