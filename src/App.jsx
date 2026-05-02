import { motion, useScroll } from "framer-motion";
import React, { useState, useEffect } from "react";
import "./index.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-300 min-h-screen font-sans transition-colors duration-500">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-cyan-500 z-[60] origin-left w-full"
        style={{ scaleX: scrollYProgress }}
      />

      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="max-w-6xl mx-auto space-y-32 px-6">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
