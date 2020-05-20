import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainText = styled.p`
  margin: 50px 50px;
  font-size: 22px;
  text-align: justify;
`;

export const AdUnitVertical = styled.div`
  background: orange;
  border: 2px solid white;
  width: 160px;
  height: 600px;
  margin: 0 30px;
  /* Check the size of each flex item: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */
  flex: 1 0 auto;
  display: none;
`;

export const AdUnitRectangle = styled.div`
  background: orange;
  border: 2px solid white;
  width: 728px;
  height: 90px;
  align-self: center;
  margin: 20px 0;
  display: none;
`;

export const SearchBar = styled.input`
  font-size: 18px;
  color: white;
  padding: 10px;
  margin: 10px auto;
  width: 25%;
  background: #4e3272;
  outline: none;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #ddd9e2;
  }
  &:hover {
    background: #543b75;
    transition: background 0.5s;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const VideoTitle = styled.p`
  width: 300px;
  flex-wrap: wrap;
  margin-top: 5px;
`;
