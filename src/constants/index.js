import swasthya from "../assets/swasthya.png";
import airbnb from "../assets/airbnb.png";
import bidmate from "../assets/bidmate.png";
import stm from "../assets/stm.jpeg";

export const HERO_CONTENT = `Full stack developer with hands-on experience. I've worked on multiple projects`;

export const ABOUT_TEXT = `My name Pranav Ashok Divekar and i'm from Pune, learning and working in IT field since 2020, when I started my Diploma in Computer Engineering.
Currently I'm pursuing my Bachelor's Degree in Information Technology from Pimpri Chinchwad College of Engineering, Pune.
I've been developing web applications since 2022 over the MERN stack. Along with it i'm also into fitness and Power Lifting persuing it as my hobby.
Also i'm Excecutive officer at International Relations Cell, PCCOE`;

export const EXPERIENCES = [
  {
    year: "May 2025",
    role: "Full Stack Developer",
    company: "Ador Powertron",
    description: `Worked on Real Time ATMS System `,
    technologies: [".Net","React", "JavaScript", "SQL",],
  },
  {
    year: "Aug-October 2022",
    role: "Full Stack Developer",
    company: "Loire Voda LLP, Pune",
    description: `Into developing and maintaining web applications using JavaScript. Implemented RESTful APIs.
    Built a complete e-commerce website for a clothing brand as a full-stack web developer. Duration of 2.5 months`,
    technologies: ["Javascript", "HTML", "CSS", "SQL","PHP"],
  },
  {
    year: "2022 - 2023",
    role: "Android Developer",
    company: "Mindglance, Pune",
    description: `Worked as native Android developer, built various Android app providing multiple functionalities`,
    technologies: ["Android", "Android Studio", "Java", "SQL"],
  },
  {
    year: "2023 - Prsent",
    role: "Excecutive officer",
    company: "International Relations Cell, PCCOE",
    description: ` Improved leadership qualities and ensuring teamwork, Conducting events and connecting students with
foreign institutes for more opportunities.`,
    technologies: ["Leadership", "Communication", "Managment", "Teamwork"],
  },
  
];

export const PROJECTS = [
  {
    title: "Swasthya (Working)",
    image: swasthya,
    description:
      "MERN stack based webApp providing solutions to multiple issues. Allows organizing bootcamps Health Passport - Every patient's information and their prescriptions are tracked and stored securely for further needs, patient information made accessible to doctors at time of emergency. Integrated image processors for scanning prescriptions. Including AES for data encryption.(Investment Award 300$, SIH Internal Rank-3)",
    technologies: ["React", "Node.js", "MongoDB","Express.js", "Blockchain", "Tailwind", "Hardware Modules"],
  },
  {
    title: "Airbnb (Clone)",
    image: airbnb,
    description:
      " Developed a full-featured clone of Airbnb using MongoDB, Express.js, and Node.js, following the MVC framework. Implemented secure user authentication and authorization. Database hosted on Mongo Atlas. Project hosted on render platform. Deployed at :- airbnb-clone.com",
    technologies: ["React", "Node.js", "MongoDB","Express.js","Bootstrap","API's"],
  },
  {
    title: "BidMate",
    image: bidmate,
    description:
      "Created an online platform for buying and selling items through bidding, focusing on collectibles and unique items. (Won 2nd prize at PCP college. And presented a paper at national conference NCACSE 2022)",
    technologies: ["HTML", "CSS", "Javascript", "PHP","SQL"],
  },
  {
    title: "SpeechText-Messenger",
    image: stm,
    description:
      "Messaging on Android! Effortlessly send SMS messages with a tap, adding a personal touch with the Speak feature.",
    technologies: ["Android", "Android Studio", "XML", "Java", "SQL"],
  },
  {
    title: "SpeechText-Messenger",
    image: stm,
    description:
      "Messaging on Android! Effortlessly send SMS messages with a tap, adding a personal touch with the Speak feature.",
    technologies: ["Android", "Android Studio", "XML", "Java", "SQL"],
  },
];

export const CONTACT = {
  phoneNo: "+91 8805653571 ",
  email: "divekarpranav04@gmail.com",
};
