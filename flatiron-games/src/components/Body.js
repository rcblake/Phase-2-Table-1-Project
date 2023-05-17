import { useState, useEffect } from "react";
import APIKey from "../APIKey";
// import NavBar from "./NavBar";
import Home from "./Home";

function Body() {
  const [games, setGames] = useState([]);
  // const [page, setPage] = useState("/home");

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${APIKey}`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r.results);
        setGames(r.results);
      });
  }, []);

  // function getPage() {
  //   switch (page) {
  //     case "/home":
  //       return <Home />;
  //     case "/my-games":
  //       return <MyGames />;
  //     case "/platform":
  //       return <Platform />;
  //     default:
  //       return <h1>404 PAGE NOT FOUND</h1>;
  //   }

  return (
    <div>
      {/* <NavBar id="navBar" />
      {getPage()} */}
      <Home games={games} />
    </div>
  );
}
export default Body;
