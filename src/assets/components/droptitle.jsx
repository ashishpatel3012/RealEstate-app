import axios from "axios";
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

export const DropTitle = () => {
  const [isOpne, setIsOpne] = useState(false);

  const [cardData, setCardData] = useState([]);
//   var a = window.location.href;
//   let b = a.split("#")[1];

  
  useEffect(() => {
    axios
      .get(
        "https://api.apify.com/v2/datasets/shejoPzE17IAUjqCO/items?lds5c7q2i505oVUPs=apify_api_8zTUi6JZ5a9BiDCgc1dBN4f2BALNe133SRAd"
      )
      .then((response) => setCardData(response.data))
      .catch((error) => console.error("error fatching carddata :", error));
  }, []);

  console.log(cardData);

  return (
    <div className="relative flex flex-col items-center text-center w-[250px]   ">
      <button
        onClick={() => setIsOpne((prev) => !prev)}
        className="py-3  bg-transparent border border-black mt-2 flex items-center justify-center w-full rounded-md"
      >
        Title{" "}
        {!isOpne ? (
          <FaCaretDown className="ml-2" />
        ) : (
          <FaCaretUp className="ml-2" />
        )}
      </button>

      {isOpne && (
        <div className="h-[400px] w-full overflow-auto  gap-3 p-4   bg-white  dark:focus:ring-blue-800 dropdown-toggle ">
          {cardData.map((data, id) => {
            return (
              <div key={id} className="text-left border-b-2 border-gray-500">
                <p>- {data.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
