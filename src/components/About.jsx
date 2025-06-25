// import React from 'react'
// import { ABOUT_TEXT } from '../constants'
// import aboutImg from "../assets/about_img.jpg"

// const About = () => {
//   return (
//     <div className="border-b Dborder-neutral-900 pb-4">
//         <h1 className="my-20 text-center text-4xl">
//         About
//         <span className="text-neutral-500"> Me</span>
//         </h1>
//         <div className="flex flex-wrap">
//         <div className="w-full lg:w-1/2 lg:p-8">

//         <div className="flex items-center justify-center w-80 h-80 object-cover">
//         <img className="rounded-2xl" src={aboutImg} alt="about" />
//         </div>

//         </div>
//         <div className="w-full lg:w-1/2">
//         <div className="flex justify-center lg:justify-start">
//         <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
//         </div>
//         </div>

//         </div>
//     </div>

//   )
// }

// export default About

import React from "react";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      {/* Section Title */}
      <h1 className="my-10 text-center text-4xl font-semibold text-neutral-800">
        About<span className="text-neutral-500"> Me</span>
      </h1>

      {/* Content Section */}
      <div className="flex flex-wrap items-center justify-center px-4">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-4 text-lg text-neutral-700 leading-relaxed max-w-3xl">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
