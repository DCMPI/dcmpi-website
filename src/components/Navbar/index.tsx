/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useCallback, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {GrLanguage} from 'react-icons/gr';
import {HiMenu, HiOutlineX} from 'react-icons/hi';

import Dropdown from '@components/Dropdown';
import {Button} from '@components/Buttons';
import useLanguage from '@hooks/useLanguage';
import {dispatchToggleEnglish, dispatchToggleNepali} from '@services/dispatch';
import {navData as data} from '@data/I10n/home';

import NavLogo from '@images/dcmpi-logo.webp';

interface NavbarProps {
  featureRef?: React.RefObject<HTMLElement>;
  courseRef?: React.RefObject<HTMLElement>;
  contactRef?: React.RefObject<HTMLElement>;
  instructorRef?: React.RefObject<HTMLElement>;
  hideHomeLinks?: boolean;
}

const LinkItem = ({to, title, onClick}: {to: any; title: string, onClick?: () => void;}) => {
  const handleClick = useCallback(() => {
    to.current.scrollIntoView({behavior: 'smooth'});
    if (onClick) onClick();
  }, [onClick, to]);

  return (
    <NavLink to='' className='' onClick={handleClick}>
      <p className='font-inter font-[600] text-[17px] sm:text-[18px] text-color-white hover:text-[#E3DEF4]'>{title}</p>
    </NavLink>
  );
};

const Navbar: React.FC<NavbarProps> = ({
  featureRef, courseRef, contactRef, instructorRef, hideHomeLinks,
}) => {
  const language = useLanguage();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = useCallback(
    () => {
      setOpenMenu(true);
    },
    [],
  );

  const handleCloseMenu = useCallback(
    () => {
      setOpenMenu(false);
    },
    [],
  );

  const handleNavigateRegister = useCallback(
    () => {
      navigate('/register');
    },
    [navigate],
  );

  const renderLabel = useCallback(
    () => (
      <div className='bg-gradient-to-b from-[#5EEAD4] to-[#D8B4FE] p-2 rounded-md cursor-pointer'>
        <GrLanguage size={25} />
      </div>
    )
    , [],
  );

  return (
    <nav className='fixed top-0 left-0 right-0 bg-color-bg/[0.8] z-50'>
      <div className='flex items-center justify-center bg-color-dark-blue py-1 font-inter text-color-white'>
        <p className='animate-pulse'>{data?.info[language as keyof typeof data.info]}</p>
      </div>
      <div className='max-w-[1440px] mx-auto px-[5vw] flex items-center justify-between gap-4 py-[10px]'>
        <NavLink
          to='/'
          className='flex items-center gap-2'
        >
          <img src={NavLogo} alt='lukim-logo' className='h-[60px]' />
          <p className='font-sans font-[700] text-[26px] text-[#E3DEF4]'>
            DCMPI
          </p>
        </NavLink>
        <div className={`${hideHomeLinks ? 'hidden' : 'hidden lg:flex'} items-center gap-[15px] sm:gap-[30px] `}>
          <LinkItem
            to={featureRef}
            title={data?.feature[language as keyof typeof data.feature]}
          />
          <LinkItem
            to={courseRef}
            title={data?.course[language as keyof typeof data.course]}
          />
          <LinkItem
            to={instructorRef}
            title={data?.instructor[language as keyof typeof data.instructor]}
          />
          <LinkItem
            to={contactRef}
            title={data?.contact[language as keyof typeof data.contact]}
          />
        </div>
        <div className='hidden lg:flex items-center gap-[15px] sm:gap-[30px]'>
          <Button onClick={handleNavigateRegister} text={data?.btnText[language as keyof typeof data.btnText]} className='max-h-[50px] max-w-[160px]' />
          <Dropdown renderLabel={renderLabel} alignRight>
            <div className='flex flex-col gap-1 p-1 bg-gradient-to-b from-[#5EEAD4] to-[#D8B4FE] rounded-sm'>
              <button className='px-2 py-1 bg-color-white rounded-sm text-center text-[#031B4E] font-inter cursor-pointer' onClick={dispatchToggleEnglish} type='button'>English</button>
              <button className='px-2 py-1 bg-color-white rounded-sm text-center text-[#031B4E] font-inter cursor-pointer' onClick={dispatchToggleNepali} type='button'>नेपाली</button>
            </div>
          </Dropdown>
        </div>
        <HiMenu size='25' className='lg:hidden cursor-pointer' onClick={handleOpenMenu} />
      </div>
      <div className={`${!openMenu && 'hidden'} absolute top-0 left-0 bottom-0 right-0 h-screen bg-[#031B4E]`}>
        <div className='flex items-center justify-between py-8 px-[5vw] my-2'>
          <NavLink
            to='/'
            className='flex items-center gap-2'
          >
            <img src={NavLogo} alt='lukim-logo' className='h-[60px]' />
            <p className='font-sans font-[700] text-[26px] text-[#E3DEF4]'>
              DCMPI
            </p>
          </NavLink>
          <HiOutlineX size='25' color='#fff' cursor='pointer' onClick={handleCloseMenu} />
        </div>
        <div className='flex flex-col items-center gap-8'>
          <div className={`${hideHomeLinks ? 'hidden' : 'flex'} flex-col items-center gap-8`}>
            <LinkItem
              to={featureRef}
              title={data?.feature[language as keyof typeof data.feature]}
              onClick={handleCloseMenu}
            />
            <LinkItem
              to={courseRef}
              title={data?.course[language as keyof typeof data.course]}
              onClick={handleCloseMenu}
            />
            <LinkItem
              to={instructorRef}
              title={data?.instructor[language as keyof typeof data.instructor]}
              onClick={handleCloseMenu}
            />
            <LinkItem
              to={contactRef}
              title={data?.contact[language as keyof typeof data.contact]}
              onClick={handleCloseMenu}
            />
          </div>
          <Button onClick={handleNavigateRegister} text={data?.btnText[language as keyof typeof data.btnText]} className='max-h-[50px] max-w-[160px]' />
          <Dropdown renderLabel={renderLabel} alignRight>
            <div className='flex flex-col gap-1 p-1 bg-gradient-to-b from-[#5EEAD4] to-[#D8B4FE] rounded-sm'>
              <button className='px-2 py-1 bg-color-white rounded-sm text-center text-[#031B4E] font-inter cursor-pointer' onClick={dispatchToggleEnglish} type='button'>English</button>
              <button className='px-2 py-1 bg-color-white rounded-sm text-center text-[#031B4E] font-inter cursor-pointer' onClick={dispatchToggleNepali} type='button'>नेपाली</button>
            </div>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
