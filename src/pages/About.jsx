import React from "react"
import bgImg from "../assets/images/about-hero.png"
import vanAbout from '../assets/images/vanAbout.png'
import { Link } from "react-router-dom"

import PlanTrip from "../components/PlanTrip"

export default function About() {
    return (
        <div className="font-body text-center mt-28 lg:mt-0 lg:text-start">
            <div className="lg:flex lg:justify-around lg:px-10 lg:py-12">
                <div className="p-8 lg:w-7/12 lg:p-0">
                    <h1 className="text-5xl leading-tight font-bold my-5">
                        Don’t squeeze in a sedan when you could relax in a <span className="text-primary">van</span>.
                    </h1>
                    <p className="text-p">
                        Our mission is to enliven your road trip with the perfect
                        travel van rental.
                        <br />
                        Our vans are recertified before each
                        trip to ensure your travel plans can go off without a hitch.
                        <br />
                        <br />
                        Our team is full of vanlife enthusiasts who know firsthand
                        the magic of touring the world on 4 wheels.
                    </p>
                </div>
                <div className="w-1/3 border-2 border-primary h-fit hidden lg:block">
                    <img src={vanAbout} alt="" />
                </div>
            </div>
            <img src={bgImg} className="my-8" />
            <div className="px-8 mt-20">
                <PlanTrip />
            </div>
            <div className="p-8 mb-8 lg:mt-20 lg:mx-8 lg:text-center lg:border-2 lg:border-primary lg:m-auto">
                <h2 className="text-black text-2xl font-bold mb-8">Your destination is waiting.<br />Your van is ready.</h2>
                <Link
                    className="text-xl text-white font-bold bg-primary 
                                px-10 py-6 block hover:opacity-80 lg:inline-block "
                    to="/vans"
                >
                    Explore our vans
                </Link>
            </div>
        </div>
    );
}