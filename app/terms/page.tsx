import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { TableOfContents } from '@/components/terms/table-of-contents';
import { HeroSection } from '@/components/terms/hero-section';

interface Section {
  id: string;
  title: string;
  content: string;
  list?: string[];
}

const sections: Section[] = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: 'Welcome to PSC Classes. By accessing our services, you agree to these terms.'
  },
  {
    id: 'services',
    title: '2. Services',
    content: 'Our educational services include:',
    list: [
      'Classroom training',
      'Online courses',
      'Study materials',
      'Practice tests'
    ]
  },
  {
    id: 'enrollment',
    title: '3. Enrollment',
    content: 'Enrollment policies and procedures:',
    list: [
      'Course registration requirements',
      'Fee payment terms',
      'Attendance policies',
      'Course completion criteria'
    ]
  },
  {
    id: 'payment',
    title: '4. Payment Terms',
    content: 'Payment and refund policies:',
    list: [
      'Fee structure',
      'Payment methods',
      'Refund conditions',
      'Late payment policies'
    ]
  },
  {
    id: 'conduct',
    title: '5. Student Conduct',
    content: 'Expected behavior and responsibilities:',
    list: [
      'Academic integrity',
      'Classroom behavior',
      'Use of facilities',
      'Disciplinary actions'
    ]
  },
  {
    id: 'materials',
    title: '6. Course Materials',
    content: 'Regarding course materials and intellectual property:',
    list: [
      'Copyright protection',
      'Usage restrictions',
      'Distribution limitations',
      'Material updates'
    ]
  },
  {
    id: 'privacy',
    title: '7. Privacy',
    content: 'How we handle your information:',
    list: [
      'Data collection',
      'Information usage',
      'Data protection',
      'Privacy rights'
    ]
  },
  {
    id: 'liability',
    title: '8. Liability',
    content: 'Limitations of liability:',
    list: [
      'Service interruptions',
      'Content accuracy',
      'Third-party services',
      'Damage claims'
    ]
  },
  {
    id: 'termination',
    title: '9. Termination',
    content: 'Account or service termination conditions:',
    list: [
      'Voluntary termination',
      'Involuntary termination',
      'Refund eligibility',
      'Appeals process'
    ]
  },
  {
    id: 'changes',
    title: '10. Changes to Terms',
    content: 'We reserve the right to modify these terms at any time. We will notify students of any changes by posting the new terms on our website. Continued use of our services after changes constitutes acceptance of the new terms.'
  },
  {
    id: 'contact',
    title: '11. Contact Information',
    content: 'If you have any questions about these Terms & Conditions, please contact us at:',
    list: [
      'Email: legal@pscclasses.com',
      'Phone: +91 94532 57979',
      'Address: PSC Classes, Shankargarh, Uttar Pradesh, India - 212108'
    ]
  }
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <TableOfContents sections={sections} />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
} 