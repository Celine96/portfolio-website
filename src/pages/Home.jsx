import React from "react";
import HeroSection from "../components/home/HeroSection";
import AIDemoSection from "../components/home/AIDemoSection";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <div className="py-24 md:py-32" />
      <AIDemoSection />
    </div>
  );
}