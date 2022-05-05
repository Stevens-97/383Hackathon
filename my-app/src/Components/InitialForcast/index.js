import React from "react";

export default function InitialForecast({ dailyForecast, city }) {
  return (
    <div className="detailedViewSection">
      <p>{dailyForecast[0]}</p>
    </div>
  );
}

/*
      <span className="dateAndLocation">
        <h1>{city}</h1>
        <h2>{data.list[0].main.temp}</h2>
      </span>
      <span className="forcastSection">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt="weather icon"
        ></img>
        <p></p>
      </span>

*/
