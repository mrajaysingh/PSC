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
    content: `At PSC Classes, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our services.`
  },
  {
    id: 'information-collection',
    title: '2. Information We Collect',
    content: 'We collect information that you provide directly to us, including:',
    list: [
      'Personal identification information (Name, email address, phone number)',
      'Educational background and academic records',
      'Payment information and transaction history',
      'Communication preferences and course selections',
      'Feedback, survey responses, and testimonials'
    ]
  },
  {
    id: 'information-use',
    title: '3. How We Use Your Information',
    content: 'We use the information we collect for various purposes, including:',
    list: [
      'Providing and maintaining our educational services',
      'Processing your enrollment and payments',
      'Sending important notifications about your courses',
      'Improving our teaching methods and course content',
      'Communicating with you about updates and promotions'
    ]
  },
  {
    id: 'information-sharing',
    title: '4. Information Sharing',
    content: 'We may share your information with:',
    list: [
      'Course instructors and educational staff',
      'Payment processors and financial institutions',
      'Technology service providers and analytics tools',
      'Government authorities when required by law',
      'Educational partners for certification purposes'
    ]
  },
  {
    id: 'data-security',
    title: '5. Data Security',
    content: 'We implement security measures to protect your information, including:',
    list: [
      'Encryption of sensitive data',
      'Regular security assessments and updates',
      'Restricted access to personal information',
      'Secure data storage and backup systems',
      'Employee training on data protection'
    ]
  },
  {
    id: 'user-rights',
    title: '6. Your Rights',
    content: 'You have certain rights regarding your personal information:',
    list: [
      'Access your personal information',
      'Request corrections to inaccurate data',
      'Delete your information (subject to legal requirements)',
      'Opt-out of marketing communications',
      'Request data portability'
    ]
  },
  {
    id: 'cookies',
    title: '7. Cookies and Tracking',
    content: 'We use cookies and similar tracking technologies to:',
    list: [
      'Remember your preferences and settings',
      'Analyze website traffic and usage patterns',
      'Improve website performance and user experience',
      'Provide personalized content and recommendations'
    ]
  },
  {
    id: 'children-privacy',
    title: '8. Children\'s Privacy',
    content: 'We are committed to protecting children\'s privacy. Our services are intended for users who are at least 13 years old. For students under 13, we require parental consent and implement additional safeguards to protect their information.'
  },
  {
    id: 'updates',
    title: '9. Updates to Privacy Policy',
    content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website and updating the "Last Updated" date. Continued use of our services after changes indicates your acceptance of the updated policy.'
  },
  {
    id: 'contact',
    title: '10. Contact Us',
    content: 'If you have questions or concerns about our Privacy Policy, please contact us at:',
    list: [
      'Email: privacy@pscclasses.com',
      'Phone: +91 94532 57979',
      'Address: PSC Classes, Shankargarh, Uttar Pradesh, India - 212108'
    ]
  }
];

export default function PrivacyPage() {
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
                Privacy Policy
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