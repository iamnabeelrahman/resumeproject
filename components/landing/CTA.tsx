'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Ready to Transform Your CV?
        </h2>
        <p className="text-xl mb-8 text-blue-50 text-balance">
          Start your journey to landing dream interviews today. First consultation is free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="gap-2 bg-white text-blue-600 hover:bg-blue-50">
              Get Started Now <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 bg-transparent">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
