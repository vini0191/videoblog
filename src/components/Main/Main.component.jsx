import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MainCointainer } from "./Main.style";
import videolinks from "./videolinksArray";

class Main extends Component {
  state = {
    videolinks,
  };

  handleThumbnails = (videolinks) =>
    videolinks.map(({ link, image }, index) => (
      // <a key={index} href={link} target="_blank" rel="noopener noreferrer">
      //   <img src={image} alt="" />
      // </a>
      <Link key={index + 1} to={`/video/${index + 1}`}>
        <img src={image} alt="" />
      </Link>
    ));

  render() {
    return (
      <MainCointainer>
        {this.handleThumbnails(this.state.videolinks)}
      </MainCointainer>
    );
  }
}

export default Main;
