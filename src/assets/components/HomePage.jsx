// import img from "/images/home.jpg";

import { useEffect, useState } from "react";
import { Card } from "./Card";

import {  DropZipcode } from "./dropZipcode";
import { Footer } from "./Footer";
import { Navbar } from "./navbar";
import axios from "axios";
// import { Navbar } from "./navbar";
// import { SignupPage } from "./signup";

export const HomePage = () => {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.apify.com/v2/datasets/shejoPzE17IAUjqCO/items?lds5c7q2i505oVUPs=apify_api_8zTUi6JZ5a9BiDCgc1dBN4f2BALNe133SRAd"
      )
      .then((response) => setCardData(response.data))
      .catch((error) => console.error("error fatching carddata :", error));
  }, [])

  const handleClick = (item)=>{
    console.log(item)
    let isPresent = false;
     cart.forEach((item)=>{
      if(cardData.id === item.id)
        isPresent = true;
     })
     if(isPresent)
      return;
      setCart([...cart,item])
     
  } 
  return (
    <>
    {/* <Navbar/> */}
             
        <div style={{ backgroundImage: "url(./images/home.jpg)" }} className="bg-cover max-w-full h-screen bg-fixed ">

        
        <DropZipcode/>          
      <div className="container mx-auto ">
          <div className=" flex items-center  justify-center  h-[100%] ">
            <h1 className="text-white  p-10 mt-52 text-9xl font-bold ">
              Find Your Best <span className="text-indigo-600 ">Property</span>
            </h1>
          </div>
        </div>
      </div>
     
      <Card handleClick={handleClick}/>
      <Footer/>
    </>
  );
};
