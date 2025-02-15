import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  const scrollToExperience = () => {
    document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        <span className="inline-block">
          <Typewriter
            words={["Hi, I'm Omer Lambay 👋"]}
            loop={1} // Runs once
            cursor
            cursorStyle="|"
            typeSpeed={50} // Adjusted typing speed for smoothness
            deleteSpeed={20} // Reduced delete speed for natural effect
          />
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mt-4">Aspiring Software Engineer | Web Developer</p>
      <button
        onClick={scrollToExperience}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
      >
        View My Work
      </button>
    </div>
  );
}

export default Home;



