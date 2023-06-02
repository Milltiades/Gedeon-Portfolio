import React from "react";
import { Parallax } from "react-scroll-parallax";
import data from '../../data.json'
import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <div className="section-project">
     
      <div className="section-project_header">
        <Parallax speed={10} translateY={["1300px", "400px"]}>
          <div className="number-project" >02</div>
        </Parallax>
        <Parallax speed={15} translateY={["1150px", "250px"]}>
          <div className="stick_header">
            <div className="stick" />
            <p className="stick-p">my projects</p>
          </div>
        </Parallax>
      </div>
    
   <div className="section-project_main">
  
   <motion.img className="sea"
          src="https://uploads-ssl.webflow.com/630b962d741fe7d3044007ae/6319e4a1c7871485a9854765_Curve%20line_2.svg"
          alt=""
          animate={{
            x: ['-100%', '150%'],
           
          }}
          transition={{
            duration: 4,
            ease: 'linear',
            repeat: Infinity
          }}
        />

    {data.map((project, index) => {
        return (
            <div className="project" key={index}>
                <h1>{project.header}</h1>
                <p>{project.text}</p>
                <img className="project-img" src={project.image} alt="" />
            </div>
        )
    })}
    <button className="section-btn">For more
    <span style={{marginLeft: '10px'}} class="material-symbols-outlined">
chevron_right
</span>
     </button>

<motion.img className="sea"
          src="https://uploads-ssl.webflow.com/630b962d741fe7d3044007ae/6319e4a1c7871485a9854765_Curve%20line_2.svg"
          alt=""
          animate={{
            x: ['150%', '-100%'],
           
          }}
          transition={{
            duration: 4,
            ease: 'linear',
            repeat: Infinity
          }}
        />
    
   </div>
   
     
    </div>
  );
}
