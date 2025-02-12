import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about" className="h-screen flex flex-col justify-center items-center text-center bg-white px-4">
      <motion.h2 
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      
      <div className="mt-6 flex flex-col md:flex-row items-center md:space-x-8 gap-6 md:gap-12 flex-wrap">
        {/* Profile Image with Slide-in Animation */}
        <motion.img 
          src={`${process.env.PUBLIC_URL}/profilepic.png`}
          alt="George Varghese" 
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* About Text */}
        <motion.p 
          className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hi! I'm <span className="font-semibold text-green-600">George Varghese</span>, a passionate software engineer specializing in web development. 
          I love building modern, responsive, and efficient web applications using the latest technologies.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
