"use client";


import { DynamicNavbarWhite } from "@/components/dynamic-navbar-white";
import { HeroGeometric } from "@/components/hero-geometric";
import PainAmplification from '@/components/pain-amplification';
import SolutionPresentation from '@/components/solution-presentation';
import UniqueSellingPoints from '@/components/unique-selling-points';
import Testimonials from '@/components/testimonials';
import Results from '@/components/results';
import Footer from '@/components/footer';
import { BackgroundShapes } from '@/components/background-shapes';

export default function Home() {

  return (
    <main className="min-h-screen relative">
      <DynamicNavbarWhite isWhiteTheme={false} />

      <HeroGeometric isWhiteTheme={false} />
      
      {/* Pain Amplification Section */}
      <div className="bg-slate-50 relative">
        <BackgroundShapes variant="light" density="low" />
        <div className="relative z-10">
          <PainAmplification isDarkTheme={true} />
        </div>
      </div>
      
      {/* Solution Presentation Section */}
      <div className="bg-slate-100 relative" id="services" data-section="solution">
        <BackgroundShapes variant="light" density="medium" />
        <div className="relative z-10">
          <SolutionPresentation isDarkTheme={true} />
        </div>
      </div>
      
      {/* Unique Selling Points Section */}
      <div className="bg-slate-50 relative" id="unique-selling-points">
        <BackgroundShapes variant="light" density="high" />
        <div className="relative z-10">
          <UniqueSellingPoints isDarkTheme={true} />
        </div>
      </div>
      

      
      {/* Testimonials Section */}
      <div className="bg-slate-100 relative" id="testimonials">
        <BackgroundShapes variant="light" density="medium" />
        <div className="relative z-10">
          <Testimonials isDarkTheme={true} />
        </div>
      </div>
      
      {/* Results Section */}
      <div className="bg-slate-50 relative" id="results">
        <BackgroundShapes variant="light" density="low" />
        <div className="relative z-10">
          <Results isDarkTheme={true} />
        </div>
      </div>
      
      {/* Footer */}
      <Footer isDarkTheme={true} />
    </main>
  );
}
