import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Fetch from "./Fetch";
import { useState } from "react";
import Particle from "./components/Particle";

import SearchBar from "./components/SearchBar/SearchBar";
import Grid from "./components/Grid/Grid";
import ResultsCard from "./components/ResultsCard/ResultsCard";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const sampleSongs = ["song 1", "song 2", "song 3", "song 4", "song 5"];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <p>Home</p>,
    },
    {
      path: "/song",
      element: <p>Song</p>,
    },
  ]);
  return (
    <div>
      <Particle />
      <SearchBar updateSearchQuery={setSearchQuery} />
      <RouterProvider router={router} />
      {/* <h1>Return random result for "{searchQuery}":</h1>
      {searchQuery && (
        <div id="apiDiv">
          <Fetch searchQuery={searchQuery} />
        </div>
      )}
      <Grid>
        {sampleSongs.map((song, index) => (
          <ResultsCard key={index} />
        ))}
      </Grid> */}
    </div>
  );
}

export default App;
