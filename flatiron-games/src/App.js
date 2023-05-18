import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./style/App.css";
import APIKey from "./APIKey";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Platform from "./components/Platform";
// import DetailModal from "./components/DetailModal";

function App() {
  const [games, setGames] = useState([]);
  // const [detailGame, setDetailGame] = useState(null);
  const [searchedGames, setSearchedGames] = useState([]);
  const [currentPlatformGames, setCurrentPlatformGames] = useState([]);
  const [currentPlatform, setCurrentPlatform] = useState("");

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${APIKey}`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${APIKey}&search=${searchTerm}`
      );
      const data = await response.json();
      setSearchedGames(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  // Detail not active
  //   const handleDetailClick = (detGame) => {
  //     console.log(detGame);
  //     setDetailGame(detGame);
  //   };

  //   const handleDetailClose = () => {
  //     setDetailGame(null);
  //   };

  const onNavLinkClick = (navName, navID) => {
    setCurrentPlatform(navName);
    fetch(
      `https://api.rawg.io/api/games?page_size=40&platforms=${navID}&key=${APIKey}`
    )
      .then((res) => res.json())
      .then((res) => setCurrentPlatformGames(res.results));
  };

  return (
    <div className="app">
      <div className="fullpage-left">
        <SearchBar handleSearch={handleSearch} games={games} />
        <NavBar onNavLinkClick={onNavLinkClick} />
      </div>
      <div className="fullpage-right">
        <div className="fullpage-header">
          <Header />
        </div>

        <div class="fullpage-content">
          <Routes>
            <Route path="/home" element={<Home games={games} />} />
            <Route
              path="/searchresults"
              element={<SearchResults games={searchedGames} />}
            />

            <Route
              path=":currentPlatform"
              element={
                <Platform
                  currentPlatformGames={currentPlatformGames}
                  currentPlatform={currentPlatform}
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
