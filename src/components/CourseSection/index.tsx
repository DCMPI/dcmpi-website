import React from 'react';
import {LinkBtn} from '@components/Buttons';

import plant from '@images/plant.png';
import time from '@images/time.png';
import fee from '@images/fee.png';
import engineering from '@images/engineering.png';

const CourseSection = () => (
  <div className='bg-cover bg-[url("assets/images/bg.png")] bg-color-bg w-[100%]'>
    <div className='max-w-[1440px] mx-auto px-[5vw] py-[120px]'>
      <div className='flex justify-center'>
        <h2 className='font-sans font-[700] text-[36px] leading-[44px] text-color-white lg:mt-[0] text-center sm:text-[48px] sm:leading-[52px]'>
          Course
        </h2>
      </div>
      <p className='font-inter font-[500] text-[16px] sm:text-[20px] mt-[12px] sm:mt-[0] text-color-white mb-[56px] lg:mt-[0] text-center sm:leading-[52px]'>
        Below are the courses we offer at DCMPI.
      </p>
      <div className='flex justify-center gap-8 flex-wrap'>
        <div className='bg-[#031B4E] p-4 pt-10 rounded-lg max-w-[320px] shadow-[0_5px_10px_rgba(0,0,0,0.5)]'>
          <div className='flex items-center gap-4'>
            <img src={engineering} alt='engineering' className='max-h-[50px]' />
            <h3 className='font-inter text-color-white text-[20px]'>Diploma in Civil Engineering</h3>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <img src={time} alt='time' className='max-h-[50px]' />
            <h3 className='font-inter text-color-white text-[20px]'>Duration - 3 Years</h3>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <img src={fee} alt='fee' className='max-h-[50px]' />
            <h3 className='font-inter text-color-white text-[20px]'>Fee - Rs 2,00,000</h3>
          </div>
          <div className='flex justify-center my-10'>
            <LinkBtn to='http://ctevt.org.np/uploads/docs/2021-10-31_diploma_in_civil_engineering_2021.pdf' text='VIEW SYLLABUS' />
          </div>
        </div>
        <div className='bg-[#031B4E] p-4 pt-10 rounded-lg max-w-[320px] shadow-[0_5px_10px_rgba(0,0,0,0.5)]'>
          <div className='flex items-center gap-4'>
            <img src={plant} alt='plant' className='max-h-[50px]' />
            <h3 className='font-inter text-color-white text-[20px]'>Diploma in Agriculture (Plant Science)</h3>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <img src={time} alt='time' className='max-h-[50px]' />
            <h3 className='font-inter text-color-white text-[20px]'>Duration - 3 Years</h3>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <img src={fee} alt='fee' className='max-h-[50px]' />
            <h3 className='font-inter text-color-white text-[20px]'>Fee - Rs 1,90,000</h3>
          </div>
          <div className='flex justify-center my-10'>
            <LinkBtn to='http://ctevt.org.np/uploads/docs/2019-02-20_Isc%20Ag%20Plant%20Science%20Revised_19%20May,2014.pdf' text='VIEW SYLLABUS' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CourseSection;
