import "./Artist.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Artist = ({ setSearchQuery }) => {
const { artistName } = useParams();

const [artistResults, setArtistResults] = useState();
    return (
      <div>
        <SearchBar updateSearchQuery={setSearchQuery} />
        {console.log("testL: ",useParams())}
        <h1>Artist {artistName}</h1>
        {artistResults && (
          <p dangerouslySetInnerHTML={{__html: artistResults}}></p>
        )}
      </div>
    )
}

export default Artist;