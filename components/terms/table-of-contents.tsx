'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useScroll } from '@/hooks/useScroll';

interface Section {
  id: string;
  title: string;
  content: string;
  list?: string[];
}

export function TableOfContents({ sections }: { sections: Section[] }) {
  const { activeSection, scrollToSection } = useScroll();

  return (
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
                data-section-id={section.id}
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
                      {section.list.map((item: string, i: number) => (
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
  );
} 