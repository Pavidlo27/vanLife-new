import React from "react"
import { Link } from "react-router-dom"

import vanHome from '../assets/images/vanHome.png'

import PlanTrip from "../components/PlanTrip"
import ChooseUs from "../components/ChooseUs"
import Reviews from "../components/Reviews"
import FAQ from "../components/FAQ"

export default function Home() {
    return (
        <section className=" px-8 relative text-center w-full font-body
        lg:text-start">
            {/* START TITLE... */}
            <div className="lg:flex lg:justify-around ">
                <div className="min-h-screen flex flex-col justify-center
            lg:w-1/2 lg:min-h-fit">
                    <h1 className="text-[52px] font-bold leading-tight
                lg:text-5xl">
                        You got the travel plans,
                        <br />
                        we got the travel <span className="text-primary">vans</span>.
                    </h1>
                    <p className="text-lg my-10 text-p">
                        Add adventure to your life by joining the #vanlife movement.
                        Rent the perfect van to make your perfect road trip.
                    </p>
                    <Link
                        to="vans"
                        className="w-full py-6 text-xl bg-primary shadow-sm shadow-primary hover:shadow-md 
                        hover:shadow-primary duration-300 text-white text-center inline-block "
                    >
                        Find your van
                    </Link>
                </div>
                <div className="h-[500px] w-[500px] overflow-hidden border-2 border-primary lg:block hidden">
                    <img className=' h-f object-cover object-top border-2 border-black' src={vanHome} alt="" />
                </div>
            </div>
            {/* END TITLE...  */}

            <PlanTrip />
            <ChooseUs />
            <Reviews />
            <FAQ />
        </section>
    )
};