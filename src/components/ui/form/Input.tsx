import { useState, useId, createContext, useContext, ReactNode, useEffect } from 'react';

type InputProps = {
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  readonly?: boolean;
  className?: string;
  width?: string;
  labelWidth?: string;
  required?: boolean;
  errorCheck?: boolean;
};

type GroupProps = {
  allLabelWidth?: string;
  children: ReactNode;
};

// Context
export const InputContext = createContext<{ allLabelWidth?: string }>({});
export const useInputContext = () => useContext(InputContext);

const Input = ({
  type = 'text',
  label,
  value: propValue,
  placeholder,
  onChange,
  disabled,
  readonly,
  className,
  width = '12em',
  labelWidth,
  required = false,
  errorCheck = false,
}: InputProps) => {
  const [value, setValue] = useState(propValue || '');
  const [touched, setTouched] = useState(false);
  const id = useId();
  const { allLabelWidth } = useInputContext();
  const finalLabelWidth = labelWidth ?? allLabelWidth;

  // 이메일 형식 검사
  const isEmailInvalid =
    type === 'email' && value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  // 필수 입력 검사
  const isRequiredInvalid = required && value.trim() === '';

  // 에러 조건 통합
  const error = (touched || errorCheck) && (isEmailInvalid || isRequiredInvalid);

  useEffect(() => {
    onChange?.(value);
  }, [value]);

  return (
    <div
      className={`input-text ${className ?? ''} ${required ? 'required' : ''} ${error ? 'error' : ''} ${disabled ? 'disabled' : ''} ${readonly ? 'readonly' : ''}`}
      style={{ '--label-width': finalLabelWidth } as React.CSSProperties}
    >
      {label && (
        <label htmlFor={id}>
          {label} {required && <span className="required-mark">*</span>}
        </label>
      )}
      <div className="inner-wrap" style={{ width }}>
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          disabled={disabled}
          readOnly={readonly}
        />
        {error && (
          <p className="error-msg">
            {isRequiredInvalid
              ? '필수 입력 항목입니다.'
              : isEmailInvalid
                ? '이메일 형식이 올바르지 않습니다.'
                : ''}
          </p>
        )}
      </div>
    </div>
  );
};

// 그룹 컴포넌트
Input.Group = ({ allLabelWidth, children }: GroupProps) => (
  <InputContext.Provider value={allLabelWidth ? { allLabelWidth } : {}}>
    {children}
  </InputContext.Provider>
);

export default Input;
