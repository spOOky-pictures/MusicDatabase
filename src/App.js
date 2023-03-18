import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home/Home";
import Song from "./pages/Song/Song";
import Artist from "./pages/Artist/Artist";

import Particle from "./components/Particle";
// import Fetch from "./Fetch";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      ),
    },
    {
      path: "/song/:id",
      element: <Song setSearchQuery={setSearchQuery} />,
    },
    {
      path: "/artist/:id",
      element: <Artist setSearchQuery={setSearchQuery} />,
    },
  ]);
  return (
    <div>
      <Particle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
