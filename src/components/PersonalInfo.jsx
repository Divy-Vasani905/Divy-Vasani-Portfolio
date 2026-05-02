import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../constants/data";

const PersonalInfo = () => {
  const { personalInfo } = portfolioData;
  return (
    <motion.section
      id="contact"
      className="bg-white dark:bg-gray-900/80 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-cyan-500 pb-2 inline-block text-gray-800 dark:text-gray-300">
        Personal Info
      </h2>

      <div className="grid sm:grid-cols-2 gap-8 text-lg text-gray-700 dark:text-gray-300">
        <div className="flex flex-col space-y-4">
          <p>
            <strong className="text-cyan-600 dark:text-cyan-400">Name:</strong> {personalInfo.name}
          </p>
          <p>
            <strong className="text-cyan-600 dark:text-cyan-400">Location:</strong> {personalInfo.location}
          </p>
          <p>
            <strong className="text-cyan-600 dark:text-cyan-400">Hobbies:</strong> {personalInfo.hobbies}
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <p>
            <strong className="text-cyan-600 dark:text-cyan-400">Contact:</strong>{" "}
            <a href={`tel:${personalInfo.contact.replace(/\s/g, "")}`} className="hover:text-cyan-500 transition-colors">
              {personalInfo.contact}
            </a>
          </p>
          <p>
            <strong className="text-cyan-600 dark:text-cyan-400">Email:</strong>{" "}
            <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-500 transition-colors">
              {personalInfo.email}
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default PersonalInfo;
