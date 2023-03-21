import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import $ from 'jquery';
import React, { useEffect, useState } from 'react';

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

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    $(document).on('ajaxStart.firstCall', function () {
      setIsLoading(true);
    }).on('ajaxStop.firstCall', function () {
      setIsLoading(false);
    });

    return () => {
      $(document).off('ajaxStart.firstCall');
      $(document).off('ajaxStop.firstCall');
    };
  }, []);

  return (
    <div className="search-bar">
      {isLoading && <div id="loading" className="loadOn"></div>}
      <form onSubmit={submitHandler}>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <input
          name="searchQuery"
          className="search-bar__input"
          placeholder="Search Here"
        />
      </form>
    </div>
  );
};

export default SearchBar;
