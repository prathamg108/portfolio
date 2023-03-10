import React from "react";
import "./Home.css";
import { Text } from "./Text";
// import photo from "./Portfolio-photo.jpg";

const Home = () => {
  return (
    <>
      <section id="home_main_head">
        <div className="container">
          <div className="text">
            <Text />
          </div>
          <div className="image">
            <img className="img" src="https://github.com/prathamg108/photo_portfolio/blob/main/Portfolio-photo.jpg?raw=true" alt="Profile Photo_" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
