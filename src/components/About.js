import React from "react";

function About() {
  return (
    <div id="about" className="h-screen flex flex-col justify-center items-center text-center bg-white px-4">
      <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
      
      <div className="mt-6 flex flex-col md:flex-row items-center md:space-x-8 gap-6 md:gap-12 flex-wrap">
        {/* Profile Image */}
        <img 
          src={`${process.env.PUBLIC_URL}/profilepic.png`}
          alt="George Varghese" 
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover"
        />

        {/* About Text */}
        <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
          Hi! I'm <span className="font-semibold">George Varghese</span>, a passionate software engineer specializing in web development. 
          I love building modern, responsive, and efficient web applications using the latest technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
