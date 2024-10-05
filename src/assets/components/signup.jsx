import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth(app);

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const createUser =  (e) => {
     e.preventDefault()
     if(email.length==0 || password.length==0){
        setError(true)
     }else{

     createUserWithEmailAndPassword(auth, email, password).then(document.getElementById("signupForm").style.display = "none")
    .then(document.getElementById("successMsg").style.display = "block")
     }
    
    
  };

  return (
    <>
      <div className="h-screen bg-gray-100 flex justify-center items-center">

        <div className="py-14 px-8 w-[25%]  mt-20 bg-white rounded shadow-xl">

            <div id="successMsg" className="text-center hidden flex items-center justify-center ">
            <h1  className="text-green-500 text-2xl font-bold">Signup Successful</h1>
            </div>


          <form action="" id="signupForm" className="">
            
            
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-left text-gray-800 font-bold"
              >
                Email:
              </label>
              
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                
                placeholder="enter email"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
              {error && email.length<=0 ? <label className="text-red-600"> Email can`t be empty</label> : ""}
            </div>
            

            <div>
              <label
                htmlFor="email"
                className="block text-left text-gray-800 font-bold"
              >
                Password:
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="enter password"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
             {error && password<=0 ? <label className="text-red-600"> Password can`t be empty</label> : ""}

            
            </div>
            {/* <div className="text-center mt-5">
            <a
                href="#"
                className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600"
              >
                Forget Password
              </a>
              </div> */}
            <a
              onClick={createUser}
              className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 hover:bg-indigo-800 text-white font-bold w-full text-center rounded"
            >
              Signup
            </a>

          </form>




          <div className="   mt-4   flex ">
              <a href="/signin" className=" rounded w-full text-center bg-green-700 hover:bg-green-800 cursor-pointer py-2 px-4   text-white  font-bold">
                Signin
              </a>
            </div>
        </div>
      </div>
    </>
  );
};
