/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useCallback} from 'react';
import {NavLink} from 'react-router-dom';

import NavLogo from '@images/dcmpi-logo.png';
import Dropdown from '@components/Dropdown';

import {GrLanguage} from 'react-icons/gr';
import {dispatchToggleEnglish, dispatchToggleNepali} from '@services/dispatch';

interface NavbarProps {
  featureRef: React.RefObject<HTMLElement>;
  courseRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

const LinkItem = ({to, title}: {to: any; title: string}) => {
  const handleClick = useCallback(() => {
    to.current.scrollIntoView({behavior: 'smooth'});
  }, [to]);

  return (
    <NavLink to='' className='' onClick={handleClick}>
      <p className='font-inter font-[500] text-[17px] sm:text-[18px] text-color-white hover:text-[#E3DEF4]'>{title}</p>
    </NavLink>
  );
};

const Navbar: React.FC<NavbarProps> = ({featureRef, courseRef, contactRef}) => {
  const handleLogoClick = useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  const renderLabel = useCallback(
    () => (
      <div className='bg-[#7BDEFF] p-2 rounded-md cursor-pointer'>
        <GrLanguage size={25} />
      </div>
    )
    , [],
  );

  return (
    <nav className='fixed top-0 left-0 right-0 bg-color-bg/[0.8] z-50'>
      <div className='flex items-center justify-center bg-[#031B4E] py-1 font-inter text-color-white'>
        <p className='animate-pulse'>Admission Open!! Hurry Up For Admissions</p>
      </div>
      <div className='max-w-[1440px] mx-auto px-[5vw] flex items-center justify-between gap-4 py-[10px]'>
        <NavLink
          to=''
          className='flex items-center gap-2'
          onClick={handleLogoClick}
        >
          <img src={NavLogo} alt='lukim-logo' className='h-[60px]' />
          <p className='hidden sm:flex font-sans font-[700] text-[26px] text-[#E3DEF4]'>
            DCMPI
          </p>
        </NavLink>
        <div className='flex items-center gap-[15px] sm:gap-[30px]'>
          <LinkItem to={featureRef} title='Feature' />
          <LinkItem to={courseRef} title='Course' />
          <LinkItem to={contactRef} title='Contact' />
          <Dropdown renderLabel={renderLabel} alignRight>
            <div className='flex flex-col gap-1 p-1 bg-[#7BDEFF] rounded-md'>
              <button className='px-2 py-1 bg-color-white rounded-md text-center text-color-text font-inter cursor-pointer' onClick={dispatchToggleEnglish} type='button'>english</button>
              <button className='px-2 py-1 bg-color-white rounded-md text-center text-color-text font-inter cursor-pointer' onClick={dispatchToggleNepali} type='button'>नेपाली</button>
            </div>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
