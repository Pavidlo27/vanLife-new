import React from "react";
import { useLoaderData, Link, defer, Await, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return defer({ vans: getVans() });
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.get("type")
  console.log(typeFilter)

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
    })
  }

  function renderVanElements(vans) {
    const displayedVans = typeFilter
      ? vans.filter(van => van.type === typeFilter)
      : vans

    const vanElements = displayedVans.map((van) => (
      <div key={van.id} className="mb-8">
        <Link
          to={van.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter
          }}>
          <div className="overflow-hidden rounded-md">
            <img src={van.imageUrl} className="hover:scale-105 object-cover duration-300" />
          </div>
          <div className="text-xl my-5 ">
            <h3 className="text-2xl font-bold">{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    ));
    return (
      <>
        <div className="grid grid-cols-3 gap-3 my-5 
        md:max-w-[350px] lg:max-w-[350px]">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}
          >Simple</button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}
          >Luxury</button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}
          >Rugged</button>
          {typeFilter &&
            <button
              onClick={() => handleFilterChange("type", null)}
              className='van-type clear-filters'
            >Clear filter</button>}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{vanElements}</div>;
      </>
    )
  }

  return (
    <div className="mt-[110px] p-8 lg:px-20 lg:py-0 lg:mt-0">
      <h1 className="text-5xl font-bold py-5">Explore our <span className="text-primary">van</span> options</h1>
      <React.Suspense fallback={<h2>Loading Vans...</h2>}>
        <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
      </React.Suspense>
    </div>
  );
};

export default Vans;
