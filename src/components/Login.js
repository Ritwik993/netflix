import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [toggleForm,setToggleForm]=useState(true);

    const handleForm=()=>{
        setToggleForm(!toggleForm);
    }
  return (
    <>
      <Header />
      <div className="h-[100vh] w-full relative ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
          className="h-full w-full"
        />
        <div className="absolute top-1/4 w-full flex items-center justify-center mx-auto">
          <form className="w-[400px] bg-black text-white flex flex-col py-[48px] px-[68px] rounded-lg opacity-80">
            <p className=" text-3xl font-bold mb-6">{toggleForm?"Sign In":"Sign Up"}</p>
            {!toggleForm &&
                  <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 text-black mb-4"
                />
            }
            <input
              type="text"
              placeholder="Email Address"
              className="w-full p-2 text-black mb-4"
            />
            <input type="password" placeholder="Password" className="w-full p-2 text-black mb-4" />
            <button type="submit" className="w-full p-3 bg-red-700 my-4 rounded cursor-pointer">{toggleForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={()=>handleForm()} className=" cursor-pointer">{toggleForm?"New to Netflix? Sign up Now":"Already a User? Sing In Now"}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
