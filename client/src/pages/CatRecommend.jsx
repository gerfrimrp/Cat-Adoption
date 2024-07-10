import { useEffect, useState } from "react";
import axios from "../utilities/axios";

export default function CatRecommend() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    const fetchCatBreed = async () => {
      try {
        const { data } = await axios.get(
          "https://api.thecatapi.com/v1/breeds",
          {
            headers: {
              common: {
                "x-api-key":
                  "live_DZfGyzdaXp5Leeqz4PHTjYuwXHzXOSsTnXY5sn8jvfkQAWqUaK7Nf9gbSFHnWRy4",
              },
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
  }, []);
}
