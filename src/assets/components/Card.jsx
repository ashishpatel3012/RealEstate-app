
import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';




export const Card = () => {
  
  const [cardData, setCardData] = useState([]);

  // var a = window.location.href;
  // let b = a.split('#')[1];
  let initialArray = [];
  const [showZipcodeiddata, sethowZipcodeiddata ] = useState(initialArray); 
  
  useEffect(() => {
    axios
      .get(
        "https://api.apify.com/v2/datasets/shejoPzE17IAUjqCO/items?lds5c7q2i505oVUPs=apify_api_8zTUi6JZ5a9BiDCgc1dBN4f2BALNe133SRAd"
      )
      .then((response) => setCardData(response.data))
      .catch((error) => console.error("error fatching carddata :", error));
  }, [])

  const handleLangChange = (event) => {

let zdata = event.target.getAttribute("data-button");
  sethowZipcodeiddata(oldArray => [...oldArray, zdata])
   

    

          
}

let zdataarray = showZipcodeiddata

  return (
    <>
    <div className="text-left mt-5 ml-5 text-white w-full " >
    <Popup className="bg-blue-500 w-full "    
        trigger={<button className="bg-indigo-500 py-3 px-5 rounded-md font-bold cursor-pointer  "> Saved Properties</button>} position="right center" >
    {zdataarray.map((data,id) =>  {
          let a = data ;
           return (
            <>
             <div key={id} >
        {cardData.map((data, id) =>  {

          if(a == data.zipcode){
            return (
              <article 
                key={id}
                className=" container bg-red-200  w-[220px] h-[280px] mx-auto    overflow-hidden rounded-xl border  text-gray-700  ">      

                  <div   className="p- h-full bg-gray-200 flex flex-col  cursor-pointer items-start text-xs  relative">    
                    
                      <a href={`/carddetail/#${data.zipcode}`} className="flex flex-col gap- p-4" >                      
                    <p ><span className="font-bold"> AskingPrice :</span> {data.askingPrice}</p>
                    <p ><span className="font-bold"> Address-1 :</span> {data.address1}</p>
                    <p ><span className="font-bold"> Address-2 :</span> {data.address2}</p>
                    <p ><span className="font-bold"> City :</span> {data.city}</p>
                    <p ><span className="font-bold"> Zipcode :</span> {data.zipcode}</p>
                    <p ><span className="font-bold"> Title :</span> {data.title}</p>
                    <p ><span className="font-bold"> Seller :</span> {data.seller}</p>
                    <a  href={`tel:${data.phone}`}  className=" text-blue-700" ><span className="font-bold text-gray-700 "> Phone:</span > {data.phone}</a>
                    {/* <a href={"tel:2126544654"} className=" text-blue-700" ><span className="font-bold text-gray-700 "> Phone:-</span > {data.phone}</a> */}
                    <p ><span className="font-bold"> Price :</span> {data.price}</p>  
                    </a>
                    {/* <div className="text-end w-full mt-auto  ">    
                    <Link  to={data.url} target="_blank"  className="px-4 py-2  bg-indigo-700 hover:bg-indigo-500 text-white rounded-md  " >View Detail</Link> 
                    </div> */}
                    </div>
                  
                  
              </article>
            );
          }
           
          })}
    </div>
             </>
           );
       


         })}
     </Popup>
    </div>
      <section className="container mx-auto p-3 flex flex-col items-center bg-white my-20  ">
        <h1 className="mt-14 text-4xl font-bold text-indigo-600 ">New Houses </h1>        
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
                          <p ><span className="font-bold " > Zipcode</span> <div  >{data.zipcode}</div> </p>
                          <p ><span className="font-bold"> Title</span> {data.title}</p>
                          <p ><span className="font-bold"> Seller</span> {data.seller}</p>
                          <p ><span className="font-bold"> Phone</span> {data.phone}</p>
                          <p ><span className="font-bold"> Price</span> {data.price}</p>  
                          
                      </a>
                    <div className="text-end w-full mt-auto  flex justify-between ">    
                    <Link  onClick={handleLangChange} id="zipcode" value={data.zipcode}  data-button={data.zipcode}   className="zipcode px-4 py-2  bg-transparent border border-indigo-500 hover:bg-gray-300 text-indigo-500 rounded-md  " >Add Property</Link> 
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
