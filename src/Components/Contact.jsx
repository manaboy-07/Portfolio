/** @format */

import React from "react";

function Contact() {
  return (
    <div>
      <div className='p-4 text-3xl mt-7 flex justify-center items-center'>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
        <div className='mx-3'>
          <h2 className='text-4xl font-bold  text-primary md:text-6xl'>
            Get in touch 👊
          </h2>
        </div>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
      </div>
      <section className='flex flex-col md:flex-row'>
        <div className='bg-primary text-neutral p-5'>
          <form action=''>
            <div className='flex flex-col'>
              <label htmlFor='Name' className='text-2xl'>
                Name
              </label>
              <input type='text' id='Name' className='input-contact' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='Name' className='text-2xl '>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='input-contact'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='Name' className='text-2xl'>
                Message
              </label>
              <textarea
                name='message'
                id=''
                cols='30'
                rows='10'
                className='input-contact'>
                Message:{" "}
              </textarea>
            </div>
          </form>
        </div>
        <div className='bg-primary text-neutral'>{/* Socials */}</div>
      </section>
    </div>
  );
}

export default Contact;
