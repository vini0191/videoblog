import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  background: #4e3272;
  color: white;
  /* padding: 10px; */
  margin: 0;
  padding: 0;
`;

export const MobButton = styled.button`
  font-size: 30px;
  margin-right: 5px;
  margin-top: 10px;
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
  margin: 0 10px;
  padding: 0;
  height: ${({ toggle }) => (toggle ? "200px" : "0px")};
  overflow: hidden;
  list-style-type: none;
  font-weight: bold;

  li:nth-of-type(4) {
    border: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    height: auto;
    margin: 20px 0;

    li:first-of-type {
      margin-left: 50px;
    }
  }
`;

export const HomeButton = styled.button`
  display: flex;
  border: none;
  /* justify-content: space-evenly; */
  align-items: center;
  flex: 1 auto;
  background: #4e3272;
  font-size: 1em;
  margin: 0;
  padding: 0;
  /* padding: 10px 0; */
  /* --------------------------------- */
  a {
    display: flex;
    flex-direction: row;

    img {
      width: 50%;
    }

    h2 {
      align-self: center;
    }
  }
  /* --------------------------------- */
  @media screen and (min-width: 768px) {
    padding: 0 15px;
  }
`;

export const NavButton = styled.li`
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  flex: 20%;
  /* background: #4e3272; */
  /* border-color: transparent; */
  /* font-size: 1.1em; */
  padding: 10px 0;
  font-size: 1.5em;
  border-bottom: 1px solid gray;
  @media screen and (min-width: 768px) {
    padding: 0 15px;
    border: none;
    display: block;
    a {
    }
  }
`;
