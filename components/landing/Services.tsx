'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Zap, FileText, Target, BarChart3, Shield } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'CV Rewriting',
    description: 'Complete rewrite focusing on achievements and impact metrics',
  },
  {
    icon: Target,
    title: 'ATS Optimization',
    description: 'Optimized for Applicant Tracking Systems and recruiter algorithms',
  },
  {
    icon: BarChart3,
    title: 'Content Enhancement',
    description: 'Powerful language that highlights your unique value proposition',
  },
  {
    icon: Zap,
    title: 'Formatting & Design',
    description: 'Professional layouts that are both beautiful and ATS-friendly',
  },
  {
    icon: CheckCircle2,
    title: 'Technical Review',
    description: 'Grammar, spelling, and consistency checks across all sections',
  },
  {
    icon: Shield,
    title: 'Interview Coaching',
    description: 'Guidance to discuss your CV achievements confidently',
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Comprehensive CV optimization tailored to your industry and career goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
