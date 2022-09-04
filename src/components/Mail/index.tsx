import React, {useState, useCallback} from 'react';
import emailjs from '@emailjs/browser';
import useToast from '@hooks/useToast';
import {useSelector} from 'react-redux';
import {RootState} from '@store/index';
import {contactSectionData as data} from '@data/I10n/home';

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ContactForm = () => {
  const toast = useToast();
  const {
    localize: {
      language,
    },
  } = useSelector((state: RootState) => state);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [],
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [],
  );

  const handleMsgChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMsg(e.target.value);
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!name || !email || !msg) {
        toast('error', 'All fields are required');
      } else if (
        name
        && msg
        && email
        && email.match(validRegex)
        && process.env.REACT_APP_SERVICE_ID
        && process.env.REACT_APP_TEMPLATE_ID
        && process.env.REACT_APP_PUBLIC_KEY) {
        emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            {name, email, msg},
            process.env.REACT_APP_PUBLIC_KEY,
          )
          .then(
            (result) => {
              if (result) toast('success', 'Message was sent successfully');
              setName('');
              setEmail('');
              setMsg('');
            },
            (error) => {
              if (error) toast('error', 'Something went wrong, Plz try again');
            },
          );
      } else if (!email.match(validRegex)) {
        toast('error', 'Please enter a valid email address');
      }
    },
    [email, msg, name, toast],
  );

  return (
    <form className='flex flex-col gap-[10px] rounded-xl'>
      <input
        value={name}
        placeholder={data?.name[language as keyof typeof data.name]}
        onChange={handleNameChange}
        className='h-[50px] p-[20px] font-inter rounded-lg outline-[#693a70]'
      />
      <input
        type='email'
        required
        value={email}
        placeholder={data?.email[language as keyof typeof data.email]}
        onChange={handleEmailChange}
        className='h-[50px] p-[20px] font-inter rounded-lg'
      />
      <textarea
        value={msg}
        onChange={handleMsgChange}
        placeholder={data?.message[language as keyof typeof data.message]}
        className='min-h-[120px] p-[20px] font-inter rounded-lg break-all'
      />
      <button
        type='button'
        className='h-[50px] sm:h-[58px] px-[25px] bg-color-orange hover:bg-[#FF8800] font-[600] text-[17px] text-color-white font-inter rounded-lg'
        onClick={handleSubmit}
      >
        {data?.buttonText[language as keyof typeof data.buttonText]}
      </button>
    </form>
  );
};

export {ContactForm};
