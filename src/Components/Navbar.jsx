/** @format */

import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav((prevState) => !prevState);
  };
  return (
    <>
      <div className='flex z-50  bg-black text-primary justify-between items-center '>
        <section className='text-2xl hidden md:block p-5 font-bold' >Mana-Dev</section>
        <section className='hidden md:block'>
          <div className='nav p-5'>
            <ul className='flex flex-col md:flex-row'>
              <li className='cursor-pointer text-xl mx-3 hover:text-white'>
                <a href='#home'>Home</a>
              </li>
              <li className='cursor-pointer text-xl  mx-3 hover:text-white'>
                <a href='#about'>About</a>
              </li>
              <li className='cursor-pointer text-xl  mx-3 hover:text-white'>
                <a href='#projects'>Projects</a>
              </li>
              <li className='cursor-pointer text-xl  mx-3 hover:text-white'>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className={`mobile block md:hidden ${showNav ? "actives" : "inactive"}`}>
        <div
          className={`mobile-nav z-50 bg-black block md:hidden m-0 p-0 ${
            showNav ? "actives" : "inactive"
          }`}>
          <div className='flex flex-col m-4 p-5'>
            <div className='flex justify-between items-center'>
              {" "}
              <section className='text-2xl text-primary font-bold'>Mana-Dev</section>
            </div>
            <section>
              <div className=''>
                <ul className='flex flex-col mt-2  text-white'>
                  <li
                    className='cursor-pointer text-xl mx-3 mt-5'
                    onClick={() => setShowNav(false)}>
                    <a href='#home'>Home</a>
                  </li>
                  <li
                    className='cursor-pointer text-xl  mx-3 mt-5'
                    onClick={() => setShowNav(false)}>
                    <a href='#about'>About</a>
                  </li>
                  <li
                    className='cursor-pointer text-xl  mx-3 mt-5'
                    onClick={() => setShowNav(false)}>
                    <a href='#projects'>Projects</a>
                  </li>
                  <li
                    className='cursor-pointer text-xl  mx-3 mt-5'
                    onClick={() => setShowNav(false)}>
                    <a href='#contact'>Contact</a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className='flex bg-black items-center justify-center'>
          <div
            className='text-2xl text-primary my-7 cursor-pointer '
            onClick={handleNav}>
            {showNav ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
