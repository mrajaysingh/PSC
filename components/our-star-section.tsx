'use client';

import { motion } from 'framer-motion';
import { Star, Award, Trophy, Medal, GraduationCap, BookOpen, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const starStudents = [
  {
    id: 1,
    name: "Priya Sharma",
    class: "12th Standard",
    subject: "Computer Science",
    achievement: "95% in Board Exams",
    rank: "School Topper",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonial: "PSC Classes helped me achieve my dream score. The personalized attention and expert guidance made all the difference.",
    awards: ["Academic Excellence", "Perfect Attendance", "Leadership Award"],
    stats: {
      attendance: "98%",
      assignments: "100%",
      improvement: "+25%"
    }
  },
  {
    id: 2,
    name: "Raj Patel",
    class: "11th Standard",
    subject: "Mathematics",
    achievement: "District Level Olympiad Winner",
    rank: "1st Position",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonial: "The teachers at PSC Classes are amazing. They made complex topics simple and always encouraged me to think beyond the textbook.",
    awards: ["Math Olympiad Winner", "Best Problem Solver", "Merit Certificate"],
    stats: {
      attendance: "95%",
      assignments: "98%",
      improvement: "+30%"
    }
  },
  {
    id: 3,
    name: "Ananya Gupta",
    class: "10th Standard",
    subject: "Science",
    achievement: "Science Fair Champion",
    rank: "State Level Winner",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonial: "PSC Classes not only taught me science but also how to apply it in real life. My project won at the state level!",
    awards: ["Science Fair Winner", "Innovation Award", "Young Scientist"],
    stats: {
      attendance: "100%",
      assignments: "100%",
      improvement: "+35%"
    }
  },
  {
    id: 4,
    name: "Vikram Singh",
    class: "9th Standard",
    subject: "English",
    achievement: "Debate Competition Winner",
    rank: "Regional Champion",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonial: "The communication skills I learned at PSC Classes helped me win multiple debate competitions. The teachers are incredibly supportive.",
    awards: ["Debate Champion", "Public Speaking", "Leadership Award"],
    stats: {
      attendance: "92%",
      assignments: "95%",
      improvement: "+28%"
    }
  },
  {
    id: 5,
    name: "Neha Kapoor",
    class: "12th Standard",
    subject: "Commerce",
    achievement: "Business Plan Competition Winner",
    rank: "National Finalist",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonial: "PSC Classes taught me practical business concepts that helped me create a winning business plan. The mentors are industry experts!",
    awards: ["Business Plan Winner", "Entrepreneur Award", "Innovation Prize"],
    stats: {
      attendance: "96%",
      assignments: "100%",
      improvement: "+40%"
    }
  },
  {
    id: 6,
    name: "Arjun Mehta",
    class: "11th Standard",
    subject: "Physics",
    achievement: "Physics Olympiad Silver Medal",
    rank: "National Level",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonial: "The physics teachers at PSC Classes are exceptional. They made complex theories understandable and helped me excel in competitions.",
    awards: ["Physics Olympiad Medal", "Academic Excellence", "Merit Scholar"],
    stats: {
      attendance: "94%",
      assignments: "98%",
      improvement: "+32%"
    }
  }
];

export function OurStarSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
            <h1 className="text-4xl md:text-5xl font-bold">Our Star Students</h1>
            <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            Celebrating the achievements of our outstanding students who have excelled in their academic journey
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {starStudents.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transform-gpu bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <Avatar className="h-20 w-20 mx-auto">
                      <AvatarImage src={student.image} alt={student.name} />
                      <AvatarFallback>{student.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 bg-yellow-500 rounded-full p-1">
                      <Star className="h-4 w-4 text-white fill-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {student.name}
                  </CardTitle>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{student.class}</p>
                    <p className="text-sm font-medium">{student.subject}</p>
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {student.rank}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-green-600 mb-1">{student.achievement}</h4>
                    <p className="text-sm text-muted-foreground italic">"{student.testimonial}"</p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-sm flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      Awards & Recognition
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {student.awards.map((award, awardIndex) => (
                        <Badge key={awardIndex} variant="outline" className="text-xs">
                          {award}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-sm flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Performance Stats
                    </h5>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-muted/50 rounded-lg p-2">
                        <div className="text-xs text-muted-foreground">Attendance</div>
                        <div className="font-semibold text-sm">{student.stats.attendance}</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-2">
                        <div className="text-xs text-muted-foreground">Assignments</div>
                        <div className="font-semibold text-sm">{student.stats.assignments}</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-2">
                        <div className="text-xs text-muted-foreground">Improvement</div>
                        <div className="font-semibold text-sm text-green-600">{student.stats.improvement}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Star Students</h3>
            <p className="text-muted-foreground mb-6">
              Be the next success story! Our comprehensive programs and expert guidance can help you achieve your academic goals.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>Expert Teachers</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>Quality Education</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
