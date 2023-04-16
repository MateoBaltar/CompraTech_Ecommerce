import React from 'react'
import {AiFillInstagram, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'
import { Link } from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 CompraTech Todos los derechos reservados</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <a href="https://github.com/MateoBaltar">
          <AiOutlineGithub />
        </a>
      </p>
    </div>
  );
}

export default Footer