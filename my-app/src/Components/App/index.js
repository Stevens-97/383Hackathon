import "./index.css";
import Input from "../Input";
import InitialForecast from "../InitialForcast";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");

  return (
    <div className="content">
      <Input setData={setData} setCity={setCity} city={city}></Input>
      {data.map((dailyForecast, index) => {
        <InitialForecast city={city} data={dailyForecast} key={index} />;
      })}
    </div>
  );
}

export default App;
