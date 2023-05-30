/** @format */

import React from "react";
import { BsInstagram, BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
function Icons() {
  return (
    <div className='mb-7 flex'>
      <div className='icon-social m-3  media'>
        <a
          rel='noreferrer'
          href='https://www.instagram.com/mana___boy/'
          target='_blank'>
          <BsInstagram className='icon-description text-2xl' />
        </a>
      </div>

      <div className='icon-social m-3 media'>
        <a
          rel='noreferrer'
          href='https://github.com/manaboy-07'
          target='_blank'>
          <BsGithub className='icon-description text-2xl' />
        </a>
      </div>
      <div className='icon-social m-3 media'>
        <a
          href='https://www.linkedin.com/in/oruebor-manasseh-769b041a6/'
          target='_blank'
          rel='noreferrer'
          class='home__social-icon'>
          <BsLinkedin className='text-2xl' />
        </a>
      </div>
      <div className='icon-social m-3 media'>
        <a
          href='https://m.facebook.com/oruebor.manasseh'
          target='_blank'
          rel='noreferrer'>
          <BsFacebook className='text-2xl' />
        </a>
      </div>
    </div>
  );
}

export default Icons;
