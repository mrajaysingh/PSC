'use client';

import { motion, useInView } from 'framer-motion';
import { Counter } from '@/components/ui/counter';
import { useRef, useState, useEffect } from 'react';

const stats = [
  {
    label: "Students Served",
    value: 10000,
    suffix: "+",
    description: "Learners from diverse backgrounds"
  },
  {
    label: "Satisfaction Rate",
    value: 98,
    suffix: "%",
    description: "Rated excellent by our students"
  },
  {
    label: "Course Completion",
    value: 94,
    suffix: "%",
    description: "Students who finish their courses"
  },
  {
    label: "Years of Experience",
    value: 8,
    suffix: "+",
    description: "Providing quality education"
  }
];

export function StatsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setKey(prev => prev + 1), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Impact in Numbers</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 sm:p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                <Counter key={`stat-${index}-${key}`} end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-base sm:text-lg md:text-xl font-medium mb-1">{stat.label}</div>
              <p className="text-sm sm:text-base text-primary-foreground/80">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}