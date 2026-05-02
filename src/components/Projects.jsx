import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "../constants/data";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-white dark:bg-gray-900/80 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-8 border-b-2 border-cyan-500 pb-2 inline-block">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
