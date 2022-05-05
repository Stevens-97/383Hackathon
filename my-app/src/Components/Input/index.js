import search from "../../search.svg";
import "./index.css";
import { useEffect, useState } from "react";

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
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&exclude=daily&appid=fd903fcfc90838b5318cea86cb793633`
        );
        let data = await res.json();
        console.log(data.list);
        setData(makeNewForecastList(data.list));
        console.log(data.list);
        console.log(data.list[0]);
        setToggleSearch(false);
      }
    }
    fetchData();
  }, [toggleSearch]);

  function handleInput(e) {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setCity(inputText);
    console.log(city);
    setToggleSearch(true);
  }

  return (
    <div>
      <form>
        <div class="searchBar">
          <form>
            <button
              type="submit"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <img class="searchIcon" src={search} alt="Search" />
            </button>
            <input
              type="search"
              id="search-input"
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </form>
        </div>
      </form>
    </div>
  );
}

export default Input;
