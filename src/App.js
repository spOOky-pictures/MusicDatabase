import './App.css';
import Fetch from "./Fetch";
import { useState } from "react";
import Player from './components/Player/Player';

import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <SearchBar updateSearchQuery={setSearchQuery} />
      <h1>Return random result for "{searchQuery}":</h1>
      {searchQuery && (<div id="apiDiv"><Fetch searchQuery={searchQuery}/></div>)}
      <Player title="This is the artist" subtitle="This is the song"/>
    </div>
  );
}

export default App;
