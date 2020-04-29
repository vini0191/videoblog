import styled from "styled-components";

export const MainCointainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid white;
  /* height: 100vw; */
  padding: 50px;

  a {
    /* width: 33.33%; */
    margin: 10px;
    /* height: auto; */
    border: 1px solid red;

    img {
      width: 200px;
      /* height: auto; */
    }
  }
`;

export const VideoContainer = styled.div`
  width: 250px;
  margin: 10px;
`;

// export const ImageButton = styled.img`
//   width: 33.33%;
//   border: 1px solid red;
// `;
