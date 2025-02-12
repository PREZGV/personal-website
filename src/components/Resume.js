import React from "react";
import { motion } from "framer-motion";

function Resume() {
  return (
    <div id="resume" className="py-20 flex flex-col justify-center items-center text-center bg-white px-6">
      <motion.h2 
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Resume
      </motion.h2>

      <motion.p 
        className="mt-4 text-lg text-gray-600 max-w-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        View my resume below:
      </motion.p>

      <motion.a
        href={`${process.env.PUBLIC_URL}/resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 w-full max-w-xs text-lg"
        whileHover={{ x: [0, -2, 2, -2, 2, 0], scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        📄 View Resume
      </motion.a>
    </div>
  );
}

export default Resume;
