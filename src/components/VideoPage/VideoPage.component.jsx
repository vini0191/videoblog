import React from 'react';

import {
  VideoUnit,
  AdMobile,
  AdDesktop,
  AdLargeDesktop,
  VideoUnitTitle,
  VideoContainer,
} from './VideoPage.style';
import { videoLinks } from '../Main/videoLinksArray';

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
      </VideoContainer>

      <AdMobile>
        <iframe
          title="vertical_banner_B"
          src="//www.topdisplaynetwork.com/watchnew?key=4d00edeb5e29120a67095839cfb12c33"
          width="300"
          height="250"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </AdMobile>

      <AdDesktop>
        <iframe
          title="vertical_banner_B"
          src="//www.topdisplaynetwork.com/watchnew?key=4d00edeb5e29120a67095839cfb12c33"
          width="300"
          height="250"
          frameBorder="0"
          scrolling="no"
        ></iframe>
        <iframe
          title="vertical_banner_B"
          src="//www.topdisplaynetwork.com/watchnew?key=4d00edeb5e29120a67095839cfb12c33"
          width="300"
          height="250"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </AdDesktop>

      <AdDesktop>
        <iframe
          title="vertical_banner_B"
          src="//www.topdisplaynetwork.com/watchnew?key=fb88a499e07584b47564179548308523"
          width="728"
          height="90"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </AdDesktop>

      <AdLargeDesktop>
        <iframe
          title="vertical_banner_B"
          src="//www.topdisplaynetwork.com/watchnew?key=fb88a499e07584b47564179548308523"
          width="728"
          height="90"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </AdLargeDesktop>
    </VideoUnit>
  );
};

export default VideoPage;
