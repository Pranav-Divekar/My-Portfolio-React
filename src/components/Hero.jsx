import { motion } from "motion/react"
import React from 'react'
import {ABOUT_TEXT, HERO_CONTENT} from "../constants"
import hero_me from "../assets/hero_me.jpeg"
import { IoDownload } from "react-icons/io5";


const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible : {
        x :0,
        opacity : 1,
        transition:{duration:0.5, delay:delay}
    }
});

const Hero = () => {
  return (
    <div>

    <div className="border-b border-neutral-900 pb-4 lg: mb-35">
        <div className="flex flex-wrap"> 
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-8xl font-thin tracking-tight lg:mt-10 
                    1g: text-7xl">Pranav Divekar</motion.h1>
                    <motion.span 
                     variants={container(0.5)}
                     initial="hidden"
                     animate="visible"
                    className="bg-gradient-to-r from-pink-300 Dvia-slate-500
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Information Technology Undergraduate
                        <br>
                        </br>
                    </motion.span>

                   

                    <motion.p 
                     variants={container(1)}
                     initial="hidden"
                     animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}          
                        <br></br>               
                        <a
  className="my-2 max-w-xl py-6 text-blue-500 tracking-tighter flex items-center gap-2"
  href="https://drive.google.com/file/d/1YrSEigbtPpViLzJDMtm93XZSdmJJLuHc/view?usp=share_link"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Download Resume"
>
  <span>Download Resume</span>
  <IoDownload />
</a>
</motion.p>

                        

                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                        <motion.img 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={ {duration: 1, delay: 1.4} }
                        src={hero_me} alt='Pranav Divekar Images '  className="w-80 h-80 object-cover"/>
                </div>
                <motion.h1 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={ {duration: 1, delay: 1.6} }
                className="my-10 text-center text-4xl font-semibold text-neutral-800">
        About<span className="text-neutral-500"> Me</span>
      </motion.h1>
      <motion.p 
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: -100 }}
       transition={{duration : 1}}
      className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {ABOUT_TEXT}</motion.p>

                        <motion.p 
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: -100 }}
       transition={{duration : 1}}
      className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        <b><u>Schooling </u> : </b>C.M.S English Medium School, Pune <br></br> 
                        <b><u>Diploma </u> : </b>Pimpri Chinchwad Polytechnic, Pune <br></br>
                        <b><u>B.Tech </u> : </b>Pimpri Chinchwad College of Engineering, Pune <br></br>
                        
                        </motion.p>

            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Hero
