import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onNavLinkClick }) {
  const handleNavLinkClick = (e) => {
    onNavLinkClick(e.target.name, e.target.id);
    console.log(e.target);
  };

  return (
    <>
      <div class="navBar">
        <NavLink onClick={handleNavLinkClick} class="homeNav" to="/home">
          Home
        </NavLink>
        <h3>Platforms</h3>
        <ol>
          <NavLink
            onClick={handleNavLinkClick}
            class="platformNav"
            name="PC"
            id="4"
            to="/pc"
          >
            PC
          </NavLink>
          <br></br>
          <NavLink
            onClick={handleNavLinkClick}
            class="platformNav"
            name="PlayStation"
            id="187"
            to="/playstation"
          >
            Playstation
          </NavLink>
          <br></br>
          <NavLink
            onClick={handleNavLinkClick}
            class="platformNav"
            name="Xbox"
            id="3"
            to="/xbox"
          >
            Xbox
          </NavLink>
          <br></br>
          <NavLink
            onClick={handleNavLinkClick}
            class="platformNav"
            name="Nintendo"
            id="7"
            to="/nintendo"
          >
            Nintendo
          </NavLink>
        </ol>
      </div>
    </>
  );
}
export default NavBar;
