import React from "react";
import './Home.css';
import {Text} from "./Text";
import photo from './Portfolio-photo.jpg';

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="text">
        <Text/>
      </div>
      <div className="image">
        <img className="img" src={photo} alt="Profile Photo_" />
      </div>
    </div>
    </>
  );
};

export default Home;
