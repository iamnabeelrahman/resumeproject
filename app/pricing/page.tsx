import PricingCards from '@/components/pricing/PricingCards';

export const metadata = {
  title: 'Pricing - CV Optimizer',
  description: 'Affordable CV optimization packages for every career stage and budget.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-slate-50 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Choose the package that fits your needs. All packages include unlimited revisions until you're satisfied.
          </p>
        </div>

        <PricingCards />
      </div>
    </main>
  );
}
