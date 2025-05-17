'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  ArrowUp, 
  Search,
  GraduationCap,
  BookOpen,
  Clock,
  CreditCard,
  Users,
  Laptop,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { useState, useEffect } from 'react';

// FAQ Categories with their respective questions
const faqCategories = [
  {
    id: 'admissions',
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Admissions',
    questions: [
      {
        q: 'What are the admission requirements?',
        a: 'Admission requirements vary by course. Generally, students need to complete an application form, provide academic records, and may need to take an entrance test. Contact our admissions office for specific requirements.'
      },
      {
        q: 'When can I apply for admission?',
        a: 'We accept applications throughout the year. However, we recommend applying at least 2-3 months before your intended start date to ensure proper processing and course preparation.'
      },
      {
        q: 'Is there an age limit for admission?',
        a: 'While there is no strict age limit, our courses are designed for students in secondary and higher secondary levels. Each program may have specific age recommendations.'
      },
      {
        q: 'Can I transfer from another institution?',
        a: 'Yes, we accept transfer students. You\'ll need to provide transcripts and course details from your previous institution for evaluation.'
      }
    ]
  },
  {
    id: 'courses',
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Courses',
    questions: [
      {
        q: 'What courses do you offer?',
        a: 'We offer a wide range of courses including Mathematics, Physics, Chemistry, and Biology for classes 9th through 12th. We also provide specialized coaching for competitive exams.'
      },
      {
        q: 'How long are the courses?',
        a: 'Course duration varies from 3 months to 1 year, depending on the program and intensity level chosen. Contact us for specific course duration details.'
      },
      {
        q: 'Are courses available online?',
        a: 'Yes, we offer both online and offline courses. Our online platform provides live classes, recorded lectures, and interactive study materials.'
      },
      {
        q: 'What is the class size?',
        a: 'We maintain small class sizes with a maximum of 30 students per batch to ensure individual attention and optimal learning environment.'
      }
    ]
  },
  {
    id: 'schedule',
    icon: <Clock className="h-6 w-6" />,
    title: 'Schedule',
    questions: [
      {
        q: 'What are your class timings?',
        a: 'Classes run from Monday to Saturday. Morning batches are from 7 AM to 10 AM, and evening batches from 4 PM to 7 PM. Weekend batches are also available.'
      },
      {
        q: 'Can I switch between batches?',
        a: 'Yes, students can switch between batches based on availability and with prior notification to the administration.'
      },
      {
        q: 'Do you have holiday classes?',
        a: 'We conduct special revision classes during holidays, which are optional but recommended for exam preparation.'
      }
    ]
  },
  {
    id: 'fees',
    icon: <CreditCard className="h-6 w-6" />,
    title: 'Fees & Payment',
    questions: [
      {
        q: 'What are the fee structures?',
        a: 'Fee structures vary by course and duration. We offer flexible payment plans including monthly, quarterly, and annual options. Contact our office for detailed fee structures.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept payments through cash, bank transfer, UPI, and major credit/debit cards. Online payment facilities are also available.'
      },
      {
        q: 'Are there any scholarships available?',
        a: 'Yes, we offer merit-based scholarships and financial aid for deserving students. Contact our office for eligibility criteria and application process.'
      }
    ]
  },
  {
    id: 'faculty',
    icon: <Users className="h-6 w-6" />,
    title: 'Faculty',
    questions: [
      {
        q: 'Who are your teachers?',
        a: 'Our faculty comprises experienced educators with extensive teaching experience and subject matter expertise. Many hold advanced degrees in their respective fields.'
      },
      {
        q: 'What is the student-teacher ratio?',
        a: 'We maintain a healthy student-teacher ratio of 30:1 to ensure quality education and individual attention to each student.'
      },
      {
        q: 'Do you provide doubt-clearing sessions?',
        a: 'Yes, we have dedicated doubt-clearing sessions with faculty members available both during and after regular class hours.'
      }
    ]
  },
  {
    id: 'online',
    icon: <Laptop className="h-6 w-6" />,
    title: 'Online Learning',
    questions: [
      {
        q: 'How do online classes work?',
        a: 'Online classes are conducted through our digital platform with live interactive sessions, downloadable study materials, and regular assessments.'
      },
      {
        q: 'What technology requirements are needed?',
        a: 'Students need a stable internet connection, a computer or tablet, and basic digital literacy. Our platform works on all major browsers.'
      },
      {
        q: 'Are online classes as effective as offline?',
        a: 'Our online classes are designed to be equally effective with interactive features, regular assignments, and personalized attention.'
      }
    ]
  }
];

export default function FAQPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('admissions');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleQuestion = (categoryId: string, questionIndex: number) => {
    const questionId = `${categoryId}-${questionIndex}`;
    setExpandedQuestions(prev => 
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    const categoryElement = document.getElementById(`category-${categoryId}`);
    if (categoryElement) {
      const offset = 100; // Adjust this value to control the scroll position
      const elementPosition = categoryElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
                Frequently Asked Questions
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Find answers to common questions about PSC Classes
              </motion.p>
              
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative max-w-xl mx-auto"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search your question..."
                  className="pl-10 py-6 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Categories and Questions */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Category Navigation - Fixed on Desktop */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-1"
              >
                <div className="lg:sticky lg:top-24">
                  <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Categories</h2>
                    <nav className="space-y-2">
                      {faqCategories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => handleCategoryClick(category.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-primary/10 ${
                            activeCategory === category.id ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground'
                          }`}
                        >
                          {category.icon}
                          <span>{category.title}</span>
                        </button>
                      ))}
                    </nav>
                  </Card>
                </div>
              </motion.div>

              {/* Questions and Answers */}
              <div className="lg:col-span-3 space-y-8">
                {filteredCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.id}
                    id={`category-${category.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        {category.icon}
                        <h2 className="text-2xl font-semibold text-primary">{category.title}</h2>
                      </div>
                      <div className="space-y-4">
                        {category.questions.map((qa, questionIndex) => (
                          <div
                            key={questionIndex}
                            className="border rounded-lg hover:shadow-md transition-shadow"
                          >
                            <button
                              onClick={() => toggleQuestion(category.id, questionIndex)}
                              className="w-full flex items-center justify-between p-4 text-left"
                            >
                              <div className="flex items-start gap-3">
                                <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span className="font-medium">{qa.q}</span>
                              </div>
                              <ChevronDown
                                className={`h-5 w-5 transition-transform ${
                                  expandedQuestions.includes(`${category.id}-${questionIndex}`)
                                    ? 'transform rotate-180'
                                    : ''
                                }`}
                              />
                            </button>
                            {expandedQuestions.includes(`${category.id}-${questionIndex}`) && (
                              <div className="px-4 pb-4 pt-0">
                                <div className="pl-8 text-muted-foreground">
                                  {qa.a}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
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