import search from "../../search.svg";
import "./index.css";

function Input() {
  return (
    <div>
      <form>
        <div class="searchBar">
          <img class="searchIcon" src={search} alt="Search" />
          <input type="search" id="search-input" />
        </div>
      </form>
    </div>
  );
}

export default Input;
