import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const sections = [
  { Component: TestimonialsSection, id: "testimonials" },
  { Component: FeaturesSection, id: "features" },
  { Component: ServicesSection, id: "services" },
  { Component: CallToActionSection, id: "cta" },
  { Component: OverviewSection, id: "overview" },
];

export const Desktop = (): JSX.Element => {
  return (
    <main className="bg-white flex flex-col items-center justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {sections.map(({ Component, id }) => (
          <section key={id} id={id}>
            <Component />
          </section>
        ))}
      </div>
    </main>
  );
};