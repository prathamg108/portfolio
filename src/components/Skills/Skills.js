import React from "react";
import "./Skills.css";
import { Line } from "rc-progress";
import { skills } from "./language";
const Skills = () => {
  return (
    <>
      <section id="skills_main_head">
        <div className="skillspage">
          <div className="skill">Skills</div>
          {skills.map((skill) => (
            <div className="containers" key={skill.Lname}>
              <div className="sname" data-aos="fade-right">
                {skill.Lname}
                <Line
                  className="sline"
                  percent={skill.level}
                  strokeWidth="1.5"
                  trailWidth="1.5"
                  strokeColor="#386C6C"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
