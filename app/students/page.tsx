'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Users, Star, GraduationCap, Award, Trophy, Medal } from 'lucide-react';
import { useState, useMemo } from 'react';
import { studentsData, stats } from './data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [studentFilter, setStudentFilter] = useState('all');
  const [classFilter, setClassFilter] = useState('all');

  // Get unique classes for dropdown
  const uniqueClasses = useMemo(() => {
    const allStudents = [...studentsData.boys, ...studentsData.girls];
    const classes = Array.from(new Set(allStudents.map(student => student.class)));
    return classes.sort();
  }, []);

  // Filter students based on search query and filters
  const filteredStudents = useMemo(() => {
    const query = searchQuery.toLowerCase();
    let allStudents = [...studentsData.boys, ...studentsData.girls];

    // Apply student filter (all, boys, girls)
    if (studentFilter === 'boys') {
      allStudents = studentsData.boys;
    } else if (studentFilter === 'girls') {
      allStudents = studentsData.girls;
    }

    // Apply class filter
    if (classFilter !== 'all') {
      allStudents = allStudents.filter(student => student.class === classFilter);
    }

    // Apply search query
    if (!query) {
      return allStudents;
    }

    return allStudents.filter(student =>
      student.name.toLowerCase().includes(query) ||
      student.fatherName.toLowerCase().includes(query) ||
      student.class.toLowerCase().includes(query) ||
      student.enrollmentId.toLowerCase().includes(query)
    );
  }, [searchQuery, studentFilter, classFilter]);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-yellow-950/20 dark:via-background dark:to-yellow-900/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Star className="h-5 w-5" />
                <span className="font-medium">Our Stars</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Meet Our Brilliant Students
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover the talented minds that make PSC Classes proud. Our students are not just learners, they are future leaders, innovators, and achievers.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const iconMap: Record<string, React.ComponentType<any>> = {
                    Users,
                    Star,
                    Award,
                    Trophy
                  };
                  const IconComponent = iconMap[stat.icon];

                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Filter Options */}
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mt-8">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <span>Academic Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-blue-600" />
                  <span>Competition Winners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-green-600" />
                  <span>Leadership Awards</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-background border-b">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-col gap-6">
                {/* Search Bar */}
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search by name, father's name, class, or enrollment ID..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 border-2 border-yellow-400/50 focus:border-yellow-400 focus:ring-yellow-400/20"
                    />
                  </div>
                </div>

                {/* Filter Options */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  {/* Student Type Filter */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Students:</span>
                    <div className="flex gap-1">
                      <Button
                        variant={studentFilter === 'all' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setStudentFilter('all')}
                        className="text-xs"
                      >
                        All Students
                      </Button>
                      <Button
                        variant={studentFilter === 'boys' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setStudentFilter('boys')}
                        className="text-xs"
                      >
                        Boys
                      </Button>
                      <Button
                        variant={studentFilter === 'girls' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setStudentFilter('girls')}
                        className="text-xs"
                      >
                        Girls
                      </Button>
                    </div>
                  </div>

                  {/* Class Filter */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Class:</span>
                    <Select value={classFilter} onValueChange={setClassFilter}>
                      <SelectTrigger className="w-32 border-2 border-yellow-400/50 focus:border-yellow-400 focus:ring-yellow-400/20">
                        <SelectValue placeholder="All Classes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Classes</SelectItem>
                        {uniqueClasses.map((className) => (
                          <SelectItem key={className} value={className}>
                            {className}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Students Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Star Students</h2>
              <p className="text-muted-foreground">
                {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''} found
              </p>
            </motion.div>

            {filteredStudents.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No students found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredStudents.map((student, index) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 border-yellow-400/50 shadow-lg hover:shadow-yellow-400/20">
                      <div className="relative">
                        {/* Student Photo */}
                        <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                          <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                            <AvatarImage src={student.photo} alt={student.name} />
                            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                              {getInitials(student.name)}
                            </AvatarFallback>
                          </Avatar>
                          
                          {/* Desktop Hover Buttons */}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 hidden md:flex">
                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                              View Result
                            </Button>
                            <Button size="sm" variant="secondary" className="bg-white hover:bg-gray-100 text-gray-900">
                              Pay Fee
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        {/* Student Info */}
                        <div className="text-center">
                          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                            {student.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {student.fatherName}
                          </p>
                          <Badge variant="outline" className="mb-3">
                            {student.class}
                          </Badge>
                          <p className="text-xs text-muted-foreground font-mono mb-4">
                            ID: {student.enrollmentId}
                          </p>
                          
                          {/* Mobile Buttons */}
                          <div className="flex gap-2 justify-center md:hidden">
                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white text-xs">
                              View Result
                            </Button>
                            <Button size="sm" variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs">
                              Pay Fee
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">Join Our Success Story</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be part of our growing family of achievers. Enroll now and start your journey towards academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
