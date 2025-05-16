'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { 
  BookOpen, 
  Menu, 
  User, 
  LogIn, 
  X, 
  GraduationCap,
  Home,
  BookOpenCheck,
  Contact,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/30 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:dark:from-white/5 py-2'
        : 'bg-transparent py-4'
    )}>
      <div className="container flex items-center justify-between relative">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="PSC Classes Logo" className="h-10 w-10 sm:h-14 sm:w-14 -my-1" />
          <span className="font-bold text-lg sm:text-xl tracking-tight">PSC Classes</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/courses" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <BookOpenCheck className="h-4 w-4 mr-2" />
                    Courses
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Users className="h-4 w-4 mr-2" />
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Contact className="h-4 w-4 mr-2" />
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2 ml-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm" className="gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Register
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link 
                    href="/" 
                    className="flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <img src="/logo.png" alt="PSC Classes Logo" className="h-8 w-8" />
                    <span className="font-bold text-lg">PSC Classes</span>
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                </div>

                <div className="flex-1 overflow-auto py-4">
                  <nav className="flex flex-col space-y-1">
                    <Link 
                      href="/"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Home className="h-4 w-4" />
                      Home
                    </Link>
                    <Link 
                      href="/courses"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <BookOpenCheck className="h-4 w-4" />
                      Courses
                    </Link>
                    <Link 
                      href="/about"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Users className="h-4 w-4" />
                      About
                    </Link>
                    <Link 
                      href="/contact"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Contact className="h-4 w-4" />
                      Contact
                    </Link>
                  </nav>
                </div>

                <div className="border-t p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/login" className="w-full">
                      <Button variant="outline" className="w-full gap-2" size="sm">
                        <LogIn className="h-4 w-4" />
                        Login
                      </Button>
                    </Link>
                    <Link href="/register" className="w-full">
                      <Button className="w-full gap-2" size="sm">
                        <User className="h-4 w-4" />
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}