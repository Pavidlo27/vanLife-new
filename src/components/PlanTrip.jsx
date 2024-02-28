import React from 'react'

import downloadOne from '../assets/images/downloadOne.png'
import downloadTwo from '../assets/images/downloadTwo.png'
import downloadThree from '../assets/images/downloadThree.png'
import vanOne from '../assets/images/vanOne.jpg'

const PlanTrip = () => {
  return (
    <div className="mb-[560px] lg:mb-0 lg:mt-32 lg:text-center">
      <span className="text-2xl font-bold">Plan your trip now</span>
      <h3 className="text-5xl font-bold my-3">Quick & easy van rental</h3>
      <div className='lg:flex'>
        <div className=" flex flex-col items-center my-10 px-10">
          <img src={downloadOne} alt="logo" />
          <h4 className="text-2xl font-bold my-2">Select Van</h4>
          <p className="text-[#707f7b]">
            We offers a big range of vehicles for all your driving needs.
            We have the perfect van to meet your needs
          </p>
        </div>
        <div className=" flex flex-col items-center my-10 px-10">
          <img src={downloadTwo} alt="logo" />
          <h4 className="text-2xl font-bold my-2">Contact Operator</h4>
          <p className="text-[#707f7b]">Our knowledgeable and friendly operators are
            always ready to help with any questions or concerns
          </p>
        </div>
        <div className=" flex flex-col items-center my-10 px-10">
          <img src={downloadThree} alt="logo" />
          <h4 className="text-2xl font-bold my-2">Let's Drive</h4>
          <p className="text-[#707f7b]">
            Whether you're hitting the open road, we've got you covered
            with our wide range of vans
          </p>
        </div>
      </div>
      <img src={vanOne} className='absolute w-full left-0 right-0 lg:hidden' alt="" />
    </div>
  )
}

export default PlanTrip