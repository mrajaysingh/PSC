'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Maximize2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const galleryItems = [
  {
    id: 1,
    image: "/events/5.jpg",
    title: "Teaching Session",
    description: "Students and staff celebrating together at PSC Classes"
  },
  {
    id: 2,
    image: "/events/6.jpg",
    title: "Memorable Gathering",
    description: "Special moments with our PSC Classes family"
  },
  {
    id: 3,
    image: "/events/4.jpg",
    title: "Student Gathering",
    description: "Interactive session with students at PSC Classes"
  },
  {
    id: 4,
    image: "/events/3.jpg",
    title: "Celebration Event",
    description: "Students enjoying festive decorations and celebrations"
  },
  {
    id: 5,
    image: "/events/2.jpg",
    title: "Group Photo",
    description: "Students and faculty at Pandey Study Centre"
  },
  {
    id: 6,
    image: "/events/1.jpg",
    title: "Birthday Celebration",
    description: "Interactive learning environment at PSC Classes"
  },
  {
    id: 7,
    image: "/events/7.jpg",
    title: "Award Ceremony",
    description: "Recognizing student achievements and excellence"
  },
  {
    id: 8,
    image: "/events/8.jpg",
    title: "Prize Distribution",
    description: "Celebrating student accomplishments with awards"
  },
  {
    id: 9,
    image: "/events/9.jpg",
    title: "Classroom Session",
    description: "Students engaged in focused learning activities"
  },
  {
    id: 10,
    image: "/events/10.jpg",
    title: "Study Time",
    description: "Students during an examination preparation session"
  },
  {
    id: 11,
    image: "/events/11.jpg",
    title: "Birthday Celebrations",
    description: "Students celebrating together at PSC Classes"
  },
  {
    id: 12,
    image: "/events/12.jpg",
    title: "Farewell Ceremony",
    description: "A memorable farewell celebration with students and staff at PSC Classes"
  }
];

export function GallerySection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-lg text-muted-foreground">
            Capturing moments and memories from our learning journey together
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            })
          ]}
          className="w-full"
        >
          <CarouselContent>
            {galleryItems.map((item, index) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative group">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-white/90 text-sm">{item.description}</p>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="icon" 
                              variant="secondary" 
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                              <Maximize2 className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-auto rounded-lg"
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative" />
          </div>
        </Carousel>
      </div>
    </section>
  );
} 