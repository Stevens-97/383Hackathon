import "./index.css";
import Input from "../Input";
import InitialForecast from "../InitialForcast";

import { useState } from "react";


function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");

  return (
    <div className="content">
      <Input setData={setData} setCity={setCity} city={city} />
      <div>
        {data.map((dailyForecast, index) => (
          <InitialForecast
            city={city}
            dailyForecast={[dailyForecast]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
