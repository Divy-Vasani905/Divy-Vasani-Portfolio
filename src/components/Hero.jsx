import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../constants/data";

const Hero = () => {
  const { profile } = portfolioData;
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = profile.roles[index];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % profile.roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, profile.roles]);

  return (
    <motion.section
      id="about"
      className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left pt-32 pb-16"
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={profile.image}
        alt={`${profile.name} profile`}
        className="w-70 h-70 brightness-70 rounded-full object-cover shadow-2xl shadow-cyan-500/20 dark:shadow-cyan-500/20 mx-auto md:mx-0"
      />

      <div className="flex-1">
        {!profile && 
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono bg-gradient-to-r from-cyan-500 via-green-500 to-blue-600 dark:from-cyan-400 dark:via-green-400 dark:to-blue-500 bg-clip-text text-transparent min-h-[4rem]">
            Hi I'm Divy Vasani
          </h1>
        }
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono bg-gradient-to-r from-cyan-500 via-green-500 to-blue-600 dark:from-cyan-400 dark:via-green-400 dark:to-blue-500 bg-clip-text text-transparent min-h-[4rem]">
          {text}
          <span className="animate-pulse text-green-500 dark:text-green-300">|</span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl leading-relaxed">
          {profile.description}
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
