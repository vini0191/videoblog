import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 350px;
    height: 600px;
    /* margin-top: 20px; */
    margin: 0;
  }

  form {
    display: flex;
    /* margin: 20px 0; */
    margin: 0;
    flex-direction: column;
    /* width: 70%; */
    /* flex: 70%; */
    /* max-width: 450px; */
    width: 350px;
    height: 600px;
    justify-content: flex-end;
    background: #272c35;

    h1 {
      margin: 10px 20px;
    }

    input,
    textarea {
      margin: 10px 20px;
      padding: 15px 10px;
      line-height: 28px;
      background: #aab2c0;
    }

    input[type="submit"] {
      width: 70px;
      align-self: flex-end;
      padding: 5px;
      line-height: 18px;
      border-radius: 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 50px 0;

    img,
    form {
    }
  }
`;

export const ContactText = styled.h2`
  margin: 50px 50px;
  font-size: 24px;
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Donation = styled.h2``;
// 784 x 590
