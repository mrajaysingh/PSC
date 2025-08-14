'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Users, Star, GraduationCap, Award, Trophy } from 'lucide-react';
import { useState, useMemo } from 'react';
import { studentsData, stats } from './data';

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Filter students based on search query
  const filteredStudents = useMemo(() => {
    const query = searchQuery.toLowerCase();
    const allStudents = [...studentsData.boys, ...studentsData.girls];

    if (!query) {
      if (activeTab === 'boys') return studentsData.boys;
      if (activeTab === 'girls') return studentsData.girls;
      return allStudents;
    }

    const filtered = allStudents.filter(student =>
      student.name.toLowerCase().includes(query) ||
      student.fatherName.toLowerCase().includes(query) ||
      student.class.toLowerCase().includes(query) ||
      student.enrollmentId.toLowerCase().includes(query)
    );

    if (activeTab === 'boys') return filtered.filter(student => studentsData.boys.some(boy => boy.id === student.id));
    if (activeTab === 'girls') return filtered.filter(student => studentsData.girls.some(girl => girl.id === student.id));

    return filtered;
  }, [searchQuery, activeTab]);

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
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search Bar */}
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

                {/* Batch Filter */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full lg:w-auto">
                  <TabsList className="grid w-full grid-cols-3 lg:w-auto border-2 border-yellow-400/50 p-1">
                    <TabsTrigger value="all" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-yellow-950 data-[state=active]:shadow-sm">All Students</TabsTrigger>
                    <TabsTrigger value="boys" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-yellow-950 data-[state=active]:shadow-sm">Boys Batch</TabsTrigger>
                    <TabsTrigger value="girls" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-yellow-950 data-[state=active]:shadow-sm">Girls Batch</TabsTrigger>
                  </TabsList>
                </Tabs>
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
              <h2 className="text-3xl font-bold mb-4">
                {activeTab === 'boys' ? 'Boys Batch' :
                  activeTab === 'girls' ? 'Girls Batch' : 'All Students'}
              </h2>
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
                        <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                          <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                            <AvatarImage src={student.photo} alt={student.name} />
                            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                              {getInitials(student.name)}
                            </AvatarFallback>
                          </Avatar>
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
                          <p className="text-xs text-muted-foreground font-mono">
                            ID: {student.enrollmentId}
                          </p>
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
