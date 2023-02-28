import React from "react";
import "./Skills.css";
import { Line } from "rc-progress";
import { skills } from "./language";
const Skills = () => {
  return (
    <>
      <div className="skillspage">
        <div className="skill" style={{ fontSize: "50px" }}>
          Skills
        </div>
        {skills.map((skill) => (
          <div className="containers" key={skill.Lname}>
            <div className="sname">
              {skill.Lname}
              <Line
                className="sline"
                percent={skill.level}
                strokeWidth="1"
                strokecolor="rgb(212, 222, 222)"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
