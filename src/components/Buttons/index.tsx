/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useCallback} from 'react';
import {scrollTo} from '../../utils/scroll.js';

interface Props {
  to: any;
  text: string;
}

export const ScrollButton: React.FC<Props> = ({to, text}) => {
  const handleClick = useCallback(() => {
    scrollTo(to.current.offsetTop);
  }, [to]);

  return (
    <button
      type='button'
      onClick={handleClick}
      className='w-[160px] h-[50px] sm:h-[58px] sm:w-[193px] rounded-full flex items-center justify-center hover:bg-[#FF8800] bg-[#DD6434] shadow-[0_5px_10px_rgba(0,0,0,0.05)]'
    >
      <p className='font-inter font-[600] text-[17px] text-color-white'>
        {text}
      </p>
    </button>
  );
};

export const LinkBtn = ({to, text}: {to: string, text: string}) => (
  <a
    href={to}
    target='_blank'
    rel='noreferrer'
    className='w-[160px] h-[50px] sm:h-[58px] sm:w-[193px] rounded-full flex items-center justify-center hover:bg-[#FF8800] bg-[#DD6434] shadow-[0_5px_10px_rgba(0,0,0,0.05)]'
  >
    <p className='font-inter font-[600] text-[17px] text-color-white'>
      {text}
    </p>
  </a>
);
