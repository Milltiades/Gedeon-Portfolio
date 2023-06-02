import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function Contact() {
  return (
    <div className="contact">
      <div className="section-contact_header">
        <Parallax speed={10} translateY={["300px", "150px"]}>
          <div className="number-contact">03</div>
        </Parallax>
        <Parallax speed={15} translateY={["150px", "0px"]}>
          <div className="stick_header">
            <div className="stick" />
            <p className="stick-p">contact me</p>
          </div>
        </Parallax>
      </div>

      <h1>
        <a style={{color: 'black'}} href="mailto:name@rapidtables.com">
          {" "}
          gigakakulia2017 <br />
          @gmail.com{" "}
        </a>
      </h1>

      <img
        className="sea-bottom"
        src="https://uploads-ssl.webflow.com/630b962d741fe7d3044007ae/631894c755081b2dd15a7424_Curve%20line.svg"
        alt=""
      />
      <div className="footer">
        <a href="#"> <h2>gedeon kakulia</h2> </a>
        <h2>2023</h2>
      </div>
    </div>
  );
}
