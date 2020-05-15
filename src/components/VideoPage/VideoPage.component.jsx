import React from "react";
import { Link } from "react-router-dom";

import { VideoUnit, VideoContainer, AdUnitRectangle } from "./VideoPage.style";
import videoLinks from "../Main/videoLinksArray";

const VideoPage = ({ match }) => {
  const {
    params: { videoId },
  } = match;
  const { title, link } = videoLinks[videoId - 1];

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
        {videoLinks[videoId - 1].link}
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
