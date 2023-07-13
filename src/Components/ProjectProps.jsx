/** @format */

import React, { useState } from "react";
import {  BsGlobe } from "react-icons/bs";
function ProjectProps({ name, src, des, href }) {

  return (
    <>
      <div className='m-4  project-container bg-slate-300 rounded-md relative -z-0'>
        <div>
          <img src={src} alt='' className='p-img rounded-md   ' />
        </div>
        <div className='flex  items-center justify-between p-4'>
          <h1 className='text-xl font-bold bg-slate-300 text-primary p-2 rounded-md '>
            {name}
          </h1>
          <button className='btn mx-7 rounded-md bg-primary text-white hover:bg-primary'>
            <a href={href} target='_blank' rel='noreferrer'>
              <BsGlobe />
            </a>
          </button>
        </div>
        <div className=' bg-slate-300  rounded-md p-2'>
          <div className='flex items-center justify-between p-2 mt-2 bg-primary text-white '>
            <h3 className=''>{des}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectProps;
