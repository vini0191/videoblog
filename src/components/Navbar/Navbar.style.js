import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  font-size: 20px;
`;

export const HomeButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1 auto;
  /*background: gray;*/
  background: #4e3272;

  a {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */

    img {
      width: 50%;
      margin-right: 10px;
    }

    h2 {
      align-self: center;
    }
  }
`;

export const NavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex: 33.33%; */
  flex: 20%;
  /*background: gray;*/
  background: #4e3272;
`;
