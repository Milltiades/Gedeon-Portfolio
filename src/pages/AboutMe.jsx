import React from "react";

import { motion } from "framer-motion";

export default function AboutMe() {
  
  return (
    <div className="about-page">
      <div className="about-page_header">
        <a href="/#/" className="back" >
          <span className="material-symbols-outlined">keyboard_backspace</span>
        </a>
        <motion.div className="about-right"
        initial={{ y: -500 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        >
          <h1 className="about-page_h1">About Me</h1>
          <div className="about-line" />
        </motion.div>
      </div>
      <motion.p className="about-page_p"
       initial={{ x: -1000 }}
       animate={{ x: 0, y: 0, scale: 1 }}
       transition={{ duration: 1.5 }}
       >
        When I don’t work with startups, I play games or hanging out with my
        friends. I love to network with other people and always looking for new
        friends or collegues. Passionate about web technologies. I love working
        with startups and build new products. I create memorable web
        experiences.
      </motion.p>
      <img
        className="about-bottom_sea"
        src="https://uploads-ssl.webflow.com/630b962d741fe7d3044007ae/631894c755081b2dd15a7424_Curve%20line.svg"
        alt=""
      />
    </div>
  );
}
