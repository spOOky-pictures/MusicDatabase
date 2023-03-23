import "./SearchBar.css";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Preloader from "../../assets/dlf10_OQFbEEEmHE.gif";

const SearchBar = ({ updateSearchQuery }) => {
  const RAPID_API_KEY = "b0a488d969msh0a425f0258f176bp14aaefjsn8a4e011bc7d4";
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
    <>
    <Link to="/" className="homeButton">HOME</Link>
    <div className="search-bar">
      <form onSubmit={handleSearch}>
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
    </div>
    </>
  );
};

export default SearchBar;
