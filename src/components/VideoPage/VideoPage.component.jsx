import React from "react";

import {
  VideoUnit,
  AdVerticalA,
  AdVerticalB,
  VideoUnitTitle,
  VideoContainer,
} from "./VideoPage.style";
import { videoLinks } from "../Main/videoLinksArray";

const VideoPage = ({ match }) => {
  const {
    params: { videoId },
  } = match;
  const { title, link } = videoLinks[videoId - 1];

  return (
    <VideoUnit>
      <VideoUnitTitle>{title}</VideoUnitTitle>
      <VideoContainer>
        <iframe
          title={videoId}
          src={link}
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <AdVerticalA>
          <iframe
            title="vertical_banner_B"
            src="//www.topdisplaynetwork.com/watchnew?key=5d033916f47f7f57d41ff09c119d80e4"
            width="160"
            height="300"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </AdVerticalA>
        <AdVerticalB>
          <iframe
            title="vertical_banner_A"
            src="//www.topdisplaynetwork.com/watchnew?key=125b9aafbde90afa709434287e9a3ee1"
            width="160"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </AdVerticalB>
      </VideoContainer>
    </VideoUnit>
  );
};

export default VideoPage;
