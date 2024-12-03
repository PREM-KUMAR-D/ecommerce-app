import React from "react";
import "./HeaderButtons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderButtons = () => {
  return (
    <div className="header-buttons ">
      <button className="latest-album">Get our Latest Album</button>
      <button className="play-btn ">►</button>
      <br></br>
    </div>
  );
};

export default HeaderButtons;
