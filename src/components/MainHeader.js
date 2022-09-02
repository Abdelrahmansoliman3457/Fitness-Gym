import React from "react";
import { Link } from "react-router-dom";
import image from '../images/main_header.png'
import "../pages/home.css";

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100daysofworkout</h4>
          <h1>join the legends of fitness world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <Link to='/plans' className="btn lg">Get started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={image} alt='main-header-img'/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
