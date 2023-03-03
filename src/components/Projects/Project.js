import React from "react";
import { text } from "./ProjectText";
import "./Project.css";
const Project = () => {
  return (
    <>
      <div className="pro">Projects</div>
      <div className="project">
        {text.map((proj) => (
          <div className="card_main" key={proj.topic}>
            <div className="card" style={{ width: "18rem" }} data-aos={proj.effect} >
              <div className="card-body">
                <img
                  className="card-title"
                  src={proj.imgUrl}
                  alt="Photus of note"
                />
                <h6 className="card-subtitle ">{proj.topic}</h6>
                <p className="card-text">{proj.description}</p>
                <span  className="card-link">
                  {proj.language}
                </span>
                <a href={proj.github} rel="noreferrer" target="_blank" className="card-link">
                <i className="fa-brands fa-github"></i>
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
