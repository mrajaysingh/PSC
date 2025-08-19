'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, User, Calendar, Award, CheckCircle, XCircle, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingThemeToggle } from '@/components/floating-theme-toggle';
import { FloatingAdminButton } from '@/components/floating-admin-button';

// Sample student results data
const studentResults = [
  {
    id: 1,
    pscId: "PSC001",
    name: "Rahul Kumar",
    class: "12th Class",
    subjects: [
      {
        name: "Mathematics",
        tests: [
          { testName: "Mid Term Exam", score: 85, totalMarks: 100, date: "2024-01-15", status: "pass", remark: "Excellent performance in algebra" },
          { testName: "Final Term Exam", score: 92, totalMarks: 100, date: "2024-03-20", status: "pass", remark: "Outstanding work in calculus" },
          { testName: "Unit Test 1", score: 78, totalMarks: 50, date: "2024-02-10", status: "pass", remark: "Good understanding of trigonometry" }
        ]
      },
      {
        name: "Physics",
        tests: [
          { testName: "Mid Term Exam", score: 88, totalMarks: 100, date: "2024-01-18", status: "pass", remark: "Strong grasp of mechanics" },
          { testName: "Final Term Exam", score: 85, totalMarks: 100, date: "2024-03-22", status: "pass", remark: "Good performance in electricity" },
          { testName: "Unit Test 1", score: 42, totalMarks: 50, date: "2024-02-12", status: "pass", remark: "Needs improvement in optics" }
        ]
      },
      {
        name: "Chemistry",
        tests: [
          { testName: "Mid Term Exam", score: 75, totalMarks: 100, date: "2024-01-20", status: "pass", remark: "Satisfactory performance" },
          { testName: "Final Term Exam", score: 82, totalMarks: 100, date: "2024-03-25", status: "pass", remark: "Improved in organic chemistry" },
          { testName: "Unit Test 1", score: 35, totalMarks: 50, date: "2024-02-15", status: "fail", remark: "Needs more practice in reactions" }
        ]
      }
    ]
  },
  {
    id: 2,
    pscId: "PSC002",
    name: "Priya Sharma",
    class: "11th Class",
    subjects: [
      {
        name: "Mathematics",
        tests: [
          { testName: "Mid Term Exam", score: 95, totalMarks: 100, date: "2024-01-15", status: "pass", remark: "Exceptional mathematical skills" },
          { testName: "Final Term Exam", score: 98, totalMarks: 100, date: "2024-03-20", status: "pass", remark: "Perfect score in advanced topics" },
          { testName: "Unit Test 1", score: 48, totalMarks: 50, date: "2024-02-10", status: "pass", remark: "Excellent problem-solving abilities" }
        ]
      },
      {
        name: "Biology",
        tests: [
          { testName: "Mid Term Exam", score: 90, totalMarks: 100, date: "2024-01-18", status: "pass", remark: "Strong understanding of cell biology" },
          { testName: "Final Term Exam", score: 88, totalMarks: 100, date: "2024-03-22", status: "pass", remark: "Good performance in genetics" },
          { testName: "Unit Test 1", score: 45, totalMarks: 50, date: "2024-02-12", status: "pass", remark: "Excellent in anatomy" }
        ]
      }
    ]
  },
  {
    id: 3,
    pscId: "PSC003",
    name: "Amit Patel",
    class: "12th Class",
    subjects: [
      {
        name: "Computer Science",
        tests: [
          { testName: "Mid Term Exam", score: 92, totalMarks: 100, date: "2024-01-15", status: "pass", remark: "Excellent programming skills" },
          { testName: "Final Term Exam", score: 95, totalMarks: 100, date: "2024-03-20", status: "pass", remark: "Outstanding in database management" },
          { testName: "Unit Test 1", score: 47, totalMarks: 50, date: "2024-02-10", status: "pass", remark: "Strong in web development" }
        ]
      },
      {
        name: "English",
        tests: [
          { testName: "Mid Term Exam", score: 85, totalMarks: 100, date: "2024-01-18", status: "pass", remark: "Good writing skills" },
          { testName: "Final Term Exam", score: 88, totalMarks: 100, date: "2024-03-22", status: "pass", remark: "Improved communication skills" },
          { testName: "Unit Test 1", score: 40, totalMarks: 50, date: "2024-02-12", status: "pass", remark: "Good grammar knowledge" }
        ]
      }
    ]
  },
  {
    id: 4,
    pscId: "PSC004",
    name: "Neha Singh",
    class: "11th Class",
    subjects: [
      {
        name: "Chemistry",
        tests: [
          { testName: "Mid Term Exam", score: 78, totalMarks: 100, date: "2024-01-15", status: "pass", remark: "Good understanding of concepts" },
          { testName: "Final Term Exam", score: 82, totalMarks: 100, date: "2024-03-20", status: "pass", remark: "Improved in practical work" },
          { testName: "Unit Test 1", score: 38, totalMarks: 50, date: "2024-02-10", status: "pass", remark: "Needs more practice" }
        ]
      },
      {
        name: "Physics",
        tests: [
          { testName: "Mid Term Exam", score: 85, totalMarks: 100, date: "2024-01-18", status: "pass", remark: "Strong in mechanics" },
          { testName: "Final Term Exam", score: 80, totalMarks: 100, date: "2024-03-22", status: "pass", remark: "Good in electricity" },
          { testName: "Unit Test 1", score: 42, totalMarks: 50, date: "2024-02-12", status: "pass", remark: "Satisfactory performance" }
        ]
      }
    ]
  }
];

