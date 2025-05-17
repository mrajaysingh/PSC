'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search,
  GraduationCap,
  Clock,
  Users,
  Star,
  ArrowRight,
  Filter
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { courses } from './data';

// Categories for filtering
const uniqueCategories = Array.from(new Set(courses.map(course => course.category)));
const categories = [
  { value: "all", label: "All Courses" },
  ...uniqueCategories.map(category => ({ value: category, label: category }))
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter courses based on search query and category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 md:mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Courses</h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Explore our wide range of courses designed to help you achieve your learning goals.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto"
            >
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/courses/${course.id}`}>
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="relative aspect-video">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-background/95">
                            {course.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold mb-3 line-clamp-1">{course.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                          {course.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="truncate">Duration: {course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="truncate">Students: {course.students}+</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Star className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="truncate">Rating: {course.rating}/5.0</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <GraduationCap className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="truncate">Level: {course.level}</span>
                          </div>
                        </div>

                        <Button className="w-full">
                          View Course Details
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground text-lg">
                  No courses found matching your criteria.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 