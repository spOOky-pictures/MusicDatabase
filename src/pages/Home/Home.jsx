import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Grid from "../../components/Grid/Grid";
import ResultsCard from "../../components/ResultsCard/ResultsCard";

const Home = ({ setSearchQuery }) => {
  const sampleSongs = ["song 1", "song 2", "song 3", "song 4", "song 5"];
  const artists = ["artist 1", "artist 2", "artist 3", "artist 4", "artist 5"];
  return (
    <div>
      <SearchBar updateSearchQuery={setSearchQuery} />
      <h1>Hello HOME Page</h1>
      <Grid>
        {sampleSongs.map((song, index) => (
          <ResultsCard key={index} />
        ))}
      </Grid>
      <Grid>
        {artists.map((artists, index) => (
          <ResultsCard key={index} />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
