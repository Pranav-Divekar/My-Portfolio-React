import React from 'react'
import { PROJECTS } from "../constants";
import { motion } from "motion/react" 
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition = {{duration:0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex justify-center">
            {/* Container for the entire project box */}
            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition = {{duration:1}}
            className="w-full max-w-4xl lg:w-3/4 p-6 border border-neutral-300 rounded-lg hover:shadow-lg transition-all">
              {/* Flex container to align image and text side by side */}
              <div className="flex flex-wrap items-center">
                {/* Image Section */}
                <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition = {{duration:0.5}}
                className="w-full lg:w-1/4 p-4">
                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="rounded-lg border border-neutral-300 object-cover"
                  />
                  
                </motion.div>

                {/* Text Section */}
                <div className="w-full lg:w-3/4 p-4">
                  <h6 className="mb-2 font-semibold">{project.title}<a
              href="https://github.com/Pranav-Divekar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a></h6>
                  <p className="mb-4 text-neutral-400">{project.description}</p>
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="mr-2 rounded bg-indigo-400 px-2 py-1 text-sm font-medium text-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                    
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
