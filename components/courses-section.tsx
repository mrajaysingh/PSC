'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Star, Users } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Master front-end and back-end technologies to build complete web applications",
    category: "Technical",
    level: "Intermediate",
    duration: "16 weeks",
    rating: 4.8,
    students: 1240,
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    description: "Learn to analyze data, build models, and extract valuable insights",
    category: "Technical",
    level: "Advanced",
    duration: "12 weeks",
    rating: 4.9,
    students: 980,
    image: "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Business Leadership",
    description: "Develop essential leadership skills for the modern business environment",
    category: "Professional",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.7,
    students: 850,
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Digital Marketing Mastery",
    description: "Learn comprehensive strategies for effective online marketing",
    category: "Professional",
    level: "Intermediate",
    duration: "10 weeks",
    rating: 4.6,
    students: 1120,
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export function CoursesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 md:mb-12">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Courses
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore our most popular courses designed to help you acquire industry-relevant skills
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-auto"
          >
            <Link href="/courses" className="w-full md:w-auto block">
              <Button variant="outline" className="w-full md:w-auto group">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden group">
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-2 p-3 sm:p-4 md:p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary text-xs sm:text-sm">
                      {course.category}
                    </Badge>
                    <Badge variant="outline" className="bg-secondary/20 text-xs sm:text-sm">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-1 text-base sm:text-lg md:text-xl">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-xs sm:text-sm md:text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      {course.students} students
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(course.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium">{course.rating}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 sm:p-6 pt-0">
                  <Link href={`/courses/${course.id}`} className="w-full">
                    <Button className="w-full">View Course</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}