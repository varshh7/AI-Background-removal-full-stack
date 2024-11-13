import React from 'react';
import { assets } from '../assets/assets';

const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      {/* Image Container */}
      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
        {/* Grid Container for Images */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          
          {/* Left Side (Original Image) */}
          <div className='flex flex-col items-center justify-center'>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            <div className='w-full h-[300px] rounded-md border flex items-center justify-center overflow-hidden'>
              <img
                className='max-w-full h-full object-cover'
                src={assets.image_w_bg}
                alt='Original image with background'
              />
            </div>
          </div>

          {/* Right Side (Background Removed Image) */}
          <div className='flex flex-col items-center justify-center'>
            <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
            <div className='w-full h-[300px] rounded-md border border-gray-300 relative bg-[url("/bg_layer.png")] bg-cover bg-center overflow-hidden flex items-center justify-center'>
              <img
                className='max-w-full h-full object-cover'
                src={assets.image_wo_bg}
                alt='Image with background removed'
              />
              {/* Loading Spinner (Uncomment if needed) */}
              {/*<div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'></div>
              </div>*/ }
            </div>
          </div>
        </div>
        {/*----Buttons-----*/}
        <div className='flex justify-cener sm:justify-end items-center flex-wrap gap-4 mt-6'>
            <button className='px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700'>Try another image</button>
            <a className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full  hover:scale-105 transition-all duration-700' href="">Download image</a>
        </div>

      </div>
    </div>
  );
};

export default Result;

