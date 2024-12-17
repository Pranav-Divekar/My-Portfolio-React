import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoNodejs } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { motion } from "motion/react" 
import { FcAndroidOs } from "react-icons/fc";
import { FaPhp } from "react-icons/fa6";
import { SiArduino } from "react-icons/si";
import { FaLinux } from "react-icons/fa";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y : [10,-10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse"
        }
    }
});


import React from 'react'

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition = {{duration:1}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">

        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400" />
        <p className="text-center">React.js</p>
        </motion.div>

        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
        <SiMongodb className="text-7xl text-green-500" />
        <p className="text-center">Mongodb</p>
        </motion.div>

        <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
        <SiExpress className="text-7xl text-red-950" />
        <p className="text-center">Express.js</p>
        </motion.div>

        <motion.div
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
        <BiLogoNodejs className="text-7xl text-purple-600" />
        <p className="text-center">Node.js</p>
        </motion.div>

        <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
        <DiMysql className="text-7xl text-slate-500" />
        <p className="text-center">MySQL</p>
        </motion.div>

        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
        <FaJava className="text-7xl text-pink-700" />
        <p className="text-center">Java</p>
        </motion.div>

        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
        <FaPython className="text-7xl text-amber-500" />
        <p className="text-center">Python</p>
        </motion.div>

        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
        <FcAndroidOs className="text-7xl text-amber-500" />
        <p className="text-center">Android</p>
        </motion.div>

        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
        <FaPhp className="text-7xl text-yellow-800" />
        <p className="text-center">PHP</p>
        </motion.div>

        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
        <SiArduino className="text-7xl text-blue-500" />
        <p className="text-center">Arduino ide</p>
        </motion.div>


        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
        <FaLinux className="text-7xl text-stone-500" />
        <p className="text-center">Linux</p>
        </motion.div>










        </motion.div>

    </div>
  )
}

export default Technologies
