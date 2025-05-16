'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Mail, Phone } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const staffMembers = [
  {
    name: "Vandana Shukla",
    image: "/staff/Vandana-shukla.jpg",
    qualifications: "BCA, MCA",
    description: [
      "A dedicated educator with expertise in computer science and technology. With her strong academic background in BCA and MCA, Vandana brings extensive knowledge and practical experience to the classroom.",
      "Her teaching methodology focuses on combining theoretical concepts with hands-on practical applications, ensuring students develop both understanding and practical skills. She specializes in programming fundamentals, web development, and computer applications.",
      "Known for her patient and thorough approach to teaching, she ensures every student grasps the concepts completely. Her students consistently achieve excellent results through her personalized attention and comprehensive teaching methods."
    ],
    email: "vandana.shukla@pscclasses.com"
  },
  {
    name: "Shalu Shukla",
    image: "/staff/shalu-dwivedi.jpg",
    qualifications: "M.SC, B.Ed",
    description: [
      "A passionate educator with a strong foundation in science and education. Her M.SC and B.Ed qualifications reflect her deep understanding of both subject matter and teaching methodologies.",
      "She brings a unique blend of theoretical knowledge and practical teaching experience to the classroom, making complex concepts accessible and engaging for students.",
      "Her student-centered approach and dedication to academic excellence have consistently helped students achieve their educational goals."
    ],
    email: "shalushukla@pscclasses.com"
  },
  {
    name: "Sheetal Tripathi",
    image: "/staff/sheetal-tripathi.jpg",
    qualifications: "Graduate",
    description: [
      "A committed educator who brings fresh perspectives and innovative teaching methods to the classroom. Her dedication to student success and continuous learning sets her apart.",
      "She excels in creating an engaging learning environment where students feel comfortable asking questions and exploring new concepts. Her teaching approach emphasizes practical understanding and real-world applications.",
      "Known for her ability to connect with students and provide individualized attention, she ensures that each student receives the support they need to excel in their studies."
    ],
    email: "sheetaltripathi@pscclasses.com"
  }
];

export function StaffSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Excellent Staff</h2>
          <p className="text-lg text-muted-foreground">
            Meet our dedicated team of educators shaping futures at PSC Classes
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            startIndex: 0
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-8 lg:hidden">
            <CarouselPrevious className="relative h-8 w-8 translate-y-0 bg-background hover:bg-muted static" />
            <CarouselNext className="relative h-8 w-8 translate-y-0 bg-background hover:bg-muted static" />
          </div>
          
          <CarouselContent>
            {staffMembers.map((staff, index) => (
              <CarouselItem key={index} className="md:basis-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="overflow-hidden">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-center rounded-lg shadow-lg"
                      />
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col h-full lg:pl-6"
                  >
                    <div className="flex-none">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">{staff.name}</h3>
                      <div className="flex items-center gap-2 text-primary mb-4">
                        <GraduationCap className="h-5 w-5" />
                        <span className="font-medium">{staff.qualifications}</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow min-h-[200px] space-y-4 mb-6">
                      {staff.description.map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="flex-none space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>{staff.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>Contact Administration</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:flex justify-center mt-8 gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
} 