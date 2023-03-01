import React from "react";
import "./Text.css";
export const Text = () => {
  return (
    <>
      <div style={{ fontSize: "40px" }}>Hii Guys,</div>
      <div className="naming">I'm Pratham Gandhi </div>
      <div className="body">
        I am <span className="web">Full Stack Web Developer</span>, Currently an
        Undergrad Engineering Student Studying in 3rd year of{" "}
        <span className="btech">B.Tech Information Technology</span> in PCCOE.
        Now Searching and Exploring new technology and tools.
      </div>
    </>
  );
};

export const Name = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export default Name;
