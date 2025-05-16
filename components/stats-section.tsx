'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    label: "Students Served",
    value: "10,000+",
    description: "Learners from diverse backgrounds"
  },
  {
    label: "Satisfaction Rate",
    value: "98%",
    description: "Rated excellent by our students"
  },
  {
    label: "Course Completion",
    value: "94%",
    description: "Students who finish their courses"
  },
  {
    label: "Years of Experience",
    value: "8+",
    description: "Providing quality education"
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
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
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-base sm:text-lg md:text-xl font-medium mb-1">{stat.label}</div>
              <p className="text-sm sm:text-base text-primary-foreground/80">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}