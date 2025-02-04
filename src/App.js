import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        setShowNavbar(homeBottom > 50); // Adjust for smoother transition
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar fades in/out smoothly */}
      <div className={`fixed w-full transition-opacity duration-500 ${showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <Navbar />
      </div>

      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="resume"><Resume /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;



