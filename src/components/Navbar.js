import React, { useState } from "react";
import NavbarContainer from "./NavbarContainer";
import { Link } from "./../util/router.js";
import { useRouter } from "./../util/router.js";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

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
            id="hamburger"
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navlinksContainer"
          className={"navbar-menu" + (menuOpen ? " is-active" : "")}
        >
          <span
            className="navlink is-century"
            onClick={() => {
              document.getElementById("hamburger").click();
              router.push("/track");
            }}
          >
            Track
          </span>
          <span
            className="navlink is-century"
            onClick={() => {
              document.getElementById("hamburger").click();
              router.push("/diy");
            }}
          >
            DIY
          </span>
          <span
            className="navlink is-century"
            onClick={() => {
              document.getElementById("hamburger").click();
              router.push("/about");
            }}
          >
            About
          </span>
          <span
            className="navlink is-century"
            onClick={() => {
              document.getElementById("hamburger").click();
              router.push("/faq");
            }}
          >
            FAQ
          </span>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
