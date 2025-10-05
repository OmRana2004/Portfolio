import Hero from "./components/Hero";
import About from "./components/About";
import Coursework from "./components/sections/Coursework";
import Project from "./components/Project";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Coursework />
      <Project />
    </main>
  );
}
