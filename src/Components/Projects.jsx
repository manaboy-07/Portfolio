/** @format */

import React from "react";
import meme from "../Assets/meme.JPG";
import aos from "../Assets/aos.JPG";
import greek from "../Assets/greek.JPG";
import filter from "../Assets/filter.JPG";
import lilies from "../Assets/lilies.JPG";
import Metabnb from "../Assets/Metabnb.JPG";
import ProjectProps from "./ProjectProps";
import Room from "../Assets/room.JPG";
import Shoe from "../Assets/Shoe.JPG";
import LandVault from "../Assets/LandVault.JPG";
import Todo from "../Assets/TodoJPG.JPG";
function Projects() {
  return (
    <div id='projects'>
      <div className='p-4 text-3xl mt-7 flex justify-center items-center'>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
        <div className='mx-3'>
          <h2 className='text-4xl font-bold  text-primary md:text-6xl'>
            Projects
          </h2>
        </div>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
      </div>
      <section className='place-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 '>
        <ProjectProps
          name='Meme Generator'
          src={meme}
          href='https://meme-gen-gamma.vercel.app/'
          des='A meme generator made with an api with an input text field'
        />
        <ProjectProps
          name='Lilies food app'
          src={lilies}
          href='https://lilies-manadev.vercel.app/'
          des='A food website built with react checkout the dashboard page'
        />
        <ProjectProps
          name='AOS website'
          href='https://website-using-aos-lib.vercel.app/'
          src={aos}
          des='A website using the javascript aos library, i got to know javascript has many libraries'
        />
        <ProjectProps
          name='Metabnb website'
          href='https://metabnb-manaboy.vercel.app/'
          src={Metabnb}
          des='An HNG project that involved the world of the metaverse , this project helped me practice my css grid skills'
        />
        <ProjectProps
          name='Greek mythology'
          href='https://greek-mythology-quiz-app.vercel.app/'
          src={greek}
          des='Test yourself on greek mythology if you dare , quiz might be rigged 😏'
        />
        <ProjectProps
          name='filter api project'
          href='https://filter-api.vercel.app/'
          src={filter}
          des='One of my first projects working with api and learning how it works'
        />
        <ProjectProps
          name='Shoe Carousel'
          href='https://shoe-ecommerce-xi.vercel.app/'
          src={Shoe}
          des='A shoe sale carousel projects  (Frontend Mentor Project)'
        />
        <ProjectProps
          name='A Room Landing Page'
          href='https://room-web-delta.vercel.app/'
          src={Room}
          des='A simple carousel landing page (Frontend Mentor Project) '
        />
        <ProjectProps
          name='Todo List'
          href='https://todo-timer-steel.vercel.app/'
          src={Todo}
          des='Built a todolist with reactjs and tailwind css, also my first time working with local storage '
        />
        <ProjectProps
          name='LandVault'
          href='https://land-vault.vercel.app/'
          src={LandVault}
          des='My first experience working with other developers to build a real estate kinda sales website '
        />

      </section>
      <h2 className='text-primary text-center text-3xl'>More Projects being built .....</h2>
    </div>
  );
}

export default Projects;
