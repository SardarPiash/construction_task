import React from "react";
import hireandFire from "../assets/icon/Logo.svg";
import arrowIcon from "../assets/icon/Icon 3_white.svg";
import mailIcon from "../assets/icon/Icon 10.svg";
import locationIcon from "../assets/icon/Icon 8.svg";
import phoneIcon from "../assets/icon/Icon 9.svg";
import facebook from "../assets/icon/facebook.svg";
import instagram from "../assets/icon/instagram.svg";
import twitter from "../assets/icon/twitter.svg";
import telegram from "../assets/icon/telegram.svg";
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <div
      className="bg-blue-800 w-full mt-14 flex items-center justify-center font-notoSans"
      style={{ height: "560px" }}
    >
      <div className=" w-10/12 mt-8" style={{ height: "430px" }}>
        <div className="flex">
          <div className=" " style={{ width: "380px", height: "380px" }}>
            <div>
              <img src={hireandFire} />
            </div>
            <div className=" text-white text-sm mt-2 mb-5">
              Hire & Fire is a cutting-edge job website designed to connect
              employers with top-tier talent across various industries.
              Utilizing advanced matching algorithms, it streamlines the hiring
              process, ensuring quick and effective placements. Employers
              benefit from efficient tools for posting jobs, screening
              candidates, and managing applications. Ideal for businesses aiming
              for growth, Hire & Fire is your go-to resource for all recruitment
              needs. Please note that it operates on an employer basis and does
              not provide jobs directly to workers
            </div>
            <div>
              <button className=" bg-red-600 w-24 h-10 text-white text-sm rounded">Contact Us</button>
            </div>
          </div>
          <div
            className=" ml-1"
            style={{ width: "260px", height: "380px" }}
          >
            <div className="text-xl text-white font-semibold ml-3">
                <span>Quick Links</span>
                <hr className="w-28 border-1 border-white"/>
            </div>
            <div className=" mt-6 text-sm text-white ml-3">
                <div className=" flex">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Home</Link>
                </div>
                <div className=" flex mt-6">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>About Us</Link>
                </div>
                <div className=" flex mt-6">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Services</Link>
                </div>
                <div className=" flex mt-6">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Industries We Serve</Link>
                </div>
                <div className=" flex mt-6">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Blog & News</Link>
                </div>
                <div className=" flex mt-6">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>FAQ</Link>
                </div>
                <div className=" flex mt-6">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Contact Us</Link>
                </div>
            </div>
          </div>
          <div
            className="ml-1"
            style={{ width: "310px", height: "380px" }}
          >
            <div className="text-xl text-white font-semibold ml-3">
                <span>Our Services</span>
                <hr className="w-32 border-1 border-white"/>
            </div>
            <div className=" mt-6 text-sm text-white ml-3">
                <div className=" flex">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Permanent Requitment</Link>
                </div>
                <div className=" flex mt-6">
                    <span className="mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Contract Staffing</Link>
                </div>
                <div className=" flex mt-6">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Housing & Accomodation Support</Link>
                </div>
                <div className=" flex mt-6">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Compliance and Legal Support</Link>
                </div>
                <div className=" flex mt-6">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Workforce Planning</Link>
                </div>
                <div className=" flex mt-6">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Background Checks</Link>
                </div>
                <div className=" flex mt-6">
                    <span className=" mt-1"><img src={arrowIcon} /></span>
                    <Link className="ml-2" to='#'>Onboarding Support</Link>
                </div>
            </div>
          </div>
          <div
            className=" ml-1"
            style={{ width: "430px", height: "380px" }}
          >
            <div className=" text-white ml-7">
                <div className=" text-xl font-semibold tracking-wide">
                    Get In touch
                </div>
                <div className=" mt-6 text-base">
                Subscribe Our Newsletter to <br />Get Latest Update & News
                </div>
                <div className="relative inline-block mt-5">
                    <input 
                        type="text" 
                        className="block w-64 h-10 border border-gray-300 rounded pl-3 pr-3 text-black"
                        placeholder="Your Email Here"
                    />
                    <button 
                        className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 bg-red-600 text-white px-4 py-0 rounded"
                        style={{ top: "50%",height:"42px" }}
                    >
                        Subscribe
                    </button>
                </div>

                <div className="flex mt-8 text-sm">
                    <span className="bg-red-500 w-7 h-7 rounded-full" ><img className="p-2" src={phoneIcon} /></span>
                    <span className=" ml-2">+40 123 456 789</span>
                </div>

                <div className="flex mt-8 text-sm">
                    <span className="bg-red-500 w-7 h-7 rounded-full" ><img className="p-2" src={mailIcon} /></span>
                    <span className=" ml-2">contact@hireandfire.agency</span>
                </div>

                <div className="flex mt-8">
                    <span className="bg-red-500 w-7 h-7 rounded-full" ><img className="p-2" src={locationIcon} /></span>
                    <span className="ml-2 text-sm">Strada ING. Zablovschi, Nr. 10, Biroul 1, Sectorul 1, <br />
                    Bucuresti, Romania.</span>
                </div>

            </div>
          </div>
        </div>
        <div className="mt-4 border-t-2 mb-6">
        </div>
        <div className="flex text-white">
          <div className="w-80 h-14 text-sm tracking-tight">© Copyright 2024 “Hire & Fire” All Rights Reserved</div>
          <div className="w-96 h-14 ml-40 text-sm flex space-x-10">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Cookie Policy</span>
          </div>
          <div className="w-80 h-14 ml-32 flex">
            <span className=" text-sm mt-0.5">Follow us</span>
            <div className="ml-10 flex space-x-4 ">
                <Link to="/" className="bg-white w-7 h-7 rounded-full"><img className="p-1.5" src={facebook} /></Link>
                <Link to="/" className="bg-white w-7 h-7 rounded-full"><img className="p-1.5" src={instagram} /></Link>
                <Link to="/" className="bg-white w-7 h-7 rounded-full"><img className="p-1.5" src={twitter} /></Link>
                <Link to="/" className="bg-white w-7 h-7 rounded-full"><img className="p-1.5" src={telegram} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
