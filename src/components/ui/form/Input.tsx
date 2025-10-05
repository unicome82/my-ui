import React, { useState } from 'react';

type InputProps = {
  type?: React.HTMLInputTypeAttribute; // 모든 HTML input type 지원
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
};

const Input = ({
  type = 'text', // 기본 타입 text
  value: propValue,
  placeholder,
  onChange,
  disabled,
  readOnly,
  className,
}: InputProps) => {
  const [value, setValue] = useState(propValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      {...(disabled && { disabled: true })}
      {...(readOnly && { readOnly: true })}
      className={className}
      style={{ marginBottom: '5px' }}
    />
  );
};

export default Input;
