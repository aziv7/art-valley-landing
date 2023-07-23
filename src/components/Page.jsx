import React, { memo } from 'react';
import Header from './Header';
import Hero from './Hero';

const Page = () => {
  return (
    <main>
      <div className='w-full h-screen overflow-hidden'>
        <Header />
        <Hero />
      </div>
    </main>
  );
};

export default memo(Page);
