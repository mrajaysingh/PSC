'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  Users,
  Star,
  GraduationCap,
  CheckCircle2,
  Calendar,
  BookOpen,
  Target,
  Award,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import type { Course } from '../data';

export function CourseContent({ course }: { course: Course }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-8"
          >
            {/* Course Image */}
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-lg overflow-hidden">
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
            </div>

            {/* Course Info */}
            <div className="lg:w-1/2">
              <Link href="/courses">
                <Button variant="ghost" className="mb-4 -ml-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Courses
                </Button>
              </Link>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-base lg:text-lg text-muted-foreground mb-6">{course.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base truncate">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base truncate">{course.students}+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base truncate">{course.rating}/5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base truncate">{course.level}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 min-h-[48px] py-6">
                  Enroll Now
                  <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                </Button>
                <Button size="lg" variant="outline" className="flex-1 min-h-[48px] py-6">
                  Download Syllabus
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Tabs */}
              <div className="flex overflow-x-auto scrollbar-hide border-b mb-8">
                {['overview', 'curriculum', 'instructor', 'faq'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-4 font-medium capitalize whitespace-nowrap transition-colors ${
                      activeTab === tab
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-8">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="space-y-8">
                      {/* Course Highlights */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Course Highlights</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {course.highlights?.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm lg:text-base">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Prerequisites */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {course.prerequisites?.map((prerequisite, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm lg:text-base">{prerequisite}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'curriculum' && course.curriculum && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    {course.curriculum.map((topic, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                      >
                        <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-sm lg:text-base">Module {index + 1}</h4>
                          <p className="text-muted-foreground text-sm">{topic}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'instructor' && course.instructor && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={course.instructor.image}
                        alt={course.instructor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold mb-2">{course.instructor.name}</h3>
                      <p className="text-primary mb-2">{course.instructor.role}</p>
                      <p className="text-muted-foreground mb-4">Experience: {course.instructor.experience}</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'faq' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-muted-foreground">Coming soon...</p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-semibold mb-6">Course Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm lg:text-base">Next Batch</span>
                      </div>
                      <span className="font-medium text-sm lg:text-base">{course.nextBatch}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm lg:text-base">Duration</span>
                      </div>
                      <span className="font-medium text-sm lg:text-base">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm lg:text-base">Batch Size</span>
                      </div>
                      <span className="font-medium text-sm lg:text-base">30 Students</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm lg:text-base">Certificate</span>
                      </div>
                      <span className="font-medium text-sm lg:text-base">Yes</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-medium">Course Fee</span>
                        <span className="text-xl font-bold text-primary">{course.fee}</span>
                      </div>
                      <Button className="w-full" size="lg">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 