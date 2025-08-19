'use client';

import { motion } from 'framer-motion';
import { Play, Clock, Users, Star, IndianRupee, ShoppingCart, Download, Lock, Unlock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

const videoLectures = [
  {
    id: 1,
    title: "Introduction to Mathematics - Class 9",
    subject: "Mathematics",
    class: "9th Class",
    description: "Complete introduction to mathematics fundamentals with practical examples and problem-solving techniques",
    price: 0,
    originalPrice: 299,
    duration: "2h 15m",
    views: 15420,
    rating: 4.9,
    instructor: "Dr. Rajesh Kumar",
    thumbnail: "/courses/basics.jpg",
    isFree: true,
    features: [
      "Complete chapter coverage",
      "Interactive problem solving",
      "Practice exercises",
      "Downloadable notes",
      "Certificate of completion"
    ]
  },
  {
    id: 2,
    title: "Physics Fundamentals - Mechanics",
    subject: "Physics",
    class: "10th Class",
    description: "Comprehensive coverage of mechanics with real-world applications and numerical problems",
    price: 199,
    originalPrice: 399,
    duration: "3h 45m",
    views: 8920,
    rating: 4.8,
    instructor: "Prof. Priya Sharma",
    thumbnail: "/courses/chemistry.jpg",
    isFree: false,
    features: [
      "Complete mechanics coverage",
      "Numerical problem solving",
      "Lab demonstrations",
      "Formula sheets",
      "Previous year questions"
    ]
  },
  {
    id: 3,
    title: "Chemistry Basics - Organic Chemistry",
    subject: "Chemistry",
    class: "11th Class",
    description: "Detailed organic chemistry lectures with reaction mechanisms and practical applications",
    price: 249,
    originalPrice: 499,
    duration: "4h 20m",
    views: 6750,
    rating: 4.7,
    instructor: "Dr. Amit Patel",
    thumbnail: "/courses/chemistry.jpg",
    isFree: false,
    features: [
      "Organic reactions",
      "Mechanism explanations",
      "Practical demonstrations",
      "Reaction charts",
      "Practice problems"
    ]
  },
  {
    id: 4,
    title: "English Grammar Masterclass",
    subject: "English",
    class: "12th Class",
    description: "Complete English grammar course with writing skills and communication techniques",
    price: 0,
    originalPrice: 199,
    duration: "1h 55m",
    views: 12340,
    rating: 4.6,
    instructor: "Ms. Sarah Johnson",
    thumbnail: "/courses/english.jpg",
    isFree: true,
    features: [
      "Grammar rules",
      "Writing techniques",
      "Communication skills",
      "Practice exercises",
      "Speaking practice"
    ]
  },
  {
    id: 5,
    title: "Computer Science - Programming Basics",
    subject: "Computer Science",
    class: "11th Class",
    description: "Learn programming fundamentals with hands-on coding exercises and projects",
    price: 299,
    originalPrice: 599,
    duration: "5h 30m",
    views: 5430,
    rating: 4.9,
    instructor: "Mr. Rahul Verma",
    thumbnail: "/courses/python.jpg",
    isFree: false,
    features: [
      "Programming concepts",
      "Hands-on coding",
      "Project building",
      "Code review",
      "Debugging techniques"
    ]
  },
  {
    id: 6,
    title: "Biology - Cell Biology & Genetics",
    subject: "Biology",
    class: "12th Class",
    description: "Comprehensive cell biology and genetics with detailed explanations and diagrams",
    price: 179,
    originalPrice: 359,
    duration: "3h 10m",
    views: 7890,
    rating: 4.8,
    instructor: "Dr. Meera Singh",
    thumbnail: "/courses/basics.jpg",
    isFree: false,
    features: [
      "Cell structure",
      "Genetic concepts",
      "Microscopic views",
      "Diagrams & charts",
      "Practice questions"
    ]
  }
];

export function VideoLecturesSection() {
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (video: typeof videoLectures[0]) => {
    addToCart({
      id: video.id,
      name: video.title,
      price: video.price,
      image: video.thumbnail,
      type: 'video-lecture'
    });
    toast({
      title: "Added to cart",
      description: `${video.title} has been added to your cart.`,
    });
  };

  const handleBuyNow = (video: typeof videoLectures[0]) => {
    addToCart({
      id: video.id,
      name: video.title,
      price: video.price,
      image: video.thumbnail,
      type: 'video-lecture'
    });
    window.location.href = '/cart';
  };



  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Video Lecture Library
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from expert instructors with our comprehensive video lectures. Mix of free and premium content to suit every learner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoLectures.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transform-gpu bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20">
                <CardHeader className="pb-4">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg mb-4 opacity-0 hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-primary ml-1" />
                      </div>
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex gap-2">
                      <Badge className="bg-primary text-primary-foreground">
                        {video.class}
                      </Badge>
                      {video.isFree ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <Unlock className="h-3 w-3 mr-1" />
                          Free
                        </Badge>
                      ) : (
                        <Badge variant="destructive">
                          <Lock className="h-3 w-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                    </div>
                    
                    {!video.isFree && video.originalPrice > video.price && (
                      <Badge variant="destructive" className="absolute top-2 right-2">
                        {Math.round(((video.originalPrice - video.price) / video.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold mb-2 line-clamp-2">
                    {video.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Instructor */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{video.instructor}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{video.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{video.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span>{video.rating}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      {video.isFree ? (
                        <div className="flex items-center gap-1">
                          <span className="text-2xl font-bold text-green-600">Free</span>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-1">
                            <IndianRupee className="h-5 w-5" />
                            <span className="text-2xl font-bold text-green-600">{video.price}</span>
                          </div>
                          {video.originalPrice > video.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{video.originalPrice}
                            </span>
                          )}
                        </>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">What's included:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {video.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                        {video.features.length > 3 && (
                          <div className="text-xs text-muted-foreground">
                            +{video.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button 
                        onClick={() => handleBuyNow(video)}
                        className="flex-1"
                        size="sm"
                      >
                        Buy Now
                      </Button>
                      <Button 
                        onClick={() => handleAddToCart(video)}
                        variant="outline" 
                        className="flex-1"
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="px-8">
            View All Video Lectures
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
