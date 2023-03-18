import "./Artist.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";

const Artist = ({ setSearchQuery }) => {
  const { id } = useParams();
  return (
    <div>
      <SearchBar updateSearchQuery={setSearchQuery} />
      <h1>Hello Artist Page {id} </h1>
    </div>
  );
};

export default Artist;
