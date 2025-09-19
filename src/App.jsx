import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skill";
import Projects from "./components/Project";
import MouseTracker from "./components/MouseTracker";
import ScrollProgress from "./components/ScrollProgress";
import PageLoader from "./components/PageLoader";
import Footer from "./components/Footer";
import AboutMe from "./components/About";

import Experience from "./components/Experience";
import TimeLine from "./components/TimeLineC";

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
      <Experience />
      <Projects />
      {/* <Timeline /> */}
{/*       <TimeLine events={TimeLine} /> */}
      <Footer />
    </div>
  );
}
