/** @format */

import React from "react";
import Avatar from "../Assets/Avatar.png";
import Navbar from "./Navbar";
function Heropg() {
  return (
    <div>
      <Navbar/>
      <section className='background flex flex-row items-center justify-center'>
        <div className='flex item-center justify-around p-12 flex-col md:flex-row'>
          <div className='p-7 mt-20'>
            <h1 className=' text-6xl text-neutral mt-4'>Hi, I'm Manasseh </h1>
            <h3 className='text-bold text-3xl text-secondary mt-4'>
              I am front-end developer
            </h3>
            <h3 className=' text-neutral text-3xl mt-4'>
              I specialize in building top notch website <br />
              and other applications for the web.
            </h3>
          </div>
          <div>
            <img src={Avatar} alt='' className='rounded-full avatar mx-6 p-8' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Heropg;
