import $ from "jquery";
import './App.css';
import Fetch from "./Fetch";
import { useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <SearchBar updateSearchQuery={setSearchQuery} />
      <h1>Return random result for "{searchQuery}":</h1>
      {searchQuery && (<div id="apiDiv"><Fetch searchQuery={searchQuery}/></div>)}
    </div>
  );
}

export default App;
