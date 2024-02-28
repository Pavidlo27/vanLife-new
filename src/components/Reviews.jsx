import React from 'react'

import Clients from './Clients'

import harryImg from '../assets/images/harryImg.jpg'
import ronImg from '../assets/images/ronImg.jpg'

const Reviews = () => {
  return (
    <div className="my-32 lg:text-center">
      <div>
        <span className="text-2xl font-bold">Reviewed by People</span>
        <h3 className="text-5xl font-bold my-3">Client's Testimonials</h3>
        <p className="text-[#707f7b] my-5 ">
          Discover the positive impact we've made
          on the our clients by reading through their testimonials.
          <br />
          Our clients have experienced our service and results,
          <br />
          and they're eager to share their positive experiences with you.
        </p>
      </div>
      <div className='lg:flex lg:justify-center lg:mt-10'>
        <Clients
          text='"We rented a van from this website and had an amazing experience!
        The booking was easy and the rental rates were very affordable. "'
          name='Harry Poteli'
          location='Poti'
          img={harryImg}
        />
        <Clients
          text='"The car was in great condition and made our trip even better. 
        Highly recommend for this car rental website!"'
          name='Ron Rizzly'
          location='Khoni'
          img={ronImg}
        />
      </div>
    </div>
  )
}

export default Reviews