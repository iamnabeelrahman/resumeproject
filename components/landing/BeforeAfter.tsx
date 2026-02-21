'use client';

import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Real Results from Our Clients
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            See how we transform CVs to get interviews
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Before */}
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
              Before
            </p>
            <Card className="p-6 bg-slate-100 border-slate-200">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-slate-600">Product Manager</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Experience</p>
                  <p className="text-slate-600">Worked at TechCorp for 5 years. Did various things in product management.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Skills</p>
                  <p className="text-slate-600">Leadership, communication, problem solving, Excel, PowerPoint</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Achievements</p>
                  <p className="text-slate-600">Helped improve processes and worked with teams.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-12 h-12 text-blue-600 hidden lg:block" />
          </div>

          {/* After */}
          <div>
            <p className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">
              After Optimization
            </p>
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-blue-900">John Smith</p>
                  <p className="text-blue-700">Product Manager | SaaS Growth | Data-Driven</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Key Achievements</p>
                  <ul className="text-blue-800 space-y-1 list-disc list-inside">
                    <li>Led 3 product launches, growing revenue 250%</li>
                    <li>Increased team productivity by 40% through process automation</li>
                    <li>Managed $2M+ annual budget and cross-functional teams</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Core Competencies</p>
                  <p className="text-blue-800">Product Strategy • Team Leadership • Data Analytics • Agile Methodology • Stakeholder Management</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-400 mb-2">5</p>
            <p className="text-muted-foreground">Interviews before optimization</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">23</p>
            <p className="text-muted-foreground">Interviews after optimization</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600 mb-2">3</p>
            <p className="text-muted-foreground">Job offers received</p>
          </div>
        </div>
      </div>
    </section>
  );
}
