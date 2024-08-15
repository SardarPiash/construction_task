import React, { useState } from "react";
import Logo from "../assets/icon/Logo.svg";
import CountryIcon from "../assets/icon/Country Icon.svg";
import Icon_1 from "../assets/icon/Icon 1.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full h-12 bg-white-400 font-notoSans relative">
      {/* Desktop View */}
      <div className="hidden md:flex pt-0 w-full">
        <div className="w-1/12 bg-white ml-28">
          <img className="w-14 h-14" src={Logo} alt="Logo" />
        </div>
        <div className="flex text-sm w-5/12 bg-white pt-3 ml-36 space-x-6 font-medium">
          <span>
            <a href="/" className="flex hover:text-blue-400 focus:text-red-500">
              About Us
            </a>
          </span>
          <span>
            <a href="/" className="flex hover:text-blue-400">
              Employers
              <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
            </a>
          </span>
          <span>
            <a href="/" className="flex hover:text-blue-400">
              Find Workers
              <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
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
              <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
            </a>
          </span>
        </div>
        <div className="mt-1">
          <span>
            <a href="/" className="flex border rounded-md p-1.5 bg-blue-600">
              <button className="text-white">Contact Us</button>
            </a>
          </span>
        </div>
        <div className="w-1/12 bg-white ml-16">
          <span className="flex">
            <img
              className="flex w-6 h-6 mt-3"
              src={CountryIcon}
              alt="Country"
            />
            <img className="flex w-3 h-3 mt-6" src={Icon_1} alt="Icon" />
          </span>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between p-0 bg-white">
        <img className="w-14 h-14" src={Logo} alt="Logo" />
        <img className="w-6 h-6" src={CountryIcon} alt="Country" />
        <button onClick={toggleMenu} className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4 6h16c.552 0 1-.448 1-1s-.448-1-1-1H4c-.552 0-1 .448-1 1s.448 1 1 1zm16 5H4c-.552 0-1 .448-1 1s.448 1 1 1h16c.552 0 1-.448 1-1s-.448-1-1-1zm0 7H4c-.552 0-1 .448-1 1s.448 1 1 1h16c.552 0 1-.448 1-1s-.448-1-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-white bg-opacity-75 shadow-lg z-50">
          <button
            onClick={closeMenu}
            className="self-end text-gray-600 text-2xl ml-40"
          >
            ×
          </button>
          <div className="flex flex-col p-4 space-y-4">
            <span>
              <a href="/" className="flex hover:text-blue-400 text-lg">
                About Us
              </a>
            </span>
            <span>
              <a href="/" className="flex hover:text-blue-400 text-lg">
                Employers
                <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
              </a>
            </span>
            <span>
              <a href="/" className="flex hover:text-blue-400 text-lg">
                Find Workers
                <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
              </a>
            </span>
            <span>
              <a href="/" className="flex hover:text-blue-400 text-lg">
                Industry
              </a>
            </span>
            <span>
              <a href="/" className="flex hover:text-blue-400 text-lg">
                Resources
                <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
              </a>
            </span>
            <span className="mt-auto">
              <a href="/" className="flex border rounded-md p-2 bg-blue-600">
                <button className="text-white">Contact Us</button>
              </a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
