import React from 'react'

import Accordion from "../components/Accordion"

const FAQ = () => {
  return (
    <div className="my-32 lg:text-center lg:w-2/3 lg:m-auto">
      <span className="text-2xl font-bold">FAQ</span>
      <h3 className="text-5xl font-bold my-3">Frequently Asked Questions</h3>
      <p className="text-[#707f7b] my-5 ">
        Frequently Asked Questions About the Van Rental Booking Process
        on Our Website: Answers to Common Concerns and Inquiries.
      </p>
      <div className="mt-8 text-start grid gap-2 lg:mt-10">
        <Accordion
          title='1. What is special about comparing rental van deals?'
          answer='"Comparing rental van deals is important as it helps find
          the best deal that fits your budget and requirements,
          ensuring you get the most value for your money.
          By comparing various options, you can find deals
          that offer lower prices, additional services,
          or better van models. You can find van rental deals
          by researching online and comparing prices from different
          rental companies."'
        />
        <Accordion
          title="2. How do I find the van rental deals?"
          answer='"You can find van rental deals by researching online and comparing prices
          from different rental companies. Websites such as Expedia, Kayak,
          and Travelocity allow you to compare prices and view available rental options.
          It is also recommended to sign up for email newsletters and follow rental van
          companies on social media to be informed of any special deals or promotions."'
        />
        <Accordion
          title="3. How do I find such low rental van prices?"
          answer='"Book in advance: Booking your rental van ahead of time can often result in lower prices.
          Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity
          to compare prices from multiple rental van companies. Look for discount codes and coupons:
          Search for discount codes and coupons that you can use to lower the rental price.
          Renting from an off-airport location can sometimes result in lower prices."'
        />
      </div>
    </div>
  )
}

export default FAQ