import React from "react";
import HeroSection from "../components/home/HeroSection";
import TechStack from "../components/home/TechStack";
import AIDemoSection from "../components/home/AIDemoSection";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <div className="py-16 sm:py-20 md:py-24" />
      <TechStack />
      <div className="py-16 sm:py-20 md:py-24" />
      <AIDemoSection />
    </div>
  );
}