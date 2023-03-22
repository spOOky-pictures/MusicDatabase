import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Grid from "../../components/Grid/Grid";
import ResultsCard from "../../components/ResultsCard/ResultsCard";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Player from '../../components/Player/Player';

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
      <h1>Results Page</h1>
      {searchResults && (
        <>
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
      <Container className="main-content">
        <Player title="This is an artist" subtitle="This is the song"/>
      </Container>
    </div>
  );
};

export default Home;
