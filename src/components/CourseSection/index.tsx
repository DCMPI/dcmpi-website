import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';

import {LinkBtn} from '@components/Buttons';
import {RootState} from '@store/index';
import {courseSectionData as data} from '@data/I10n/home';

type InfoType = {
  icon: string,
  title: {en: string, np: string},
}

interface CardProps {
  info: InfoType[],
  buttonText: {en: string, np: string},
  buttonLink: string,
  imgSrc: string,
}

const CourseSection = () => {
  const {
    localize: {
      language,
    },
  } = useSelector((state: RootState) => state);

  const Card: React.FC<CardProps> = useCallback(
    ({
      info, buttonText, buttonLink, imgSrc,
    }) => (
      <div className='bg-[#031B4E]/[0.9] px-8 pt-10 rounded-lg max-w-[500px] lg:w-[500px] shadow-[0_5px_10px_rgba(0,0,0,0.5)]'>
        <img className='w-full lg:h-[280px] mb-10' src={imgSrc} alt='' />
        {info.map((item) => (
          <div className='flex items-center gap-4 mt-6'>
            <img src={item?.icon} alt='' className='max-h-[50px]' />
            <h3 className='font-inter font-[600] text-color-white text-[16px]  sm:text-[20px]'>{item?.title[language as keyof typeof item.title]}</h3>
          </div>
        ))}
        <div className='flex justify-center my-10'>
          <LinkBtn
            to={buttonLink}
            text={buttonText[language as keyof typeof buttonText]}
          />
        </div>
      </div>
    ),
    [language],
  );

  return (
    <div className='bg-cover bg-[url("assets/images/bg-2.jpg")] bg-color-bg w-[100%]'>
      <div className='max-w-[1440px] mx-auto px-[5vw] py-[120px]'>
        <div className='flex justify-center'>
          <h2 className='font-sans font-[700] text-[36px] leading-[44px] text-color-white lg:mt-[0] text-center sm:text-[64px] sm:leading-[52px]'>
            {data?.title[language as keyof typeof data.title]}
          </h2>
        </div>
        <p className='max-w-[900px] mx-auto text-center font-inter font-[600] text-[16px] sm:text-[20px] mt-[12px] sm:mt-6 text-color-white mb-[56px] text-center'>
          {data?.subtitle[language as keyof typeof data.subtitle]}
        </p>
        <div className='flex justify-center gap-10 flex-wrap'>
          {data?.cards.map((item) => (
            <Card
              info={item?.info}
              buttonText={item?.buttonText}
              buttonLink={item?.buttonLink}
              imgSrc={item?.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
