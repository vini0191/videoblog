import React from "react";
import { Link } from "react-router-dom";
import videoLinks from "../Main/videoLinksArray";

import { NavContainer, HomeButton, NavButton } from "./Navbar.style";
import logo from "../../assets/images/tlogo.jpg";

const Navbar = ({ setVideos }) => {
  const tags = ["campeonatos", "jogadores", "jogos_completos"];
  // const selectTag =(tag)=> [...videoLinks].reverse().filter((video) => video.tags.includes(tag);

  return (
    <NavContainer>
      <HomeButton>
        <Link onClick={() => setVideos([...videoLinks].reverse())} to="/">
          <img src={logo} alt="Logo" />
          <h2>Memorial Corinthians</h2>
        </Link>
      </HomeButton>
      <NavButton
        onClick={() =>
          setVideos(
            [...videoLinks]
              .reverse()
              .filter((video) => video.tags.includes(tags[0]))
          )
        }
      >
        Campeonatos
      </NavButton>
      <NavButton
        onClick={() =>
          setVideos(
            [...videoLinks]
              .reverse()
              .filter((video) => video.tags.includes(tags[1]))
          )
        }
      >
        Jogadores
      </NavButton>
      <NavButton
        onClick={() =>
          setVideos(
            [...videoLinks]
              .reverse()
              .filter((video) => video.tags.includes(tags[2]))
          )
        }
      >
        Jogos Completos
      </NavButton>
      <NavButton>
        <Link to="/contato">Contato</Link>
      </NavButton>
    </NavContainer>
  );
};

export default Navbar;
