import React, {useState, useEffect} from 'react';
import {HiXCircle} from 'react-icons/hi';

interface Props {
    visible: boolean;
    hideModal: () => void;
    images: string[];
    title: string;
}

const Modal: React.FC<Props> = ({
  visible, hideModal, images, title,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setShowModal(visible);
  }, [visible]);

  return (
    <div className={`${!showModal ? 'hidden' : ''} fixed inset-0 z-50 overflow-y-auto`}>
      <div
        className='fixed inset-0 w-full h-full bg-[#000000] opacity-80'
        onClick={hideModal}
      />
      <div className='flex items-center min-h-screen px-4 py-8'>
        <div className='relative w-full max-w-fit mx-auto bg-color-white rounded-md shadow-lg'>
          <div className='text-center'>
            <div className='flex justify-between items-center bg-color-bg rounded-t-md p-4'>
              <div className='w-8' />
              <h4 className='font-sans font-[700] text-[20px] lg:text-[28px] text-color-white animate-pulse'>
                {title}
              </h4>
              <HiXCircle size='30' color='#fff' cursor='pointer' onClick={hideModal} />
            </div>
            <div className='container overflow-scroll mx-auto p-2 space-y-2 lg:space-y-0 lg:grid lg:grid-cols-3'>
              {images.map((img) => (
                <div className='w-full rounded hover:shadow-2xl p-2'>
                  <img
                    src={img}
                    alt=''
                    className='h-[250px] w-full'
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
