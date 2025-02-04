import React from "react";

function About() {
  return (
    <div id="about" className="h-screen flex flex-col justify-center items-center text-center bg-white">
      <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
      
      <div className="mt-6 flex flex-col md:flex-row items-center md:space-x-8">
        {/* Profile Image */}
        <img 
          src="/profilepic.png" 
          alt="Your Name" 
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover"
        />

        {/* About Text */}
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Hi! I'm George Varghese, a passionate software engineer specializing in web development. 
          I love building modern, responsive, and efficient web applications using the latest technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
