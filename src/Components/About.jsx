/** @format */

import React from "react";
import portfolio from "../Assets/portfolio1.jpg";
import Javascript from "../Assets/Javascript.svg";
import Html from "../Assets/html.svg";
import Node from "../Assets/nodejs.svg";
import react from "../Assets/react.svg";
import Mongo from "../Assets/mongo.svg";
import Git from "../Assets/git.svg";
import daisy from "../Assets/daisy.png";
import tailwind from "../Assets/tailwind.svg";
import material from "../Assets/material.svg";

import Wave from "../Assets/wave.svg";
import TechProps from "./TechProps";

function About() {
  return (
    <div className='about-background' id='about'>
      <div className='p-4 text-3xl mt-7 flex justify-center items-center'>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
        <div className='mx-3'>
          <h2 className='text-4xl font-bold  text-primary md:text-6xl'>
            About me
          </h2>
        </div>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
      </div>
      <section className=' p-7 flex items-center justify-between flex-col md:flex-row'>
        <div className='mt-4'>
          <h4 className='text-black'>
            Hello there , i am manasseh a full-stack dev in training <br /> at
            the moment i am on my way to complete my front-end course. <br /> I
            am majoring in Computer Science at Obafemi Awolowo University.
            <br /> I have been coding for just a year , still a lot to learn and
            i'm ready for it.
            <br />I love Programming and i'm familiar with Python, C , C++ and
            Javascript <br />I am a problem solver one of my hobbies involves
            mythology <br /> and i plan to build an app on it.
          </h4>
          <section className='tech bg-slate-100 rounded-md p-4 mt-5'>
            <div className='text-2xl text-black mt-4 p-4'>
              Frequently worked with technologies
            </div>
            <div className='place-items-center grid lg:grid-cols-4 md:grid-cols-3 grid-cols-3 gap-4 '>
              <TechProps src={Javascript} />
              <TechProps src={react} />
              <TechProps src={Mongo} />
              <TechProps src={Html} />
              <TechProps src={Node} />
              <TechProps src={Git} />
              <TechProps src={tailwind} />
              <TechProps src={daisy} />
              <TechProps src={material} />
            </div>
          </section>
        </div>
        <div className='blob-background p-3 mt-5'>
          <img
            src={portfolio}
            alt=''
            className='rounded-full me p-4 border-4 border-primary'
          />
        </div>
      </section>
      <img src={Wave} alt='' />
    </div>
  );
}

export default About;
