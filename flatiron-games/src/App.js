import { useState, useEffect } from "react";
import "./style/App.css";
import APIKey from "./APIKey";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import DetailModal from "./components/DetailModal";
import SearchBar from "./components/SearchBar";

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [detailGame, setDetailGame] = useState(null);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${APIKey}`)
      .then((response) => response.json())
      .then((data) => {
        const filteredGames = data.results.filter((game) =>
          game.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setGames(filteredGames);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  }, [searchTerm]);

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
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setGames={setGames} // Pass setGames as a prop
        />
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
            <Home games={games} handleDetailClick={handleDetailClick} />

          )}

          {/* add search result component here*/}
        </div>
      </div>
    </div>
  );
}

export default App;
