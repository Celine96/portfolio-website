import React from "react";
import HeroSection from "../components/home/HeroSection";
import AIDemoSection from "../components/home/AIDemoSection";
import UserJourney from "../components/home/UserJourney";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <UserJourney />
      <div className="py-16 md:py-20" />
      <AIDemoSection />
    </div>
  );
}