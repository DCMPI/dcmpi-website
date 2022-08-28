/* eslint-disable @typescript-eslint/no-empty-function */
import React, {useCallback} from 'react';
import {NavLink} from 'react-router-dom';

import facebook from '@images/facebook.png';
import twitter from '@images/twitter.png';
import insta from '@images/insta.png';
import FooterLogo from '@images/dcmpi-logo.png';

const Footer = () => {
  const handleLogoClick = useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);
  return (
    <footer>
      <div className='flex flex-col md:flex-row gap-[40px] md:gap-[0] items-center justify-between pb-[28px] mt-20 border-b-[1px] border-color-border'>
        <NavLink
          to=''
          className='flex items-center gap-2'
          onClick={handleLogoClick}
        >
          <img src={FooterLogo} alt='lukim-logo' className='h-[60px]' />
          <p className='font-sans font-[700] text-[26px] text-[#031B4E'>
            DCMPI
          </p>
        </NavLink>
        <div className='flex flex-row gap-[20px]'>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noreferrer'
          >
            <img src={facebook} alt='' className='h-[50px]' />
          </a>
          <a
            href='https://www.twitter.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={twitter} alt='' className='h-[50px] rounded-full' />
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={insta} alt='' className='h-[50px] rounded-full' />
          </a>
        </div>
      </div>
      <p className='mt-[28px] mb-[50px] font-inter font-[400] text-color-lt-grey text-center'>
        © DCMPI 2022. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
