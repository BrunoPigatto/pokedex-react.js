import React from "react";
import Logo from "../imgs/pokeapi_256.3fa72200.png";

export default function Navbar() {
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={Logo} className="navbar-img" />
      </div>
    </nav>
  );
}
