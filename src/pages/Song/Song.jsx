import "./Song.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";

const Song = ({ setSearchQuery }) => {
  const { id } = useParams();
  return (
    <div>
      <SearchBar updateSearchQuery={setSearchQuery} />
      <h1>Hello SONG Page {id} </h1>
    </div>
  );
};

export default Song;
