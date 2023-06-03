import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function AboutSection() {
  const navigate = useNavigate();
  return (
    <div className="section-about">
      <Parallax speed={10}>
        <motion.button
          className="hero-circle"
          initial={{ y: 20 }}
          animate={{ x: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => navigate("about")}
        >
         
            <h1 className="hero-circle_h1" >
              about me
            </h1>{" "}
         
        </motion.button>
      </Parallax>
      <div className="section-about_header">
        <Parallax speed={10} translateY={["200px", "125px"]}>
          <div className="number">01</div>
        </Parallax>
        <Parallax speed={15} translateY={["400px", "50px"]}>
          <div className="stick_header">
            <div className="stick" />
            <p className="stick-p">my services</p>
          </div>
        </Parallax>
      </div>
      <div className="section-about_main">
        <h1>development</h1>
        <p>
          Once the design is ready, it’s time to make your concept live. This is
          when my programming skills will be needed. I transform any designs to
          a high-quality end products with pixel-perfect check.
        </p>
      </div>

      <Parallax speed={5} translateY={["500px", "-150px"]}>
        <div className="sun" />
      </Parallax>
      <Parallax speed={5} translateY={["500px", "300px"]}>
        <img className="wave"
          src="https://uploads-ssl.webflow.com/630b962d741fe7d3044007ae/6319e4a1c7871485a9854765_Curve%20line_2.svg"
          alt=""
        />
      </Parallax>
      <div className="skills">
        <h1>Skills</h1>
        <div>
          <div className="skill">react</div>
          <div className="skill">three.js</div>
          <div className="skill">framer motion</div>
          <div className="skill">html</div>
          <div className="skill">css</div>
          <div className="skill">scss</div>
          <div className="skill">javascript</div>
          <div className="skill">typescript</div>
          <div className="skill">styled components</div>
          <div className="skill">parallax</div>
          <div className="skill">nodejs</div>
          <div className="skill">expressjs</div>
          <div className="skill">mongoDb</div>
          <div className="skill">api</div>
        </div>
      </div>
    </div>
  );
}
