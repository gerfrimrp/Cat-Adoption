import { useEffect, useState } from "react";
import axios from "../utilities/axios";
import { CardBreeds } from "../components/Card";

export default function Breeds() {
  const [catData, setCatData] = useState([]);
  // const [catImage, setCatImage] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [preferences, setPreferences] = useState(["playful", "friendly"]);

  useEffect(() => {
    const fetchCatBreed = async () => {
      try {
        const { data } = await axios.get("/breeds", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        // console.log(data);
        setCatData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCatBreed();
  }, []);

  // useEffect(() => {
  //   const generatePrompt = async () => {};
  //   generatePrompt();
  // });

  return (
    <div className="py-8 sm:py-10 md:py-20 lg:py-28 px-5 sm:px-10 md:px-20 lg:px-28 grid gap-5 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      {catData.map((cat, index) => (
        <div key={index}>
          <CardBreeds
            id={cat.reference_image_id}
            name={cat.name}
            temperament={cat.temperament}
            description={cat.description}
          />
        </div>
      ))}
    </div>
  );
}
