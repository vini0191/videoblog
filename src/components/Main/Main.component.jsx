import React, { Component } from "react";
import { MainCointainer, Thumbnails } from "./Main.style";
import videolinks from "./videolinksArray";

class Main extends Component {
  state = {
    videolinks,
  };

  handleThumbnails = (videolinks) =>
    videolinks.map(({ link, image }, index) => (
      <a key={index} href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="" />
      </a>
    ));

  render() {
    return (
      <MainCointainer>
        {this.handleThumbnails(this.state.videolinks)}
        {/* <Thumbnails> */}
        {/* {() => this.handleThumbnails(this.state.videolinks)} */}
        {/* </Thumbnails> */}
      </MainCointainer>
    );
  }
}

export default Main;
