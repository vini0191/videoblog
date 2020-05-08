import React from "react";
import { Link } from "react-router-dom";
import { VideoContainer } from "./VideoPage.style";
import videolinks from "../Main/videolinksArray";

// class VideoPage extends React.Component {
//   state = {};

//   // componentDidMount() {
//   //   const { handle } = this.props.match.params;
//   // }
//   render() {
//     return <h3>Video Page</h3>;
//   }
// }

const VideoPage = ({ match }) => {
  const {
    params: { videoId },
  } = match;

  return (
    <>
      <Link to="/">Go to homepage!</Link>
      <p>
        <strong>Video ID: </strong>
        {videoId}
      </p>
      <p>
        <strong>Video URL: </strong>
        {videolinks[videoId - 1].link}
      </p>
      <VideoContainer>
        <iframe
          title={videoId}
          src={videolinks[videoId - 1].link}
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </>
  );
};

export default VideoPage;
