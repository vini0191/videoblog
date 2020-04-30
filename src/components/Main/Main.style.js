import styled from "styled-components";

export const MainCointainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid white;
  /* height: 100vw; */
  padding: 50px;

  a {
    margin: 10px;
    padding: 0;
    /* border: 1px solid red; */

    img {
      width: 250px;
    }
  }
`;

export const VideoContainer = styled.div`
  width: 250px;
  margin: 10px;
`;

// export const Thumbnails = styled.a`
//   margin: 10px;
//   padding: 0;

//   img {
//     width: 250px;
//   }
// `;
