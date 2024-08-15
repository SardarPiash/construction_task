import React, { useState } from "react";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer({scrollFunction}) {
  const [email,setEmail] = useState("");
//toast function
const notify = (e) =>{
  e.preventDefault();
  if(email === ""){
    toast.error('Give your email to subscribe!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      //transition: "Bounce",
      });
  }else{
    toast.success('Thanks for subscribing us!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      //transition: "Bounce",
      });
  }
  }

  return (
    <div className="bg-blue-800 w-full mt-14 flex flex-col items-center justify-center font-notoSans py-10">
      <div className="w-full md:w-11/12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start md:w-96">
            <img src={hireandFire} alt="Hire & Fire Logo" className="mb-4" />
            <p className="text-white text-sm mb-5">
              Hire & Fire is a cutting-edge job website designed to connect
              employers with top-tier talent across various industries.
              Utilizing advanced matching algorithms, it streamlines the hiring
              process, ensuring quick and effective placements. Employers
              benefit from efficient tools for posting jobs, screening
              candidates, and managing applications. Ideal for businesses aiming
              for growth, Hire & Fire is your go-to resource for all recruitment
              needs. Please note that it operates on an employer basis and does
              not provide jobs directly to workers.
            </p>
            <button onClick={scrollFunction} className="bg-red-600 w-2/5 md:w-28 sm:w-40 h-10 text-white text-sm rounded mb-4">
              Contact Us
            </button>
          </div>

          <div className="flex flex-col md:w-72 md:ml-16">
            <div className="text-xl text-white font-semibold mb-3">Quick Links</div>
            <hr className="w-24 border-1 border-white mb-6" />
            <div className="text-sm text-white">
              {["Home", "About Us", "Services", "Industries We Serve", "Blog & News", "FAQ", "Contact Us"].map((item, index) => (
                <div className={`flex items-center mt-4 ${index === 0 ? 'md:mt-2' : 'md:mt-5'}`} key={index}>
                  <img src={arrowIcon} alt="Arrow Icon" className="w-4 h-4"  />
                  <Link className="ml-2 hover:underline md:text-base" to="#">{item}</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:w-72 md:ml-2">
            <div className="text-xl text-white font-semibold mb-3">Our Services</div>
            <hr className="w-32 border-1 border-white mb-6" />
            <div className="text-sm text-white">
              {["Permanent Recruitment", "Contract Staffing", "Housing & Accommodation Support", "Compliance and Legal Support", "Workforce Planning", "Background Checks", "Onboarding Support"].map((item, index) => (
                <div className={`flex items-center mt-4 ${index === 0 ? 'md:mt-2' : 'md:mt-5'}`} key={index}>
                  <img src={arrowIcon} alt="Arrow Icon" className="w-4 h-4" />
                  <Link className="ml-2 hover:underline md:text-base md:tracking-tight" to="#">{item}</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:mr-4">
            <div className="text-xl text-white font-semibold mb-3">Get In Touch</div>
            <p className="text-base text-white mb-5 md:mt-4">Subscribe to our newsletter to get the latest updates & news.</p>
            <div className="relative mb-5">
              <input 
                type="text" 
                onChange={(e)=>{setEmail(e.target.value)}}
                className="block w-4/5 md:w-full h-10 border border-gray-300 rounded pl-3 pr-16 text-black"
                placeholder="Your Email Here"
              />
              <button onClick={notify}
                        className="absolute top-0 right-10 md:right-12 transform -translate-y-1/2 translate-x-1/2 bg-red-600 text-white px-4 py-0 rounded"
                        style={{ top: "50%",height:"42px" }}
                    >
                        Subscribe
                    </button>
              <ToastContainer />
            </div>

            <div className="flex items-center text-sm text-white mb-4">
              <span className="bg-red-500 w-7 h-7 rounded-full flex items-center justify-center">
                <img className="p-2" src={phoneIcon} alt="Phone Icon" />
              </span>
              <span className="ml-2">+40 123 456 789</span>
            </div>

            <div className="flex items-center text-sm text-white mb-4">
              <span className="bg-red-500 w-7 h-7 rounded-full flex items-center justify-center">
                <img className="p-2" src={mailIcon} alt="Mail Icon" />
              </span>
              <span className="ml-2">contact@hireandfire.agency</span>
            </div>

            <div className="flex items-center text-sm text-white ">
              <span className="bg-red-500 w-7 h-7 md:w-7 md:h-7 rounded-full flex items-center justify-center">
                <img className="p-2 md:p-1.5" src={locationIcon} alt="Location Icon" />
              </span>
              <span className="ml-2 md:ml-2">Strada ING. Zablovschi, Nr. 10, Biroul 1,<br /> Sectorul 1, Bucuresti, Romania.</span>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white mt-8 pt-6 flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="text-white text-sm text-center lg:text-left">
            © Copyright 2024 “Hire & Fire” All Rights Reserved
          </div>
          <div className="text-white text-sm flex flex-wrap justify-center lg:justify-between mt-4 lg:mt-0">
            <Link className="mx-4 hover:underline" to="#">Privacy Policy</Link>
            <Link className="mx-4 hover:underline" to="#">Terms & Conditions</Link>
            <Link className="mx-4 hover:underline" to="#">Cookie Policy</Link>
          </div>
          <div className="flex items-center mt-4 lg:mt-0">
            <span className="text-sm mr-4 text-white">Follow us</span>
            <div className="flex space-x-4">
              {[facebook, instagram, twitter, telegram].map((icon, index) => (
                <Link to="/" key={index} className="bg-white w-7 h-7 rounded-full flex items-center justify-center">
                  <img className="p-1.5" src={icon} alt={`Social Icon ${index}`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
