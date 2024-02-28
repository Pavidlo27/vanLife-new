import React from "react";
import { useParams, useLoaderData, Link, useLocation } from "react-router-dom";

import { getVan } from "../../api";

export function loader({ params }) {
  return getVan(params.id);
}

const VanDetail = () => {
  const van = useLoaderData();
  const params = useParams()
  const location = useLocation()
  const search = location.state?.search
  console.log(params);

  return (
    <div className=" mt-[120px] px-8 lg:mt-0 lg:px-20">
      <Link to={`..${search}`} className="lg:ml-20 mb-5 block hover:underline" relative="path">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="lg:flex justify-around lg:h-[500px] bg-slate400">
        <div className="lg:w-[450px] lg:h-fit overflow-hidden rounded-md bg-black">
          <img src={van.imageUrl} className="max-w-full" />
        </div>
        <div className="lg:w-[500px]">
          <h2 className="my-5 text-xl font-bold">{van.name}</h2>
          <p className="my-5">
            <span>${van.price}</span>/day
          </p>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <p className="text-p my-10">{van.description}</p>
          <button className="w-full bg-primary hover:opacity-80 py-5 rounded-md mt-8 text-white text-xl font-bold hover:">Rent this van</button>
        </div>
      </div>
    </div>
  );
};

export default VanDetail;
