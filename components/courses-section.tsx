'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Star, Users } from 'lucide-react';
import { Carousel, CarouselPrevious, CarouselNext, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const courses = [
  {
    id: 1,
    title: "WordPress Development",
    description: "Master website creation and management with WordPress. Learn theme customization, plugin development, and best practices for building professional websites.",
    category: "Web Development",
    level: "Beginner to Advanced",
    duration: "3 months",
    rating: 4.8,
    students: 850,
    image: "/courses/wordpress.jpg"
  },
  {
    id: 2,
    title: "Tally Prime",
    description: "Complete accounting and business management with Tally Prime. Learn GST, accounting basics, inventory management, and financial reporting.",
    category: "Accounting",
    level: "Beginner",
    duration: "3 months",
    rating: 4.9,
    students: 1200,
    image: "/courses/tally.jpg"
  },
  {
    id: 3,
    title: "English Speaking",
    description: "Enhance your English communication skills with focus on speaking, pronunciation, vocabulary, and confidence building through practical exercises.",
    category: "Language",
    level: "All Levels",
    duration: "4 months",
    rating: 4.7,
    students: 950,
    image: "/courses/english.jpg"
  },
  {
    id: 4,
    title: "Chemistry",
    description: "Comprehensive chemistry course covering organic, inorganic, and physical chemistry with practical experiments and problem-solving techniques.",
    category: "Science",
    level: "Intermediate",
    duration: "6 months",
    rating: 4.8,
    students: 680,
    image: "/courses/chemistry.jpg"
  },
  {
    id: 5,
    title: "DCA",
    description: "Diploma in Computer Applications covering fundamental computer concepts, office applications, and basic programming skills.",
    category: "Computer",
    level: "Beginner",
    duration: "6 months",
    rating: 4.6,
    students: 1500,
    image: "/courses/dca.jpg"
  },
  {
    id: 6,
    title: "ADCA",
    description: "Advanced Diploma in Computer Applications with advanced programming, web development, and database management systems.",
    category: "Computer",
    level: "Intermediate",
    duration: "12 months",
    rating: 4.7,
    students: 920,
    image: "/courses/adca.jpg"
  },
  {
    id: 7,
    title: "PGDCA",
    description: "Post Graduate Diploma in Computer Applications focusing on advanced computing concepts and professional software development.",
    category: "Computer",
    level: "Advanced",
    duration: "12 months",
    rating: 4.8,
    students: 750,
    image: "/courses/pgdca.jpg"
  },
  {
    id: 8,
    title: "Python Programming",
    description: "Learn Python programming from basics to advanced concepts including data structures, algorithms, and practical project development.",
    category: "Programming",
    level: "Beginner to Advanced",
    duration: "4 months",
    rating: 4.9,
    students: 1100,
    image: "/courses/python.jpg"
  },
  {
    id: 9,
    title: "Java Programming",
    description: "Comprehensive Java programming course covering core concepts, object-oriented programming, and enterprise application development.",
    category: "Programming",
    level: "Beginner to Advanced",
    duration: "6 months",
    rating: 4.8,
    students: 890,
    image: "/courses/java.jpg"
  },
  {
    id: 10,
    title: "CCC",
    description: "Course on Computer Concepts providing essential computer literacy skills for modern digital workplace requirements.",
    category: "Computer",
    level: "Beginner",
    duration: "3 months",
    rating: 4.6,
    students: 2100,
    image: "/courses/ccc.jpg"
  },
  {
    id: 11,
    title: "Web Designing",
    description: "Learn modern web design techniques including HTML5, CSS3, JavaScript, responsive design, and UI/UX principles.",
    category: "Web Development",
    level: "Intermediate",
    duration: "4 months",
    rating: 4.7,
    students: 980,
    image: "/courses/webdesign.jpg"
  },
  {
    id: 12,
    title: "Typing Master",
    description: "Master touch typing with speed and accuracy. Learn both Hindi and English typing with professional techniques.",
    category: "Skills",
    level: "All Levels",
    duration: "2 months",
    rating: 4.5,
    students: 1600,
    image: "/courses/typing.jpg"
  },
  {
    id: 13,
    title: "Computer Basics",
    description: "Essential computer fundamentals covering hardware, software, operating systems, and basic office applications.",
    category: "Computer",
    level: "Beginner",
    duration: "2 months",
    rating: 4.6,
    students: 2500,
    image: "/courses/basics.jpg"
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
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5 dark:from-primary/10 dark:via-background dark:to-primary/5" />
      
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -right-10 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-muted-foreground/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative">
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1"></div>
            <div className="hidden md:flex items-center gap-4">
              <CarouselPrevious className="relative h-10 w-10 bg-background hover:bg-muted static" />
              <CarouselNext className="relative h-10 w-10 bg-background hover:bg-muted static" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mb-8 md:hidden">
            <CarouselPrevious className="relative h-8 w-8 translate-y-0 bg-background hover:bg-muted static" />
            <CarouselNext className="relative h-8 w-8 translate-y-0 bg-background hover:bg-muted static" />
          </div>
          
          <CarouselContent>
          {courses.map((course) => (
              <CarouselItem key={course.id} className="sm:basis-1/2 lg:basis-1/4">
                <motion.div variants={item} className="h-full">
                  <Card className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                    <div className="flex flex-col flex-1 min-h-[320px]">
                      <CardHeader className="space-y-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline" className="bg-primary/10 text-primary text-xs">
                      {course.category}
                    </Badge>
                          <Badge variant="outline" className="bg-secondary/20 text-xs">
                      {course.level}
                    </Badge>
                  </div>
                        <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
                        <CardDescription className="line-clamp-2 text-sm min-h-[40px]">{course.description}</CardDescription>
                </CardHeader>
                      <CardContent className="flex-1">
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
                      <CardFooter className="mt-auto border-t pt-4">
                  <Link href={`/courses/${course.id}`} className="w-full">
                    <Button className="w-full">View Course</Button>
                  </Link>
                </CardFooter>
                    </div>
              </Card>
            </motion.div>
              </CarouselItem>
          ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}