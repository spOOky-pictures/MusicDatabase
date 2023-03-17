import './App.css';
import { useState } from "react";
import { Container } from "react-bootstrap";

import Fetch from "./Fetch";
import Particle from "./components/Particle";
import Player from './components/Player/Player';
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Container fluid className="main" id="main">
        <Particle />
        <Container className="main-content">
          <SearchBar updateSearchQuery={setSearchQuery} />
          <h1>Return random result for "{searchQuery}":</h1>
          {searchQuery && (<div id="apiDiv"><Fetch searchQuery={searchQuery}/></div>)}
          <Player title="This is the artist" subtitle="This is the song"/>
        </Container>
      </Container>
    </div>
  );
}

export default App;