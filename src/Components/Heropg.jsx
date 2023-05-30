/** @format */

import React from "react";
import Navbar from "./Navbar";

function Heropg() {
  return (
    <div className='relative '  id='home'>
      <div className='context'>
        <section
          className='background flex flex-row items-center justify-center'
         >
          <div className='flex item-center justify-around p-12 flex-col md:flex-row'>
            <div className='p-7 -mt-24 flex flex-col text-center w-full'>
              <h3 className=' text-4xl  '>Hi, I'm Manasseh </h3>
              <h4 className=' text-xl text-secondary mt-4'>
                I am front-end developer
              </h4>
              <h4 className=' text-neutral text-xl mt-4'>
                I specialize in building top notch website <br />
                and other applications for the web.
              </h4>
            </div>
          </div>
        </section>
      </div>

      <div class='area'>
        <ul class='circles'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Heropg;
