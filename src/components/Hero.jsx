// import { motion } from "motion/react"
// import React from 'react'
// import {ABOUT_TEXT, HERO_CONTENT} from "../constants"
// import hero_me from "../assets/hero_me.jpeg"
// import { IoDownload } from "react-icons/io5";


// const container = (delay) => ({
//     hidden: {x: -100, opacity: 0},
//     visible : {
//         x :0,
//         opacity : 1,
//         transition:{duration:0.5, delay:delay}
//     }
// });

// const Hero = () => {
//   return (
//     <div>

//     <div className="border-b border-neutral-900 pb-4 lg: mb-35">
//         <div className="flex flex-wrap"> 
//             <div className="w-full lg:w-1/2">
//                 <div className="flex flex-col items-center lg:items-start">
//                     <motion.h1 
//                     variants={container(0)}
//                     initial="hidden"
//                     animate="visible"
//                     className="pb-16 text-8xl font-thin tracking-tight lg:mt-10 
//                     1g: text-7xl">Pranav Divekar</motion.h1>
//                     <motion.span 
//                      variants={container(0.5)}
//                      initial="hidden"
//                      animate="visible"
//                     className="bg-gradient-to-r from-pink-300 Dvia-slate-500
//                     to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
//                         Information Technology Undergraduate
//                         <br>
//                         </br>
//                     </motion.span>

                   

//                     <motion.p 
//                      variants={container(1)}
//                      initial="hidden"
//                      animate="visible"
//                     className="my-2 max-w-xl py-6 font-light tracking-tighter">
//                         {HERO_CONTENT}          
//                         <br></br>               
//                         <a
//   className="my-2 max-w-xl py-6 text-blue-500 tracking-tighter flex items-center gap-2"
//   href="https://drive.google.com/file/d/1YrSEigbtPpViLzJDMtm93XZSdmJJLuHc/view?usp=share_link"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Download Resume"
// >
//   <span>Download Resume</span>
//   <IoDownload />
// </a>
// </motion.p>

                        

//                 </div>
//             </div>
//             <div className="w-full lg:w-1/2 lg:p-8">
//                 <div className="flex justify-center">
//                         <motion.img 
//                         initial={{ x: 100, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={ {duration: 1, delay: 1.4} }
//                         src={hero_me} alt='Pranav Divekar Images '  className="w-80 h-80 object-cover"/>
//                 </div>
//                 <motion.h1 
//                 initial={{ x: 100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={ {duration: 1, delay: 1.6} }
//                 className="my-10 text-center text-4xl font-semibold text-neutral-800">
//         About<span className="text-neutral-500"> Me</span>
//       </motion.h1>
//       <motion.p 
//        whileInView={{ opacity: 1, x: 0 }}
//        initial={{ opacity: 0, x: -100 }}
//        transition={{duration : 1}}
//       className="my-2 max-w-xl py-6 font-light tracking-tighter">
//                         {ABOUT_TEXT}</motion.p>

//                         <motion.p 
//        whileInView={{ opacity: 1, x: 0 }}
//        initial={{ opacity: 0, x: -100 }}
//        transition={{duration : 1}}
//       className="my-2 max-w-xl py-6 font-light tracking-tighter">
//                         <b><u>Schooling </u> : </b>C.M.S English Medium School, Pune <br></br> 
//                         <b><u>Diploma </u> : </b>Pimpri Chinchwad Polytechnic, Pune <br></br>
//                         <b><u>B.Tech </u> : </b>Pimpri Chinchwad College of Engineering, Pune <br></br>
                        
//                         </motion.p>

//             </div>
//         </div>
//     </div>
      
//     </div>
//   )
// }

// export default Hero

import { motion } from "framer-motion";
import React from "react";
import { ABOUT_TEXT, HERO_CONTENT } from "../constants";
import hero_me from "../assets/hero_me.jpeg";
import { IoDownload } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";

const fadeIn = (direction = "left", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
    },
  },
});

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen px-6 py-12 bg-gradient-to-br from-white via-slate-100 to-white text-neutral-900 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <motion.h1
            variants={fadeIn("left", 0)}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
          >
            Pranav Divekar
          </motion.h1>

          <motion.p
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="visible"
            className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent"
          >
            Information Technology Undergraduate
          </motion.p>

          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl font-light max-w-2xl text-neutral-700 mx-auto lg:mx-0"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.a
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="visible"
            href="https://drive.google.com/file/d/1YrSEigbtPpViLzJDMtm93XZSdmJJLuHc/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 w-fit mx-auto lg:mx-0 text-lg font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:scale-105 transition-transform"
          >
            <IoDownload size={22} />
            <span>Download Resume</span>
          </motion.a>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left space-y-6">
          <motion.img
            src={hero_me}
            alt="Pranav Divekar"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-xl border-4 border-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeIn("up", 0.2)}
            className="text-4xl font-bold text-neutral-800"
          >
            About <span className="text-purple-600">Me</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg font-light max-w-xl text-neutral-700"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn("up", 0.4)}
          >
            {ABOUT_TEXT}
          </motion.p>

          <motion.div
            className="text-sm md:text-base font-medium text-left leading-relaxed max-w-xl text-neutral-700"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn("up", 0.6)}
          >
            <p><b className="underline">Schooling</b>: C.M.S English Medium School, Pune</p>
            <p><b className="underline">Diploma</b>: Pimpri Chinchwad Polytechnic, Pune</p>
            <p><b className="underline">B.Tech</b>: Pimpri Chinchwad College of Engineering, Pune</p>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 w-1/2 mx-auto rounded-full"></div>

      {/* Skills Bar */}
      <div className="max-w-5xl mx-auto py-10 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-6">Tech Stack & Skills</h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium">
          <span className="px-4 py-2 bg-slate-200 rounded-full">C/C++</span>
          <span className="px-4 py-2 bg-slate-200 rounded-full">Python</span>
          <span className="px-4 py-2 bg-slate-200 rounded-full">JavaScript</span>
          <span className="px-4 py-2 bg-slate-200 rounded-full">React.js</span>
          <span className="px-4 py-2 bg-slate-200 rounded-full">Next.js</span>
          <span className="px-4 py-2 bg-slate-200 rounded-full">MongoDB</span>
          <span className="px-4 py-2 bg-slate-200 rounded-full">Express.js</span>
          <span className="px-4 py-2 bg-slate-200 rounded-full">SQL</span>
          <span className="px-4 py-2 bg-slate-200 rounded-full">Data Analysis</span>
          <span className="px-4 py-2 bg-slate-200 rounded-full">DevOps</span>
          <span className="px-4 py-2 bg-slate-200 rounded-full">Docker</span>
          <span className="px-4 py-2 bg-slate-200 rounded-full">Azure</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown size={24} className="text-purple-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
