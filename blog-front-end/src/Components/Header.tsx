// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  let [show, setShow] = useState<string>("hidden")
  
  const change = () => {
    if (show === "hidden") {
      
      setShow("flex")
    }
    else {
      
      setShow("hidden")
    }

  }
  return (
    <>
      <header className=" bg-gray-900  w-full  relative">
        <nav className="py-9 mx-auto w-4/5 ">
          < div className="w-full  relative ">
          <div className=" text-white text-3xl max-w-fit ">
            BlogLogo
          </div>
            <div className=" lg:absolute right-0 top-0 flex justify-center">
              <ul className={`${show}  lg:flex flex-col lg:flex-row gap-6 justify-center text-white text-xl`}>
                <li><Link to="">blog</Link></li>
                <li><Link to="">About</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
            <button className="absolute right-0 top-0 text-white text-3xl cursor-pointer lg:hidden" onClick={change} ><span className="material-symbols-outlined">
              {show==="hidden"?"menu":"close" } 
</span></button>
          </div>
        </nav>

        
          
      </header>


      


    </>
  )
}
