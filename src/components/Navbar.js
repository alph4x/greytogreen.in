import React, { useState } from "react";
import NavbarContainer from "./NavbarContainer";
import { Link } from "./../util/router.js";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand" style={{}}>
          <div className="navbar-item">
            <Link to="/">
              <img
                className="image"
                src={props.logo}
                alt="Logo"
                style={{ maxHeight: "3rem" }}
              />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <span className="navlink is-century">Contact Us</span>
          <span className="navlink is-century">Track Your Sapling</span>
          <span className="navlink is-century">FAQ</span>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
