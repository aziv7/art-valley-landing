import React, { memo } from 'react';

const PictureCover = ({ title, subtitle, img }) => {
  return (
    <div className='relative cursor-pointer w-[25vw] h-screen overflow-hidden'>
      <div className='item-wrapper'>
        <img
          className='absolute w-full h-full object-cover scale-150 nimg'
          src={img}
          alt='Picture of the author'
        />
        <div
          className='absolute w-full h-full top-0 left-0 bg-[#dfdbd5]
    img-overlay'></div>
        <div
          className='absolute w-full h-full flex flex-col justify-between
    self-center uppercase leading-loose  py-32 px-8 text-black z-10 hover:text-white'>
          <div className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[20px]'>
            {title}
            <span className='lg:text-[20px] md:text-[15px] text-[12px] uppercase block place'>
              {subtitle}
            </span>
          </div>
          <div
            className='text-white border-2 w-fit p-1.5 text-sm 
      hover:bg-white cursor-pointer transition duration-500 
      hover:text-black md:block hidden '>
            EXPLORE
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PictureCover);
