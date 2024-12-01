import React from "react";
import "./TourItem.css";

const TourItem = ({ date, place, venue }) => {
  return (
    <div className="tour-item">
      <span className="tour-date">{date}</span>
      <span className="tour-place">{place}</span>
      <span className="tour-spec-place">{venue}</span>
      <button className="buy-btn">BUY TICKETS</button>
    </div>
  );
};

export default TourItem;
