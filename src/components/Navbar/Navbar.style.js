import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  background-color: #111;
  color: white;
  padding: 10px;
`;

export const MobButton = styled.button`
  font-size: 30px;
  margin-right: 30px;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  float: right;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  height: ${({ toggle }) => (toggle ? "200px" : "0px")};
  overflow: hidden;
  list-style-type: none;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    height: auto;
    display: flex;
  }
`;

export const HomeButton = styled.li`
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  flex: 1 auto;
  background: #4e3272;
  font-size: 1em;
  /* border-color: transparent; */
  padding: 10px 0;
  /* --------------------------------- */
  /* a {
    display: flex;
    flex-direction: row;

    img {
      width: 50%;
    }

    h2 {
      align-self: center;
    }
  } */
  /* --------------------------------- */
  @media screen and (min-width: 768px) {
    padding: 0 15px;
  }
`;

export const NavButton = styled.li`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex: 20%;
  background: #4e3272;
  border-color: transparent;
  font-size: 1.1em; */
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0 15px;
  }
`;
