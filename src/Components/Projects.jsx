/** @format */

import React, { useState } from "react";
import meme from "../Assets/meme.JPG";
import aos from "../Assets/aos.JPG";
import ProjectProps from "./ProjectProps";
function Projects() {
  return (
    <div>
      <div className='p-4 text-3xl mt-7 flex justify-center items-center'>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
        <div className='mx-3'>
          <h2 className='text-4xl font-bold  text-primary md:text-6xl'>
            Projects
          </h2>
        </div>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
      </div>
      <section>
        <ProjectProps
          name='Meme Gen'
          src={meme}
          des='A meme generator made with an api with an input text field'
        />
        <ProjectProps
          name='AOS website'
          src={aos}
          des='A website using the javascript aos library'
        />
         {/* <ProjectProps
          name='AOS website'
          src={aos}
          des='A website using the javascript aos library'
        /> */}
      </section>
    </div>
  );
}

export default Projects;
