import React from 'react';
import Footer from '@components/Footer';
import Form from '@components/Mail';

import mail from '@images/mail.png';
import map from '@images/map.png';
import mobile from '@images/smartphone.png';
import contactIcon from '@images/contact-icon.png';

const ContactSection: React.FC = () => (
  <div className='max-w-[1440px] mx-auto px-[5vw] pt-[120px]'>
    <div>
      <div className='flex gap-[20px] justify-center'>
        <img src={contactIcon} alt='contact' className='max-h-[50px]' />
        <h2 className='font-sans font-[700] text-[36px] leading-[44px] text-[#031B4E] lg:mt-[0] text-center sm:text-[48px] sm:leading-[52px]'>
          Contact
        </h2>
      </div>
      <p className='font-inter font-[500] text-[16px] sm:text-[20px] mt-[12px] sm:mt-[0] text-color-text mb-[56px] lg:mt-[0] text-center sm:leading-[52px]'>
        Submit the form below so we can get back to you.
      </p>
      <div className='sm:w-[600px] lg:w-[100%] mx-auto flex flex-col lg:flex-row lg:items-center bg-gradient-to-l from-[#7BDEFF] to-color-bg rounded-3xl px-[5%] mt-[40px] pt-[50px] lg:pt-[0] gap-[40px] lg:gap-[20px]'>
        <div className='lg:w-[50%] flex flex-col gap-[20px]'>
          <Form />
        </div>
        <div className='lg:w-[50%] flex flex-col gap-[15px]'>
          <img src={mail} alt='mail-box' className='max-h-[420px]' />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-evenly items-center sm:items-start mt-20 gap-6'>
        <div className='flex flex-col gap-[10px]'>
          <div className='flex gap-5 ml-4 sm:ml-0'>
            <img src={map} alt='' className='h-[40px]' />
            <p className='font-inter text-[18px] sm:text-[22px] text-[#031B4E] text-lg font-[600] self-end'>
              ADDRESS
            </p>
          </div>
          <p className='font-inter font-[500] text-[16px] sm:text-[18px] text-color-text self-end'>
            Duhabi-2, Sunsari, Nepal
          </p>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <div className='flex gap-5'>
            <img src={mobile} alt='mobile' className='h-[40px]' />
            <p className='font-inter text-[18px] sm:text-[22px] text-[#031B4E] text-lg font-[600] self-end'>
              PHONE NO
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-inter font-[500] text-[16px] sm:text-[18px] text-color-text self-end'>
              (+977) 9802788587
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ContactSection;
