import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import social icons
import { motion } from "framer-motion"; // Import Framer Motion

function Contact() {
  return (
    <div id="contact" className="py-20 flex flex-col justify-center items-center text-center bg-gray-100 px-6">
      <motion.h2 
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      
      <motion.p 
        className="mt-4 text-lg text-gray-600 max-w-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Feel free to reach out to me!
      </motion.p>

      {/* Social Icons */}
      <div className="mt-6 flex gap-6">
        {/* Email */}
        <motion.a 
          href="mailto:georgev2403@gmail.com"
          className="text-gray-700 hover:text-green-500 text-3xl p-3 rounded-full transition-all duration-200"
          whileHover={{ y: -5 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaEnvelope />
        </motion.a>

        {/* LinkedIn */}
        <motion.a 
          href="https://www.linkedin.com/in/georgev1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-green-500 text-3xl p-3 rounded-full transition-all duration-200"
          whileHover={{ y: -5 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        >
          <FaLinkedin />
        </motion.a>

        {/* GitHub */}
        <motion.a 
          href="https://github.com/PREZGV" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-green-500 text-3xl p-3 rounded-full transition-all duration-200"
          whileHover={{ y: -5 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.4 }}
        >
          <FaGithub />
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
