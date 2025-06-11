import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        <TestimonialsSection />
        <FeaturesSection />
        <ServicesSection />
        <CallToActionSection />
        <OverviewSection />
      </div>
    </div>
  );
};