// src/App.jsx
// import React from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero"; // Hero from "./components/Hero";
import Skills from "./components/Skill"; // Skills from "./components/Skills";
import Projects from "./components/Project"; // Projects from "./components/Projects";
// import { Footer } from "./components/Footer";
import MouseTracker from "./components/MouseTracker";
import ScrollProgress from "./components/ScrollProgress"; // ScrollProgress from "./components/ScrollProgress";
import PageLoader from "./components/PageLoader"; // PageLoader from "./components/PageLoader";
import Footer from "./components/Footer";
import AboutMe from "./components/About";
// import Timeline from "./components/Timeline";
import Experience from "./components/Experience";
import TimeLine from "./components/TimeLineC";
// import Intro from "./components/Intro";

export default function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 relative overflow-hidden">
      <PageLoader />
      <ScrollProgress />
      <MouseTracker />
      <Header />
      {/* <Intro /> */}
      <Hero />

      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      {/* <Timeline /> */}
      <TimeLine events={TimeLine} />
      <Footer />
      {/* <Footer />
       */}
    </div>
  );
}
