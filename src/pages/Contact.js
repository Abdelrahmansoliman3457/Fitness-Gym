import React from "react";
import "./contact.css";
import Header from "../components/Header";
import HeaderImage from "../images/header_bg_2.jpg";
import { MdMail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Header title="Get in Toutch" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:soliamanabdelrahman589@gmail.com"
              target="blank"
              rel="noreferrer noopener"
            >
              {<MdMail />}
            </a>
            <a
              href="mailto:soliamanabdelrahman589@gmail.com"
              target="blank"
              rel="noreferrer noopener"
            >
              {<BsMessenger />}
            </a>
            <a
              href="mailto:soliamanabdelrahman589@gmail.com"
              target="blank"
              rel="noreferrer noopener"
            >
              {<IoLogoWhatsapp />}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
