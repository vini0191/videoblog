import React from "react";
import { Link } from "react-router-dom";

import { tags, videoLinks } from "../Main/videoLinksArray";
import { NavContainer, HomeButton, NavButton } from "./Navbar.style";
import logo from "../../assets/images/tlogo.jpg";

const Navbar = ({ setVideos }) => {
  const filterTakedArray = (tag) =>
    [...videoLinks].reverse().filter((video) => video.tags.includes(tag));

  return (
    <NavContainer>
      <HomeButton>
        <Link onClick={() => setVideos([...videoLinks].reverse())} to="/">
          <img src={logo} alt="Logo" />
          <h2>Memorial Corinthians</h2>
        </Link>
      </HomeButton>
      <NavButton>
        <Link onClick={() => setVideos(filterTakedArray(tags[0]))} to="/">
          Campeonatos
        </Link>
      </NavButton>
      <NavButton>
        <Link onClick={() => setVideos(filterTakedArray(tags[1]))} to="/">
          Jogadores
        </Link>
      </NavButton>
      <NavButton>
        <Link onClick={() => setVideos(filterTakedArray(tags[2]))} to="/">
          Jogos Completos
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/contato">Contato</Link>
      </NavButton>
    </NavContainer>
  );
};

export default Navbar;
