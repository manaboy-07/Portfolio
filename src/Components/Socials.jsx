/** @format */

import React from "react";
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";

function Socials() {
  return (
    <div className='socials'>
      <h1 className='text-center font-bold text-3xl py-4 text-primary'>
        Socials
      </h1>
      <div className='social-icon-container   '>
        <div className='icon-social'>
          <a
            rel='noreferrer'
            href='https://www.instagram.com/mana___boy/'
            target='_blank'>
            <BsInstagram className='icon-description' />
            <p>Instagram</p>
          </a>
        </div>

        <div className='icon-social'>
          <a
            rel='noreferrer'
            href='https://github.com/manaboy-07'
            target='_blank'>
            <BsGithub className='icon-description' />
            <p>Github</p>
          </a>
        </div>
        <div className='icon-social'>
          <a
            href='https://www.linkedin.com/in/oruebor-manasseh-769b041a6/'
            target='_blank'
            rel='noreferrer'
            class='home__social-icon'>
            <BsLinkedin />
            <p>LinkedIn</p>
          </a>
        </div>
        <div className='icon-social'>
          <a
            href='https://m.facebook.com/oruebor.manasseh'
            target='_blank'
            rel='noreferrer'>
            <BsFacebook />
            <p>Facebook</p>
          </a>
        </div>
        <div className='icon-social'>
          <a href='tel:+23407043608352'>
            <BsFillTelephoneFill />
            <p>Phone</p>
          </a>
        </div>
        <div className='icon-social'>
          <a href='mailto:manassehoruebor@gmail.com'>
            <BsEnvelopeFill />
            <p>Email</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
