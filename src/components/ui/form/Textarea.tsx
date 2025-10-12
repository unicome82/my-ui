import { useState, useId, ReactNode } from 'react';
import { InputContext, useInputContext } from '@/components/ui/form/Input';

type TextareaProps = {
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  readonly?: boolean;
  className?: string;
  rows?: number;
  cols?: number;
  labelWidth?: string;
  required?: boolean;
  errorCheck?: boolean;
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
  readonly = false,
  className = '',
  rows = 4,
  cols,
  labelWidth,
  required = false,
  errorCheck = false,
}: TextareaProps) => {
  const [value, setValue] = useState(propValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const id = useId();
  const { allLabelWidth } = useInputContext();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  // 유효성 검사
  const isInvalid = required && value.trim() === '';

  const error = (touched || errorCheck) && isInvalid;

  const finalLabelWidth = labelWidth ?? allLabelWidth;

  return (
    <div
      className={`input-text ${className} ${required ? 'required' : ''} ${error ? 'error' : ''}`}
      style={{ '--label-width': finalLabelWidth } as React.CSSProperties}
    >
      {label && (
        <label htmlFor={id}>
          {label} {required && <span className="required-mark">*</span>}
        </label>
      )}

      <div className="inner-wrap">
        <div
          className={`textarea-box 
          ${disabled ? 'disabled' : ''} 
          ${readonly ? 'readonly' : ''} 
          ${isFocused ? 'focus' : ''}`}
        >
          <textarea
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              setTouched(true);
            }}
            disabled={disabled}
            readOnly={readonly}
            rows={rows}
            cols={cols}
            required={required}
          />
        </div>

        {error && <p className="error-msg">필수 입력 항목입니다.</p>}
      </div>
    </div>
  );
};

// 그룹 컨텍스트 (공유)
Textarea.Group = ({ allLabelWidth, children }: GroupProps) => (
  <InputContext.Provider value={allLabelWidth ? { allLabelWidth } : {}}>
    {children}
  </InputContext.Provider>
);

export default Textarea;
