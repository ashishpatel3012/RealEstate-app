import axios from "axios";
import { useEffect, useState } from "react";

import { ImCross } from "react-icons/im";


export const DropZipcode = () => {
 
 
  const [selectedZipcode, setSelectedZipcode] = useState('');
 
  const [showZipcode, setShowZipcode ] = useState([]); 
 

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

  const SelectChangeZipcode = (event) => {
    setSelectedZipcode(event.target.value);
   
}


  function showdata(event){
    event.preventDefault();
    //console.log(selectedZipcode);
  
    // setSelectedZipcode(event.target.value);
    
    setShowZipcode(selectedZipcode);
 

  }
    

  return (

    <>
    <div className="flex items-center justify-end gap-2 p-5  w-full h-fit   ">

    <div className="relative flex flex-col  items-center text-center w-[330px]    ">
      
      <select onChange={SelectChangeZipcode} className="h-[] w-full overflow-auto  rounded-md gap-3 p-4 bor  bg-gray-300  dark:focus:ring-blue-800 dropdown-toggle ">
          {cardData.map((data, id) => {
            
            return (<option key={id} className="text-left  border-gray-500"> <h2 className="bg-gray-100 m-1 hover:bg-gray-300 cursor-pointer rounded-md  w-full p-2  ">{data.zipcode}</h2> </option> );
          })}
          
        </select>
     
    </div>

    

    <div className="">
     
    
     <button href="" onClick={showdata}   className="px-10 py-3 rounded-md text-xl hover:bg-orange-300 bg-orange-200">Search</button> 
    </div>
    
    </div>
    <div className="w-full h-fit  ">
      <div className="bg-gray-100 w-[25%] h-fit ml-auto mr-5  p-3 flex flex-col gap-2 rounded-md ">
    
    <h1 className="bg-gray-200 p-1  rounded-md">- {showZipcode}

    {cardData.map((data, id) => {
            
            if(showZipcode == data.zipcode){
              return (
                <article 
                  key={id}
                  className=" container bg-red-200  w-full  mx-auto    overflow-hidden rounded-xl border  text-gray-700 shadow-lg shadow-gray-500 duration-500 ease-in-out hover:shadow-xl ">      
  
                    <div   className="p-4 h-full bg-gray-200 flex flex-col  cursor-pointer items-start  relative">    
                      <div className=" w-full flex justify-end  ">
                        <a href="/" className="w- full  "><ImCross/> </a>
                        </div>
                        <a href={`/carddetail/#${data.zipcode}`} className="flex flex-col gap-1 p-8" >                      
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
    </h1>
   
    </div>
    </div>
    </> 
  );
};
