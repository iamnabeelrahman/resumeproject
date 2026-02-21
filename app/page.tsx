import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import BeforeAfter from '@/components/landing/BeforeAfter';
import Testimonials from '@/components/landing/Testimonials';
import CTA from '@/components/landing/CTA';

export const metadata = {
  title: 'CV Optimizer - Professional CV Writing & Optimization Service',
  description: 'Transform your CV into a powerful career tool. Professional editing, optimization, and formatting to land your dream job.',
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-background to-slate-50">
        <Hero />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
