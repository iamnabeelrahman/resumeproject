'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'Google',
    image: '👩‍💼',
    text: 'The CV optimization was incredible. I went from 2-3 interviews to 15+ interviews per month. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Meta',
    image: '👨‍💼',
    text: 'Got my dream role within 2 months of optimization. The team really understands what recruiters are looking for.',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'UX Designer',
    company: 'Apple',
    image: '👩‍💻',
    text: 'Best investment I made for my career. Went from ignored to top candidate. Worth every penny!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by Job Seekers
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Join thousands who have landed their dream jobs with optimized CVs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-balance">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
