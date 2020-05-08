import React from "react";
import picture from "../../asset/image/burger.png";
import "./Logo.css";

const logo = () => {
  return (
    <div className="logo">
      <img src={picture} alt="Myburger" />
    </div>
  );
};
export default logo;
