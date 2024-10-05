import { GiHouse } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { DropZipcode } from "./dropZipcode";
import { MdAddHomeWork } from "react-icons/md";
import { TbHome2 } from "react-icons/tb";


export const Navbar = ({size}) => {
  // const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav>
          <div className=" ">
            <div className="flex bg-[#001F3F] justify-between h-16 px-14 shadow items-center">
              <div className="flex   w-full  items-center justify-between space-x-8">
                <div className="    lg:text-2xl cursor-pointer  ">
                  <Link to="/" >  <GiHouse className="text-white hover:text-indigo-400 text-4xl" /> </Link>
                 
                </div>

                <div className="  flex w-[400px] h-10  border rounded-md ">
                  <input
                    className="text-white placeholder-white w-full border-none bg-transparent px-4 py-1   "
                    type="search"
                    name="search"
                    placeholder="Search... "
                  />
                  <div className=" w-20 flex items-center justify-center rounded-md">
                    <CiSearch className="text-3xl font-thin text-white" />
                  </div>
                </div>
               
              

                <div className="hidden font-semibold  md:flex p-3 pr-20   space-x-4 ">
                  <Link to="/" className="hover:text-indigo-400  text-white">
                    Home
                  </Link>
                  <Link
                    to="/footer"
                    className="hover:text-indigo-400 text-white"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:text-indigo-400 text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* <div className=" px-7 flex gap-2 ">
                {isAuthenticated ? (
                  <button
                    className="bg-indigo-600 font-semibold hover:bg-indigo-900  text-white  px-5 py-2 rounded-md"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    LogOut
                  </button>
                ) : (
                  <button
                    onClick={() => loginWithRedirect()}
                    className="bg-indigo-600 hover:bg-indigo-900  text-white  px-5 py-2 rounded-md"
                  >
                    LogIn
                  </button>
                )}               
              </div> */}

              <div className="flex space-x-4 items-center">
                
                  <Link to="/cart" type="button"  className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <TbHome2 className="text-2xl"/>
                  <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{size}</div>
                  </Link>

                
                
                {/* <a href="#" className=" px-4 py-2 rounded text-indigo-600 hover:bg-indigo-200 border border-indigo-600 text-sm ">LOGIN</a> */}
                <a
                  href="#"
                  onClick={() => navigate("/signup")}
                  className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                >
                  SIGNUP
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
