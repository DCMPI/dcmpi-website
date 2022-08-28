import React from 'react';
import lab from '@images/lab.png';
import library from '@images/library.png';
import lecture from '@images/lecture.png';
import scholarship from '@images/scholarship.png';
import job from '@images/job.png';
import infra from '@images/infra.png';
import classes from '@images/classes.png';

const Card = ({title, icon}: {title: string, icon: string}) => (
  <div className='w-[300px] bg-gradient-to-l from-[#7BDEFF] to-color-bg py-10 border-[1px] border-color-border rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] cursor-pointer'>
    <div className='flex flex-col items-center gap-4'>
      <img src={icon} alt='feature' className='max-h-[100px]' />
      <h3 className='font-inter font-[500] text-color-white text-[20px]'>{title}</h3>
    </div>
  </div>
);

const FeatureSection = () => (
  <div className='bg-[#E5E8ED] w-[100%]'>
    <div className='max-w-[1440px] mx-auto px-[5vw] py-[120px]'>
      <div className='flex justify-center'>
        <h2 className='font-sans font-[700] text-[36px] leading-[44px] text-[#031B4E] lg:mt-[0] text-center sm:text-[48px] sm:leading-[52px]'>
          Features
        </h2>
      </div>
      <p className='font-inter text-[16px] sm:text-[20px] mt-[12px] sm:mt-[0] text-color-text mb-[56px] lg:mt-[0] text-center sm:leading-[52px]'>
        Below are some of the salient features of DCMPI.
      </p>
      <div className='flex justify-center gap-8 flex-wrap'>
        <Card title='Experienced Professors' icon={lecture} />
        <Card title='Modern Labrotory' icon={lab} />
        <Card title='Well Stocked Library' icon={library} />
        <Card title='Practical Classes' icon={classes} />
        <Card title='Scholorship Available' icon={scholarship} />
        <Card title='Job Placement' icon={job} />
        <Card title='Dcmpi Infrastructures' icon={infra} />
      </div>
    </div>
  </div>
);

export default FeatureSection;
