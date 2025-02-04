import React from "react";

function Home() {
    const scrollToProjects = () => {
      document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
        <h1 className="text-5xl font-bold text-gray-800">Hi, I'm George Varghese 👋</h1>
        <p className="text-lg text-gray-600 mt-4">Aspiring Software Engineer | Web Developer</p>
        <button
          onClick={scrollToProjects}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          View My Work
        </button>
      </div>
    );
  }
  

export default Home;
