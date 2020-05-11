import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    margin: 20px auto;
    border: 3px solid green;
    flex-direction: column;
    width: 70%;
    max-width: 600px;
    justify-content: flex-end;
    background: #272c35;

    h1 {
      /* text-align: center; */
      border: 3px solid green;
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
      /* margin: 10px 20px; */
      padding: 5px;
      line-height: 18px;
      border-radius: 10px;
    }
  }
`;
