import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AdUnitVertical = styled.div`
  background: orange;
  border: 2px solid white;
  width: 160px;
  height: 600px;
  margin: 0 30px;
  /* Check the size of each flex item: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */
  flex: 1 0 auto;
`;

export const AdUnitRectangle = styled.div`
  background: orange;
  border: 2px solid white;
  width: 728px;
  height: 90px;
  align-self: center;
  margin: 20px 0;
`;

export const MainText = styled.div`
  margin: 50px 50px;
  font-size: 24px;
`;
