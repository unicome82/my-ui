import { useState, useId, ReactNode } from 'react';
import { InputContext, useInputContext } from './Input';

type TextareaProps = {
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  rows?: number;
  cols?: number;
  labelWidth?: string;
};

type GroupProps = {
  allLabelWidth?: string;
  children: ReactNode;
};

const Textarea = ({
  value: propValue,
  label,
  placeholder,
  onChange,
  disabled = false,
  readOnly = false,
  className = '',
  rows = 4,
  cols,
  labelWidth,
}: TextareaProps) => {
  const [value, setValue] = useState(propValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const id = useId();
  const { allLabelWidth } = useInputContext(); // 공유 Context 사용

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  const finalLabelWidth = labelWidth ?? allLabelWidth;

  return (
    <div
      className={`input-text ${className}`}
      style={{ '--label-width': finalLabelWidth } as React.CSSProperties}
    >
      {label && <label htmlFor={id}>{label}</label>}

      <div
        className={`textarea-box ${disabled ? 'disabled' : ''} ${
          isFocused ? 'focus' : ''
        } ${readOnly ? 'readonly' : ''}`}
      >
        <textarea
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          readOnly={readOnly}
          rows={rows}
          cols={cols}
        />
      </div>
    </div>
  );
};

// Textarea.Group은 Input.Group과 같은 Context 공유
Textarea.Group = ({ allLabelWidth, children }: GroupProps) => (
  <InputContext.Provider value={allLabelWidth ? { allLabelWidth } : {}}>
    {children}
  </InputContext.Provider>
);

export default Textarea;
