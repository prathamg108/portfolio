import React from "react";
import { text } from "./ProjectText";
import "./Project.css";
const Project = () => {
  return (
    <>
      <div>Projects</div>
      <div className="project">
        {text.map((proj) => (
          <div className="list" key={proj.topic}>
            <div className="card">
              <div className="card_image">
                <img src="{proj.imaUrl}" alt="photoss" />
              </div>
              <div className="img_txt">{proj.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
