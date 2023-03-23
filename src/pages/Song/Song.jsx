import "./Song.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const Song = ({ setSearchQuery }) => {
  const { songId } = useParams();
  const { artistName } = useParams();
  const [songData, setSongData] = useState();
  let filteredSections;

  const getSongData = async () => {
    const RAPID_API_KEY = "b0a488d969msh0a425f0258f176bp14aaefjsn8a4e011bc7d4";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };
    const queryResponse = await fetch(
      `https://shazam.p.rapidapi.com/songs/get-details?key=${songId}`,
      options
    );
    const responseResults = await queryResponse.json();
    setSongData(responseResults);
    return responseResults;
  };

  useEffect(() => {
    const getSearchResults = async () => await getSongData();
    getSearchResults();
  }, [songId]);

  const renderSongData = () => {
    if (songData) {
      filteredSections = [...songData.sections];
      filteredSections = filteredSections.filter(
        (section) => section.type === "VIDEO"
      );
    }
    console.log(filteredSections);
    return (
      <>
        <div className="songSection">
          <img className="artist__avatar" src={songData.images.background} />
          <div className="songInfo">
            <h1 className="song-title">{songData.title}</h1>
            <h2>Artist: {songData.subtitle}</h2>
            <h2>Genre: {songData.genres.primary}</h2>
            <h2>Album: {songData.sections[0].metadata[0].text}</h2>
            <h2>Release Year: {songData.sections[0].metadata[2].text}</h2>
          </div>
        </div>
        <audio className="player" controls preload="none">
          <source className="player-control" src={songData.hub.actions[1].uri} type="audio/mp4" />
        </audio>
        <h2 className="youtubeHeading">Watch the video on YouTube!:</h2>
        {filteredSections.length !== 0 && (
          <ReactPlayer
            className="youtubePlayer"
            url={filteredSections[0].youtubeurl.actions[0].uri}
          />
        )}
      </>
    );
  };

  return (
    <div>
      <SearchBar updateSearchQuery={setSearchQuery} />

      <div className="songPageContent">
        {!songData && <p>Loading</p>}
        {songData && renderSongData()}
      </div>
    </div>
  );
};

export default Song;
