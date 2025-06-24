import React from "react";
import "./Box.css";

function Box({ title,date, image, description }) {
  return (
    <div className="box">
      <img src={image} alt={title} className="box-image" />
      <div className="box-content">
        <h3 className="box-title">{title}</h3>
        <p className="box-date">{date}</p>
        <p className="box-description">{description}</p>
      </div>
    </div>
  );
}

export default Box;
