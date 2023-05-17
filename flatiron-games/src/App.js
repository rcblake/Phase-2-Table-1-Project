import { useState, useEffect } from "react";
import "./style/App.css";
import APIKey from "./APIKey";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import DetailModal from "./components/DetailModal";

function App() {
  const [games, setGames] = useState([]);
  // const [page, setPage] = useState("/home");
  const [detailGame, setDetailGame] = useState({});
  // const [pageNumber, setPageNumber] =useState("1")

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?&page_size=40&key=${APIKey}`)
      .then((r) => r.json())
      .then((r) => {
        setGames(r.results);
      });
  }, []);

  const handleDetailClick = (detGame) => {
    setDetailGame(detGame);
  };

  const handleDetailClose = () => setDetailGame({});
  console.log(detailGame);
  return (
    <div class="app">
      <div class="fullpage-left">
        <NavBar />
      </div>
      <div class="fullpage-right">
        <div class="fullpage-header">
          <Header />
        </div>
        <div class="fullpage-content">
          {detailGame !== {} ? (
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
