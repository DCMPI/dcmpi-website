import React, {useState, useCallback} from 'react';
import emailjs from '@emailjs/browser';
import useToast from '@hooks/useToast';

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Form = () => {
  const toast = useToast();
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
      } else if (name && msg && email && email.match(validRegex)) {
        emailjs
          .send(
            'service_afs7ohd',
            'template_sdpd3x8',
            {name, email, msg},
            'd056Baa1wkuyOb8X-',
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
        placeholder='Your name'
        onChange={handleNameChange}
        className='h-[50px] p-[20px] font-inter rounded-lg outline-[#693a70]'
      />
      <input
        type='email'
        required
        value={email}
        placeholder='Your email address'
        onChange={handleEmailChange}
        className='h-[50px] p-[20px] font-inter rounded-lg'
      />
      <textarea
        value={msg}
        onChange={handleMsgChange}
        placeholder='Write your message here'
        className='min-h-[120px] p-[20px] font-inter rounded-lg break-all'
      />
      <button
        type='button'
        className='h-[50px] sm:h-[58px] px-[25px] bg-color-orange hover:bg-[#FF8800] font-[600] text-[17px] text-color-white font-inter rounded-lg'
        onClick={handleSubmit}
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
