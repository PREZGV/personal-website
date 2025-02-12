import React, { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  { company: "HCSS", role: "Software Engineer Intern", duration: "May 2024 - Present", description: "Amazing experience where I was able to work on a variety of client-side and server-side bugs (more in my resume below!)", logo: `${process.env.PUBLIC_URL}/logos/hcss.png` },
  { company: "Code Coogs Team Lead", role: "Frontend Developer", duration: "September 2023 - December 2023", description: "Led a group of students in developing a sophisticated chatbot using the OpenAI API", logo: `${process.env.PUBLIC_URL}/logos/code-coogs.png` },
  { company: "SASE Campus Outreach Intern", role: "Frontend Developer", duration: "December 2022 - June 2023", description: "Collaborated with officers and various campus clubs to organize various events", logo: `${process.env.PUBLIC_URL}/logos/sase.png` },
  { company: "Code Ninjas Summer Camp Instructor", role: "Instructor", duration: "Summer 2022", description: "Taught programming fundamentals to young students using Scratch and JavaScript.", logo: `${process.env.PUBLIC_URL}/logos/code-ninjas.png` },
];

function Experience() {
  const [flipped, setFlipped] = useState(Array(experiences.length).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prev) => {
      const newFlip = [...prev];
      newFlip[index] = !newFlip[index];
      return newFlip;
    });
  };

  return (
    <div id="experience" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Experience</h2>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <div key={index} className="perspective w-full">
            <motion.div
              className="relative w-full h-60 sm:h-64"
              animate={{ rotateY: flipped[index] ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => toggleFlip(index)}
              style={{ transformStyle: "preserve-3d", cursor: "pointer" }}
            >
              {/* Front Side */}
              <div 
                className="absolute w-full h-full bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4 text-left"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img src={exp.logo} alt={exp.company} className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-gray-700">{exp.company}</h3>
                  <p className="text-gray-500 text-sm sm:text-base">{exp.role} • {exp.duration}</p>
                </div>
              </div>

              {/* Back Side */}
              <div 
                className="absolute w-full h-full bg-green-500 text-white p-6 rounded-lg flex items-center justify-center text-center"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="text-md sm:text-lg">{exp.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
