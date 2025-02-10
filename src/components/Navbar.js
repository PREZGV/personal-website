import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Track menu state

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after selection
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-700">George Varghese</h1>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links (Hidden on Mobile, Flex on Desktop) */}
        <ul className={`md:flex md:space-x-6 ${isOpen ? "flex flex-col mt-4 space-y-4" : "hidden"} md:mt-0 md:space-y-0`}>
          <li><button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-blue-500">Home</button></li>
          <li><button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-blue-500">About</button></li>
          <li><button onClick={() => scrollToSection("experience")} className="text-gray-700 hover:text-blue-500">Experience</button></li>
          <li><button onClick={() => scrollToSection("resume")} className="text-gray-700 hover:text-blue-500">Resume</button></li>
          <li><button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-500">Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
