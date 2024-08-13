import React from "react";
import Logo from "../assets/icon/Logo.svg";
import CountryIcon from "../assets/icon/Country Icon.svg";
import Icon_1 from "../assets/icon/Icon 1.svg";

export default function Navbar() {
  return (
    <div className=" w-full h-12 bg-white-400 font-notoSans">
      <div className="flex pt-0 w-full">
        <div className="w-1/12 bg-white ml-28">
          <img className="w-14 h-14" src={Logo} />
        </div>
        <div className="flex text-sm w-5/12 bg-white pt-3 ml-36 space-x-6 font-medium ">
          <span >
            <a href="/" className="flex hover:text-blue-400 focus:text-red-500">
              About Us
            </a>
          </span>
          <span >
            <a href="/" className="flex hover:text-blue-400">
              Employers
              <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} />
            </a>
          </span>
          <span>
            <a href="/" className="flex hover:text-blue-400">
              Find Workers
              <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} />
            </a>
          </span>
          <span>
            <a href="/" className="flex hover:text-blue-400">
              Industry
            </a>
          </span>
          <span>
            <a href="/" className="flex hover:text-blue-400">
              Resources
              <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} />
            </a>
          </span>
          
        </div>
        <div className="mt-1">
        <span className="">
            <a href="/" className="flex border rounded-md p-1.5 bg-blue-600">
              <button className="text-white">Contact Us</button>
            </a>
          </span>
        </div>
        <div className="w-1/12 bg-white ml-16 ">
          <span className="flex">
            <img className="flex w-6 h-6 mt-3" src={CountryIcon} />
            <img className="flex w-3 h-3 mt-6" src={Icon_1} />
          </span>
        </div>
      </div>
    </div>
  );
}
