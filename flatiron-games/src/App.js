import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./style/App.css";
import APIKey from "./APIKey";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import Platform from "./components/Platform";

// import DetailModal from "./components/DetailModal";

function App() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState("/home");
  // const [detailGame, setDetailGame] = useState({});
  const [currentPlatformGames, setCurrentPlatformGames] = useState([]);
  const [currentPlatform, setCurrentPlatform] = useState("");

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${APIKey}`)
      .then((r) => r.json())
      .then((r) => {
        setGames(r.results);
      });
  }, []);

  const onNavLinkClick = (navName, navID) => {
    setCurrentPlatform(navName);
    fetch(
      `https://api.rawg.io/api/games?page_size=40&platforms=${navID}&key=${APIKey}`
    )
      .then((res) => res.json())
      .then((res) => setCurrentPlatformGames(res.results));
  };

  return (
    <div class="app">
      <div class="fullpage-left">
        <NavBar onNavLinkClick={onNavLinkClick} />
      </div>
      <div class="fullpage-right">
        <div class="fullpage-header">
          <Header />
        </div>
        <div class="fullpage-content">
          <Routes>
            <Route path="/home" element={<Home games={games} />} />
            {/* <Route path="/search" element={<Search />} />
               needs to be changed to what Cody named it */}
            <Route
              path="/platform/pc"
              element={
                <Platform
                  currentPlatformGames={currentPlatformGames}
                  name={"PC"}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
