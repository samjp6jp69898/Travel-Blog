import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="about_container">
        <div className="about_info">
          <div className="about_image">
            <img src="images/8.jpg" alt="" className="image"></img>
          </div>
          <div className="about_wrapper">
          <img src="images/direct-flight.png"/>
            <p className="head">Hi, I'm Sam...</p>
            <p className="about_text">
              <br></br>I was once an international student in Tacoma, WA and Mena, AR between
              2015-2019. From the time, I realized how much adventures mean to
              me.
              <br></br>
              Let's why... I started to travel{" "}
              
            </p>
          </div>
        </div>
        <div className="more_container">
          <div className="more">
          <button className="about_btn">Read More</button>
          <i class="arrow down"></i>
          </div>
        </div>
        
      </div>
    </>
  );
}
