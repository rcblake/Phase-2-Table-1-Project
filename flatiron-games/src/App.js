import React, { useState, useEffect } from "react";
import "./style/App.css";
import APIKey from "./APIKey";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import DetailModal from "./components/DetailModal";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [games, setGames] = useState([]);
  const [detailGame, setDetailGame] = useState(null);
  const [searchedGames, setSearchedGames] = useState([]);

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

  const handleDetailClick = (detGame) => {
    console.log(detGame);
    setDetailGame(detGame);
  };

  const handleDetailClose = () => {
    setDetailGame(null);
  };

  return (
    <div className="app">
      <div className="fullpage-left">
        <SearchBar handleSearch={handleSearch} games={games} />
        <NavBar />
      </div>
      <div className="fullpage-right">
        <div className="fullpage-header">
          <Header />
        </div>
        <div className="fullpage-content">
          {detailGame ? (
            <DetailModal
              handleDetailClose={handleDetailClose}
              game={detailGame}
            />
          ) : (
            <>
              <Home games={games} handleDetailClick={handleDetailClick} />
              <SearchResults games={searchedGames} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
