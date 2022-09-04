import React, {useCallback} from 'react';
import useLanguage from '@hooks/useLanguage';

interface InputProps {
    id?: string;
    placeholder?: string;
    label?: string;
    required?: boolean;
    type?: string;
    accept?: string;
    fileName?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    value?: string | number | readonly string[] | undefined;
}

const text = {
  en: 'Select',
  np: 'चयन गर्नुहोस्',
};

const InputField: React.FC<InputProps> = ({
  id, onChange, placeholder, value, label, required, type, accept, inputRef, fileName,
}) => {
  const language = useLanguage();
  const handleOpenFiles = useCallback(
    () => {
      if (!inputRef?.current) return;
      inputRef.current.click();
    },
    [inputRef],
  );

  return (
    <div
      className='flex flex-col gap-2'
    >
      <label
        className='text-color-white font-inter text-[18px] cursor-pointer'
        htmlFor={id}
      >
        {label}

      </label>
      <input
        id={id}
        name={id}
        ref={inputRef}
        required={required}
        value={value}
        type={type}
        accept={accept}
        placeholder={placeholder}
        onChange={onChange}
        className={`${type === 'file' && 'hidden'} h-[50px] p-[20px] font-inter rounded-lg outline-[#693a70]`}
      />
      <div
        className={`${type !== 'file' && 'hidden'} flex items-center h-[50px] p-[20px] bg-color-white font-inter rounded-lg cursor-pointer`}
        onClick={handleOpenFiles}
      >
        <p className='font-inter text-[16px] bg-color-border border-[1px] py-[0.5px] px-2 rounded-sm mr-2'>
          {text[language as keyof typeof text]}
        </p>
        <p className='font-inter text-[16px]'>{fileName}</p>
      </div>
    </div>
  );
};

export default InputField;
