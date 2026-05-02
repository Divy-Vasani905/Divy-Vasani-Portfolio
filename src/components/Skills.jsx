import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../constants/data";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="bg-white dark:bg-gray-900/80 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-cyan-500 pb-2 inline-block text-gray-800 dark:text-gray-300">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.skills.map(({ skill, level }, index) => (
          <div key={skill} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700 dark:text-gray-200">{skill}</span>
            </div>

            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden border border-gray-200 dark:border-gray-700">
              <motion.div
                className="bg-gradient-to-r from-cyan-600 to-blue-500 h-full rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${level * 20}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
