/** @format */

import React from "react";

function TechProps({ src }) {
  return (
    <div className='flex items-center tech-stack text-neutral p-3 '>
      <img src={src} alt="" className="w-16 h-16"/>
    </div>
  );
}

export default TechProps;
