/** @format */

import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
function Experience() {
  const [active, setActive] = useState(0);
  const [id, setID] = useState(0);
  const experienceArr = [
    {
      name: "Aptech",
      id: 0,
      role: "Beginner",
      des: "This is where my journey began , i started training in web development at aptech computer institute and got my first certificate in Responsive web development.",
    },
    {
      name: "HNG",
      id: 1,
      role: "Front-End intern",
      des: "I enrolled in the HNG internship to improve my skills as a Front-End Web Developer ,i was able to learn and understand React js",
    },
    {
      name: "SideHustle",
      id: 2,
      role: "React Developer",
      des: "The SideHustle internship i enrolled as a Frontend Intern , i competed in challenged and won rewards , the side-hustle also helped in further polishing my skills and understanding the react hooks",
    },
    {
      name: "LandVault",
      id: 3,
      role: "Front-end Developer",
      des: "LandVault was my first experience working with a UI designer and other developers , LandVault helped me on how to use git and github",
    },
  ];
  const incrementID = () => {
    setID((prevState) => prevState + 1);
    if (id === experienceArr.length - 1) {
      setID(0);
    }
   
  };
  const decrementID = () => {
    setID((prevState) => prevState - 1);
    if (id <= 0) {
      setID((prevState) => experienceArr.length - 1);
    }
    
  };

  
 

  return (
    <>
      <div className='p-4 text-3xl mt-7 flex justify-center items-center'>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
        <div className='mx-3'>
          <h2 className='text-4xl font-bold  text-primary md:text-6xl'>
            Experience
          </h2>
        </div>
        <div className='w-24 h-2 rounded-sm bg-info md:w-32 '></div>
      </div>
      <section className=' mx-4 my-2 flex items-center justify-center p-3 exp-container'>
        <h2 className=' text-4xl p-3 cursor-pointer rounded-md text-white '>
          <AiOutlineLeft className='text-primary my-4 mx-2  rounded-md' onClick={decrementID}/>
        </h2>
        <div className=' mx-4 w-full exp-flow'>
          <h1 className='text-primary text-2xl my-2 font-bold'>
            {experienceArr[id].name}
          </h1>
          <h2 className='my-2 text-xl'>
            Role -{" "}
            <span className='text-primary'>{experienceArr[id].role}</span>
          </h2>
          <h3>{experienceArr[id].des}</h3>
        </div>
        <h2 className='text-4xl p-3 cursor-pointer '>
          <AiOutlineRight className='text-primary my-4 mx-2    rounded-md' onClick={incrementID}/>
        </h2>
      </section>
    </>
  );
}

export default Experience;
