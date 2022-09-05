import React, {useState, useCallback, useRef} from 'react';
import useToast from '@hooks/useToast';
import {registerData as data} from '@data/I10n/register';
import useLanguage from '@hooks/useLanguage';
import InputField from '@components/InputField';

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const RegisterForm = () => {
  const toast = useToast();
  const language = useLanguage();
  const photoRef = useRef<HTMLInputElement>(null);
  const marksheetRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phoneno, setphoneno] = useState<string>('');
  const [course, setCourse] = useState<string>('engineering');
  const [photo, setPhoto] = useState<File | undefined>();
  const [marksheet, setMarksheet] = useState<File | undefined>();

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

  const handlePhonenoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setphoneno(e.target.value);
    },
    [],
  );

  const handlePhotoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      setPhoto(e.target.files[0]);
    },
    [],
  );

  const handleMarksheetChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      setMarksheet(e.target.files[0]);
    },
    [],
  );

  const handleCourseChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCourse(e.target.value);
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!name || !email || !phoneno || !course || !photo || !marksheet) {
        toast('error', 'All fields are required');
      } else if (name && phoneno && email && email.match(validRegex) && photo && marksheet) {
        const Data = {
          name,
          email,
          phoneno,
          course,
          photo,
          marksheet,
        };
        const formData = new FormData();
        formData.append('form-name', 'register');
        Object.entries(Data).forEach(([key, value]) => formData.append(key, value));

        fetch('/', {
          method: 'POST',
          body: formData,
        })
          .then((result) => {
            if (result) toast('success', 'Message was sent successfully');
            setName('');
            setEmail('');
            setphoneno('');
            setPhoto(undefined);
            setMarksheet(undefined);
          })
          .catch((error) => {
            if (error) toast('error', 'Something went wrong, Plz try again');
          });
      } else if (!email.match(validRegex)) {
        toast('error', 'Please enter a valid email address');
      }
    },
    [name, email, phoneno, toast, course, photo, marksheet],
  );

  return (
    <form className='flex flex-col gap-6 rounded-xl bg-[#031B4E] p-8'>
      <InputField
        id='name'
        type='text'
        value={name}
        label={data?.label.name[language as keyof typeof data.label.name]}
        onChange={handleNameChange}
        placeholder={data?.placeholder.name[language as keyof typeof data.placeholder.name]}
        required
      />
      <InputField
        id='phoneno'
        type='text'
        value={phoneno}
        label={data?.label.phoneno[language as keyof typeof data.label.phoneno]}
        onChange={handlePhonenoChange}
        placeholder={data?.placeholder.phoneno[language as keyof typeof data.placeholder.phoneno]}
        required
      />
      <InputField
        id='email'
        type='email'
        value={email}
        label={data?.label.email[language as keyof typeof data.label.email]}
        onChange={handleEmailChange}
        placeholder={data?.placeholder.email[language as keyof typeof data.placeholder.email]}
        required
      />
      <div>
        <label className='text-color-white font-inter text-[18px]' htmlFor='course'>
          {data?.label.course[language as keyof typeof data.label.course]}
        </label>
        <div className='px-[20px] mt-2 bg-color-white rounded-lg cursor-pointer'>
          <select
            id='course'
            name='course'
            className='h-[50px] w-full bg-color-white font-inter cursor-pointer outline-none'
            value={course}
            onChange={handleCourseChange}
          >
            <option value='engineering'>{data?.engineering[language as keyof typeof data.engineering]}</option>
            <option value='agriculture'>{data?.agriculture[language as keyof typeof data.agriculture]}</option>
          </select>
        </div>
      </div>
      <InputField
        id='photo'
        inputRef={photoRef}
        type='file'
        accept='image/*'
        label={data?.label.photo[language as keyof typeof data.label.photo]}
        fileName={photo?.name}
        onChange={handlePhotoChange}
        required
      />
      <InputField
        id='marksheet'
        inputRef={marksheetRef}
        type='file'
        accept='image/*'
        label={data?.label.marksheet[language as keyof typeof data.label.marksheet]}
        fileName={marksheet?.name}
        onChange={handleMarksheetChange}
        required
      />
      <button
        type='button'
        className='h-[50px] sm:h-[58px] mt-6 px-[25px] bg-color-orange hover:bg-[#FF8800] font-[600] text-[17px] text-color-white font-inter rounded-full'
        onClick={handleSubmit}
      >
        {data?.buttonText[language as keyof typeof data.buttonText]}
      </button>
    </form>
  );
};

export default RegisterForm;
