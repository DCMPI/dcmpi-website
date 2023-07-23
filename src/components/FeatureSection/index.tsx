/* eslint-disable react/button-has-type */
import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@store/index';
import {featureSectionData as data} from '@data/I10n/home';
import Modal from './Modal';

const Card = ({
  title, icon, key, images,
}: {title: string, icon: string, key: string, images: string[]}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const handleShowModal = useCallback(
    () => {
      setIsModalVisible(true);
    },
    [],
  );

  const handleHideModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <>
      <div key={key} className='w-[300px] py-10'>
        <div className='flex flex-col items-center gap-4'>
          <img src={icon} alt='feature' className='max-h-[80px] sm:max-h-[100px]' />
          <button onClick={handleShowModal}>
            <h3 className='font-inter font-[600] text-color-dark-blue text-[20px]'>{title}</h3>
          </button>
        </div>
      </div>
      <Modal visible={isModalVisible} hideModal={handleHideModal} images={images} title={title} />
    </>
  );
};

const FeatureSection = () => {
  const {
    localize: {
      language,
    },
  } = useSelector((state: RootState) => state);
  return (
    <div className='bg-color-white w-[100%]'>
      <div className='max-w-[1440px] mx-auto px-[5vw] pt-[150px] pb-[100px]'>
        <div className='flex justify-center'>
          <h2 className='font-sans font-[700] text-[36px] leading-[44px] text-color-dark-blue lg:mt-[0] text-center sm:text-[64px] sm:leading-[52px] pb-3 border-b-4 border-color-orange'>
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
                images={item.images}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
