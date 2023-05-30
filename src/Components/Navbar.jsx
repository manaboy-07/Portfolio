/** @format */

import React, { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav((prevState) => !prevState);
  };
  return (
    <>
      <div className='flex z-50  bg-black text-primary justify-between items-center '>
        <section className='text-2xl hidden md:block p-5'>Mana-Dev</section>
        <section className='hidden md:block'>
          <div className='nav p-5'>
            <ul className='flex flex-col md:flex-row'>
              <li className='cursor-pointer text-xl mx-3'>
                <a href='#home'>Home</a>
              </li>
              <li className='cursor-pointer text-xl  mx-3'>
                <a href='#about'>About</a>
              </li>
              <li className='cursor-pointer text-xl  mx-3'>
                <a href='#projects'>Projects</a>
              </li>
              <li className='cursor-pointer text-xl  mx-3'>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div
        className={`mobile-nav bg-black block md:hidden m-0 p-0 ${
          showNav ? "actives" : "inactive"
        }`}>
        <div className='flex flex-col m-4 p-5'>
          <div className='flex justify-between items-center'>
            {" "}
            <section className='text-2xl text-primary'>Mana-Dev</section>
            <button className='text-primary'>X</button>
          </div>
          <section>
            <div className=''>
              <ul className='flex flex-col mt-2'>
                <li className='cursor-pointer text-xl mx-3 mt-5'>
                  <a href='#home'>Home</a>
                </li>
                <li className='cursor-pointer text-xl  mx-3 mt-5'>
                  <a href='#about'>About</a>
                </li>
                <li className='cursor-pointer text-xl  mx-3 mt-5'>
                  <a href='#projects'>Projects</a>
                </li>
                <li className='cursor-pointer text-xl  mx-3 mt-5'>
                  <a href='#contact'>Contact</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className='flex items-center justify-center'>
          <div
            className='text-2xl text-primary cursor-pointer'
            onClick={handleNav}>
            {showNav ? 'up' : 'down'}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
