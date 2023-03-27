/** @format */

import React from "react";

function Navbar() {
  return (
    <div className='flex z-50 p-4 bg-black text-primary justify-between items-center '>
      <section className='text-2xl'>Mana-Dev</section>
      <section>
        <div className='nav '>
          <ul className='flex flex-col md:flex-row'>
            <li className='cursor-pointer text-xl mx-3'>Home</li>
            <li className='cursor-pointer text-xl  mx-3'>
              <a href='#about'>About</a>
            </li>
            <li className='cursor-pointer text-xl  mx-3'>Projects</li>
            <li className='cursor-pointer text-xl  mx-3'>Contact</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
