import { useState, useEffect } from "react";
import "./style/App.css";
import APIKey from "./APIKey";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import DetailModal from "./components/DetailModal";
import SearchBar from "./components/SearchBar"; // Import the SearchBar component

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [detailGame, setDetailGame] = useState({});

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${APIKey}`)
      .then((r) => r.json())
      .then((r) => {
        const filteredGames = r.results.filter((game) =>
          game.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setGames(filteredGames);
      });
  }, [searchTerm]);

  const handleDetailClick = (detGame) => {
    console.log(detGame);
    setDetailGame(detGame);
  };

  const handleDetailClose = () => setDetailGame({});

  return (
    <div className="app">
      <div className="fullpage-left">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <NavBar />
      </div>
      <div className="fullpage-right">
        <div className="fullpage-header">
          <Header />
        </div>
        <div className="fullpage-content">
          {detailGame ? (
            <Home games={games} handleDetailClick={handleDetailClick} />
          ) : (
            <DetailModal
              handleDetailClose={handleDetailClose}
              game={detailGame}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
