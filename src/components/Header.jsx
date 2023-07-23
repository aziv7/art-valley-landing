import React, { memo } from 'react';

const Header = () => {
  return (
    <div
      className='fixed text-xl w-full p-4 flex justify-between
items-center uppercase text-white  font-normal
mix-blend-difference z-10'>
      <div>Home</div>
      <div>Art gallery</div>
      <div>Menu</div>
    </div>
  );
};

export default memo(Header);
