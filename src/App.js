import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./components/Fontawesome";

import Home from "./pages/Home/Home";
import Song from "./pages/Song/Song";
import Artist from "./pages/Artist/Artist";

import Particle from "./components/Particle";

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
      path: "/song/:songName",
      element: <Song setSearchQuery={setSearchQuery} />,
    },
    {
      path: "/artist/:artistName",
      element: <Artist setSearchQuery={setSearchQuery} />,
    },
  ]);
  return (
    <Container fluid className="main" id="main">
      <RouterProvider router={router} />
      <Particle />
    </Container>
  );
}

export default App;