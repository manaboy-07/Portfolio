/** @format */

import React from "react";
import { BsSlashLg } from "react-icons/bs";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
function TechProps({ name }) {
  return (
    <div className='flex items-center tech-stack text-neutral p-3 '>
      <FaLessThan />
      <h1 className='mx-2'>{name}</h1>
      <BsSlashLg />
      <FaGreaterThan />
    </div>
  );
}

export default TechProps;
