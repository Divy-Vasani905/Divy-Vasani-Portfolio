import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../constants/data";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs, 
  FaGithub 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiNextdotjs, 
  SiMongodb, 
  SiReact
} from "react-icons/si";

const skillInfo = {
  "HTML5": { icon: FaHtml5, color: "text-orange-500" },
  "CSS3": { icon: FaCss3Alt, color: "text-blue-500" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-400" },
  "JavaScript": { icon: FaJs, color: "text-yellow-400" },
  "TypeScript": { icon: SiTypescript, color: "text-blue-600" },
  "React": { icon: SiReact, color: "text-cyan-500" },
  "Next.js": { icon: SiNextdotjs, color: "text-black dark:text-white" },
  "React Native": { icon: SiReact, color: "text-cyan-500" },
  "Node.js": { icon: FaNodeJs, color: "text-green-500" },
  "MongoDB": { icon: SiMongodb, color: "text-green-600" },
  "GitHub": { icon: FaGithub, color: "text-gray-800 dark:text-white" },
};

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
        {portfolioData.skills.map(({ skill, level }, index) => {
          const Icon = skillInfo[skill]?.icon;
          const colorClass = skillInfo[skill]?.color || "text-gray-500";
          
          return (
            <div key={skill} className="group space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {Icon && (
                    <div className={`${colorClass} text-2xl transition-transform duration-500 group-hover:scale-120`}>
                      <Icon />
                    </div>
                  )}
                  <span className="font-medium text-gray-700 dark:text-gray-200">{skill}</span>
                </div>
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
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;
