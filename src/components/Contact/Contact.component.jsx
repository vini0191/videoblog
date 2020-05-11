import React from "react";

import { ContactContainer } from "./Contact.style";
import img_form from "../../assets/images/img_form.jpg";

const Contact = () => (
  <ContactContainer>
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
  </ContactContainer>
);

export default Contact;
