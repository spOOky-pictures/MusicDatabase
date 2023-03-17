import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Fetch from "./Fetch";
import { useState } from "react";
import Particle from "./components/Particle";

import SearchBar from "./components/SearchBar/SearchBar";
import Grid from "./components/Grid/Grid";
import ResultsCard from "./components/ResultsCard/ResultsCard";
import Home from "./pages/Home/Home";
import Song from "./pages/Song/Song";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setSearchQuery={setSearchQuery} />,
    },
    {
      path: "/song",
      element: <Song setSearchQuery={setSearchQuery} />,
    },
  ]);
  return (
    <div>
      <Particle />
      <RouterProvider router={router} />
      {/* <h1>Return random result for "{searchQuery}":</h1> */}
      {/* {searchQuery && (
        <div id="apiDiv">
          <Fetch searchQuery={searchQuery} />
        </div>
      )} */}

    </div>
  );
}

export default App;
