import React from "react";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-blue-500">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-blue-500">
            About
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("experience")} className="text-gray-700 hover:text-blue-500">
            Experience
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("resume")} className="text-gray-700 hover:text-blue-500">
            Resume
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-500">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
