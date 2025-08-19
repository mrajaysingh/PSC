'use client';

import { FileText, Download, ShoppingCart, IndianRupee, Star, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

const pdfNotes = [
  {
    id: 1,
    title: "Mathematics Complete Notes",
    subject: "Mathematics",
    class: "9th Class",
    description: "Comprehensive mathematics notes covering all topics including algebra, geometry, and trigonometry",
    price: 299,
    originalPrice: 499,
    pages: 150,
    downloads: 1250,
    rating: 4.8,
    lastUpdated: "2 weeks ago",
    image: "/courses/basics.jpg",
    features: [
      "Complete syllabus coverage",
      "Solved examples",
      "Practice questions",
      "Important formulas",
      "Previous year questions"
    ]
  },
  {
    id: 2,
    title: "Science Notes - Physics",
    subject: "Physics",
    class: "10th Class",
    description: "Detailed physics notes with diagrams, formulas, and numerical problems",
    price: 249,
    originalPrice: 399,
    pages: 120,
    downloads: 980,
    rating: 4.7,
    lastUpdated: "1 week ago",
    image: "/courses/chemistry.jpg",
    features: [
      "Chapter-wise notes",
      "Numerical problems",
      "Important diagrams",
      "Formula sheet",
      "MCQ practice"
    ]
  },
  {
    id: 3,
    title: "Chemistry Complete Guide",
    subject: "Chemistry",
    class: "11th Class",
    description: "Comprehensive chemistry notes with practical examples and reactions",
    price: 279,
    originalPrice: 449,
    pages: 140,
    downloads: 850,
    rating: 4.9,
    lastUpdated: "3 days ago",
    image: "/courses/chemistry.jpg",
    features: [
      "Organic chemistry",
      "Inorganic chemistry",
      "Physical chemistry",
      "Chemical reactions",
      "Lab procedures"
    ]
  },
  {
    id: 4,
    title: "English Literature Notes",
    subject: "English",
    class: "12th Class",
    description: "Complete English literature notes with grammar, writing skills, and literature analysis",
    price: 199,
    originalPrice: 349,
    pages: 100,
    downloads: 1100,
    rating: 4.6,
    lastUpdated: "5 days ago",
    image: "/courses/english.jpg",
    features: [
      "Grammar rules",
      "Writing skills",
      "Literature analysis",
      "Vocabulary building",
      "Sample essays"
    ]
  },
  {
    id: 5,
    title: "Computer Science Notes",
    subject: "Computer Science",
    class: "11th Class",
    description: "Complete computer science notes covering programming, databases, and web development",
    price: 329,
    originalPrice: 549,
    pages: 180,
    downloads: 720,
    rating: 4.8,
    lastUpdated: "1 week ago",
    image: "/courses/python.jpg",
    features: [
      "Programming concepts",
      "Database management",
      "Web development",
      "Practical examples",
      "Project ideas"
    ]
  },
  {
    id: 6,
    title: "Biology Complete Notes",
    subject: "Biology",
    class: "12th Class",
    description: "Comprehensive biology notes with diagrams, classifications, and important concepts",
    price: 259,
    originalPrice: 429,
    pages: 160,
    downloads: 890,
    rating: 4.7,
    lastUpdated: "4 days ago",
    image: "/courses/basics.jpg",
    features: [
      "Cell biology",
      "Human anatomy",
      "Plant biology",
      "Ecology",
      "Important diagrams"
    ]
  }
];

export function PdfNotesSection() {
  const { addToCart, state } = useCart();

  const handleAddToCart = (note: typeof pdfNotes[0]) => {
    addToCart({
      id: note.id,
      name: note.title,
      price: note.price,
      image: note.image,
      type: 'pdf-note'
    });
    toast({
      title: "Added to cart",
      description: `${note.title} has been added to your cart.`,
    });
  };

  const handleBuyNow = (note: typeof pdfNotes[0]) => {
    // Add to cart and redirect to checkout
    addToCart({
      id: note.id,
      name: note.title,
      price: note.price,
      image: note.image,
      type: 'pdf-note'
    });
    // Redirect to cart page
    window.location.href = '/cart';
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium PDF Study Notes
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive, well-structured notes to ace your exams. Download instantly and study anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfNotes.map((note, index) => (
            <div
              key={note.id}
              className="transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl transform-gpu bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20">
                <CardHeader className="pb-4">
                  <div className="relative">
                    <img 
                      src={note.image} 
                      alt={note.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      {note.class}
                    </Badge>
                    {note.originalPrice > note.price && (
                      <Badge variant="destructive" className="absolute top-2 left-2">
                        {Math.round(((note.originalPrice - note.price) / note.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold mb-2 line-clamp-2">
                    {note.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {note.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <IndianRupee className="h-5 w-5" />
                        <span className="text-2xl font-bold text-green-600">{note.price}</span>
                      </div>
                      {note.originalPrice > note.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{note.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>{note.pages} pages</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{note.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span>{note.rating}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">What's included:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {note.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                        {note.features.length > 3 && (
                          <div className="text-xs text-muted-foreground">
                            +{note.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Last Updated */}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Updated {note.lastUpdated}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button 
                        onClick={() => handleBuyNow(note)}
                        className="flex-1"
                        size="sm"
                      >
                        Buy Now
                      </Button>
                      <Button 
                        onClick={() => handleAddToCart(note)}
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
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            View All PDF Notes
          </Button>
        </div>
      </div>
    </section>
  );
}
