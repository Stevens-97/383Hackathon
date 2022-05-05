import React, { useState } from "react";

export default function InitialForecast({ dailyForecast, city }) {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <div className="detailedViewSection" onClick={handleClick}>
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
      <span>
        {toggle && (
          <span>
            <p>Humidity: {dailyForecast.main.humidity}</p>
            <p>Feels like: {dailyForecast.main.feels_like}</p>
          </span>
        )}
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
