import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Grid from "../../components/Grid/Grid";
import ResultsCard from "../../components/ResultsCard/ResultsCard";
import { useState, useEffect } from "react";

const Home = ({ searchQuery, setSearchQuery }) => {
  const [searchResults, setSearchResults] = useState();
  const getResults = async () => {
    const RAPID_API_KEY = "7b3e3a16eemsh1d5ca9221cc5af1p13e3dajsnae28b950f9b1";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };
    const queryResponse = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${searchQuery}&limit=5`,
      options
    );
    const responseResults = await queryResponse.json();
    setSearchResults(responseResults);
    return responseResults;
  };
  useEffect(() => {
    const getSearchResults = async () => await getResults();
    if (searchQuery !== "") getSearchResults();
  }, [searchQuery]);
  return (
    <div>
      <SearchBar updateSearchQuery={setSearchQuery} />
      {searchResults && (
        <>
          <h1>Artist:</h1>
          <Grid>
            {searchResults?.artists?.hits.map((artist, index) => (
              <ResultsCard
                redirectType="artist"
                redirectId={artist.artist.adamid}
                cardTitle={artist.artist.name}
                key={`Artist${index}`}
                image={artist.artist.avatar}
              />
            ))}
          </Grid>
          <h1>Tracks:</h1>
          <Grid>
            {searchResults?.tracks?.hits.map((track, index) => (
              <ResultsCard
                redirectType="song"
                redirectId={track.track.key}
                cardTitle={track.track.title}
                key={`Track${index}`}
                image={track.track.images.coverart}
              />
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default Home;
