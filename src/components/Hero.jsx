import React from "react";

import { motion } from "framer-motion";


export default function Hero() {
  return (
    <div className="hero">
      <h2 className="hero-name">gedeon kakulia</h2>
      <div className="hero-text">
        <motion.h1 className="hero-text_h1"
          initial={{ x: -400 }}
          animate={{ x: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Front-End Developer
        </motion.h1>
        <motion.div
          className="hero-text_line"
          initial={{ x: -1000 }}
          animate={{ x: 0, y: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.p className="hero-text_p"
         initial={{ x: -1000 }}
         animate={{ x: 0, y: 0, scale: 1 }}
         transition={{ duration: 1.8 }}
        >
          Hey, my name is Gedeon Kakulia. I am a front end developer in Tbilisi.
          I work with clients around the world.
        </motion.p>
      </div>
    
   
    </div>
  );
}




