import { useState, useEffect } from "react";
import "./App.css";
import gameKey from "./gameKey";
import GameCard from "./GameCard";
import Header from "./Header";
function App() {
  const [gameArray, setGameArray] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${gameKey}`)
      .then((r) => r.json())
      .then((r) => setGameArray(r.results));
  }, []);

  return (
    <div className="App">
      <Header />
      {gameArray.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default App;
