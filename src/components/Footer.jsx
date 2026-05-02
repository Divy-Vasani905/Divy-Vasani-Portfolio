import React from "react";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { portfolioData } from "../constants/data";

const Footer = () => {
  const { socials, profile } = portfolioData;
  return (
    <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-12 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-black/50 mt-24">
      <div className="flex justify-center gap-6 mb-6">
        <button
          onClick={() => window.open(socials.github)}
          className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all transform hover:scale-110"
          aria-label="GitHub"
        >
          <FaSquareGithub className="text-4xl" />
        </button>

        <button
          onClick={() => window.open(socials.linkedin)}
          className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-4xl" />
        </button>
      </div>
      <p className="tracking-wide">
        © {new Date().getFullYear()} Divy Vasani | Built with <span className="text-cyan-600 dark:text-cyan-500">React</span>, <span className="text-cyan-600 dark:text-cyan-500">Tailwind</span> & <span className="text-cyan-600 dark:text-cyan-500">Framer Motion</span>
      </p>
    </footer>
  );
};

export default Footer;
