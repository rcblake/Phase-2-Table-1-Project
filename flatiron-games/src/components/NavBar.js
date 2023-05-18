import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div class="navBar">
        <NavLink class="homeNav" to="/home">
          Home
        </NavLink>
        <h3>Platforms</h3>
        <ol>
          <NavLink class="platformNav" name="pc" id="4" to="/platform/pc">
            PC
          </NavLink>
          <br></br>
          <NavLink
            class="platformNav"
            name="playstation"
            id="2"
            to="/platform/playstation"
          >
            Playstation
          </NavLink>
          <br></br>
          <NavLink class="platformNav" name="xbox" id="3" to="/platform/xbox">
            Xbox
          </NavLink>
          <br></br>
          <NavLink class="platformNav" name="" id="7" to="/platform/nintendo">
            Nintendo
          </NavLink>
        </ol>
      </div>
    </>
  );
}
export default NavBar;
