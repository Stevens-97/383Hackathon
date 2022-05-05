import search from "../../search.svg";
import "./index.css";
import { useEffect, useState } from "react";

function Input() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [inputText, setInputText] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (toggleSearch) {
        let res = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a62faa97d1a6202196954776c4f104b3`
        );
        let data = await res.json();
        console.log(data);
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
