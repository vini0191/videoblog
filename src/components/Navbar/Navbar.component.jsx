import React, { useState } from "react";
import { Link } from "react-router-dom";

import { tags, videoLinks } from "../Main/videoLinksArray";
import {
  NavContainer,
  Ul,
  MobButton,
  HomeButton,
  NavButton,
} from "./Navbar.style";
import { FaAlignRight } from "react-icons/fa";
import logo from "../../assets/images/tlogo.jpg";

const Navbar = ({ setVideos }) => {
  const [toggle, setToggle] = useState(false);
  const filterTakedArray = (tag) =>
    [...videoLinks].reverse().filter((video) => video.tags.includes(tag));
  // const heightConfig = { `height: ${toggle ? "120px" : 0}` };

  return (
    <NavContainer className="navBar">
      <MobButton onClick={() => setToggle(!toggle)}>
        <FaAlignRight />
      </MobButton>
      {/* <Ul className={toggle ? "links show-nav" : "links"}> */}
      <HomeButton>
        <Link onClick={() => setVideos([...videoLinks].reverse())} to="/">
          <img src={logo} alt="Logo" />
          <h2>Memorial Corinthians</h2>
        </Link>
      </HomeButton>
      <Ul toggle={toggle}>
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
      </Ul>
    </NavContainer>
  );
};

export default Navbar;
