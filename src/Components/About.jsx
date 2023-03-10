/** @format */

import React from "react";
import portfolio from "../Assets/portfolio1.jpg";

import Wave from "../Assets/wave.svg";
import TechProps from "./TechProps";

function About() {
  return (
    <div className='about-background'>
      <div className='p-4 text-3xl mt-7 flex justify-center items-center'>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
        <div className='mx-3'>
          <h2 className='text-4xl font-bold  text-primary md:text-6xl'>
            About me
          </h2>
        </div>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
      </div>
      <section className='text-xl p-7 flex items-center justify-between flex-col md:flex-row'>
        <div className='mt-4'>
          <h2 className='font-bold text-black'>
            Hello there , i am manasseh a full-stack dev in training <br /> at
            the moment i am on my way to complete my front-end course. <br /> I
            am majoring in Computer Science at Obafemi Awolowo University.
            <br /> I have been coding for just a year , still a lot to learn and
            i'm ready for it.
            <br />I love Programming and i'm familiar with Python, C , C++ and
            Javascript <br />I am a problem solver one of my hobbies involves
            mythology <br /> and i plan to build an app on it.
          </h2>
          <section className='tech bg-primary rounded-md p-4 mt-5'>
            <div className='text-2xl text-neutral mt-4 '>
              Frequently worked with technologies
            </div>
            <div className='place-items-center grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
              <TechProps name='React' />
              <TechProps name='Html' />
              <TechProps name='CSS' />
              <TechProps name='JavaScript' />
              <TechProps name='Node Js' />
              <TechProps name='Sass' />
              <TechProps name='Daisy Ui' />
            </div>
          </section>
        </div>
        <div className='blob-background p-3 mt-5'>
          <img
            src={portfolio}
            alt=''
            className='rounded-full me p-4 border-8 border-primary'
          />
        </div>
      </section>
      <img src={Wave} alt='' />
    </div>
  );
}

export default About;
