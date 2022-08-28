import React from 'react';
import {useSelector} from 'react-redux';
import Toast from '@components/Toast';
import {RootState} from '@store/index';

export default function ToastContainer() {
  const {
    notification: {
      toasts,
    },
  } = useSelector((state: RootState) => state);

  return (
    <div className='fixed top-20 left-1/2 -translate-x-1/2 w-fit z-50'>
      <div className='max-w-fit mx-auto'>
        {toasts.length > 0 ? toasts.map((item) => (
          <Toast key={item.id} id={item.id} type={item.type} message={item.message} />
        )) : <p className='w-0 h-0 hidden'>Empty component</p>}
      </div>
    </div>
  );
}
