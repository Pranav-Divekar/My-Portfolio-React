// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'


// const App = () => {
//   return (
//     <div className="overflow-x-hidden  antialiased selection:bg-cyan-300 selection: text-cyan-900">
//       <div className="flixed top-O -z-10 h-full w-full"></div>
//      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

//      <div className="container mx-auto px-8">
//      <Navbar/>
//      <Hero/>
//      </div>
    
//     </div>
//   )
// }

// export default App









import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layers */}
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 pt-24">
        <Navbar />
        <Hero />
        {/* <About/> */}
        <Technologies/>
        <Experiences/>
        <Projects/>
        <Achievements/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
