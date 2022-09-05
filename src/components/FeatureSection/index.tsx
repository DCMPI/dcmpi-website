import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@store/index';
import {featureSectionData as data} from '@data/I10n/home';

const Card = ({title, icon, key}: {title: string, icon: string, key: string}) => (
  <div key={key} className='w-[300px] bg-gradient-to-b from-[#7BDEFF] to-color-bg py-10 border-[1px] border-color-border rounded-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] cursor-pointer'>
    <div className='flex flex-col items-center gap-4'>
      <img src={icon} alt='feature' className='max-h-[80px] sm:max-h-[100px]' />
      <h3 className='font-inter font-[600] text-color-white text-[20px]'>{title}</h3>
    </div>
  </div>
);

const FeatureSection = () => {
  const {
    localize: {
      language,
    },
  } = useSelector((state: RootState) => state);
  return (
    <div className='bg-[#E5E8ED] w-[100%]'>
      <div className='max-w-[1440px] mx-auto px-[5vw] py-[120px]'>
        <div className='flex justify-center'>
          <h2 className='font-sans font-[700] text-[36px] leading-[44px] text-[#031B4E] lg:mt-[0] text-center sm:text-[64px] sm:leading-[52px]'>
            {data?.title[language as keyof typeof data.title]}
          </h2>
        </div>
        <p className='max-w-[900px] mx-auto text-center font-inter font-[600] text-[16px] sm:text-[20px] mt-[12px] sm:mt-6 text-color-text mb-[56px] text-center'>
          {data?.subtitle[language as keyof typeof data.subtitle]}
        </p>
        <div className='flex justify-center gap-4 flex-wrap'>
          {data?.cards.map(
            (item) => (
              <Card
                title={item.title[language as keyof typeof item.title]}
                icon={item.icon}
                key={item.title.en}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
