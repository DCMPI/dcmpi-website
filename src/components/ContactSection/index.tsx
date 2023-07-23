import React from 'react';
import {useSelector} from 'react-redux';

import Footer from '@components/Footer';
import {ContactForm} from '@components/Mail';
import {RootState} from '@store/index';

import mail from '@images/mail.webp';
import map from '@images/map.webp';
import mobile from '@images/smartphone.webp';
import gmail from '@images/gmail.webp';
import {contactSectionData as data} from '@data/I10n/home';

const ContactSection: React.FC = () => {
  const {
    localize: {
      language,
    },
  } = useSelector((state: RootState) => state);
  return (
    <div className='max-w-[1440px] mx-auto px-[5vw] pt-[150px]'>
      <div>
        <div className='flex justify-center'>
          <h2 className='font-sans font-[700] text-[36px] leading-[44px] text-color-dark-blue lg:mt-[0] text-center sm:text-[64px] sm:leading-[52px] pb-3 border-b-4 border-color-orange'>
            {data?.title[language as keyof typeof data.title]}
          </h2>
        </div>
        <p className='max-w-[900px] mx-auto text-center font-inter font-[600] text-[16px] sm:text-[20px] mt-[12px] sm:mt-6 text-color-text mb-[56px] text-center'>
          {data?.subtitle[language as keyof typeof data.subtitle]}
        </p>
        <div className='flex flex-col lg:flex-row justify-evenly items-center lg:items-start mt-20 gap-6'>
          <div className='flex flex-col gap-[10px] p-8 rounded-lg bg-[#67E8F9] shadow-[0_0_20px_rgba(0,0,0,0.1)] w-72'>
            <div className='flex gap-5 ml-4 sm:ml-0'>
              <img src={map} alt='' className='h-[40px]' />
              <p className='font-inter text-[18px] sm:text-[22px] text-color-dark-blue text-lg font-[600] self-end'>
                {data?.addressTitle[language as keyof typeof data.addressTitle]}
              </p>
            </div>
            {data?.address.map((address) => (
              <p className='font-inter font-[500] text-[16px] sm:text-[18px] text-color-text self-center'>
                {address[language as keyof typeof address]}
              </p>
            ))}
          </div>
          <div className='flex flex-col gap-[10px] p-8 rounded-lg bg-[#5EEAD4] shadow-[0_0_20px_rgba(0,0,0,0.1)] w-72'>
            <div className='flex gap-5'>
              <img src={mobile} alt='mobile' className='h-[40px]' />
              <p className='font-inter text-[18px] sm:text-[22px] text-color-dark-blue text-lg font-[600] self-end'>
                {data?.phoneTitle[language as keyof typeof data.phoneTitle]}
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              {data?.phoneNo.map((num) => (
                <p className='font-inter font-[500] text-[16px] sm:text-[18px] text-color-text self-center'>
                  {num[language as keyof typeof num]}
                </p>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-[10px] p-8 rounded-lg bg-[#D8B4FE] shadow-[0_0_20px_rgba(0,0,0,0.1)] w-72'>
            <div className='flex gap-5 ml-4 sm:ml-0'>
              <img src={gmail} alt='' className='h-[40px]' />
              <p className='font-inter text-[18px] sm:text-[22px] text-color-dark-blue text-lg font-[600] self-end'>
                {data?.emailTitle[language as keyof typeof data.emailTitle]}
              </p>
            </div>
            {data?.dcmpiEmail.map((email) => (
              <p className='font-inter font-[500] text-[16px] sm:text-[18px] text-color-text self-center'>
                {email[language as keyof typeof email]}
              </p>
            ))}
          </div>
        </div>
        <div className='sm:w-[600px] lg:w-[100%] mx-auto flex flex-col lg:flex-row lg:items-center bg-gradient-to-l from-[#7BDEFF] to-color-bg rounded-3xl px-[5%] mt-20 pt-[50px] lg:pt-[0] gap-[40px] lg:gap-[20px]'>
          <div className='lg:w-[50%] flex flex-col gap-[20px]'>
            <ContactForm />
          </div>
          <div className='lg:w-[50%] flex flex-col gap-[15px]'>
            <img src={mail} alt='mail-box' className='max-h-[420px]' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSection;
