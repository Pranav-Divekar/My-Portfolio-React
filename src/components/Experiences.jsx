import {EXPERIENCES } from "../constants";
import { motion } from "motion/react" 


import React from 'react'

const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">

        <motion.h1 
        whileInView={{opacity: 1,y:0}}
        initial = {{opacity:0,y:-100}}
        tansition = {{duratio:0.3}}
        className="my-20 text-center text-4xl">Experience</motion.h1>

        <div>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{duration : 1}}
                className="w-full lg:w-1/4">
                     <p className="mb-2 text-sm text-zinc-700">{experience.year}</p>
                </motion.div>
                <motion.div 
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: -100 }}
                 transition={{duration : 1}}
                className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                {experience. role} -{" "}
                <span className="text-sm text-indigo-600">
                {experience. company}
                </span>
                </h6>
                <p className="mb-4 text-zinc-800">{experience.description}</p>
                {experience. technologies.map( (tech, index) => (
                    <span 
                    key={index} 
                    className="mr-2 mt-4 rounded bg-yellow-200 px-2 py-1 text-sm
                    font-medium text-purple-800">
                        {tech}
                    </span>
                ))}
                    </motion.div>
            </div>
        ))}

    </div>
    </div>


  );
};

export default Experiences