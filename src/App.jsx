// src/App.jsx
// import React from 'react';
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

export default function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 relative overflow-hidden">
      <PageLoader />
      <ScrollProgress />
      <MouseTracker />
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
      {/* <Footer />
       */}
    </div>
  );
}
