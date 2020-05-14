import React from "react";
import { Link } from "react-router-dom";

import { NavContainer, HomeButton, NavButton } from "./Navbar.style";
import logo from "../../assets/images/tlogo.jpg";

const Navbar = () => (
  <NavContainer>
    <HomeButton>
      <Link to="/">
        <img src={logo} alt="Logo" />
        <h2>Memorial Corinthians</h2>
      </Link>
    </HomeButton>
    <NavButton>Campeonatos</NavButton>
    <NavButton>Jogadores</NavButton>
    <NavButton>Jogos Completos</NavButton>
    <NavButton>
      <Link to="/contato">Contato</Link>
    </NavButton>
  </NavContainer>
);

export default Navbar;
