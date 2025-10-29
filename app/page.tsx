"use client";

import React, { useState } from "react";
import Intro from "./components/Intro"
import Hero from "./components/Hero";
import SocialSection from "./components/social/SocialSection";
import Skills from "./components/Skills";
import Coursework from "./components/sections/Coursework";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // Show intro first, then rest of the content
  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <main>
      <Hero />
      <SocialSection/>
      <Skills />
      <Coursework />
      <Project />
      <Footer/>
    </main>
  );
}
