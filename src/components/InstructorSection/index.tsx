import React from 'react';
import {useSelector} from 'react-redux';

import {RootState} from '@store/index';
import instructor from '@images/instructor.webp';
import {InstructorSectionData as data} from '@data/I10n/home';

interface CardProps {
  title: string;
  status: string;
  imgSrc: string;
  key: string;
}

const InstructorCard: React.FC<CardProps> = ({
  title, status, imgSrc, key,
}) => (
  <div key={key} className='w-[300px] py-4 sm:py-10 cursor-pointer transition-all duration-500 hover:scale-110'>
    <div className='flex flex-col items-center gap-4'>
      <img src={imgSrc || instructor} alt='feature' className='w-full h-[350px] border-2 border-color-dark-blue bg-color-bg rounded-md' />
      <h3 className='font-inter font-[600] text-color-dark-blue text-[20px] border-b-4 border-color-orange'>{title}</h3>
      <p className='font-inter font-[600] text-color-dark-blue text-[20px]'>{status}</p>
    </div>
  </div>
);

const InstructorSection = () => {
  const {
    localize: {
      language,
    },
  } = useSelector((state: RootState) => state);

  return (
    <div className='bg-cover bg-[url("assets/images/bg.svg")] w-[100%]'>
      <div className='max-w-[1440px] mx-auto px-[5vw] py-[150px]'>
        <div className='flex justify-center'>
          <h2 className='font-sans font-[700] text-[36px] leading-[44px] text-color-dark-blue lg:mt-[0] text-center sm:text-[64px] sm:leading-[52px] pb-3 border-b-4 border-color-orange'>
            {data?.title[language as keyof typeof data.title]}
          </h2>
        </div>
        <p className='max-w-[900px] mx-auto text-center font-inter font-[600] text-[16px] sm:text-[20px] mt-[12px] sm:mt-6 text-color-text mb-[56px] text-center'>
          {data?.subtitle[language as keyof typeof data.subtitle]}
        </p>
        <div className='flex justify-center gap-8 flex-wrap'>
          {data?.teachers.map(
            (item) => (
              <InstructorCard
                title={item.name[language as keyof typeof item.name]}
                key={item.name.en}
                imgSrc={item?.img}
                status={item.status[language as keyof typeof item.status]}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
