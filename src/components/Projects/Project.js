import React from "react";
import { text } from "./ProjectText";
import "./Project.css";
const Project = () => {
  return (
    <>
      <div>Projects</div>
      <div className="project">
        {text.map((proj) => (
          <div className="card_main" key={proj.topic}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{proj.imgUrl}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{proj.topic}</h6>
                <p className="card-text">
                  {proj.description}
                </p>
                <a href="/" className="card-link">
                  {proj.language}
                </a>
                <a href="/" className="card-link">
                  {proj.github}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
