import axios from "axios";
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

export const DropZipcode = () => {
  const [isOpne, setIsOpne] = useState(false);
  const [isOpne2, setIsOpne2] = useState(false);
  const [isOpne3, setIsOpne3] = useState(false);

  const [cardData, setCardData] = useState([]);
  // var a = window.location.href;
  // let b = a.split("#")[1];

  
  useEffect(() => {
    axios
      .get(
        "https://api.apify.com/v2/datasets/shejoPzE17IAUjqCO/items?lds5c7q2i505oVUPs=apify_api_8zTUi6JZ5a9BiDCgc1dBN4f2BALNe133SRAd"
      )
      .then((response) => setCardData(response.data))
      .catch((error) => console.error("error fatching carddata :", error));
  }, []);

  console.log(cardData);


  function showdata(){
    alert("hello")
  }
    

  return (
    <div className="flex items-start justify-end gap-2 p-5  w-full h-fit  ">

    <div className="relative flex flex-col  items-center text-center w-[280px]    ">
      <button onClick={() => setIsOpne((prev) => !prev)}className="py-2 text-xl   bg-transparent border border-black  flex items-center justify-center w-full rounded-md" >
        Zipcode{" "}
        {!isOpne ? (<FaCaretDown className="ml-2" />) : (<FaCaretUp className="ml-2" />)}
      </button>
      
      {isOpne && (
        <div className="h-[400px] w-full overflow-auto grid grid-cols-3 gap-3 p-4   bg-white  dark:focus:ring-blue-800 dropdown-toggle opacity-1 visible ">
          {cardData.map((data, id) => {
            return (
            <div key={id} className="text-left">
               <option className="bg-gray-100 m-1 hover:bg-gray-300 cursor-pointer rounded-md  w-full p-2">-{data.zipcode}</option> </div> );
          })}
        </div>
      )}
    </div>

    <div className="relative flex flex-col items-center text-center w-[250px]   ">
      <button onClick={() => setIsOpne2((prev) => !prev)}className="py-2 text-xl  bg-transparent border border-black  flex items-center justify-center w-full rounded-md" >
        Title
        {!isOpne2 ? (<FaCaretDown className="ml-2" />) : (<FaCaretUp className="ml-2" />)}
      </button>
      
      {isOpne2 && (
        <div className="h-[400px] w-full overflow-auto  gap-3 p-4   bg-white  dark:focus:ring-blue-800 dropdown-toggle ">
          {cardData.map((data, id) => {
            return (<div key={id} className="text-left  border-gray-500"> <p className="bg-gray-100 m-1 hover:bg-gray-300 cursor-pointer rounded-md  w-full p-2  ">- {data.title}</p> </div> );
          })}
        </div>
      )}
    </div>

    <div className="relative flex flex-col items-center text-center w-[250px]   ">
      <button onClick={() => setIsOpne3((prev) => !prev)}className="py-2 text-xl   bg-transparent border border-black  flex items-center justify-center w-full rounded-md" >
      Address-1{" "}
        {!isOpne3 ? (<FaCaretDown className="ml-2" />) : (<FaCaretUp className="ml-2" />)}
      </button>
      
      {isOpne3 && (
        <div className="h-[400px] w-full overflow-auto  gap-3 p-4   bg-white  dark:focus:ring-blue-800 dropdown-toggle ">
          {cardData.map((data, id) => {
            return (<div key={id} className="text-left  border-gray-500"> <select className="bg-gray-100 m-1 hover:bg-gray-300 cursor-pointer rounded-md  w-full p-2  ">- {data.address1}</select> </div> );
          })}
        </div>
      )}
    </div>

    <div className="mt-2">
     
    {/* {cardData.zipcode == cardData.title == cardData.address1 ? <a href="/contact"  className="px-10 py-2 rounded-md text-xl hover:bg-orange-300 bg-orange-200">Search</a> : alert("error")} */}
     <a href=""  onClick={showdata} className="px-10 py-2 rounded-md text-xl hover:bg-orange-300 bg-orange-200">Search</a> 
    </div>

    </div>
  );
};