// Get all unique subjects
const allSubjects = Array.from(new Set(studentResults.flatMap(student => student.subjects.map(subject => subject.name))));

export default function StudentsResultsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  // Filter students based on search and filters
  const filteredStudents = useMemo(() => {
    return studentResults.filter(student => {
      const matchesSearch = student.pscId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesClass = selectedClass === 'all' || student.class === selectedClass;
      const matchesSubject = selectedSubject === 'all' || 
                           student.subjects.some(subject => subject.name === selectedSubject);
      
      return matchesSearch && matchesClass && matchesSubject;
    });
  }, [searchQuery, selectedClass, selectedSubject]);

  // Get unique classes
  const uniqueClasses = Array.from(new Set(studentResults.map(student => student.class)));

  const getStatusIcon = (status: string) => {
    return status === 'pass' ? (
      <CheckCircle className="h-4 w-4 text-green-600" />
    ) : (
      <XCircle className="h-4 w-4 text-red-600" />
    );
  };

  const getStatusBadge = (status: string) => {
    return status === 'pass' ? (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
        Pass
      </Badge>
    ) : (
      <Badge variant="destructive">
        Fail
      </Badge>
    );
  };

  const calculateSubjectAverage = (tests: any[]) => {
    const totalScore = tests.reduce((sum, test) => sum + test.score, 0);
    const totalMarks = tests.reduce((sum, test) => sum + test.totalMarks, 0);
    return totalMarks > 0 ? Math.round((totalScore / totalMarks) * 100) : 0;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-20">
        <div className="container py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Student Results Portal</h1>
          <p className="text-lg text-muted-foreground">
            View and search student test results by PSC ID or name
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search by PSC ID or Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Search by PSC ID or Name</label>
                <Input
                  placeholder="Enter PSC ID or student name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Class Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Filter by Class</label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
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

              {/* Subject Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Filter by Subject</label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    {allSubjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''} 
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Student Results */}
        <div className="space-y-6">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="overflow-hidden">
              <CardHeader className="bg-muted/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{student.name}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          {student.pscId}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {student.class}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.location.href = `/students-results/${student.pscId}`}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <Tabs defaultValue={student.subjects[0]?.name || "all"} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {student.subjects.map((subject) => (
                      <TabsTrigger key={subject.name} value={subject.name}>
                        {subject.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {student.subjects.map((subject) => (
                    <TabsContent key={subject.name} value={subject.name} className="mt-6">
                      <div className="space-y-4">
                        {/* Subject Summary */}
                        <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                          <div>
                            <h3 className="font-semibold text-lg">{subject.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {subject.tests.length} test{subject.tests.length !== 1 ? 's' : ''} taken
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              {calculateSubjectAverage(subject.tests)}%
                            </div>
                            <div className="text-sm text-muted-foreground">Average Score</div>
                          </div>
                        </div>

                        {/* Test Results */}
                        <div className="space-y-3">
                          {subject.tests.map((test, index) => (
                            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/20 transition-colors">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="font-medium">{test.testName}</h4>
                                  {getStatusIcon(test.status)}
                                  {getStatusBadge(test.status)}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {new Date(test.date).toLocaleDateString()}
                                  </span>
                                  <span>
                                    Score: {test.score}/{test.totalMarks} ({Math.round((test.score / test.totalMarks) * 100)}%)
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {test.remark}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredStudents.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters
              </p>
            </CardContent>
          </Card>
        )}
        </div>
      </div>
      <Footer />
      <FloatingThemeToggle />
      <FloatingAdminButton />
    </>
  );
}
