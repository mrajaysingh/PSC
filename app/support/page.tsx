'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Phone,
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  BookOpen,
  HelpCircle,
  FileQuestion,
  Headphones,
  Send,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

// Support categories with their descriptions
const supportCategories = [
  {
    icon: <FileQuestion className="h-8 w-8" />,
    title: 'General Inquiries',
    description: 'Questions about our courses, admissions, or general information',
    commonQuestions: [
      'How do I enroll in a course?',
      'What are your operating hours?',
      'Where are you located?'
    ]
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Academic Support',
    description: 'Help with courses, study materials, or academic concerns',
    commonQuestions: [
      'How can I access study materials?',
      'Can I request extra help sessions?',
      'How do I track my progress?'
    ]
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: 'Technical Support',
    description: 'Assistance with online platform, login issues, or technical problems',
    commonQuestions: [
      'I cannot log into my account',
      'Video streaming issues',
      'How to reset password'
    ]
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'Feedback & Suggestions',
    description: 'Share your experience or suggest improvements',
    commonQuestions: [
      'How can I provide feedback?',
      'Where to submit suggestions?',
      'Report a concern'
    ]
  }
];

// Contact methods
const contactMethods = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Phone Support',
    details: '+91 94532 57979',
    availability: 'Mon-Sat: 9:00 AM - 6:00 PM'
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email Support',
    details: 'support@pscclasses.com',
    availability: '24/7 Response within 24 hours'
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Live Chat',
    details: 'Chat with our support team',
    availability: 'Mon-Sat: 9:00 AM - 6:00 PM'
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Visit Us',
    details: 'PSC Classes, Shankargarh',
    availability: 'Mon-Sat: 9:00 AM - 6:00 PM'
  }
];

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      category: '',
      subject: '',
      message: ''
    });
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
                How Can We Help You?
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Get support, access resources, and find answers to your questions
              </motion.p>
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                        <p className="text-muted-foreground mb-4">{category.description}</p>
                        <div className="space-y-2">
                          {category.commonQuestions.map((question, qIndex) => (
                            <div key={qIndex} className="flex items-center gap-2 text-sm">
                              <ChevronRight className="h-4 w-4 text-primary" />
                              <span>{question}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">
                        Category
                      </label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="academic">Academic Support</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Enter subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        className="min-h-[150px]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">Contact Methods</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contactMethods.map((method, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            {method.icon}
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">{method.title}</h3>
                            <p className="text-sm text-muted-foreground mb-1">{method.details}</p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{method.availability}</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="/faq">
                          <HelpCircle className="h-4 w-4 mr-2" />
                          Frequently Asked Questions
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="/about">
                          <BookOpen className="h-4 w-4 mr-2" />
                          About Us
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="/contact">
                          <MapPin className="h-4 w-4 mr-2" />
                          Find Our Location
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 