'use client';

import Link from 'next/link';
import { ShoppingCart, Trash2, IndianRupee, ArrowRight, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';

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
      {isHovered && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-background border-2 border-primary/20 rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-200 ease-in-out">
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
                  <div
                    key={item.id}
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
                        <h4 className="font-medium text-sm line-clamp-1">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground capitalize">
                            {item.type.replace('-', ' ')}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Qty: {item.quantity || 1}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <IndianRupee className="h-3 w-3" />
                          <span className="font-semibold text-sm">
                            {item.price}
                          </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id)}
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 bg-muted/30 border-t border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold">Total:</span>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="h-4 w-4" />
                    <span className="font-bold text-lg">{state.total}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link href="/cart" className="flex-1">
                    <Button className="w-full flex items-center gap-2" size="sm">
                      <ArrowRight className="h-4 w-4" />
                      Checkout
                    </Button>
                  </Link>
                </div>
                
                <Link href="/cart" className="block text-center mt-2">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    View full cart
                  </span>
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
