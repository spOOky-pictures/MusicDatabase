import './App.css';
import Fetch from "./Fetch";
import { useState } from "react";
import Particle from "./components/Particle";

import SearchBar from "./components/SearchBar/SearchBar";
import Grid from "./components/Grid/Grid";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Particle />
      <SearchBar updateSearchQuery={setSearchQuery} />
      <h1>Return random result for "{searchQuery}":</h1>
      {searchQuery && (<div id="apiDiv"><Fetch searchQuery={searchQuery}/></div>)}
      <Grid />
    </div>
  );
}

export default App;
