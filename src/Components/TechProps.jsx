/** @format */

import React from "react";
import { BsSlashLg } from "react-icons/bs";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
function TechProps({ src }) {
  return (
    <div className='flex items-center tech-stack text-neutral p-3 '>
      <img src={src} alt="" />
    </div>
  );
}

export default TechProps;
