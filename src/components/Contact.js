import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import social icons

function Contact() {
  return (
    <div id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
      <p className="mt-4 text-lg text-gray-600">Feel free to reach out to me!</p>

      <div className="mt-6 flex justify-center space-x-6">
        {/* Email */}
        <a href="mailto:georgev2403@gmail.com" className="text-gray-700 hover:text-blue-500 text-3xl">
          <FaEnvelope />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/georgev1" target="_blank" rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500 text-3xl">
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a href="https://github.com/PREZGV" target="_blank" rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500 text-3xl">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Contact;
