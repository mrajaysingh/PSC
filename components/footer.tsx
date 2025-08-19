'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="bg-card text-card-foreground pt-16 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo.png" alt="PSC Classes Logo" className="h-16 w-16" />
              <span className="font-bold text-xl">PSC Classes</span>
            </div>
            <p className="text-muted-foreground">
              Providing quality education and skill development since 2016. Transforming careers with industry-focused training.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/verify-certificate" className="text-muted-foreground hover:text-primary transition-colors">
                  Verify Certificate
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/courses?category=Web Development" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses?category=Computer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Computer Courses
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses?category=Programming" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Programming
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses?category=Language" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Language Courses
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses?category=Accounting" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Accounting
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <address className="not-italic">
              <p className="mb-2 text-muted-foreground">PSC Classes, Near Govt. Hospital</p>
              <p className="mb-2 text-muted-foreground">Perinthalmanna, Kerala 679322</p>
              <p className="mb-2 text-muted-foreground">info@pscclasses.com</p>
              <p className="mb-2 text-muted-foreground">+91 94532 57979</p>
            </address>
          </div>
        </div>
        
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center text-muted-foreground">© {currentYear} PSC Classes. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Powered by</span>
              <a href="https://skybersupport.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Image
                  src={theme === 'light' ? '/AUTHORIZATION/skyber-light.png' : '/AUTHORIZATION/skyber.png'}
                  alt="Skyber Logo"
                  width={169}
                  height={51}
                  className="h-[52px] w-auto"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}