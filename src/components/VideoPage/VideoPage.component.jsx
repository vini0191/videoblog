import React from "react";
import { Link } from "react-router-dom";

import { VideoUnit, VideoContainer, AdUnitRectangle } from "./VideoPage.style";
import videolinks from "../Main/videolinksArray";

const VideoPage = ({ match }) => {
  const {
    params: { videoId },
  } = match;
  const { title, link } = videolinks[videoId - 1];

  return (
    <>
      <Link to="/">Go to homepage!</Link>
      <VideoUnit>
        <AdUnitRectangle />
        {/* <p>
        <strong>Video ID: </strong>
        {videoId}
      </p>
      <p>
        <strong>Video URL: </strong>
        {videolinks[videoId - 1].link}
      </p> */}
        <h1>{title}</h1>
        <VideoContainer>
          <iframe
            title={videoId}
            src={link}
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoContainer>
      </VideoUnit>
    </>
  );
};

export default VideoPage;
