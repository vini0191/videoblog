import styled from "styled-components";

export const NavContainer = styled.div`
  /* width: 100%; */
  /* background: #4e3272; */
  background: #222222;
  color: white;
  /* padding: 10px; */
  margin: 0;
  padding: 0;
`;

export const MobButton = styled.button`
  font-size: 30px;
  /* margin-right: 5px; */
  /* margin-top: 10px; */
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  /* float: right; */
  /* align-self: flex-end; */
  /* z-index: 1; */
  /* flex: 1 0 auto; */
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HomeButton = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: row;
  border: none;
  /* justify-content: space-evenly; */
  /* align-items: center; */
  /* flex: 1 auto; */
  /* background: #4e3272; */
  background: #222222;
  font-size: 1em;
  margin: 0;
  padding: 0;
  /* padding: 10px 0; */
  /* --------------------------------- */
  a {
    display: flex;
    width: 90%;
    /* flex: 0 1 auto; */
    /* flex-direction: row; */

    img {
      width: 100vw;
    }

    /* h2 {
      align-self: center;
    } */
  }
  /* --------------------------------- */
  @media screen and (min-width: 768px) {
    /* padding: 0 15px; */
    a {
      width: 100%;
    }
  }
`;

export const Ul = styled.ul`
  /* margin: 0 10px; */
  margin: 0;
  padding: 0;
  height: ${({ toggle }) => (toggle ? "200px" : "0px")};
  overflow: hidden;
  list-style-type: none;
  /* font-weight: bold; */

  /* li:nth-of-type(4) {
    border: none;
  } */

  @media screen and (min-width: 768px) {
    display: flex;
    height: auto;
    margin: 0;

    li:first-of-type {
      /* margin-left: 50px; */
    }
  }
`;

export const NavButton = styled.li`
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  flex: 20%;
  background: #4e3272;
  /* border-color: transparent; */
  /* font-size: 1.1em; */
  text-align: center;
  /* padding: 10px 0; */
  padding: 10px 0;
  font-size: 1.5em;
  border-bottom: 1px solid gray;
  @media screen and (min-width: 768px) {
    padding: 0 20px;
    border: none;
    display: block;
    a {
    }
  }
`;
