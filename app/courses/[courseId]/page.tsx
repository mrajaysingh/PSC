import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { courses } from '../data';
import { CourseContent } from './course-content';

export function generateStaticParams() {
  return courses.map((course) => ({
    courseId: course.id.toString(),
  }));
}

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = courses.find(c => c.id === parseInt(params.courseId));

  if (!course) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-32">
          <div className="container">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
              <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
              <Link href="/courses">
                <Button>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Courses
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <CourseContent course={course} />
      <Footer />
    </>
  );
} 