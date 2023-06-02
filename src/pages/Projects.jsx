import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../../data.json"
import { useEffect } from "react";

export default function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const navigate = useNavigate();
  return (
    <div className="project-page">
      <div className="project-page_header">
        <a href="" className="back" onClick={() => navigate("/")}>
          <span className="material-symbols-outlined">keyboard_backspace</span>
        </a>
        <motion.div className="project-right"
        initial={{ y: -500 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        >
          <h1 className="project-page_h1">My Projects</h1>
          <div className="project-line" />
        </motion.div>
      </div>
      {data.map((project, index) => {
          return (
            <motion.div className="project-page_projects" key={index}
            initial={{ y: 200 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
            >
              <h1>{project.header}</h1>
              <p>{project.text}</p>
              <img className="project-img" src={project.image} alt="" />
            </motion.div>
          );
        })}
     
      <img
        className="project-bottom_sea"
        src="https://uploads-ssl.webflow.com/630b962d741fe7d3044007ae/631894c755081b2dd15a7424_Curve%20line.svg"
        alt=""
      />
    </div>
  );
}
