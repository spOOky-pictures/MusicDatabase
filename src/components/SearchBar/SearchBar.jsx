import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ updateSearchQuery }) => {
  //timeout handler - maybe useful later
  // let deBounceTimer;
  // const changeHandler = (event) => {
  //   clearTimeout(deBounceTimer);
  //   deBounceTimer = setTimeout(() => {
  //     updateSearchQuery(event.target.value);
  //   },800)
  // };

  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    updateSearchQuery(event.target.elements.searchQuery.value);
    navigate("/");
  };

  return (
    <div className="search-bar">
      <form onSubmit={submitHandler}>
        <input
          name="searchQuery"
          className="search-bar__input"
          placeholder="Search Here"
        />
        <button className="search-bar__button" type="Submit">
          Search!
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
