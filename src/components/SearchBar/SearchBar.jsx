import "./SearchBar.css";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Preloader from "../../assets/dlf10_OQFbEEEmHE.gif";

const SearchBar = ({ updateSearchQuery }) => {
  const RAPID_API_KEY = "8be18867b6msh6fc8d6aad5acc56p1976f9jsnf9fe02c89bd2";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    updateSearchQuery(event.target.elements.searchQuery.value);
    setIsLoading(true);
    fetch(
      `https://shazam.p.rapidapi.com/search?term=${updateSearchQuery}&limit=5`,
      options
    ).then((response) => {
      setIsLoading(false);
    });
    navigate("/");
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <Link to="/" className="homeButton">HOME</Link>
        <FontAwesomeIcon
          className="searchIcon"
          icon="fa-solid fa-magnifying-glass"
        />
        <input
          name="searchQuery"
          className="search-bar__input"
          placeholder="Search Here"
        />
      </form>
      <div className={isLoading ? "loader-container show" : "loader-container"}>
        {isLoading ? (
          <img className="loader" src={Preloader} alt="Loading..." />
        ) : null}
      </div>
      {console.log("stop", isLoading)}
    </div>
  );
};

export default SearchBar;
