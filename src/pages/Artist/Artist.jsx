import "./Artist.css";
import SearchBar from "../../components/SearchBar/SearchBar";


const Artist = ({ setSearchQuery }) => {
  return (
    <div>
      <SearchBar updateSearchQuery={setSearchQuery} />
      <h1>Hello Artist Page</h1>
    </div>
  );
};

export default Artist;
