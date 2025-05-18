'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { 
  BookOpen, 
  Menu, 
  X, 
  GraduationCap,
  Home,
  BookOpenCheck,
  Contact,
  Users,
  Award,
  FileText,
  Shield,
  RefreshCw,
  AlertCircle,
  UserCheck,
  Copyright,
  HelpCircle,
  HeadphonesIcon,
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
import { Sheet, SheetContentWithoutClose, SheetTrigger } from '@/components/ui/sheet';
import { VerifyCertificateDialog } from '@/components/verify-certificate-dialog';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMainMenuOpen(false);
      setIsMobileMenuOpen(false);
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/30 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:dark:from-white/5 py-2'
        : 'bg-transparent py-4'
    )}>
      <div className="container flex items-center justify-between relative">
        <div className="flex items-center gap-4">
          {/* Main Menu (Left Side) */}
          <div className="hidden md:block">
            <Sheet open={isMainMenuOpen} onOpenChange={setIsMainMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContentWithoutClose side="left" className="w-[300px] sm:w-[400px] p-0 overflow-visible">
                <div className="flex flex-col h-full relative">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link 
                      href="/" 
                      className="flex items-center space-x-2"
                    >
                      <img src="/logo.png" alt="PSC Classes Logo" className="h-10 w-10" />
                      <span className="font-bold text-xl">PSC Classes</span>
                    </Link>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </SheetTrigger>
                  </div>

                  <div className="relative flex-1">
                    <div className="absolute inset-0 overflow-y-auto overflow-x-visible">
                      <div className="relative min-h-full py-6">
                        <nav className="space-y-8">
                          {/* Company Section */}
                          <div className="px-6">
                            <h3 className="text-lg font-bold mb-4 text-foreground">Company</h3>
                            <div className="space-y-3 bg-muted/50 rounded-xl p-3">
                              <Link 
                                href="/about"
                                className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg group relative bg-background/80"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <Users className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                  <div className="font-semibold">About</div>
                                  <div className="text-sm text-muted-foreground">Learn about our mission and values</div>
                                </div>
                                <div className="fixed left-[400px] top-1/2 -translate-y-1/2 w-[calc(70vw-2rem)] h-[80vh] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none transform scale-95 group-hover:scale-100 z-[60] overflow-hidden">
                                  <img 
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=300&h=300" 
                                    alt="About Preview" 
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                                </div>
                              </Link>
                              <Link 
                                href="/contact"
                                className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg group relative bg-background/80"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <Contact className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                  <div className="font-semibold">Contact</div>
                                  <div className="text-sm text-muted-foreground">Get in touch with us</div>
                                </div>
                                <div className="fixed left-[400px] top-1/2 -translate-y-1/2 w-[calc(70vw-2rem)] h-[80vh] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none transform scale-95 group-hover:scale-100 z-[60] overflow-hidden">
                                  <img 
                                    src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=300&h=300" 
                                    alt="Contact Preview" 
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                                </div>
                              </Link>
                              <Link 
                                href="/instructors"
                                className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg group relative bg-background/80"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <GraduationCap className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                  <div className="font-semibold">Instructor Profiles</div>
                                  <div className="text-sm text-muted-foreground">Meet our expert instructors</div>
                                </div>
                                <div className="fixed left-[400px] top-1/2 -translate-y-1/2 w-[calc(70vw-2rem)] h-[80vh] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none transform scale-95 group-hover:scale-100 z-[60] overflow-hidden">
                                  <img 
                                    src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?auto=format&fit=crop&q=80&w=300&h=300" 
                                    alt="Instructors Preview" 
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Legal Section */}
                          <div className="px-6">
                            <h3 className="text-lg font-bold mb-4 text-foreground">Legal</h3>
                            <div className="space-y-3 bg-muted/50 rounded-xl p-3">
                              <Link 
                                href="/terms"
                                className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg group relative bg-background/80"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <FileText className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                  <div className="font-semibold">Terms & Conditions</div>
                                  <div className="text-sm text-muted-foreground">Our terms of service and usage</div>
                                </div>
                                <div className="fixed left-[400px] top-1/2 -translate-y-1/2 w-[calc(70vw-2rem)] h-[80vh] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none transform scale-95 group-hover:scale-100 z-[60] overflow-hidden">
                                  <img 
                                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=300&h=300" 
                                    alt="Terms Preview" 
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                                </div>
                              </Link>
                              <Link 
                                href="/privacy"
                                className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg group bg-background/80"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <Shield className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                  <div className="font-semibold">Privacy Policy</div>
                                  <div className="text-sm text-muted-foreground">How we protect your data</div>
                                </div>
                                <div className="fixed left-[400px] top-1/2 -translate-y-1/2 w-[calc(70vw-2rem)] h-[80vh] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none transform scale-95 group-hover:scale-100 z-[60] overflow-hidden">
                                  <img 
                                    src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200" 
                                    alt="Privacy Preview" 
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                                </div>
                              </Link>
                              <Link 
                                href="/refund"
                                className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg group bg-background/80"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <RefreshCw className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                  <div className="font-semibold">Refund Policy</div>
                                  <div className="text-sm text-muted-foreground">Our money-back guarantee terms</div>
                                </div>
                                <div className="fixed left-[400px] top-1/2 -translate-y-1/2 w-[calc(70vw-2rem)] h-[80vh] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none transform scale-95 group-hover:scale-100 z-[60] overflow-hidden">
                                  <img 
                                    src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=1200" 
                                    alt="Refund Preview" 
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                                </div>
                              </Link>
                              <Link 
                                href="/disclaimer"
                                className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg group bg-background/80"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <AlertCircle className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                  <div className="font-semibold">Disclaimer</div>
                                  <div className="text-sm text-muted-foreground">Important information and notices</div>
                                </div>
                                <div className="fixed left-[400px] top-1/2 -translate-y-1/2 w-[calc(70vw-2rem)] h-[80vh] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none transform scale-95 group-hover:scale-100 z-[60] overflow-hidden">
                                  <img 
                                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200" 
                                    alt="Disclaimer Preview" 
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                                </div>
                              </Link>
                              <Link 
                                href="/code-of-conduct"
                                className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg group bg-background/80"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <UserCheck className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                  <div className="font-semibold">Code of Conduct</div>
                                  <div className="text-sm text-muted-foreground">Community guidelines and behavior</div>
                                </div>
                                <div className="fixed left-[400px] top-1/2 -translate-y-1/2 w-[calc(70vw-2rem)] h-[80vh] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none transform scale-95 group-hover:scale-100 z-[60] overflow-hidden">
                                  <img 
                                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200" 
                                    alt="Code of Conduct Preview" 
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                                </div>
                              </Link>
                              <Link 
                                href="/copyright"
                                className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg group bg-background/80"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <Copyright className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                  <div className="font-semibold">Copyright Policy</div>
                                  <div className="text-sm text-muted-foreground">Intellectual property protection</div>
                                </div>
                                <div className="fixed left-[400px] top-1/2 -translate-y-1/2 w-[calc(70vw-2rem)] h-[80vh] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none transform scale-95 group-hover:scale-100 z-[60] overflow-hidden">
                                  <img 
                                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                                    alt="Copyright Preview" 
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Help Section */}
                          <div className="px-6">
                            <h3 className="text-lg font-bold mb-4 text-foreground">Help</h3>
                            <div className="space-y-3 bg-muted/50 rounded-xl p-3">
                              <Link 
                                href="/faqs"
                                className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg group relative bg-background/80"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <HelpCircle className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                  <div className="font-semibold">FAQs</div>
                                  <div className="text-sm text-muted-foreground">Frequently asked questions</div>
                                </div>
                                <div className="fixed left-[400px] top-1/2 -translate-y-1/2 w-[calc(70vw-2rem)] h-[80vh] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none transform scale-95 group-hover:scale-100 z-[60] overflow-hidden">
                                  <img 
                                    src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=300&h=300" 
                                    alt="FAQs Preview" 
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                                </div>
                              </Link>
                              <Link 
                                href="/support"
                                className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg group relative bg-background/80"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                  <HeadphonesIcon className="h-5 w-5" />
                                </div>
                                <div className="relative z-10">
                                  <div className="font-semibold">Support / Help Center</div>
                                  <div className="text-sm text-muted-foreground">Get help with your queries</div>
                                </div>
                                <div className="fixed left-[400px] top-1/2 -translate-y-1/2 w-[calc(70vw-2rem)] h-[80vh] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none transform scale-95 group-hover:scale-100 z-[60] overflow-hidden">
                                  <img 
                                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=300&h=300" 
                                    alt="Support Preview" 
                                    className="w-full h-full object-cover rounded-2xl"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Featured Image */}
                          <div className="px-6 mt-6">
                            <div className="relative h-48 rounded-xl overflow-hidden group">
                              <img 
                                src="https://res.cloudinary.com/dwos0fnlt/image/upload/v1747489991/campus.webp" 
                                alt="Campus Preview" 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-6">
                                <div className="text-white">
                                  <h4 className="text-xl font-bold mb-1">Visit Our Campus</h4>
                                  <p className="text-white/90">Experience world-class facilities</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContentWithoutClose>
            </Sheet>
          </div>

          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="PSC Classes Logo" className="h-12 w-12 sm:h-14 sm:w-14 -my-1" />
            <span className="font-bold text-lg sm:text-xl tracking-tight">PSC Classes</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu className="flex items-center">
            <NavigationMenuList className="flex items-center gap-1">
              <NavigationMenuItem className="flex items-center">
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "flex items-center")}>
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex items-center">
                <Link href="/courses" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "flex items-center")}>
                    <BookOpenCheck className="h-4 w-4 mr-2" />
                    Courses
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex items-center">
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "flex items-center")}>
                    <Users className="h-4 w-4 mr-2" />
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex items-center">
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "flex items-center")}>
                    <Contact className="h-4 w-4 mr-2" />
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2 ml-4">
            <ThemeToggle />
            <VerifyCertificateDialog />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContentWithoutClose side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link 
                    href="/" 
                    className="flex items-center space-x-2"
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
                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col p-4 space-y-8">
                    {/* Main Navigation */}
                    <div>
                      <h3 className="text-lg font-bold mb-4 text-foreground px-3">Main Navigation</h3>
                      <div className="space-y-3 bg-muted/50 rounded-xl p-3">
                    <Link 
                      href="/"
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <Home className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">Home</div>
                            <div className="text-sm text-muted-foreground">Back to homepage</div>
                          </div>
                    </Link>
                    <Link 
                      href="/courses"
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <BookOpenCheck className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">Courses</div>
                            <div className="text-sm text-muted-foreground">Browse our courses</div>
                          </div>
                    </Link>
                      </div>
                    </div>

                    {/* Company Section */}
                    <div>
                      <h3 className="text-lg font-bold mb-4 text-foreground px-3">Company</h3>
                      <div className="space-y-3 bg-muted/50 rounded-xl p-3">
                    <Link 
                      href="/about"
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">About</div>
                            <div className="text-sm text-muted-foreground">Learn about our mission</div>
                          </div>
                    </Link>
                    <Link 
                      href="/contact"
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <Contact className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">Contact</div>
                            <div className="text-sm text-muted-foreground">Get in touch with us</div>
                          </div>
                        </Link>
                        <Link 
                          href="/instructors" 
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <GraduationCap className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">Instructor Profiles</div>
                            <div className="text-sm text-muted-foreground">Meet our expert instructors</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Legal Section */}
                    <div>
                      <h3 className="text-lg font-bold mb-4 text-foreground px-3">Legal</h3>
                      <div className="space-y-3 bg-muted/50 rounded-xl p-3">
                        <Link 
                          href="/terms" 
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">Terms & Conditions</div>
                            <div className="text-sm text-muted-foreground">Our terms of service</div>
                          </div>
                        </Link>
                        <Link 
                          href="/privacy" 
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <Shield className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">Privacy Policy</div>
                            <div className="text-sm text-muted-foreground">How we protect your data</div>
                          </div>
                        </Link>
                        <Link 
                          href="/refund" 
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <RefreshCw className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">Refund Policy</div>
                            <div className="text-sm text-muted-foreground">Money-back guarantee terms</div>
                          </div>
                        </Link>
                        <Link 
                          href="/disclaimer" 
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <AlertCircle className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">Disclaimer</div>
                            <div className="text-sm text-muted-foreground">Important notices</div>
                          </div>
                        </Link>
                        <Link 
                          href="/code-of-conduct" 
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <UserCheck className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">Code of Conduct</div>
                            <div className="text-sm text-muted-foreground">Community guidelines</div>
                          </div>
                        </Link>
                        <Link 
                          href="/copyright" 
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <Copyright className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">Copyright Policy</div>
                            <div className="text-sm text-muted-foreground">IP protection</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Help Section */}
                    <div>
                      <h3 className="text-lg font-bold mb-4 text-foreground px-3">Help</h3>
                      <div className="space-y-3 bg-muted/50 rounded-xl p-3">
                        <Link 
                          href="/faqs" 
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <HelpCircle className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">FAQs</div>
                            <div className="text-sm text-muted-foreground">Frequently asked questions</div>
                          </div>
                        </Link>
                        <Link 
                          href="/support" 
                          className="flex items-center gap-3 p-3 text-base hover:bg-muted transition-all duration-200 rounded-lg bg-background/80"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <HeadphonesIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">Support / Help Center</div>
                            <div className="text-sm text-muted-foreground">Get help with queries</div>
                          </div>
                    </Link>
                      </div>
                    </div>

                    {/* Featured Image - Same as Sidebar */}
                    <div className="px-3">
                      <div className="relative h-48 rounded-xl overflow-hidden group">
                        <img 
                          src="https://res.cloudinary.com/dwos0fnlt/image/upload/v1747489991/campus.webp" 
                          alt="Campus Preview" 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-6">
                          <div className="text-white">
                            <h4 className="text-xl font-bold mb-1">Visit Our Campus</h4>
                            <p className="text-white/90">Experience world-class facilities</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="p-4 border-t">
                  <div className="w-[95%] mx-auto">
                  <VerifyCertificateDialog />
                  </div>
                </div>
              </div>
            </SheetContentWithoutClose>
          </Sheet>
        </div>
      </div>
    </header>
  );
}