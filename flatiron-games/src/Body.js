import { useState, useEffect } from "react";
import APIKey from "./APIKey";
import NavBar from "./NavBar";

function Body() {
  const [gameArray, setGameArray] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${APIKey}`)
      .then((r) => r.json())
      .then((r) => setGameArray(r.results));
  }, []);

  return (
    <div>
      <NavBar id="navBar" />
      {/* <Home id="home" />
      <MyGames id="myGames" />
      <Platforms class="platforms" /> */}
    </div>
  );
}
export default Body;
