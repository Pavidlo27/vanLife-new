import React from 'react'

import downloadFour from '../assets/images/downloadFour.png'
import downloadFive from '../assets/images/downloadFive.png'
import downloadSix from '../assets/images/downloadSix.png'

const ChooseUs = () => {
  return (
    <div className="my-32 lg:flex lg:justify-around">
      <div className='lg:w-[500px] '>
        <span className="text-2xl font-bold">Why Choose Us</span>
        <h3 className="text-5xl font-bold my-3">Best valued deals you will ever find</h3>
        <p className="text-[#707f7b] my-5 ">
          Discover the best deals you'll ever find with our unbeatable offers.
          We're dedicated to providing you with the best value for your money,
          so you can enjoy top-quality services and products without breaking the bank.
          Our deals are designed to give you the ultimate renting experience,
          so don't miss out on your chance to save big.
        </p>
        <a
          href="#"
          className='hidden lg:inline-block px-10 py-5 text-white font-bold
         shadow-md shadow-primary bg-primary hover:shadow-lg 
         hover:shadow-primary duration-300'
        >
          Find Details
        </a>
      </div>
      <div className='lg:w-[500px]'>
        <div className=" flex flex-col items-center my-10 px-10
        lg:flex-row lg:mt-0">
          <img src={downloadFour} alt="van-logo" />
          <div className='ml-3'>
            <h4 className="text-2xl font-bold my-2">Cross Country Drive</h4>
            <p className="text-[#707f7b]">
              Take your driving experience to the next level with our top-notch
              vehicles for your cross-country adventures.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center my-10 px-10
        lg:flex-row">
          <img src={downloadFive} alt="van-logo" />
          <div className='ml-3'>
            <h4 className="text-2xl font-bold my-2">All Inclusive Pricing</h4>
            <p className="text-[#707f7b]">
              Get everything you need in one convenient, transparent price with
              our all-inclusive pricing policy.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center my-10 px-10
        lg:flex-row">
          <img src={downloadSix} alt="van-logo" />
          <div className='ml-3'>
            <h4 className="text-2xl font-bold my-2">No Hidden Charges</h4>
            <p className="text-[#707f7b]">
              Enjoy peace of mind with our no hidden charges policy.
              We believe in transparent and honest pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs