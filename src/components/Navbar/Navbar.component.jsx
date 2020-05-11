import React from "react";
import { Link } from "react-router-dom";

import { NavContainer, HomeButton, NavButton } from "./Navbar.style";
import logo from "../../assets/images/corinthians.png";

const Navbar = () => (
  <NavContainer>
    <HomeButton>
      <Link to="/">
        <img src={logo} alt="Logo" />
        <h1>VideoBlog</h1>
      </Link>
    </HomeButton>
    <NavButton>Primeiro item</NavButton>
    <NavButton>Segundo item</NavButton>
    <NavButton>Terceiro item</NavButton>
    <NavButton>
      <Link to="/contato">Contato</Link>
    </NavButton>
  </NavContainer>
);

export default Navbar;
