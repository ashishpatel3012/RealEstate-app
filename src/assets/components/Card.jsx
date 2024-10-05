
import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";





export const Card = ({handleClick}) => {
  
  const [cardData, setCardData] = useState([]);

  // var a = window.location.href;
  // let b = a.split('#')[1];

 
  useEffect(() => {
    axios
      .get(
        "https://api.apify.com/v2/datasets/shejoPzE17IAUjqCO/items?lds5c7q2i505oVUPs=apify_api_8zTUi6JZ5a9BiDCgc1dBN4f2BALNe133SRAd"
      )
      .then((response) => setCardData(response.data))
      .catch((error) => console.error("error fatching carddata :", error));
  }, [])





  // function show(event){
  //   event.preventDefault();
  
  // console.log()
  //   // setSelectedZipcode(event.target.value);
    
  //   setShowZipcode(cardData);
 

  // }
  
 

  return (
    <>
    
      <section className="container mx-auto p-3 flex flex-col items-center bg-white my-20  ">
        <h1 className="mt-5 text-4xl font-bold text-indigo-600 ">New Houses</h1>        
        <div className="flex  gap-12 flex-wrap items-stretch justify-center py-10  ">

          {cardData.map((data, id,item) =>  {
           
            return (
              <div key={id} className="mb-8  w-80   overflow-hidden rounded-xl border  text-gray-700 shadow-lg shadow-gray-500 duration-500 ease-in-out hover:shadow-xl ">      

                  <div   className="p-5 h-full bg-gray-100 flex flex-col gap-3 cursor-pointer items-start  ">      
                      <a href={`/carddetail/#${data.zipcode}`}  >  

                          <p ><span className="font-bold"> AskingPrice</span> {data.askingPrice}</p>
                          <p ><span className="font-bold"> Address-1</span> {data.address1}</p>
                          <p ><span className="font-bold"> Address-2</span> {data.address2}</p>
                          <p ><span className="font-bold"> City</span> {data.city}</p>
                          <p ><span className="font-bold"> Zipcode</span> {data.zipcode}</p>
                          <p ><span className="font-bold"> Title</span> {data.title}</p>
                          <p ><span className="font-bold"> Seller</span> {data.seller}</p>
                          <p ><span className="font-bold"> Phone</span> {data.phone}</p>
                          <p ><span className="font-bold"> Price</span> {data.price}</p>  
                          
                      </a>
                    <div className="text-end w-full mt-auto  flex justify-between ">    
                    <Link onClick={()=>{handleClick(item)}}    className="px-4 py-2  bg-transparent border border-indigo-500 hover:bg-gray-300 text-indigo-500 rounded-md  " >Add Property</Link> 
                    <Link  to={data.url} target="_blank"  className="px-4 py-2  bg-indigo-700 hover:bg-indigo-500 text-white rounded-md  " >View Detail</Link> 
                    </div>
                    </div>
                  
                  
              </div>
            );
        


          })}
        </div>

       
      </section>
      
    </>
  );
};
