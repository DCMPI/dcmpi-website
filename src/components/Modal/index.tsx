/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useCallback, useState} from 'react';

const Modal: React.FC = () => {
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
        <div className='relative w-full max-w-lg p-4 mx-auto bg-color-white rounded-md shadow-lg'>
          <div className='mt-2 text-center'>
            <h4 className='font-inter font-[600] text-[28px] text-color-red'>
              Admission Open!!
            </h4>
            <p className='font-inter font-[500] mt-4 text-[18px] text-color-text leading-relaxed'>
              Admission open for Diploma in Civil Engineering and
              Diploma in Agriculture (Plant Science).
            </p>
            <div className='flex items-center justify-center mt-8 mb-2'>
              <button
                className='w-full p-2.5 flex-1 text-color-white rounded-full outline-none bg-color-orange ring-offset-2 ring-indigo-600 focus:ring-2'
                onClick={handleHideModal}
                type='button'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
