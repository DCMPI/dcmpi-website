import React from 'react';
import {useSelector} from 'react-redux';

import {RootState} from '@store/index';
import {GallerySectionData as data} from '@data/I10n/home';

const GallerySection = () => {
  const {
    localize: {
      language,
    },
  } = useSelector((state: RootState) => state);

  return (
    <div className='bg-color-white w-[100%]'>
      <div className='max-w-[1440px] mx-auto px-[5vw] py-[150px]'>
        <div className='flex justify-center'>
          <h2 className='font-sans font-[700] text-[36px] leading-[44px] text-color-dark-blue lg:mt-[0] text-center sm:text-[64px] sm:leading-[52px] pb-3 border-b-4 border-color-orange'>
            {data?.title[language as keyof typeof data.title]}
          </h2>
        </div>
        <p className='max-w-[900px] mx-auto text-center font-inter font-[600] text-[16px] sm:text-[20px] mt-[12px] sm:mt-6 text-color-text mb-[56px] text-center'>
          {data?.subtitle[language as keyof typeof data.subtitle]}
        </p>
        <div className='container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3'>
          {data?.images.map((img) => (
            <div className='w-full'>
              <img
                src={img}
                alt=''
                className='h-[300px]'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
