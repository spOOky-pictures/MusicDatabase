import "./Song.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const Song = ({ setSearchQuery }) => {
  return (
    <div>
      <SearchBar updateSearchQuery={setSearchQuery} />
      <h1>Hello SONG Page</h1>
    </div>
  );
};

export default Song;
