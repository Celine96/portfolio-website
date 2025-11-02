import React from "react";
import HeroSection from "../components/home/HeroSection";
import TechStack from "../components/home/TechStack";
import AIDemoSection from "../components/home/AIDemoSection";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <TechStack />
      <AIDemoSection />
    </div>
  );
}