import React from "react";

import {
  ContactContainer,
  ContactText,
  ContactForm,
  Donation,
  Paypal,
  MercadoPago,
  DonationOptions,
} from "./Contact.style";
import img_form from "../../assets/images/form2.jpg";
import logo_mercadopago from "../../assets/images/logo_mercadopago.png";

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
        <input
          name="_redirect"
          type="hidden"
          id="name"
          value="https://videoblog.now.sh/"
        />
        <input name="name" type="text" id="name" placeholder="Nome" />
        <input name="email" type="email" id="email" placeholder="Email" />
        <textarea
          name="comment"
          id="comment"
          rows="10"
          placeholder="Escreva sua mensagem"
        />

        <input name="_formsubmit_id" type="text" style={{ display: "none" }} />

        <input type="submit" value="Enviar" />
      </form>
    </ContactForm>
    <Donation>
      <p>
        APOIE Este site é uma homenagem ao Corinthians e mantido por torcedores.
        Sinta-se livre para nos apoiar, através de uma das opções abaixo:
      </p>
      <DonationOptions>
        <Paypal>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            // target="_top"
            target="_blank"
          >
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="SAY3Q9XJW9EJA" />
            <input type="hidden" name="currency_code" value="BRL" />
            <input
              type="image"
              src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Faça doações com o botão do PayPal"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/pt_BR/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </Paypal>
        <MercadoPago>
          <a
            href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=94889478-12fe4181-b6b4-4180-a94b-a4a01b26615a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img srcSet={logo_mercadopago} alt="" />
          </a>
        </MercadoPago>
      </DonationOptions>
    </Donation>
  </ContactContainer>
);

export default Contact;
