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
    <div className="py-28 grid grid-cols-4 mx-10">
      {catData.map((cat, index) => {
        return (
          <div key={index} className="text-black">
            <CardBreeds
              id={cat.reference_image_id}
              name={cat.name}
              temperament={cat.temperament}
              description={cat.description}
            />
          </div>
        );
      })}
    </div>
  );
}
