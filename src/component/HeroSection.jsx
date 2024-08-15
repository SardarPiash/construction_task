import React from 'react';
import bgImg from '../assets/images/Background image 1.svg';
import logo from '../assets/icon/Icon 2.svg';

export default function HeroSection() {
  return (
    <div className="relative w-full h-[180px] md:h-[220px] lg:h-[250px]">
      <img 
        src={bgImg} 
        alt="Background" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent text-white text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
          Construction
        </h1>
        <span className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg lg:text-xl max-w-[800px]">
          <div className='flex space-x-2 justify-center items-center'>
            <span>Home</span>
            <span className='mt-0.5'>
              <img className='w-3 h-3 sm:w-4 sm:h-4' src={logo} alt="Logo" />
            </span>
            <span>Industry</span>
            <span className='mt-0.5'>
              <img className='w-3 h-3 sm:w-4 sm:h-4' src={logo} alt="Logo" />
            </span>
            <span>Construction</span>
          </div>
        </span>
      </div>
    </div>
  );
}
