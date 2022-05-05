import React from "react";

export default function InitialForecast() {
  return (
    <div className="detailedViewSection">
      <span className="dateAndLocation">
        <h1>{city}</h1>
        <h2>{data.list[0].main.temp}</h2>
      </span>
      <span className="forcastSection">
        <img></img>
        <p></p>
      </span>
    </div>
  );
}
