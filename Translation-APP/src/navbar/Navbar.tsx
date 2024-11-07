// import React from "react";

function Navbar() {
  return (
    <nav className="w-screen bg-[#26577C] border-grey-200 z-20 relative">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center md:text-2xl sm:text-xl font-semibold whitespace-nowrap dark:text-white">
            Language Translation App
          </span>
        </a>
        
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;