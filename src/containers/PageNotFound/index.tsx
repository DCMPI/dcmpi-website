import React, {useRef} from 'react';

import Navbar from '@components/Navbar';
import {ScrollButton} from '@components/Buttons';

import HeroImage from '@images/detective.png';

const PageNotFound = () => {
  const featureRef = useRef(null);
  const courseRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main>
      <div className='bg-color-bg w-[100%]'>
        <div className='max-w-[1440px] mx-auto px-[5vw] pb-[70px] lg:relative'>
          <Navbar
            featureRef={featureRef}
            courseRef={courseRef}
            contactRef={contactRef}
          />
          <div className='py-[20px] flex flex-col gap-[50px] pt-[160px] lg:pt-[200px] sm:pb-[50px] lg:pb-[120px] lg:flex-row lg:gap-[20px]'>
            <div className='lg:w-[50%] flex flex-col gap-4'>
              <h2 className='font-sans font-[700] leading-[68px] text-[100px] text-color-white lg:mt-10'>
                404
              </h2>
              <h1 className='font-sans font-[700] leading-[68px] text-[36px] text-color-white sm:text-[50px]'>
                PAGE NOT FOUND
              </h1>
              <div className='flex'>
                <h2 className='font-sans font-[700] leading-[28px] text-[18px] sm:text-[20px] text-[#E3DEF4] pb-3 border-b-4 border-color-orange'>
                  The page you are navigating might does not exists.
                </h2>
              </div>
              <div className='mt-6'>
                <ScrollButton to={contactRef} text='BACK TO HOME' />
              </div>
            </div>
            <div className='flex align-center justify-center lg:max-w-[50%]'>
              <img src={HeroImage} alt='hero' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
