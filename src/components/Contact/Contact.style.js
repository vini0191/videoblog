import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    ${"" /* width: 350px; */}
    ${"" /* height: 600px; */}
    /* margin-top: 20px; */
    ${"" /* margin: 0; */}
  }

  /* @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 50px 0;

    img,
    form {
      width: 100%;
    }
  } */
`;

export const ContactText = styled.div`
  margin: 50px 25px;
  /* font-size: 22px; */
  font-size: 1.3em;
  text-align: justify;
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;

  img {
    display: none;
  }

  form {
    display: flex;
    width: 300px;
    margin: 0;
    flex-direction: column;
    /* width: 450px;
    height: 600px; */
    justify-content: flex-end;
    background: #4e3272;

    h1 {
      font-size: 1.3em;
      margin: 5px 20px;
    }

    input,
    textarea {
      margin: 10px 20px;
      padding: 2px 5px;
      /* line-height: 28px; */
      background: white;
      border: none;
      border-radius: 1px;
      ::placeholder {
        color: gray;
      }
    }

    textarea {
      resize: none;
      height: 80px;
    }

    input[type="submit"] {
      /* width: 100px; */
      /* align-self: flex-end; */
      align-self: center;
      padding: 8px 20px;
      /* line-height: 24px; */
      border-radius: 3px;
      font-size: 0.5em;
    }
  }
`;

export const Donation = styled.div`
  margin: 50px 25px;
  font-size: 22px;
  text-align: justify;
`;
