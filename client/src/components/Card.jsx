import { Link } from "react-router-dom";
import Carousel from "./Carousel";

export function Card() {
  return (
    <section className="">
      <div>
        <div>Username</div>
        <div>Profile Picture</div>
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <div>cat name, adoption status</div>
        <div>cat description</div>
      </div>
    </section>
  );
}

export function CardBreeds({ id, name, temperament, description }) {
  return (
    <div className="m-5 border p-7 bg-white border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 w-80 h-96">
      <Link to={"/cat-breeds/" + id} className="block h-full">
        <div className=" grid grid-rows-5 h-full">
          <h5 className="row-span-1 mb-1 text-2xl font-bold tracking-tight text-light-third dark:text-white">
            {name}
          </h5>
          <h5 className="row-span-1 mb-1 text-sm font-medium tracking-tight text-light-second dark:text-white">
            {temperament}
          </h5>
          <p className="row-span-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description.slice(0, 150)}...{" "}
            <span className="text-light-bg-light-third hover:text-light-fobg-light-fourth cursor-pointer">
              Read More
            </span>
          </p>
          <div className="flex justify-center py-3">
            <span className="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-light-third rounded-lg hover:bg-light-fourth focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-light-third dark:focus:ring-light-fobg-light-fourth">
              <Link to={"/cat-breeds/" + id}>Details</Link>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
