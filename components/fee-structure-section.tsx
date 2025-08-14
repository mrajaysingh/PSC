'use client';

import { motion } from 'framer-motion';
import { IndianRupee, Calendar, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const feeStructure = [
  {
    class: "9th Class",
    monthlyFee: "₹600",
    yearlyFee: "₹5,000",
    description: "Complete course coverage for 9th standard"
  },
  {
    class: "10th Class",
    monthlyFee: "₹700",
    yearlyFee: "₹6,500",
    description: "Complete course coverage for 10th standard"
  },
  {
    class: "11th Class",
    monthlyFee: "₹600/subject",
    yearlyFee: "₹5,000/subject",
    description: "Per subject pricing - complete course coverage"
  },
  {
    class: "12th Class",
    monthlyFee: "₹600/subject",
    yearlyFee: "₹5,000/subject",
    description: "Per subject pricing - complete course coverage"
  }
];

export function FeeStructureSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Transparent Fee Structure
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the plan that best fits your learning journey with our competitive pricing
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feeStructure.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
                             <Card className="h-full transition-all hover:shadow-lg">
                 <CardHeader className="text-center pb-4">
                   <CardTitle className="text-xl font-bold text-primary">
                     {plan.class}
                   </CardTitle>
                 </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Monthly</span>
                      </div>
                      <span className="font-bold text-lg">{plan.monthlyFee}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Yearly</span>
                      </div>
                      <span className="font-bold text-lg text-primary">{plan.yearlyFee}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground text-center">
                      {plan.class.includes('11th') || plan.class.includes('12th') 
                        ? 'Per subject pricing - choose your subjects'
                        : 'Complete course coverage included'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-card rounded-lg p-6 shadow-sm border max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <IndianRupee className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Payment Options</h3>
            </div>
            <p className="text-muted-foreground">
              We accept UPI, QR codes, online banking, and cash payments. 
              Contact us for installment plans and special discounts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
