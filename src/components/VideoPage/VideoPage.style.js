import styled from "styled-components";

export const VideoUnit = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
  /* width: 100%; */
  width: 500px;
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

export const AdUnitRectangle = styled.div`
  background: orange;
  border: 5px solid white;
  width: 728px;
  height: 90px;
  align-self: center;
  margin: 50px 0;
  margin-bottom: 20px;
`;
