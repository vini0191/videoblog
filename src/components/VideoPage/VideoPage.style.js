import styled from "styled-components";

export const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  /* The followint two properties were added by me (others are from a tutorial) */
  max-width: 800px;
  margin: 20px;

  ::after {
    padding-top: 56.25%;
    display: block;
    content: "";
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
