import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground pt-16 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo.png" alt="PSC Classes Logo" className="h-12 w-12" />
              <span className="font-bold text-lg">PSC Classes</span>
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
                <Link href="/register" className="text-muted-foreground hover:text-primary transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses/technical" className="text-muted-foreground hover:text-primary transition-colors">
                  Technical Courses
                </Link>
              </li>
              <li>
                <Link href="/courses/professional" className="text-muted-foreground hover:text-primary transition-colors">
                  Professional Development
                </Link>
              </li>
              <li>
                <Link href="/courses/certifications" className="text-muted-foreground hover:text-primary transition-colors">
                  Certification Programs
                </Link>
              </li>
              <li>
                <Link href="/courses/offline" className="text-muted-foreground hover:text-primary transition-colors">
                  Offline Classes
                </Link>
              </li>
              <li>
                <Link href="/courses/online" className="text-muted-foreground hover:text-primary transition-colors">
                  Online Learning
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <address className="not-italic">
              <p className="mb-2 text-muted-foreground">123 Education Street</p>
              <p className="mb-2 text-muted-foreground">Learning District, ED 54321</p>
              <p className="mb-2 text-muted-foreground">info@pscclasses.com</p>
              <p className="mb-2 text-muted-foreground">+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t py-6 text-center text-muted-foreground">
          <p>© {currentYear} PSC Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}