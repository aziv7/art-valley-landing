import React, { memo } from 'react';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import PictureCover from './PictureCover';
const Hero = () => {
  let items = [
    {
      img: img1,
      title: 'Museum Walk',
      subtitle: 'Museum',
    },
    {
      img: img2,
      title: 'Artist in studio',
      subtitle: 'France - ix',
    },
    {
      img: img3,
      title: 'Beautiful place',
      subtitle: 'xiv',
    },
    {
      img: img4,
      title: 'Nation of history',
      subtitle: 'Renaissance art',
    },
  ];
  return (
    <div className='w-full h-screen flex'>
      {items.map((item) => (
        <PictureCover key={item?.title} />
      ))}
    </div>
  );
};

export default memo(Hero);
