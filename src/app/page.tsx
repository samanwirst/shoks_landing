"use client";


import { DynamicNavbar } from "@/components/Sections/DynamicNavbar";
import { Hero } from "@/components/Sections/Hero";
import PainAmplification from '@/components/Sections/PainAmplification';
import SolutionPresentation from '@/components/Sections/SolutionPresentation';
import UniqueSellingPoints from '@/components/Sections/UniqueSellingPoints';
import Testimonials from '@/components/Sections/Testimonials';
import Results from '@/components/Sections/Results';
import Footer from '@/components/Sections/Footer';
import { BackgroundShapes } from '@/components/Decorations/BackgroundShapes';

export default function Home() {

  return (
    <main className="min-h-screen relative">
      <DynamicNavbar />

      <Hero/>
      
      {/* Pain Amplification Section */}
      <div className="bg-slate-50 relative">
        <BackgroundShapes variant="light" density="low" />
        <div className="relative z-10">
          <PainAmplification />
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
