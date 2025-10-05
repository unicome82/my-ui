import React, { useState } from 'react';

type TextareaProps = {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  rows?: number;
  cols?: number;
};

const Textarea = ({
  value: propValue,
  placeholder,
  onChange,
  disabled = false,
  readOnly = false,
  className = '',
  rows = 4,
  cols,
}: TextareaProps) => {
  const [value, setValue] = useState(propValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      disabled={disabled}
      readOnly={readOnly}
      className={className}
      rows={rows}
      cols={cols}
      style={{ marginBottom: '5px', width: '100%' }}
    />
  );
};

export default Textarea;
