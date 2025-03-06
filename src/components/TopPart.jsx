import React from "react";
import profileImage from "../assets/profileImg.png";

const TopPart = () => {
  return (
    <div className="personal">
      <span className="pro">PRO</span>
      <img src={profileImage} alt="" />
      <h1 className="name">Aleksandar Kuzmanovic</h1>
      <p className="country">Serbia</p>
      <p className="stack">Front-End Web Developer</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="secondary">Following</button>
      </div>
      <div className="social">
      </div>
    </div>
  );
};

export default TopPart;