'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, User, Award, BookOpen, Calendar, CheckCircle, XCircle, TrendingUp, BarChart3, Target, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingThemeToggle } from '@/components/floating-theme-toggle';
import { FloatingAdminButton } from '@/components/floating-admin-button';

// Sample student data (in real app, this would come from API)
const studentData = {
  "PSC001": {
    id: 1,
    pscId: "PSC001",
    name: "Rahul Kumar",
    class: "12th Class",
    email: "rahul.kumar@example.com",
    phone: "+91 98765 43210",
    joinDate: "2023-06-15",
    subjects: [
      {
        name: "Mathematics",
        tests: [
          { testName: "Mid Term Exam", score: 85, totalMarks: 100, date: "2024-01-15", status: "pass", remark: "Excellent performance in algebra" },
          { testName: "Final Term Exam", score: 92, totalMarks: 100, date: "2024-03-20", status: "pass", remark: "Outstanding work in calculus" },
          { testName: "Unit Test 1", score: 78, totalMarks: 50, date: "2024-02-10", status: "pass", remark: "Good understanding of trigonometry" },
          { testName: "Unit Test 2", score: 88, totalMarks: 50, date: "2024-02-25", status: "pass", remark: "Improved in geometry" }
        ]
      },
      {
        name: "Physics",
        tests: [
          { testName: "Mid Term Exam", score: 88, totalMarks: 100, date: "2024-01-18", status: "pass", remark: "Strong grasp of mechanics" },
          { testName: "Final Term Exam", score: 85, totalMarks: 100, date: "2024-03-22", status: "pass", remark: "Good performance in electricity" },
          { testName: "Unit Test 1", score: 42, totalMarks: 50, date: "2024-02-12", status: "pass", remark: "Needs improvement in optics" },
          { testName: "Unit Test 2", score: 45, totalMarks: 50, date: "2024-02-28", status: "pass", remark: "Better understanding of waves" }
        ]
      },
      {
        name: "Chemistry",
        tests: [
          { testName: "Mid Term Exam", score: 75, totalMarks: 100, date: "2024-01-20", status: "pass", remark: "Satisfactory performance" },
          { testName: "Final Term Exam", score: 82, totalMarks: 100, date: "2024-03-25", status: "pass", remark: "Improved in organic chemistry" },
          { testName: "Unit Test 1", score: 35, totalMarks: 50, date: "2024-02-15", status: "fail", remark: "Needs more practice in reactions" },
          { testName: "Unit Test 2", score: 40, totalMarks: 50, date: "2024-03-05", status: "pass", remark: "Showing improvement" }
        ]
      }
    ],
    achievements: [
      "Top 10% in Mathematics (2024)",
      "Best Performance in Physics Lab",
      "Perfect Attendance Award",
      "Most Improved Student (Chemistry)"
    ],
    attendance: 95,
    overallPerformance: 87
  }
};

export default function StudentProfilePage() {
  const params = useParams();
  const router = useRouter();
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pscId = params.pscId as string;
    const studentInfo = studentData[pscId as keyof typeof studentData];
    
    if (studentInfo) {
      setStudent(studentInfo);
    }
    setLoading(false);
  }, [params.pscId]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background pt-20">
          <div className="container py-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading student profile...</p>
            </div>
          </div>
        </div>
        <Footer />
        <FloatingThemeToggle />
        <FloatingAdminButton />
      </>
    );
  }

  if (!student) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background pt-20">
          <div className="container py-16">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Student Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The student with PSC ID {params.pscId} could not be found.
              </p>
              <Button onClick={() => router.push('/students-results')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Results
              </Button>
            </div>
          </div>
        </div>
        <Footer />
        <FloatingThemeToggle />
        <FloatingAdminButton />
      </>
    );
  }

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

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 80) return "text-blue-600";
    if (percentage >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getPerformanceLabel = (percentage: number) => {
    if (percentage >= 90) return "Excellent";
    if (percentage >= 80) return "Very Good";
    if (percentage >= 70) return "Good";
    if (percentage >= 60) return "Satisfactory";
    return "Needs Improvement";
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-20">
        <div className="container py-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => router.push('/students-results')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Results
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Student Profile</h1>
            <p className="text-muted-foreground">Detailed performance analysis</p>
          </div>
        </div>

        {/* Student Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{student.name}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      {student.pscId}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {student.class}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Joined: {new Date(student.joinDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-3xl font-bold ${getPerformanceColor(student.overallPerformance)}`}>
                  {student.overallPerformance}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Overall Performance
                </div>
                <div className="text-xs text-muted-foreground">
                  {getPerformanceLabel(student.overallPerformance)}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Overall Average</p>
                  <p className="text-2xl font-bold">{student.overallPerformance}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Attendance</p>
                  <p className="text-2xl font-bold">{student.attendance}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Subjects</p>
                  <p className="text-2xl font-bold">{student.subjects.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Achievements & Awards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {student.achievements.map((achievement: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subject-wise Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Subject-wise Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={student.subjects[0]?.name || "all"} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                {student.subjects.map((subject: any) => (
                  <TabsTrigger key={subject.name} value={subject.name}>
                    {subject.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {student.subjects.map((subject: any) => (
                <TabsContent key={subject.name} value={subject.name} className="mt-6">
                  <div className="space-y-6">
                    {/* Subject Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <div className="text-center">
                            <div className={`text-3xl font-bold ${getPerformanceColor(calculateSubjectAverage(subject.tests))}`}>
                              {calculateSubjectAverage(subject.tests)}%
                            </div>
                            <p className="text-sm text-muted-foreground">Average Score</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">
                              {subject.tests.length}
                            </div>
                            <p className="text-sm text-muted-foreground">Tests Taken</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">
                              {subject.tests.filter((test: any) => test.status === 'pass').length}
                            </div>
                            <p className="text-sm text-muted-foreground">Tests Passed</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Performance Trend */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Performance Trend</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {subject.tests.map((test: any, index: number) => (
                            <div key={index} className="flex items-center gap-4">
                              <div className="w-24 text-sm font-medium">{test.testName}</div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm">
                                    {test.score}/{test.totalMarks} ({Math.round((test.score / test.totalMarks) * 100)}%)
                                  </span>
                                  <span className="text-sm text-muted-foreground">
                                    {new Date(test.date).toLocaleDateString()}
                                  </span>
                                </div>
                                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                                  <div 
                                    className="h-full bg-primary transition-all duration-300"
                                    style={{ 
                                      width: `${Math.min(100, Math.max(0, (test.score / test.totalMarks) * 100))}%` 
                                    }}
                                  />
                                </div>
                              </div>
                              {getStatusBadge(test.status)}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Detailed Test Results */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Detailed Test Results</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {subject.tests.map((test: any, index: number) => (
                            <div key={index} className="border rounded-lg p-4 hover:bg-muted/20 transition-colors">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                  <h4 className="font-medium">{test.testName}</h4>
                                  {getStatusIcon(test.status)}
                                  {getStatusBadge(test.status)}
                                </div>
                                <div className="text-right">
                                  <div className="text-lg font-bold">
                                    {test.score}/{test.totalMarks}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {Math.round((test.score / test.totalMarks) * 100)}%
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(test.date).toLocaleDateString()}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  Test #{index + 1}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                <strong>Remark:</strong> {test.remark}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
        </div>
      </div>
      <Footer />
      <FloatingThemeToggle />
      <FloatingAdminButton />
    </>
  );
}
