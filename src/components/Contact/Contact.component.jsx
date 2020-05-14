import React from "react";

import {
  ContactContainer,
  ContactText,
  ContactForm,
  Donation,
} from "./Contact.style";
import img_form from "../../assets/images/img_form.jpg";

// const ConText = () => (
//   <ContactText>
//     Entre em contato através do formulário abaixo para tirar dúvidas, propor
//     parcerias e sugerir novos vídeos e conteúdos
//   </ContactText>
// );

const Contact = () => (
  <ContactContainer>
    <ContactText>
      Entre em contato através do formulário abaixo para tirar dúvidas, propor
      parcerias e sugerir novos vídeos e conteúdos
    </ContactText>
    <ContactForm>
      <img src={img_form} alt="" />
      <form
        id="contactform"
        action="https://formsubmit.io/send/ebaf272f-0e6b-441c-8c2a-7881d541c7be"
        method="POST"
      >
        <h1>Contato</h1>
        <input name="name" type="text" id="name" placeholder="Nome" />
        <input name="email" type="email" id="email" placeholder="email" />
        <textarea
          name="comment"
          id="comment"
          rows="10"
          placeholder="Digite um texto maravilhoso aqui"
          style={{ resize: "none" }}
        />

        <input name="_formsubmit_id" type="text" style={{ display: "none" }} />

        <input type="submit" value="Enviar" />
      </form>
    </ContactForm>
    <Donation>
      APOIE Este site é uma homenagem ao Corinthians e mantido por torcedores.
      Sinta-se livre para nos apoiar, através de uma das opções abaixo:
    </Donation>
  </ContactContainer>
);

export default Contact;
