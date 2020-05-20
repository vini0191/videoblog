import styled from "styled-components";

export const VideoUnit = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdUnitRectangle = styled.div`
  background: orange;
  border: 2px solid white;
  width: 320px;
  height: 100px;
  align-self: center;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
    width: 728px;
    height: 90px;
    align-self: center;
    margin: 20px 0;
  }
`;

export const VideoUnitTitle = styled.h1`
  font-size: 1em;
  width: 100%;
  text-align: center;
`;

export const VideoContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  /* width: 100%; */
  /* width: 500px; */
  /* The followint two properties were added by me (others are from a tutorial) */
  max-width: 800px;
  /* margin: 20px; */

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
