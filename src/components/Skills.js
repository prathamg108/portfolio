import React from 'react'
import './Skills.css'
import { Line } from 'rc-progress';
// import reactphoto from'../photos/react.gif';
// import c from'../photos/c++.png';
// import css from'../photos/css.jpg'
// import html from'../photos/Html5.jpg'
// import js from'../photos/js.jpg'
// import node from'../photos/node.png'

const Skills = () => {
  return (
    <>
    <div>
    Skills
    </div>
    <div className="containers">
        <div className="sname">
            C/C++
            <Line
            percent={70}
            strokewidth="2"
            strokecolor="rgb(212, 222, 222)"
            />
        </div>
    </div>
    </>
  )
}

export default Skills