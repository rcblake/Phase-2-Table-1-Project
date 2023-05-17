import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navBar">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/mygames">My Games</NavLink>
      <NavLink to="/platform">Platform</NavLink>
    </nav>
  );
}
export default NavBar;
