import React from 'react';

import Navbar from '@components/Navbar';
import RegisterForm from '@components/RegisterForm';
import useLanguage from '@hooks/useLanguage';
import {registerData as data} from '@data/I10n/register';

const Register = () => {
  const language = useLanguage();
  return (
    <main>
      <div className='bg-cover bg-[url("assets/images/bg.png")] bg-color-bg w-[100%]'>
        <div className='max-w-[1440px] mx-auto px-[5vw] pb-[70px] lg:relative'>
          <Navbar
            hideHomeLinks
          />
          <div className='py-[20px] pt-[150px] sm:pb-[50px] lg:pb-[120px]'>
            <div className='max-w-[500px] mx-auto'>
              <h1 className='font-sans font-[700] text-[46px] sm:text-[64px] mb-6 text-color-white'>
                {data?.title[language as keyof typeof data.title]}
              </h1>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
