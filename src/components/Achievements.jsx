import React from "react";
import { motion } from "motion/react";
import latrobe from "../assets/latrobe.jpeg";
import abhidnya from "../assets/abhidnya.jpeg";
import idearx from "../assets/idearx.jpeg";
import Mech from "../assets/Mech.jpg";
import vatpalsir from "../assets/vatpalsir.jpeg";
import pccoer from "../assets/pccoer.jpeg";
import SIH from "../assets/SIH.jpg";


const AchievementCard = ({ image, title, description, link }) => (
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 1 }}
    className="flex flex-wrap items-center justify-center mb-12 "
  >
    {/* Left Section: Image */}
    <div className="w-full lg:w-1/3 p-6">
      <div className="flex justify-center">
        <img
          src={image}
          alt="Achievement Image"
          className="rounded-lg shadow-lg border border-neutral-300"
        />
      </div>
    </div>

    {/* Right Section: Achievement Details */}
    <div className="text-base w-full lg:w-2/3 p-6">
      <h1 className="font-semibold mb-4">{title}</h1>
      <p className="text-neutral-500 mb-4">{description}</p>
      <p className="mb-4">
        Know More -{" "}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          &nbsp;Visit Page
        </a>
      </p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Achievements
        <span className="text-neutral-500"> & Certificates</span>
      </motion.h1>

      {/* Achievement Cards */}
      <AchievementCard
        image={latrobe}
        title="🏅Investment Award - $300"
        description="Our team Swasthya, with Vishal Godalkar and Dnyaneshwar Dhere, have received a $300 investment award from La Trobe University, Australia! 🌟"
        link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
      />
      <AchievementCard
        image={Mech}
        title="🏆 1st place - Sthapatya 2024, PCCOE"
        description="This victory stands as a testament to our dedication, creativity, and outstanding teamwork. Interacting with great judges and being felicitated Dattatray Nidavanche, Founder and Director of Naadbramha Idli, during our presentation of the Swasthya project"
        link="https://www.linkedin.com/posts/pranav-divekar_innovation-teamwork-pccoe-activity-7177717215150936064-eMm5?utm_source=share&utm_medium=member_desktop"
      />
      <AchievementCard
        image={idearx}
        title="🏅Second Place at IDEARX Competition!"
        description=" IDEARX competition hosted by Pimpri Chinchwad College of Engineering (PCCOE)! 🎉 The event, part of the PRAXIS Event series, focused on the innovative theme of Swasthya: Integrating wearable technology ⌚ into mobile apps, featuring a health passport."
        link="https://www.linkedin.com/posts/vishal-godalkar-a42543245_thrilled-to-share-second-place-at-idearx-ugcPost-7167403718542278657-s1Ws?utm_source=share&utm_medium=member_desktop"
      />

    <AchievementCard
        image={pccoer}
        title="🏆 Third Place - Technovate"
        description="Inter college competetion Technovate at Pimpri Chinchwad College of Engineering & Research (PCCOER) with Vishal Godalkar"
        link="https://example.com"
      />

<AchievementCard
        image={vatpalsir}
        title="🏆 Third Place - Start up sprint"
        description="Excited to share that Vishal Godalkar and I secured the second runner-up position at the StartUp Sprint event at PCCOE PUNE College! A huge thank you to Ulhas Keshavsing Vatpal for his insightful mentorship and guidance. It was inspiring to connect and learn from his expertise."
        link="https://www.linkedin.com/posts/pranav-divekar_startup-entrepreneurship-pccoe-activity-7232628626188337152-Op80?utm_source=share&utm_medium=member_desktop"
      />

<AchievementCard
        image={abhidnya}
        title="🏅 Rank 3 - Abhidnya"
        description="Technical competetion at Information Technology Dept. PCCOE"
        link="https://www.linkedin.com/posts/pranav-divekar_rank-3-pccoe-pune-abhidnya-activity-7249824089719095299-z1NO?utm_source=share&utm_medium=member_desktop"
      />

<AchievementCard
        image={SIH}
        title="🏅SIH - Rank 3 (Intracollege)"
        description="Ranked 3 amongst 150 teams participating for Smart India Hackathon (SIH), along with Vishal Godalkar and Dnyaneshwar Dhere and 3 more members "
        link="https://www.linkedin.com/posts/pranav-divekar_swasthya-latrobeuniversity-innovation-activity-7221155971144818692-m7Ks?utm_source=share&utm_medium=member_desktop"
      />
    </div>
  );
};

export default Achievements;

