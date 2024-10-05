import axios from "axios";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

export const CardDetail = () => {
  
  const [cardData, setCardData] = useState([]);
  var a = window.location.href;
  let b = a.split('#')[1];

  useEffect(() => {
    axios
      .get(
        "https://api.apify.com/v2/datasets/shejoPzE17IAUjqCO/items?lds5c7q2i505oVUPs=apify_api_8zTUi6JZ5a9BiDCgc1dBN4f2BALNe133SRAd"
      )
      .then((response) => setCardData(response.data))
      .catch((error) => console.error("error fatching carddata :", error));
  }, [])

  // const url = window.location.href;


  return (
    <div>
        {cardData.map((data, id) =>  {

          if(b == data.zipcode){
            return (
              <article 
                key={id}
                className="mb-8 container bg-red-200  w-full h-[700px] mx-auto mt-28   overflow-hidden rounded-xl border  text-gray-700 shadow-lg shadow-gray-500 duration-500 ease-in-out hover:shadow-xl ">      

                  <div   className="p-4 h-full bg-gray-200 flex flex-col  cursor-pointer items-start text-4xl relative">    
                    <div className=" w-full flex justify-end  ">
                      <a href="/" className="w- full  "><ImCross/> </a>
                      </div>
                      <a href={`/carddetail/#${data.zipcode}`} className="flex flex-col gap-3 p-8" >                      
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
  )
} 
