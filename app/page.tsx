import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { CoursesSection } from '@/components/courses-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { StatsSection } from '@/components/stats-section';
import { CTASection } from '@/components/cta-section';
import { FounderSection } from '@/components/founder-section';
import { GallerySection } from '@/components/gallery-section';
import { StaffSection } from '@/components/staff-section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FounderSection />
        <FeaturesSection />
        <GallerySection />
        <StaffSection />
        <CoursesSection />
        <TestimonialsSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}