/** @format */

import React from "react";
import Form from "./Form";
import Socials from "./Socials";

function Contact() {
  return (
    <div>
      <div className='p-4 text-3xl mt-7 flex justify-center items-center'>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
        <div className='mx-3'>
          <h2 className='text-4xl font-bold  text-primary md:text-6xl'>
            Get in touch 
          </h2>
        </div>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
      </div>
      <div className='flex flex-col p-5 justify-evenly items-center md:flex-row'>
        <Socials />
        <Form />
      </div>
    </div>
  );
}

export default Contact;
