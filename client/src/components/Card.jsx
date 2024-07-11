import { Link } from "react-router-dom";
import TrashDelete from "./TrashDelete";
// import { Carousel } from "flowbite-react";

export function Card() {
  return (
    <section className="mb-8 sm:mb-0 px-3 py-2 max-w rounded-lg shadow-xl bg-light-first sm:col-span-1">
      <div className="my-2 flex justify-between ">
        <h1 className="text-light-fourth font-bold text-md">Username</h1>
      </div>
      <hr className="border-t-4 border-light-third" />
      <div className="grid grid-cols-3 gap-1 my-3">
        <div className="col-span-2">
          <div className="grid grid-rows-2 gap-1 w-full h-40">
            <img
              src="https://images.unsplash.com/photo-1720247522784-ba24b938534d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
              className="w-full h-full object-cover row-span-2"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-rows-2 gap-1 w-full h-40">
            <img
              src="https://images.unsplash.com/photo-1719056307923-a11de279d25f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
              className="w-full h-full object-cover row-span-1"
            />
            <img
              src="https://images.unsplash.com/photo-1719056307923-a11de279d25f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
              className="w-full h-full object-cover row-span-1"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl text-light-fourth">cat name</h1>
        <h3 className="font-bold text-sm text-light-fourth">(age)</h3>
        <p className="font-bold text-md text-light-third">breed</p>

        <button className="shadow-md my-3 bg-light-third py-2 w-full rounded-lg font-semibold text-sm text-white hover:bg-light-fourth">
          Looking for Adopter
        </button>
      </div>
    </section>
  );
}

export function CardBreeds({ id, name, temperament, description }) {
  return (
    <div className="my-5 border p-7 bg-white border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 max-w-sm sm:w-80">
      <Link to={`/cat-breeds/${id}`} className="block h-full">
        <div className="grid grid-rows-5 h-full">
          <h5 className="row-span-1 mb-1 text-2xl text-center font-bold tracking-tight text-light-third dark:text-white">
            {name}
          </h5>
          <h5 className="row-span-1 mb-1 text-sm text-center font-medium tracking-tight text-light-second dark:text-white">
            {temperament}
          </h5>
          <p className=" text-center text-sm row-span-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description.slice(0, 150)}...
          </p>
          <div className="flex justify-center items-center py-3">
            <span className=" w-full  items-center px-3 py-2 text-sm font-medium text-center text-white bg-light-third rounded-lg hover:bg-light-fourth   dark:bg-blue-600 dark:hover:bg-light-third  ">
              <Link to={`/cat-breeds/${id}`}>Details</Link>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function UserCatCard({ handleChangeStatus }) {
  return (
    <section className="mb-8 sm:mb-0 px-3 py-2 max-w rounded-lg shadow-xl bg-light-first sm:col-span-1">
      <h1 className="mt-2 text-center font-bold text-xl text-light-fourth">
        cat name
      </h1>
      <div className="grid grid-cols-3 gap-1 my-3">
        <div className="col-span-2">
          <div className="grid grid-rows-2 gap-1 w-full h-40">
            <img
              src="https://images.unsplash.com/photo-1720247522784-ba24b938534d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
              className="w-full h-full object-cover row-span-2"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-rows-2 gap-1 w-full h-40">
            <img
              src="https://images.unsplash.com/photo-1719056307923-a11de279d25f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
              className="w-full h-full object-cover row-span-1"
            />
            <img
              src="https://images.unsplash.com/photo-1719056307923-a11de279d25f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
              className="w-full h-full object-cover row-span-1"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-bold text-sm text-light-fourth">(age)</h3>
        <p className="font-bold text-md text-light-third">breed</p>
        <p className="font-medium text-sm text-light-fourth">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          quidem laboriosam accusantium perspiciatis voluptatibus est mollitia
          quae officiis magni, aut architecto molestiae excepturi eum numquam
          consequuntur illum, tenetur autem quod.
        </p>
        <div className="grid grid-cols-4 gap-4 w-full">
          <button
            // onClick={() => handleChangeStatus(id)}
            className="col-span-3 h-10 shadow-md my-3 bg-light-third py-2 rounded-lg font-semibold text-sm text-white hover:bg-light-fourth"
          >
            Adoption Status
          </button>
          <button
            // onClick={() => handleChangeStatus(id)}
            className="col-span-1 bg-red-700 h-10 shadow-md my-3 bg-red-700z py-2 rounded-lg font-semibold text-sm text-white hover:bg-red-800"
          >
            <div className="flex justify-center items-center">
              <TrashDelete />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
