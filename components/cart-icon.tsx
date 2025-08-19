'use client';

import Link from 'next/link';
import { ShoppingCart, Trash2, IndianRupee, ArrowRight, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CartIcon() {
  const { state, removeFromCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="/cart">
        <Button variant="ghost" size="icon" className="relative h-9 w-9">
          <ShoppingCart className="h-5 w-5" />
          {state.itemCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs font-bold"
            >
              {state.itemCount > 99 ? '99+' : state.itemCount}
            </Badge>
          )}
        </Button>
      </Link>

      {/* Hover Dropdown */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-80 bg-background border-2 border-primary/20 rounded-lg shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Shopping Cart</h3>
                {state.itemCount > 0 && (
                  <Badge variant="secondary">
                    {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'}
                  </Badge>
                )}
              </div>
            </div>

            {/* Cart Content */}
            {state.items.length === 0 ? (
              // Empty Cart State
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <Package className="h-8 w-8 text-muted-foreground" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Your cart is empty</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Add some PDF notes or courses to get started
                </p>
                <Link href="/">
                  <Button className="flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Start Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              // Cart Items
              <>
                <div className="max-h-64 overflow-y-auto">
                  {state.items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 border-b border-border/50 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex gap-3">
                        {/* Item Image */}
                        <div className="flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                        </div>

                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm truncate">
                                {item.name}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                Qty: {item.quantity || 1}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={(e) => {
                                e.preventDefault();
                                handleRemoveItem(item.id);
                              }}
                              className="h-6 w-6 text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center gap-1 mt-1">
                            <IndianRupee className="h-3 w-3" />
                            <span className="font-semibold text-sm text-green-600">
                              {(item.price * (item.quantity || 1)).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer with Total and Checkout */}
                <div className="p-4 bg-muted/30 border-t border-border">
                  <div className="space-y-3">
                    {/* Total */}
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Total:</span>
                      <div className="flex items-center gap-1">
                        <IndianRupee className="h-4 w-4" />
                        <span className="font-bold text-lg text-green-600">
                          {state.total.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Link href="/cart" className="block">
                      <Button className="w-full flex items-center gap-2">
                        <span>Checkout</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>

                    {/* View Cart Link */}
                    <Link href="/cart" className="block">
                      <Button variant="outline" className="w-full text-sm">
                        View Full Cart
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
