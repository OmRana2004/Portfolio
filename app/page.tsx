"use client";

import React, { useState } from "react";
import Intro from "./components/sections/Intro"
import Hero from "./components/sections/Hero";
import SocialSection from "./components/sections/SocialSection";
import Skills from "./components/sections/Skills";
import Coursework from "./components/sections/Coursework";
import Project from "./components/sections/Project";
// import Footer from "./components/Footer";
import Contact from "./components/sections/Contact";
import BottomNav from "./components/sections/BottomNav";


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
      <Contact />
      <BottomNav />
    </main>
  );
}
