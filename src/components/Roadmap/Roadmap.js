import React from "react";
import "./Roadmap.css";
const Roadmap = () => {
  return (
    <>
      <div className="head">Roadmap of MY Life</div>
      <div className="timeline">
        <div className="container-box left-container">
          <img
            src="https://github.com/prathamg108/photo_portfolio/blob/main/white%20dot.png?raw=true"
            alt="Photus"
          />
          <div className="text-box">
            <h2>School</h2>
            <small>2014-18</small>
            <p>
              <div>SSC </div>
              Shree Wardhaman Vidyalaya, Walchandanagar
            </p>
          </div>
        </div>
        <div className="container-box right-container">
          <img
            src="https://github.com/prathamg108/photo_portfolio/blob/main/white%20dot.png?raw=true"
            alt="Photus"
          />
          <div className="text-box">
            <h2>Junior College</h2>
            <small>2018-20</small>
            <p>
              <div>HSC </div>
              Shree Wardhaman Vidyalaya, Walchandanagar
            </p>
          </div>
        </div>
        <div className="container-box left-container">
          <img
            src="https://github.com/prathamg108/photo_portfolio/blob/main/white%20dot.png?raw=true"
            alt="Photus"
          />
          <div className="text-box">
            <h2>B.Tech IT Engineering</h2>
            <small>2020-Present</small>
            <p>
              <div>Under Graduation</div>
              Pimpri Chinchwad College of Engineering, Pune
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
