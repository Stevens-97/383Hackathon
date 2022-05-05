import React from "react";

export default function InitialForecast({ dailyForecast, city }) {
  return (
    <div className="detailedViewSection">
      <span className="dateAndLocation">
        <h2>{Math.floor(dailyForecast.main.temp_max)}°C</h2>

        <h3>{dailyForecast.dt_txt.substring(0, 10)}</h3>
      </span>
      <span className="forcastSection">
        <img
          className="weatherIcon"
          src={`http://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}.png`}
          alt="weather icon"
        ></img>
        <p className="description">{dailyForecast.weather[0].description}</p>
      </span>
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
