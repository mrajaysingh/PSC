'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, GraduationCap, Users, BookOpen, School, Smile } from 'lucide-react';
import { FounderSection } from '@/components/founder-section';
import { StaffSection } from '@/components/staff-section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { useState } from 'react';
import { ImageModal } from '@/components/ui/image-modal';

// Reuse gallery items from the home page
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

const features = [
  {
    icon: <School className="h-8 w-8 text-primary" />,
    title: "Dedicated Study Environment",
    description: "Our state-of-the-art facilities provide the perfect atmosphere for focused learning and academic growth."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Comprehensive Curriculum",
    description: "Expert-designed courses that blend theoretical knowledge with practical applications."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Supportive Community",
    description: "Join a vibrant community of learners and educators committed to excellence."
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: "Joyful Environment",
    description: "We believe learning should be enjoyable, fostering creativity and enthusiasm."
  }
];

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[previousIndex]);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">About PSC Classes</h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                  Empowering students with quality education and comprehensive learning solutions since 2015. Our commitment to excellence has helped thousands of students achieve their academic and career goals.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="text-base">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Start Learning
                  </Button>
                  <Button size="lg" variant="outline" className="text-base">
                    Contact Us
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-white p-8 flex items-center justify-center transform hover:scale-105 transition-all duration-300 hover:rotate-1 shadow-[0_10px_30px_rgba(253,_191,_48,_0.3)] hover:shadow-[0_15px_40px_rgba(253,_191,_48,_0.4)] before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-[#FDBF30]/5 before:via-white before:to-[#FDBF30]/5 before:bg-[length:200%_100%] before:animate-gradient">
                  <img
                    src="/logo.png"
                    alt="PSC Classes Logo"
                    className="w-full h-full object-contain max-w-[400px] mx-auto transform hover:-rotate-1 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Us ?</h2>
              <p className="text-lg text-muted-foreground">
                Experience excellence in education with our unique features and facilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center transform hover:scale-105 hover:rotate-2 transition-all duration-300 bg-card hover:shadow-[0_10px_30px_rgba(253,_191,_48,_0.3)] relative before:absolute before:inset-0 before:-z-10 before:transform before:translate-y-3 before:translate-x-3 before:rounded-lg before:bg-[#FDBF30]/10 before:blur-lg before:transition-all before:duration-300 hover:before:translate-y-4 hover:before:translate-x-4 after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-r after:from-card after:via-[#FDBF30]/5 after:to-card after:bg-[length:200%_100%] after:animate-gradient">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-[#FDBF30]/5 transform hover:rotate-12 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 relative z-10">{feature.title}</h3>
                    <p className="text-muted-foreground relative z-10">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dedicated Study Environment Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Dedicated Study Environment</h2>
              <p className="text-lg text-muted-foreground">
                Experience our focused learning atmosphere where every student gets individual attention and support
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <Card className="overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <img
                      src="/study-environment/1.jpg"
                      alt="PSC Classes Study Environment"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-2xl font-bold mb-2">Modern Learning Facilities</h3>
                        <p className="text-white/90">Our classrooms are designed to promote focused learning and academic excellence</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative aspect-square">
                      <img
                        src="/study-environment/2.jpg"
                        alt="Individual Attention"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                        <h4 className="text-white text-lg font-semibold">Individual Attention</h4>
                        <p className="text-white/90 text-sm">Personalized guidance for every student</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative aspect-square">
                      <img
                        src="/study-environment/3.jpg"
                        alt="Interactive Learning"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                        <h4 className="text-white text-lg font-semibold">Interactive Learning</h4>
                        <p className="text-white/90 text-sm">Engaging teaching methods for better understanding</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative aspect-square">
                      <img
                        src="/study-environment/4.jpg"
                        alt="Focused Environment"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                        <h4 className="text-white text-lg font-semibold">Focused Environment</h4>
                        <p className="text-white/90 text-sm">Distraction-free atmosphere for optimal learning</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative aspect-square">
                      <img
                        src="/study-environment/5.jpg"
                        alt="Collaborative Learning"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                        <h4 className="text-white text-lg font-semibold">Collaborative Learning</h4>
                        <p className="text-white/90 text-sm">Group discussions and peer learning opportunities</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Key Features List */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Our Learning Environment Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Well-Equipped Classrooms</h4>
                        <p className="text-muted-foreground text-sm">Modern facilities with comfortable seating and learning aids</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Small Batch Sizes</h4>
                        <p className="text-muted-foreground text-sm">Limited students per batch for personalized attention</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <School className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Expert Faculty</h4>
                        <p className="text-muted-foreground text-sm">Experienced teachers dedicated to student success</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Smile className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Positive Learning Culture</h4>
                        <p className="text-muted-foreground text-sm">Encouraging environment that promotes growth and confidence</p>
                      </div>
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Section - Reused from home page */}
        <FounderSection />

        {/* Staff Section - Reused from home page */}
        <StaffSection />

        {/* Memory Wall Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Memory Wall</h2>
              <p className="text-lg text-muted-foreground">
                Cherished moments and milestones from our journey together
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${
                    index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                  } group cursor-pointer`}
                  onClick={() => setSelectedImage(item)}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative h-full">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                          index % 5 === 0 ? 'aspect-square sm:aspect-[4/3]' : 'aspect-[4/3]'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                          <p className="text-white/90">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Location</h2>
              <p className="text-lg text-muted-foreground">
                Visit us at our campus in Shankargarh
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden shadow-xl h-[400px]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14485.090656443994!2d81.71659065!3d24.93199865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398434d8e1bb13a3%3A0x8f0a30bb73d2408f!2sShankargarh%2C%20Uttar%20Pradesh%20212108!5e0!3m2!1sen!2sin!4v1647887774762!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      PSC Classes<br />
                      Shankargarh, Uttar Pradesh<br />
                      India - 212108
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">+91 94532 57979</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">adpanday@pscclasses.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        currentImage={selectedImage}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </>
  );
} 