// import img from "/images/home.jpg";

import { useState } from "react";
import { Card } from "./Card";

import {  DropZipcode } from "./dropZipcode";
import { Footer } from "./Footer";
import { Navbar } from "./navbar";
// import { Navbar } from "./navbar";
// import { SignupPage } from "./signup";

export const HomePage = () => {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])

  const handleClick = (item)=>{
    console.log(item)
    let isPresent = false;
     cart.forEach((product)=>{
      if(item.id === product.id)
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
              Find Your Best <span className="text-indigo-600">Property</span>
            </h1>
          </div>
        </div>
      </div>
     
      <Card handleClick={handleClick}/>
      <Footer/>
    </>
  );
};
