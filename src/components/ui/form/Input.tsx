import { useState, useId, createContext, useContext, ReactNode } from 'react';

type InputProps = {
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  width?: string;
  labelWidth?: string;
};

type GroupProps = {
  allLabelWidth?: string;
  children: ReactNode;
};

// 공용 Context 생성
export const InputContext = createContext<{ allLabelWidth?: string }>({});
export const useInputContext = () => useContext(InputContext);

const Input = ({
  type = 'text',
  label,
  value: propValue,
  placeholder,
  onChange,
  disabled,
  readOnly,
  className,
  width = '12em',
  labelWidth,
}: InputProps) => {
  const [value, setValue] = useState(propValue || '');
  const id = useId();
  const { allLabelWidth } = useInputContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  // 부모 Context 또는 개별 labelWidth 사용
  const finalLabelWidth = labelWidth ?? allLabelWidth;

  return (
    <div
      className={`input-text ${className ?? ''} ${disabled ? 'disabled' : ''} ${readOnly ? 'readonly' : ''}`}
      style={{ '--label-width': finalLabelWidth } as React.CSSProperties}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        readOnly={readOnly}
        style={{ width }}
      />
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
