// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Skills from "./components/Skill";
// import Projects from "./components/Project";
// import MouseTracker from "./components/MouseTracker";
// import ScrollProgress from "./components/ScrollProgress";
// import PageLoader from "./components/PageLoader";
// import Footer from "./components/Footer";
// import AboutMe from "./components/About";

// import Experience from "./components/Experience";
// // import TimeLine from "./components/TimeLineC";

// export default function App() {
//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 relative overflow-hidden">
//       <PageLoader />
//       <ScrollProgress />
//       <MouseTracker />
//       <Header />

//       <Hero />

//       <AboutMe />
//       <Skills />
//       <Experience />
//       <Projects />
//       {/* <Timeline /> */}
// {/*       <TimeLine events={TimeLine} /> */}
//       <Footer />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
// import { useTheme } from "./hooks/useTheme";
import useTheme from "./hooks/UseTheme";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-48 w-96 h-96 dark:bg-dark-accent-primary/10 bg-light-accent-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/4 -right-48 w-96 h-96 dark:bg-dark-accent-secondary/10 bg-light-accent-secondary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 dark:bg-dark-accent-primary/5 bg-light-accent-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
      </div>

      <Navbar theme={theme} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />
    </div>
  );
}

export default App;
