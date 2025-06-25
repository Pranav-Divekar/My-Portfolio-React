// import {EXPERIENCES } from "../constants";
// import { motion } from "motion/react" 


// import React from 'react'

// const Experiences = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">

//         <motion.h1 
//         whileInView={{opacity: 1,y:0}}
//         initial = {{opacity:0,y:-100}}
//         tansition = {{duratio:0.3}}
//         className="my-20 text-center text-4xl">Experience</motion.h1>

//         <div>
//         {EXPERIENCES.map((experience, index) => (
//             <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//                 <motion.div 
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{duration : 1}}
//                 className="w-full lg:w-1/4">
//                      <p className="mb-2 text-sm text-zinc-700">{experience.year}</p>
//                 </motion.div>
//                 <motion.div 
//                  whileInView={{ opacity: 1, x: 0 }}
//                  initial={{ opacity: 0, x: -100 }}
//                  transition={{duration : 1}}
//                 className="w-full max-w-xl lg:w-3/4">
//                 <h6 className="mb-2 font-semibold">
//                 {experience. role} -{" "}
//                 <span className="text-sm text-indigo-600">
//                 {experience. company}
//                 </span>
//                 </h6>
//                 <p className="mb-4 text-zinc-800">{experience.description}</p>
//                 {experience. technologies.map( (tech, index) => (
//                     <span 
//                     key={index} 
//                     className="mr-2 mt-4 rounded bg-yellow-200 px-2 py-1 text-sm
//                     font-medium text-purple-800">
//                         {tech}
//                     </span>
//                 ))}
//                     </motion.div>
//             </div>
//         ))}

//     </div>
//     </div>


//   );
// };

// export default Experiences

import React from 'react';
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Experiences = () => {
  return (
    <section className="w-full px-6 py-20 bg-white text-neutral-900 border-b border-neutral-300">
      {/* Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp(0)}
        className="text-center text-5xl font-bold tracking-tight mb-16"
      >
        Experience
      </motion.h2>

      {/* Timeline Items */}
      <div className="flex flex-col space-y-12 max-w-5xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp(index * 0.2)}
            className="flex flex-col lg:flex-row lg:items-start gap-6"
          >
            {/* Year */}
            <div className="lg:w-1/4 text-center lg:text-left">
              <p className="text-base font-medium text-gray-500">{experience.year}</p>
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
              <h4 className="text-xl font-semibold mb-1">
                {experience.role}
                {" "}
                <span className="text-indigo-600 text-base font-medium"> @ {experience.company}</span>
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {experience.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block rounded-full bg-purple-100 text-purple-700 px-3 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
