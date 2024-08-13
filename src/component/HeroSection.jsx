import React from 'react';
import bgImg from '../assets/images/Background image 1.svg';
import logo from '../assets/icon/Icon 2.svg';

export default function HeroSection() {
  return (
    <div className="relative w-full h-[180px] ">
      <img 
        src={bgImg} 
        alt="Background" 
        className="w-full "
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent text-white text-center mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-medium">
          Construction
        </h1>
        <span className="mt-5 text-lg md:text-xl lg:text-base max-w-[800px]">
          <div className='flex space-x-2'>
          <span>Home</span>
          <span className='mt-0.5'>
            <img className='' src={logo} />
          </span>
          <span>Industry</span>
          <span className='mt-0.5'>
          <img src={logo} />
          </span>
          <span>Construction</span>
          </div>
          
        </span>
      </div>
    </div>
  );
}
