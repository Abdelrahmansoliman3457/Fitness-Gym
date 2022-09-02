import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="footer-logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to='/about'>About</Link>
            <Link to='/plans'>Plans</Link>
            <Link to='/trainers'>Trainers</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/contact'>Contact</Link>
        </article>
        <article>
            <h4>insight</h4>
            <Link to='/about'>About</Link>
            <Link to='/plans'>Plans</Link>
            <Link to='/trainers'>Trainers</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/contact'>Contact</Link>
        </article>
        <article>
            <h4>get in toutch</h4>
            <Link to='/s'>Contact</Link>
            <Link to='/s'>Suport</Link>
            
        </article>
      </div>
      <div className="footer__copyright">
        <small>Abdelrahman soliman &copy; All Right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
