"use client";


import { DynamicNavbar } from "@/components/DynamicNavbar";
import { HeroGeometric } from "@/components/hero-geometric";
import PainAmplification from '@/components/pain-amplification';
import SolutionPresentation from '@/components/solution-presentation';
import UniqueSellingPoints from '@/components/unique-selling-points';
import Testimonials from '@/components/testimonials';
import Results from '@/components/results';
import Footer from '@/components/footer';
import { BackgroundShapes } from '@/components/BackgroundShapes';

export default function Home() {

  return (
    <main className="min-h-screen relative">
      <DynamicNavbar isWhiteTheme={true} />

      <HeroGeometric isWhiteTheme={true} />
      
      {/* Pain Amplification Section */}
      <div className="bg-slate-50 relative">
        <BackgroundShapes variant="light" density="low" />
        <div className="relative z-10">
          <PainAmplification isDarkTheme={false} />
        </div>
      </div>
      
      {/* Solution Presentation Section */}
      <div className="bg-slate-100 relative" id="services" data-section="solution">
        <BackgroundShapes variant="light" density="medium" />
        <div className="relative z-10">
          <SolutionPresentation isDarkTheme={false} />
        </div>
      </div>
      
      {/* Unique Selling Points Section */}
      <div className="bg-slate-50 relative" id="unique-selling-points">
        <BackgroundShapes variant="light" density="high" />
        <div className="relative z-10">
          <UniqueSellingPoints isDarkTheme={false} />
        </div>
      </div>
      

      
      {/* Testimonials Section */}
      <div className="bg-slate-100 relative" id="testimonials">
        <BackgroundShapes variant="light" density="medium" />
        <div className="relative z-10">
          <Testimonials isDarkTheme={false} />
        </div>
      </div>
      
      {/* Results Section */}
      <div className="bg-slate-50 relative" id="results">
        <BackgroundShapes variant="light" density="low" />
        <div className="relative z-10">
          <Results isDarkTheme={false} />
        </div>
      </div>
      
      {/* Footer */}
      <Footer isDarkTheme={false} />
    </main>
  );
}
