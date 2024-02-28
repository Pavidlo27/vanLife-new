import React from 'react'

const Footer = () => {
  return (
    <footer className='py-8 text-center bg-[#161616] text-white
    lg:flex lg:text-start'>
      <div className='p-8 w-full h-fit grid gap-2'>
        <span className='text-2xl font-bold mb-5 block'>VAN Rental</span>
        <p>
          We offers a big range of vehicles for all your driving needs.
          We have the perfect car to meet your needs.
        </p>
        <p>&copy; 2024 VANLIFE</p>
      </div>
      <div className='p-8 w-full grid gap-2'>
        <span className='text-2xl font-bold mb-5 block'>COMPANY</span>
        <p>Tbilisi</p>
        <p>Careers</p>
        <p>Mobile</p>
        <p>Blog</p>
        <p>How we work</p>
      </div>
      <div className='p-8 w-full h-fit grid gap-2'>
        <span className='text-2xl font-bold mb-5 block'>WORKING HOURS</span>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className='p-8 w-full h-fit grid gap-2'>
        <span className='text-2xl font-bold mb-5 block'>SUBSCRIPTION</span>
        <p>Subscribe your Email address for latest news & updates.</p>
      </div>
    </footer>
  )
}

export default Footer