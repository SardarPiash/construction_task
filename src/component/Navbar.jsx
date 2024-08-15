import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/icon/Logo.svg";
import CountryIcon from "../assets/icon/Country Icon.svg";
import Icon_1 from "../assets/icon/Icon 1.svg";

export default function Navbar({scroll}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full h-12 bg-white-400 font-notoSans relative">
      {/* Desktop View */}
      <div className="hidden md:flex pt-0 w-full">
        <div className="w-1/12 bg-white ml-28">
          <img className="w-14 h-14" src={Logo} alt="Logo" />
        </div>
        <div className="flex text-sm w-5/12 bg-white pt-3 ml-36 space-x-6 font-medium relative">
          <span className="relative">
            <Link
              to="/About"
              className={`flex hover:text-blue-400 focus:text-red-500 ${
                isActive("/About") ? "text-red-500" : ""
              }`}
            >
              About Us
            </Link>
          </span>
          <span className="relative">
            <button
              className="flex hover:text-blue-400 focus:text-red-500"
              onClick={() => toggleDropdown("Employers")}
            >
              Employers
              <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
            </button>
            {activeDropdown === "Employers" && (
              <div className="absolute left-0 mt-2 w-40 bg-white border shadow-lg z-10">
                <Link
                  to="/Employers"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  HR Services
                </Link>
                <Link
                  to="/Employers"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Consulting
                </Link>
                <Link
                  to="/Employers"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Training
                </Link>
              </div>
            )}
          </span>
          <span className="relative">
            <button
              className="flex hover:text-blue-400"
              onClick={() => toggleDropdown("FindWorkers")}
            >
              Find Workers
              <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
            </button>
            {activeDropdown === "FindWorkers" && (
              <div className="absolute left-0 mt-2 w-40 bg-white border shadow-lg z-10">
                <Link
                  to="/FindWorkers"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Full Time
                </Link>
                <Link
                  to="/FindWorkers"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Part Time
                </Link>
                <Link
                  to="/FindWorkers"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contract
                </Link>
              </div>
            )}
          </span>
          <span className="relative">
            <Link
              to="/"
              className={`flex hover:text-blue-400 ${
                isActive("/") ? "text-red-500" : ""
              }`}
            >
              Industry
            </Link>
          </span>
          <span className="relative">
            <button
              className="flex hover:text-blue-400"
              onClick={() => toggleDropdown("Resources")}
            >
              Resources
              <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
            </button>
            {activeDropdown === "Resources" && (
              <div className="absolute left-0 mt-2 w-40 bg-white border shadow-lg z-10">
                <Link
                  to="/Resources"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Blog
                </Link>
                <Link
                  to="/Resources"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Guides
                </Link>
                <Link
                  to="/Resources"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  FAQs
                </Link>
              </div>
            )}
          </span>
        </div>
        <div className="mt-1">
          <span>
            <Link to="/" className="flex border rounded-md p-1.5 bg-blue-600">
              <button onClick={scroll} className="text-white">Contact Us</button>
            </Link>
          </span>
        </div>
        <div className="w-1/12 bg-white ml-16">
          <span className="flex">
            <button onClick={() => toggleDropdown("Country")}>
            <img
              className="flex w-6 h-6 mt-3"
              src={CountryIcon}
              alt="Country"
            />
            </button>
            <img className="flex w-3 h-3 mt-5" src={Icon_1} alt="Icon" />
            {activeDropdown === "Country" && (
              <div className="absolute right-68 mt-10 w-40 bg-white border shadow-lg z-10">
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  English
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Bangla
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Hindi
                </Link>
                </div>
                )}
          </span>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between p-0 bg-white">
        <img className="w-14 h-14" src={Logo} alt="Logo" />
        <button onClick={() => toggleDropdown("Country")}>
        <img className="w-6 h-6" src={CountryIcon} alt="Country" />
        </button>
        {activeDropdown === "Country" && (
              <div className="absolute right-32 mt-36 w-40 bg-white border shadow-lg z-10">
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  English
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Bangla
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Hindi
                </Link>
                </div>
                )}
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
        <div className="md:hidden fixed top-0 right-0 w-3/5 h-full bg-gray-200 shadow-lg z-50">
          <button
            onClick={closeMenu}
            className="self-end text-gray-600 text-2xl ml-5"
          >
            ×
          </button>
          <div className="flex flex-col p-4 space-y-4">
            <span>
              <Link
                to="/About"
                className={`flex hover:text-blue-400 text-lg ${
                  isActive("/About") ? "text-red-500" : ""
                }`}
              >
                About Us
              </Link>
            </span>
            <span className="relative">
              <button
                className="flex hover:text-blue-400 text-lg"
                onClick={() => toggleDropdown("Employers")}
              >
                Employers
                <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
              </button>
              {activeDropdown === "Employers" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/Employers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    HR Services
                  </Link>
                  <Link
                    to="/Employers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Consulting
                  </Link>
                  <Link
                    to="/Employers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Training
                  </Link>
                </div>
              )}
            </span>
            <span className="relative">
              <button
                className="flex hover:text-blue-400 text-lg"
                onClick={() => toggleDropdown("FindWorkers")}
              >
                Find Workers
                <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
              </button>
              {activeDropdown === "FindWorkers" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/FindWorkers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Full Time
                  </Link>
                  <Link
                    to="/FindWorkers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Part Time
                  </Link>
                  <Link
                    to="/FindWorkers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Contract
                  </Link>
                </div>
              )}
            </span>
            <span>
              <Link
                to="/"
                className={`flex hover:text-blue-400 text-lg ${
                  isActive("/") ? "text-red-500" : ""
                }`}
              >
                Industry
              </Link>
            </span>
            <span className="relative">
              <button
                className="flex hover:text-blue-400 text-lg"
                onClick={() => toggleDropdown("Resources")}
              >
                Resources
                <img className="w-4 h-4 mt-1 ml-1" src={Icon_1} alt="Icon" />
              </button>
              {activeDropdown === "Resources" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/Resources"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/Resources"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Guides
                  </Link>
                  <Link
                    to="/Resources"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </span>
            <span className="mt-auto">
              <Link to="/" className="flex border rounded-md p-2 bg-blue-600">
                <button onClick={scroll} className="text-white">Contact Us</button>
              </Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
