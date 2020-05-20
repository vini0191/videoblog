import styled from "styled-components";

export const VideosCointainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid white;
  /* height: 100vw; */
  /* padding: 50px; */
  margin: 0 auto;
  width: 90vw;

  a {
    margin: 10px;
    padding: 0;
    /* border: 1px solid red; */

    img {
      /* width: 300px; */
      width: 100%;
    }
  }
`;

export const VideoTitle = styled.p`
  margin-top: 5px;
  font-size: 1em;
`;
