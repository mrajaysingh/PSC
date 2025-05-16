'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Developer",
    company: "TechCorp Solutions",
    quote: "The Full Stack Development course completely transformed my career. The hands-on approach and expert guidance gave me the confidence to switch jobs and increase my salary by 40%.",
    rating: 5,
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Raj Patel",
    role: "Digital Marketing Specialist",
    company: "CreativeEdge Marketing",
    quote: "PSC Classes' Digital Marketing program provided practical skills I could apply immediately. The instructors were helpful and the course material was up-to-date with the latest industry trends.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "Data Analyst",
    company: "DataDriven Insights",
    quote: "I was skeptical about online learning, but PSC Classes proved me wrong. The Data Science course was comprehensive and the support from instructors was exceptional. Highly recommended!",
    rating: 4,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Project Manager",
    company: "Innovate Systems",
    quote: "The Business Leadership program helped me advance in my career faster than I expected. The real-world case studies and networking opportunities were invaluable for my professional growth.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Neha Kapoor",
    role: "UX Designer",
    company: "CreativeUI",
    quote: "The UI/UX Design course gave me exactly what I needed to break into the design industry. The portfolio projects we built during the course helped me land my dream job.",
    rating: 5,
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">What Our Students Say</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4 sm:px-0">
            Hear from our students who have transformed their careers through our courses
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base">{testimonial.name}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4 sm:h-5 sm:w-5",
                              i < testimonial.rating
                                ? "text-primary fill-primary"
                                : "text-muted-foreground"
                            )}
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm sm:text-base text-muted-foreground line-clamp-4">{testimonial.quote}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-8">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}