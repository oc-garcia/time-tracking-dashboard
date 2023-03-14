import React from "react";

import "./TimeTrackerCard.css";
import ellipsis from "./icon-ellipsis.svg";

export default function TimeTrackerCard({ title, actual, previous, theme }) {
  return (
    <div className="TrackerContainer">
      <div className={`Header ${theme}`}></div>
      <div className="CardInfo">
        <div className="TrackerTitleContainer">
          <h2>{title}</h2>
          <img src={ellipsis} alt="Options" />
        </div>
        <div className="HoursContainer">
          <p className="Actual">{actual} hrs </p>
          <p className="Previous">Last day - {previous} hrs</p>
        </div>
      </div>
    </div>
  );
}
