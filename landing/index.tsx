'use server';

import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { HowItWorksSection } from './HowItWorksSection';
import { CTASection } from './CTASection';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full">
        <HeroSection />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent" />
      </div>
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </main>
  );
}
