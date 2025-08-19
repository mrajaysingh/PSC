'use client';

import { motion } from 'framer-motion';
import { Check, IndianRupee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const pricingPlans = [
  {
    id: 1,
    class: "9th Class",
    description: "Complete course coverage included",
    standard: "9th standard",
    monthly: 600,
    yearly: 5000,
    features: [
      "Complete course coverage",
      "Expert guidance",
      "Digital certificates",
      "Flexible scheduling"
    ]
  },
  {
    id: 2,
    class: "10th Class",
    description: "Complete course coverage included",
    standard: "10th standard",
    monthly: 700,
    yearly: 6500,
    features: [
      "Complete course coverage",
      "Expert guidance",
      "Digital certificates",
      "Flexible scheduling"
    ]
  },
  {
    id: 3,
    class: "11th Class",
    description: "Complete course coverage included",
    standard: "11th standard",
    monthly: 600,
    yearly: 5000,
    perSubject: true,
    features: [
      "Complete course coverage",
      "Expert guidance",
      "Digital certificates",
      "Flexible scheduling"
    ]
  },
  {
    id: 4,
    class: "12th Class",
    description: "Complete course coverage included",
    standard: "12th standard",
    monthly: 600,
    yearly: 5000,
    perSubject: true,
    features: [
      "Complete course coverage",
      "Expert guidance",
      "Digital certificates",
      "Flexible scheduling"
    ]
  }
];

export function PricingSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Transparent Fee Structure
          </h2>
          <p className="text-lg text-muted-foreground">
            Clear and affordable pricing for quality education
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 w-full">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transform-gpu bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Plan Details */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{plan.id}</span>
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-primary">
                            {plan.class}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {plan.description}
                          </p>
                        </div>
                      </div>
                      
                      <Badge variant="secondary" className="w-fit">
                        {plan.standard}
                      </Badge>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <IndianRupee className="h-5 w-5" />
                            <span className="text-3xl font-bold text-green-600">{plan.monthly}</span>
                            {plan.perSubject && <span className="text-sm text-muted-foreground">/subject</span>}
                          </div>
                          <p className="text-sm text-muted-foreground">Monthly</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <IndianRupee className="h-5 w-5" />
                            <span className="text-3xl font-bold text-green-600">{plan.yearly}</span>
                            {plan.perSubject && <span className="text-sm text-muted-foreground">/subject</span>}
                          </div>
                          <p className="text-sm text-muted-foreground">Yearly</p>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button className="flex-1">
                          Get Course
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Contact Us
                        </Button>
                      </div>
                    </div>

                    {/* Right Column - Features */}
                    <div className="flex-1">
                      <h4 className="font-semibold mb-4 text-lg">What's Included:</h4>
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
