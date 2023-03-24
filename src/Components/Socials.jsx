/** @format */

import React from "react";
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsFillGeoAltFill,
  BsFacebook,
} from "react-icons/bs";

function Socials() {
  return (
    <div className='socials bg-primary rounded-md text-white'>
      <h1 className='text-center font-bold text-3xl py-4 text-white'>
        Contact Information
      </h1>
      <small>Message me and get feedback within 24hours</small>
      <div className='social-icon-container   '>
        <div className='mb-7'>
          <div className='icon-social mt-4'>
            <a href='tel:+23407043608352' className='flex'>
              <BsFillTelephoneFill className='text-error text-2xl  m-2 ' />
              <p className='m-2'>+23407043608352</p>
            </a>
          </div>
          <div className='icon-social mt-4'>
            <a href='mailto:manassehoruebor@gmail.com' className='flex'>
              <BsEnvelopeFill className='text-error text-2xl m-2' />
              <p className='m-2'>Email</p>
            </a>
          </div>
          <div className='icon-social mt-4'>
            <a href='mailto:manassehoruebor@gmail.com' className='flex'>
              <BsFillGeoAltFill className='text-error text-2xl m-2' />
              <p className='m-2'>1 igidi street , Mende Maryland Lagos</p>
            </a>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default Socials;
