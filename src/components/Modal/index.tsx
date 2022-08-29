/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {AiFillCloseCircle} from 'react-icons/ai';

import {RootState} from '@store/index';
import {modalData as data} from '@data/I10n/modal';
import {Button} from '@components/Buttons';

const Modal: React.FC = () => {
  const {
    localize: {
      language,
    },
  } = useSelector((state: RootState) => state);
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleHideModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <div className={`${!showModal ? 'hidden' : ''} fixed inset-0 z-50 overflow-y-auto`}>
      <div
        className='fixed inset-0 w-full h-full bg-[#000000] opacity-80'
        onClick={handleHideModal}
      />
      <div className='flex items-center min-h-screen px-4 py-8'>
        <div className='relative w-full max-w-lg mx-auto bg-color-white rounded-md shadow-lg'>
          <div className='mt-2 text-center'>
            <div className='flex justify-between items-center border-b border-color-border px-4 py-2'>
              <div className='w-8' />
              <h4 className='font-sans font-[700] text-[28px] text-color-red'>
                {data?.title[language as keyof typeof data.title]}
              </h4>
              <AiFillCloseCircle size={30} cursor='pointer' onClick={handleHideModal} />
            </div>
            <p className='font-inter font-[600] p-4 text-[18px] text-color-text leading-relaxed'>
              {data?.subtitle[language as keyof typeof data.subtitle]}
            </p>
            <div className='flex items-center justify-center p-4'>
              <Button
                onClick={handleHideModal}
                text={data?.buttonText[language as keyof typeof data.buttonText]}
                className='w-full sm:w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
