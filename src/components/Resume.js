import React from "react";

function Resume() {
  return (
    <div id="resume" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-800">My Resume</h2>
      <p className="mt-4 text-lg text-gray-600">View my resume below:</p>
      <a
        href={`${process.env.PUBLIC_URL}/resume.pdf`} // Ensure this matches the actual file name in the public folder
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        View Resume 📄
      </a>
    </div>
  );
}

export default Resume;

