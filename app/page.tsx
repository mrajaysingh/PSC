import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { PricingSection } from '@/components/pricing-section';
import { CoursesSection } from '@/components/courses-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { StatsSection } from '@/components/stats-section';
import { CTASection } from '@/components/cta-section';
import { FounderSection } from '@/components/founder-section';
import { GallerySection } from '@/components/gallery-section';
import { StaffSection } from '@/components/staff-section';
import { CertificateSection } from '@/components/certificate-section';
import { FloatingThemeToggle } from '@/components/floating-theme-toggle';
import { FloatingAdminButton } from '@/components/floating-admin-button';
import dynamic from 'next/dynamic';

// Dynamically import heavy components to reduce initial bundle size
const PdfNotesSection = dynamic(() => import('@/components/pdf-notes-section').then(mod => ({ default: mod.PdfNotesSection })), {
  loading: () => <div className="py-16 bg-muted/30"><div className="container"><div className="animate-pulse">Loading PDF Notes...</div></div></div>,
  ssr: false
});

const VideoLecturesSection = dynamic(() => import('@/components/video-lectures-section').then(mod => ({ default: mod.VideoLecturesSection })), {
  loading: () => <div className="py-16 bg-gradient-to-br from-background to-muted/20"><div className="container"><div className="animate-pulse">Loading Video Lectures...</div></div></div>,
  ssr: false
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FounderSection />
        <FeaturesSection />
        <PricingSection />
        <PdfNotesSection />
        <VideoLecturesSection />
        <GallerySection />
        <StaffSection />
        <CoursesSection />
        <CertificateSection />
        <TestimonialsSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingThemeToggle />
      <FloatingAdminButton />
    </>
  );
}