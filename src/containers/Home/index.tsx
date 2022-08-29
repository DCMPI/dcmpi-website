import React, {useRef} from 'react';

import Navbar from '@components/Navbar';
import {ScrollButton} from '@components/Buttons';

import HeroImage from '@images/hero-2.png';
import ContactSection from '@components/ContactSection';
import CourseSection from '@components/CourseSection';
import FeatureSection from '@components/FeatureSection';
import Modal from '@components/Modal';
import {heroSectionData} from '@data/I10n/home';
import {useSelector} from 'react-redux';
import {RootState} from '@store/index';

const Home = () => {
  const {
    localize: {
      language,
    },
  } = useSelector((state: RootState) => state);
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
            <div className='lg:w-[50%] flex flex-col gap-6 justify-center'>
              <h1 className={`${language === 'en' ? 'leading-[44px] sm:leading-[68px]' : 'leading-[55px] sm:leading-[90px]'} font-sans font-[700] text-[36px] sm:text-[64px] text-color-white`}>
                {heroSectionData.title[language as keyof typeof heroSectionData.title]}
              </h1>
              <div className='flex'>
                <h2 className='font-sans font-[700] leading-[28px] text-[18px] sm:text-[20px] text-[#E3DEF4] pb-3 border-b-4 border-color-orange'>
                  {heroSectionData.subtitle[language as keyof typeof heroSectionData.subtitle]}
                </h2>
              </div>
              <div className='mt-2'>
                <ScrollButton to={contactRef} text={`${heroSectionData.buttonText[language as keyof typeof heroSectionData.buttonText]}`} />
              </div>
            </div>
            <div className='relative flex align-center justify-center lg:w-[50%]'>
              <img src={HeroImage} alt='hero' />
            </div>
          </div>
        </div>
      </div>
      <section ref={featureRef}>
        <FeatureSection />
      </section>
      <section ref={courseRef}>
        <CourseSection />
      </section>
      <section ref={contactRef}>
        <ContactSection />
      </section>
      <Modal />
    </main>
  );
};

export default Home;
