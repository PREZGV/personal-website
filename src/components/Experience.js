import React from "react";

const experiences = [
  {
    company: "HCSS",
    role: "Software Engineer Intern",
    duration: "May 2024 - Present",
    description: "Collaborated in a team of 6 developers to enhance the company's website.",
    logo: `${process.env.PUBLIC_URL}/logos/hcss.png`,
  },
  {
    company: "Code Coogs Team Lead",
    role: "Frontend Developer",
    duration: "September 2023 - December 2023",
    description: "Designed and implemented UI components using React and Tailwind CSS.",
    logo: `${process.env.PUBLIC_URL}/logos/code-coogs.png`,
  },
  {
    company: "SASE Campus Outreach Intern",
    role: "Frontend Developer",
    duration: "December 2022 - June 2023",
    description: "Designed and implemented UI components using React and Tailwind CSS.",
    logo: `${process.env.PUBLIC_URL}/logos/sase.png`,
  },
  {
    company: "Code Ninjas Summer Camp Instructor",
    role: "Instructor",
    duration: "Summer 2022",
    description: "Taught programming fundamentals to young students using Scratch and JavaScript.",
    logo: `${process.env.PUBLIC_URL}/logos/code-ninjas.png`,
  },
];

function Experience() {
  return (
    <div id="experience" className="h-screen flex flex-col justify-center items-center text-center bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800">Experience</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4 w-full md:w-96">
            <img src={exp.logo} alt={exp.company} className="w-16 h-16 object-contain" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-700">{exp.company}</h3>
              <p className="text-gray-500">{exp.role} • {exp.duration}</p>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;