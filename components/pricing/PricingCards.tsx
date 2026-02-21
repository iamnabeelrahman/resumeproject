'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 99,
    description: 'Perfect for first-time optimizers',
    features: [
      'CV review & optimization',
      'ATS formatting & keywords',
      'Basic restructuring',
      'Email support',
      'Delivery: 5 business days',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 199,
    description: 'Most popular - Recommended',
    features: [
      'Everything in Basic, plus:',
      'Complete CV rewrite',
      'Cover letter optimization',
      'LinkedIn profile optimization',
      'Interview coaching (1 hour)',
      'Priority support',
      'Delivery: 3 business days',
    ],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 399,
    description: 'For serious career changers',
    features: [
      'Everything in Professional, plus:',
      'Custom career positioning statement',
      'Industry-specific optimization',
      'Multiple CV versions (roles)',
      'Interview coaching (3 hours)',
      'Phone support available',
      'Delivery: 2 business days',
      'Money-back guarantee',
    ],
    cta: 'Go Premium',
    highlighted: false,
  },
];

export default function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {pricingPlans.map((plan) => (
        <Card
          key={plan.id}
          className={`relative flex flex-col transition-all ${
            plan.highlighted
              ? 'md:scale-105 border-blue-600 shadow-xl bg-gradient-to-b from-blue-50 to-white'
              : 'hover:shadow-lg'
          }`}
        >
          {plan.highlighted && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-2xl">{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-foreground">${plan.price}</span>
              <span className="text-muted-foreground ml-2">one-time</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Link href={`/signup?plan=${plan.id}`} className="w-full">
              <Button
                size="lg"
                className="w-full"
                variant={plan.highlighted ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
