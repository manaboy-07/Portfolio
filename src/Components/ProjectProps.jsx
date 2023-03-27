/** @format */

import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
function ProjectProps({ name, src, des }) {
  const [overview, setOverview] = useState(false);
  const handleView = () => {
    setOverview(true);
  };
  const hideView = () => {
    setOverview(false);
  };
  return (
    <>
      <div className='m-4 p-3 bg-slate-300 rounded-md relative -z-0'>
        <img
          src={src}
          alt=''
          className='p-img rounded-md absolute w-full h-full top-0 left-0 -z-10'
        />
        <div className='flex  items-center justify-between'>
          <h1 className='text-xl bg-slate-300 text-primary p-2 rounded-md '>
            {name}
          </h1>
          <button className='btn rounded-md bg-primary text-white hover:bg-primary'>
            <a href='#'>Visit</a>
          </button>
        </div>
        <div className=' mt-14  blur-bg bg-slate-300  rounded-md p-2'>
          <div className='flex'>
            <button
              onClick={handleView}
              className='btn rounded-md bg-primary text-white hover:bg-primary'>
              Overview
            </button>
          </div>

          <div className='flex items-center justify-between mt-5 bg-primary text-white  rounded-md '>
            <h3 className={overview ? "show p-2" : "hide p-2"}>{des}</h3>
            <div className={overview ? "show" : "hide"}>
              <button
                onClick={hideView}
                className='text-2xl border-0 outline-0 mb-3 mx-7 btn rounded-md p-1 text-white bg-primary font-bold hover:bg-primary'>
                <BsXLg className='p-1 mt-2' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectProps;
