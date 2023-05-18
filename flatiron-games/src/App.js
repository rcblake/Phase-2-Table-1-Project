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
  const [platformGames, setPlatformGames] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${APIKey}`)
      .then((r) => r.json())
      .then((r) => {
        setGames(r.results);
      });
  }, []);
  const handlePlatforms = () => {};
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?page_size=40&platforms=1&key=${APIKey}`
    )
      .then((res) => res.json())
      .then((res) => setPlatformGames(res.results));
  }, []);

  // const handleDetailClick = (detGame) => {
  //   setDetailGame(detGame);
  // };

  // const handleDetailClose = () => setDetailGame({});
  // console.log(detailGame);

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
          <Routes>
            <Route path="/home" element={<Home games={games} />}>
            {/* <Route path="/search">
               needs to be changed to what Cody named it
                  <Search /> 
               </Route> */}
            <Route>
              <Platform
              // handleDetailClick={handleDetailClick}
              />
            </Route>
          </Routes>
          <Platform
            platformGames={platformGames}
            // handleDetailClick={handleDetailClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
