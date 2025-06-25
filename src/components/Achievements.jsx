// import React from "react";
// import { motion } from "motion/react";
// import latrobe from "../assets/latrobe.jpeg";
// import abhidnya from "../assets/abhidnya.jpeg";
// import idearx from "../assets/idearx.jpeg";
// import Mech from "../assets/Mech.jpg";
// import vatpalsir from "../assets/vatpalsir.jpeg";
// import pccoer from "../assets/pccoer.jpeg";
// import SIH from "../assets/SIH.jpg";
// import topper from "../assets/topper.png";



// const AchievementCard = ({ image, title, description, link }) => (
//   <motion.div
//     whileInView={{ opacity: 1, x: 0 }}
//     initial={{ opacity: 0, x: -100 }}
//     transition={{ duration: 1 }}
//     className="flex flex-wrap items-center justify-center mb-12 "
//   >
//     {/* Left Section: Image */}
//     <div className="w-full lg:w-1/3 p-6">
//       <div className="flex justify-center">
//         <img
//           src={image}
//           alt="Achievement Image"
//           className="rounded-lg shadow-lg border border-neutral-300"
//         />
//       </div>
//     </div>

//     {/* Right Section: Achievement Details */}
//     <div className="text-base w-full lg:w-2/3 p-6">
//       <h1 className="font-semibold mb-4">{title}</h1>
//       <p className="text-neutral-500 mb-4">{description}</p>
//       <p className="mb-4">
//         Know More -{" "}
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:text-blue-700"
//         >
//           &nbsp;Visit Page
//         </a>
//       </p>
//     </div>
//   </motion.div>
// );

// const Achievements = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-10">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Achievements
//         <span className="text-neutral-500"> & Certificates</span>
//       </motion.h1>

//       {/* Achievement Cards */}
//       <AchievementCard
//         image={latrobe}
//         title="🏅Investment Award - $300"
//         description="Our team Swasthya, have received a $300 investment award from La Trobe University, Australia! 🌟"
//         link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
//       />
//       <AchievementCard
//         image={Mech}
//         title="🏆 1st place - Sthapatya 2024, PCCOE"
//         description="This victory stands as a testament to our dedication, creativity, and outstanding teamwork. Interacting with great judges and being felicitated Dattatray Nidavanche, Founder and Director of Naadbramha Idli, during our presentation of the Swasthya project"
//         link="https://www.linkedin.com/posts/pranav-divekar_innovation-teamwork-pccoe-activity-7177717215150936064-eMm5?utm_source=share&utm_medium=member_desktop"
//       />
//       <AchievementCard
//         image={idearx}
//         title="🏅Second Place at IDEARX Competition!"
//         description=" IDEARX competition hosted by Pimpri Chinchwad College of Engineering (PCCOE)! 🎉 The event, part of the PRAXIS Event series, focused on the innovative theme of Swasthya: Integrating wearable technology ⌚ into mobile apps, featuring a health passport."
//         link="https://www.linkedin.com/posts/vishal-godalkar-a42543245_thrilled-to-share-second-place-at-idearx-ugcPost-7167403718542278657-s1Ws?utm_source=share&utm_medium=member_desktop"
//       />

//     <AchievementCard
//         image={pccoer}
//         title="🏆 Third Place - Technovate"
//         description="Inter college competetion Technovate at Pimpri Chinchwad College of Engineering & Research (PCCOER)"
//         link="https://example.com"
//       />

// <AchievementCard
//         image={vatpalsir}
//         title="🏆 Third Place - Start up sprint"
//         description="Secured the second runner-up position at the StartUp Sprint event at PCCOE PUNE College! A huge thank you to Ulhas Keshavsing Vatpal for his insightful mentorship and guidance. It was inspiring to connect and learn from his expertise."
//         link="https://www.linkedin.com/posts/pranav-divekar_startup-entrepreneurship-pccoe-activity-7232628626188337152-Op80?utm_source=share&utm_medium=member_desktop"
//       />

// <AchievementCard
//         image={abhidnya}
//         title="🏅 Rank 3 - Abhidnya"
//         description="Technical competetion at Information Technology Dept. PCCOE"
//         link="https://www.linkedin.com/posts/pranav-divekar_rank-3-pccoe-pune-abhidnya-activity-7249824089719095299-z1NO?utm_source=share&utm_medium=member_desktop"
//       />

// <AchievementCard
//         image={SIH}
//         title="🏅SIH - Rank 3 (Intracollege)"
//         description="Ranked 3 amongst 150 teams participating for Smart India Hackathon (SIH), along with Vishal Godalkar and Dnyaneshwar Dhere and 3 more members "
//         link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
//       />
//       <AchievementCard
//          image={topper}
//         title="🏅Topper Semester - 4"
//         description="With SGPA of 9.65"
//         link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
//       />
//       <AchievementCard
//         image={topper}
//         title="🏅Topper Semester - 5"
//         description="Rank 2, with SGPA of 9.4"
//         link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
//       />
//        <AchievementCard
//         image={topper}
//         title="🏅Topper Semester - 6"
//         description="In Topper List, with SGPA of 9.2"
//         link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
//       />
//     </div>
//   );
// };

