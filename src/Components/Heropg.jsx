/** @format */

import React from "react";
import Navbar from "./Navbar";
import Icons from "./Icons";
import code1 from "../Assets/code1.svg";
import code2 from "../Assets/code2.svg";
import code3 from "../Assets/code3.svg";

function Heropg() {
  return (
    <div className='relative ' id='home'>
      <div className='context'>
        <section className=' flex flex-row items-center justify-center'>
          <div className='flex item-center justify-around p-12 flex-col md:flex-row'>
            <div className='p-7 -mt-24 flex flex-col text-center w-full'>
              <h3 className=' text-4xl  text-primary cursor-pointer'>
                Hi, I'm Manasseh{" "}
              </h3>
              <h4 className=' text-2xl text-base-100 mt-4'>
                A Front-End Engineer
              </h4>
              <h6 className=' mt-4 text-slate-400'>
                I specialize in building top notch website <br />
                and other applications for the web.
              </h6>
              <img
                src={code3}
                alt=''
                className='w-56 my-14 absolute top-36 code'
              />
            </div>
          </div>
        </section>
      </div>

      <div className='area'>
        <ul className='circles'>
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
