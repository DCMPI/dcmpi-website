/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {HiXCircle} from 'react-icons/hi';

import {Button} from '@components/Buttons';
import {RootState} from '@store/index';
import {modalData as data} from '@data/I10n/modal';

const Modal: React.FC = () => {
  const {
    localize: {
      language,
    },
  } = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleHideModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleRegisterButton = useCallback(
    () => {
      navigate('/register');
    },
    [navigate],
  );

  return (
    <div className={`${!showModal ? 'hidden' : ''} fixed inset-0 z-50 overflow-y-auto`}>
      <div
        className='fixed inset-0 w-full h-full bg-[#000000] opacity-80'
        onClick={handleHideModal}
      />
      <div className='flex items-center min-h-screen px-4 py-8'>
        <div className='relative w-full max-w-lg mx-auto bg-color-white rounded-md shadow-lg'>
          <div className='text-center'>
            <div className='flex justify-between items-center bg-color-bg rounded-t-md p-4'>
              <div className='w-8' />
              <h4 className='font-sans font-[700] text-[28px] text-color-white animate-pulse'>
                {data?.title[language as keyof typeof data.title]}
              </h4>
              <HiXCircle size='30' color='#fff' cursor='pointer' onClick={handleHideModal} />
            </div>
            <p className='font-inter font-[600] p-4 mt-4 text-[18px] text-color-dark-blue leading-relaxed'>
              {data?.subtitle[language as keyof typeof data.subtitle]}
            </p>
            <div className='flex items-center justify-center p-4'>
              <Button
                onClick={handleRegisterButton}
                text={data?.buttonText[language as keyof typeof data.buttonText]}
                className='transition-all duration-500 w-full sm:w-full bg-transparent border-2 border-color-orange text-color-orange hover:text-color-white hover:bg-color-orange'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