// export default Achievements;


import React from "react";
import { motion } from "framer-motion"; // Use "framer-motion" instead of "motion/react"
import latrobe from "../assets/latrobe.jpeg";
import abhidnya from "../assets/abhidnya.jpeg";
import idearx from "../assets/idearx.jpeg";
import Mech from "../assets/Mech.jpg";
import vatpalsir from "../assets/vatpalsir.jpeg";
import pccoer from "../assets/pccoer.jpeg";
import SIH from "../assets/SIH.jpg";
import topper from "../assets/topper.png";

// Card Component
const AchievementCard = ({ image, title, description, link }) => (
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.6 }}
    className="flex flex-wrap items-center justify-center mb-16 px-4"
  >
    {/* Image Section */}
    <div className="w-full lg:w-1/3 p-4">
      <div className="flex justify-center">
        <img
          src={image}
          alt="Achievement"
          className="rounded-xl shadow-md border border-neutral-200 max-h-64 object-cover"
        />
      </div>
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-2/3 p-4 text-left">
      <h2 className="text-2xl font-bold text-neutral-800 mb-3">{title}</h2>
      <p className="text-lg text-neutral-700 mb-4 leading-relaxed">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 font-medium hover:underline text-base"
      >
        Know More
      </a>
    </div>
  </motion.div>
);

// Main Component
const Achievements = () => {
  return (
    <section className="w-full px-6 py-20 bg-white text-neutral-900 border-b border-neutral-200">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-20"
      >
        Achievements <span className="text-purple-500">& Certificates</span>
      </motion.h1>

      {/* Cards */}
      <AchievementCard
        image={latrobe}
        title="🏅 Investment Award - $300"
        description="Our team Swasthya, received a $300 investment award from La Trobe University, Australia!"
        link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
      />
      <AchievementCard
        image={Mech}
        title="🏆 1st place - Sthapatya 2024, PCCOE"
        description="Won Sthapatya at PCCOE! Felicitated by Dattatray Nidavanche during our Swasthya project presentation."
        link="https://www.linkedin.com/posts/pranav-divekar_innovation-teamwork-pccoe-activity-7177717215150936064-eMm5?utm_source=share&utm_medium=member_desktop"
      />
      <AchievementCard
        image={idearx}
        title="🥈 Second Place at IDEARX"
        description="Presented health passport project in IDEARX competition under Praxis event series at PCCOE."
        link="https://www.linkedin.com/posts/vishal-godalkar-a42543245_thrilled-to-share-second-place-at-idearx-ugcPost-7167403718542278657-s1Ws?utm_source=share&utm_medium=member_desktop"
      />
      <AchievementCard
        image={pccoer}
        title="🏆 Third Place - Technovate"
        description="Secured third place in Technovate at PCCOER. A proud moment representing innovation!"
        link="https://example.com"
      />
      <AchievementCard
        image={vatpalsir}
        title="🏆 Third Place - StartUp Sprint"
        description="Won 2nd runner-up at StartUp Sprint, mentored by Ulhas Vatpal at PCCOE."
        link="https://www.linkedin.com/posts/pranav-divekar_startup-entrepreneurship-pccoe-activity-7232628626188337152-Op80?utm_source=share&utm_medium=member_desktop"
      />
      <AchievementCard
        image={abhidnya}
        title="🏅 Rank 3 - Abhidnya"
        description="Secured 3rd rank at Abhidnya technical competition, organized by IT Dept, PCCOE."
        link="https://www.linkedin.com/posts/pranav-divekar_rank-3-pccoe-pune-abhidnya-activity-7249824089719095299-z1NO?utm_source=share&utm_medium=member_desktop"
      />
      <AchievementCard
        image={SIH}
        title="🏅 SIH - Rank 3 (Intra-college)"
        description="Ranked 3 out of 150 teams for Smart India Hackathon qualifiers. Swasthya project presented with team."
        link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
      />
      <AchievementCard
        image={topper}
        title="🏅 Topper Semester 4"
        description="Ranked top with an SGPA of 9.65."
        link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
      />
      <AchievementCard
        image={topper}
        title="🏅 Topper Semester 5"
        description="Secured Rank 2 with SGPA of 9.4."
        link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
      />
      <AchievementCard
        image={topper}
        title="🏅 Topper Semester 6"
        description="Made it to the topper list with SGPA of 9.2."
        link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
      />
    </section>
  );
};

export default Achievements;
