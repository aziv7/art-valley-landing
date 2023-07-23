import React, { memo } from 'react';
import Header from './Header';

const Page = () => {
  return (
    <main>
      <div className='w-full h-screen overflow-hidden'>
        <Header />
      </div>
    </main>
  );
};

export default memo(Page);
