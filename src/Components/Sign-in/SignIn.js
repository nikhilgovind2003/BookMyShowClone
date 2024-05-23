import React, { useState } from "react";
import { Link } from "react-router-dom";




const SignIn = () => {

  const [isLogin, setLogin] = useState(true)
  return (
    <div className={isLogin?`fixed w-full h-screen translate-x-5 flex items-center justify-center shadow-xl bg-transparent  top-0 z-10`:"hidden"}>
      <div className="p-4 gap-4 w-[400px] bg-red-400 rounded-xl">
        <div className=" flex items-center p-4">
          <span className=" text-center w-full font-semibold text-xl">
            Get Started
          </span>
          <Link onClick={()=>{
            setLogin(!isLogin)
          }}  to="/">X</Link>
        </div>
        <div className="">
          <div className="flex border p-3 my-6 border-3 border-black">
            Logo
            <span className=" w-full text-center ">Continue with Google</span>
          </div>
          <div className="flex border p-3 my-6 border-3 border-black">
            Logo
            <span className=" w-full text-center ">Continue with Email</span>
          </div>
          <div className="flex border p-3 my-6 border-3 border-black">
            Logo
            <span className=" w-full text-center">Continue with Apple</span>
          </div>
        </div>

        <div className=" text-center w-full">OR</div>

        <div className=" flex items-center gap-2 w-full justify-center">
          <span>Logo +91</span>
          <input
            type="text"
            className=" border-none outline-none w-[250px] border-b-2 border-black"
            placeholder="Continue with Mobile Number"
          />
        </div>

        <div className="mt-24 w-full text-center">
          <span className="text-sm">
            I agree to the
            <a className=" underline" href="terms">
              Terms & Conditions</a> & <a className="underline" href="privacy">Privacy Policy
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
