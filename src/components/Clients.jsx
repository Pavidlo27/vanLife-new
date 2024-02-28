import React from 'react'

import qMarks from '../assets/images/qMarks.png'

const Clients = ({ text, name, location, img }) => {
  return (
    <div className="bg-white shadow-lg py-12 px-7 my-5 flex flex-col justify-between
    lg:w-[500px] lg:mx-5">
      <p className="text-xl text-left font-medium text-[#010103]">
        {text}
      </p>
      <div className="mt-8 flex justify-between items-center">
        <img className="rounded-full" src={img} alt="potterImg" width={70} height={70} />
        <div className="w-full flex flex-col justify-center items-start ml-5">
          <span className="text-lg font-bold">{name}</span>
          <span>{location}</span>
        </div>
        <img className="w-12 h-12" src={qMarks} alt="" width={60} height={60} />
      </div>
    </div>
  )
}

export default Clients