import { useState } from "react"
import {getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../../firebase"

const auth = getAuth(app); 


export const SigninPage = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("");
const [error, setError] = useState(false)

const signinUser = async(e)=>{
    e.preventDefault();

    if(email.length==0 || password.length==0){
       setError(true);
    }else{


      try{
       await signInWithEmailAndPassword(auth,email,password);
        console.log("signin success"); 
        window.location.href = "/profile";
        
        
  
        setEmail("")
        setPassword("")

      }catch(err){
        console.log(err)

      }
    

    }
    

    
}


  return (
    
    <>
    <div className="container mx-auto">
    
     <div className="h-screen bg-gray-100 flex justify-center items-center">
    <div className="py-14 px-8 w-[25%] mt-20 bg-white rounded shadow-xl">
      <form action="">
        <div className="mb-6">
          <label htmlFor="name"  className="block text-left text-gray-800 font-bold">Email:</label>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email"   placeholder="enter email" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
         {error && email.length<=0 ? <label className="text-red-600">Email can't be empty</label> : "" }
        </div>

        <div>
          <label htmlFor="email" className="block text-left text-gray-800 font-bold">Password:</label>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password"   placeholder="enter password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
         {error && password.length<=0 ? <label className="text-red-600">Password can't be empty</label> : "" }
        </div>
          {/* <a href="#" className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</a> */}
        <button onClick={signinUser } className="cursor-pointer py-2 px-4 block mt-6 bg-green-700 hover:bg-green-800 text-white font-bold w-full text-center rounded">Signin</button>
      </form>
    </div>
  </div>
  </div>
    </>
  )
}
