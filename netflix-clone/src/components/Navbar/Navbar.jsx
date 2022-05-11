import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";





const Navbar = () => {

  const { user, signOutHandler } = useAuth()



  return (
    <div className="w-full  flex justify-between items-center p-6 z-50  absolute top-0  ">
      <Link to="/">
        <div className=" text-red-500 text-4xl cursor-pointer  font-semibold">
          NETFLIX
        </div>

      </Link>
      {!user ? <div>
        <Link to="/login">
          <button className=" text-white font-semibold hover:border-white border-2 md:text-base text-sm border-black md:px-6  md:py-3  px-3 py-1 mr-3 rounded-lg duration-150 ease-in-out ">
            Sign In
          </button>
        </Link>
      </div>
        : <div>
          <Link to="/account">
            <button className=" text-white font-semibold hover:border-white border-2 md:text-base text-sm border-black md:px-6  md:py-3  px-3 py-1 mr-3 rounded-lg duration-150 ease-in-out ">
              Account
            </button>

          </Link>

          <button onClick={() => { signOutHandler() }} className="text-white bg-red-600 text-sm md:text-base font-semibold px-3 py-1  md:px-6 md:py-3 rounded-lg">
            Logout
          </button>

        </div>

      }
    </div>
  );
};

export default Navbar;
