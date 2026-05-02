import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../constants/data";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="bg-white dark:bg-gray-900/80 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, x: -40 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-cyan-500 pb-2 inline-block text-gray-800 dark:text-gray-200">
        Experience
      </h2>

      <div className="space-y-8">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="group">
            <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {exp.company} - {exp.role}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
            <ul className="list-disc ml-5 space-y-2 text-gray-600 dark:text-gray-300">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
