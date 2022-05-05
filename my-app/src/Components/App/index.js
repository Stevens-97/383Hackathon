import "./index.css";
import Input from "../Input";
import InitialForecast from "../InitialForcast";

import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");

  return (
    <div className="content">
      <h1>Weather App</h1>
      <Input setData={setData} setCity={setCity} city={city} />
      <h2 className="cityName">{city}</h2>
      <div className="forecastDisplay">
        {data.map((dailyForecast, index) => (
          <InitialForecast
            city={city}
            dailyForecast={dailyForecast}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
