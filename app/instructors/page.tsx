'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail, Phone, MessageCircle, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const instructors = [
  {
    name: "Akhilesh Kumar Panday",
    role: "Founder & Lead Instructor",
    image: "/instructor/founder.png",
    bio: "With over a decade of experience in education, Mr. Panday specializes in Physics, Chemistry, and Mathematics. His innovative teaching approach combines traditional methods with modern techniques to make complex concepts easily understandable.",
    expertise: ["Physics", "Chemistry", "Mathematics"],
    social: {
      whatsapp: "https://wa.me/919453257979",
      email: "adpanday@pscclasses.com",
      phone: "+91 94532 57979",
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Vandana Shukla",
    role: "Computer Science Instructor",
    image: "/instructor/Vandana-shukla.jpg",
    bio: "A dedicated educator with expertise in computer science and technology. With her strong academic background in BCA and MCA, Vandana brings extensive knowledge and practical experience to the classroom. Her teaching methodology focuses on combining theoretical concepts with hands-on practical applications.",
    expertise: ["Programming", "Web Development", "Computer Applications"],
    qualifications: "BCA, MCA",
    social: {
      email: "vandana.shukla@pscclasses.com",
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Shalu Dwivedi",
    role: "Science Instructor",
    image: "/instructor/shalu-dwivedi.jpg",
    bio: "A passionate educator with a strong foundation in science and education. Her M.SC and B.Ed qualifications reflect her deep understanding of both subject matter and teaching methodologies. She brings a unique blend of theoretical knowledge and practical teaching experience to the classroom.",
    expertise: ["Science", "Biology", "Chemistry"],
    qualifications: "M.SC, B.Ed",
    social: {
      email: "shalushukla@pscclasses.com",
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Sheetal Tripathi",
    role: "Mathematics & Accounts Instructor",
    image: "/instructor/sheetal-tripathi.jpg",
    bio: "A dedicated professional serving as both an educator and the Accountant at PSC Classes. Her dual role brings a unique perspective to the institution's operations. She creates an engaging learning environment where students feel comfortable asking questions and exploring new concepts.",
    expertise: ["Accountancy", "Business Studies", "Commerce"],
    qualifications: "Graduate",
    social: {
      email: "sheetaltripathi@pscclasses.com",
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

export default function InstructorsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Meet Our Expert Instructors
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Learn from industry professionals with years of experience in their respective fields.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Instructors Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {instructors.map((instructor, index) => (
                <motion.div
                  key={instructor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border rounded-xl overflow-hidden"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="aspect-[4/3] relative overflow-hidden group">
                      <img 
                        src={instructor.image} 
                        alt={instructor.name}
                        className="w-full h-full object-cover object-[center_top] transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <a 
                          href={instructor.social.facebook}
                          className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Facebook className="h-4 w-4" />
                        </a>
                        <a 
                          href={instructor.social.twitter}
                          className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                        <a 
                          href={instructor.social.linkedin}
                          className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
                      <p className="text-primary font-medium mb-3">{instructor.role}</p>
                      {instructor.qualifications && (
                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                          <GraduationCap className="h-4 w-4 text-primary" />
                          <span className="text-sm">{instructor.qualifications}</span>
                        </div>
                      )}
                      <p className="text-muted-foreground text-sm mb-4">{instructor.bio}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Expertise:</p>
                        <div className="flex flex-wrap gap-2">
                          {instructor.expertise.map(skill => (
                            <span 
                              key={skill}
                              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      {instructor.name === "Akhilesh Kumar Panday" ? (
                        <div className="space-y-3 mt-6">
                          <Button 
                            variant="outline" 
                            className="w-full"
                            asChild
                          >
                            <a href={`tel:${instructor.social.phone}`}>
                              <Phone className="h-4 w-4 mr-2" />
                              Call Now
                            </a>
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            asChild
                          >
                            <a href={instructor.social.whatsapp} target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              WhatsApp
                            </a>
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            asChild
                          >
                            <a href={`mailto:${instructor.social.email}`}>
                              <Mail className="h-4 w-4 mr-2" />
                              Email
                            </a>
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          variant="outline" 
                          className="w-full mt-6"
                          asChild
                        >
                          <a href={`mailto:${instructor.social.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Contact Instructor
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Want to Join Our Teaching Team?
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We're always looking for talented instructors to join our team. If you're passionate about teaching and have expertise in your field, we'd love to hear from you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" asChild>
                  <a href="mailto:careers@pscclasses.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Apply to Teach
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 