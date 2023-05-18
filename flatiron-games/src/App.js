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
import DetailModal from "./components/DetailModal";

function App() {
  const [games, setGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [currentPlatformGames, setCurrentPlatformGames] = useState([]);
  const [currentPlatform, setCurrentPlatform] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalGame, setModalGame] = useState({});

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
      setIsModalVisible(false);

      setSearchedGames(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleModalClick = (modGame) => {
    setIsModalVisible(true);
    setModalGame(modGame);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const onNavLinkClick = (navName, navID) => {
    setIsModalVisible(false);
    setCurrentPlatform(navName);
    fetch(
      `https://api.rawg.io/api/games?page_size=40&platforms=${navID}&key=${APIKey}`
    )
      .then((res) => res.json())
      .then((res) => setCurrentPlatformGames(res.results));
  };
  console.log(modalGame);
  return (
    <div className="app">
      <div className="fullpage-left">
        <div className="sidePanel">
          <SearchBar handleSearch={handleSearch} />
          <NavBar onNavLinkClick={onNavLinkClick} />
        </div>
      </div>
      <div className="fullpage-right">
        <div className="fullpage-header">
          <Header />
        </div>

        <div className="fullpage-content">
          {isModalVisible ? (
            <DetailModal
              modalGame={modalGame}
              handleModalClose={handleModalClose}
            />
          ) : (
            <Routes>
              <Route
                path="/home"
                element={
                  <Home games={games} handleModalClick={handleModalClick} />
                }
              />
              <Route
                path="/search_results"
                element={
                  <SearchResults
                    games={searchedGames}
                    handleModalClick={handleModalClick}
                  />
                }
              />

              <Route
                path=":currentPlatform"
                element={
                  <Platform
                    currentPlatformGames={currentPlatformGames}
                    currentPlatform={currentPlatform}
                    handleModalClick={handleModalClick}
                  />
                }
              />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
