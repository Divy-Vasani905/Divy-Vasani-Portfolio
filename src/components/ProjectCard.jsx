import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ title, description, image, link, tech = [], status }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/20"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          {link ? (
            <button
              onClick={() => window.open(link, "_blank")}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-2 rounded-xl font-semibold transition cursor-pointer"
            >
              View Project →
            </button>
          ) : (
            <button
              disabled
              className="w-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 py-2 rounded-xl font-semibold cursor-not-allowed border border-gray-200 dark:border-gray-700 italic"
            >
              {status || "Development in Progress"}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
