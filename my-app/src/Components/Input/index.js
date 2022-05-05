import search from "../../search.svg";
import "./index.css";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

function Input({ setData, setCity, city }) {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [inputText, setInputText] = useState("");

  function makeNewForecastList(original) {
    return [
      original[0],
      original[8],
      original[16],
      original[24],
      original[32],
      original[39],
    ];
  }

  useEffect(() => {
    async function fetchData() {
      if (toggleSearch) {
        let res = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&exclude=daily&appid=${API_KEY}`
        );
        let data = await res.json();

        setData(makeNewForecastList(data.list));

        setToggleSearch(false);
      }
    }
    fetchData();
  }, [toggleSearch]);

  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setCity(inputText);

    setToggleSearch(true);
  }

  return (
    <div>
      <form>
        <div className="searchBar">
          <button
            type="submit"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <img className="searchIcon" src={search} alt="Search" />
          </button>
          <input
            type="search"
            id="search-input"
            onChange={(e) => {
              handleInput(e);
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Input;
