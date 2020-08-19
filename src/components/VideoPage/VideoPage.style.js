import styled from 'styled-components';

export const VideoUnit = styled.div`
  display: flex;
  flex-direction: column;

  /* @media screen and (min-width: 768px) {
    flex-direction: row;
  } */
`;

export const VideoUnitTitle = styled.h1`
  font-size: 1em;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`;

export const VideoContainer = styled.div`
  position: relative;

  ::after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

// Ads below
export const AdMobile = styled.div`
  align-self: center;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const AdDesktop = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    margin: 20px auto;
  }
`;

export const AdLargeDesktop = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    /* margin: 20px auto; */
  }
`;
