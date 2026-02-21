'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Land Your Dream Job with a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Perfect CV
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            Professional CV optimization that gets you noticed. Expert writers craft CVs that showcase your best qualities to recruiters.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/services">
            <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
              Get Your CV Optimized <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <p className="text-muted-foreground">CVs Successfully Optimized</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
            <p className="text-muted-foreground">Interview Success Rate</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <p className="text-muted-foreground">Average Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
