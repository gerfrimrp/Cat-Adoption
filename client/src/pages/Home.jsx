import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import axios from "../utilities/axios";

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchUserCats = async () => {
      try {
        const { data } = await axios.get("/pub/cats");
        console.log(data.cats);
        setCats(data.cats);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserCats();
  }, []);

  return (
    <div className="m-10 lg:my-16 xl:mx-28 gap-8 sm:grid-cols-2 sm:grid md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {cats.map((cat, index) => {
        return (
          <Card
            key={index}
            username={cat.User?.userName}
            images={cat.CatImages}
            name={cat.name}
            age={cat.age}
            breed={cat.breed}
            description={cat.description}
            contact={cat.contact}
          />
        );
      })}

      <Link
        to={"/create"}
        // onClick={onClick}
        className="fixed bottom-4 right-4 md:bottom-10 md:right-10 lg:bottom-10 lg:right-16 xl:bottom-16 xl:right-20 xl:scale-125 lg:scale-110 bg-light-third hover:bg-light-fourth text-white font-bold p-2 rounded-full shadow-lg z-10"
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20M12 4V20"
            stroke="#FFFFFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
