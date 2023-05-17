import { useState, useEffect } from "react";
import "./style/App.css";
import APIKey from "./APIKey";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import DetailModal from "./components/DetailModal";

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
  }, [searchTerm]); // Include searchTerm as a dependency

  const handleDetailClick = (detGame) => {
    console.log(detGame); // Console log the details
    setDetailGame(detGame);
  };

  const handleDetailClose = () => setDetailGame({});

  return (
    <div className="app"> {/* Replace class with className */}
      <div className="fullpage-left"> {/* Replace class with className */}
        <input
          type="text"
          placeholder="Search games"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <NavBar />
      </div>
      <div className="fullpage-right"> {/* Replace class with className */}
        <div className="fullpage-header"> {/* Replace class with className */}
          <Header />
        </div>
        <div className="fullpage-content"> {/* Replace class with className */}
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
