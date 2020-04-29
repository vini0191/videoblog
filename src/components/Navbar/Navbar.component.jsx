import React from "react";
import { NavContainer, NavButton } from "./Navbar.style";

const Navbar = () => (
  <div className="container">
    <NavContainer>
      <NavButton>Primeiro item</NavButton>
      <NavButton>Segundo item</NavButton>
      <NavButton>Terceiro item</NavButton>
    </NavContainer>
  </div>
);

export default Navbar;
