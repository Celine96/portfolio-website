import React from "react";
import HeroSection from "../components/home/HeroSection";
import AIDemoSection from "../components/home/AIDemoSection";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AIDemoSection />
    </div>
  );
}