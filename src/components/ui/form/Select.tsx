import { useState, useRef, useEffect, useId } from 'react';
import Icon from '../Icon';
import { InputContext, useInputContext } from './Input';

type Option = { label: string; value: string };

type SelectProps = {
  type?: 'select' | 'dropdown';
  label?: string;
  options: Option[];
  defaultValue?: string;
  width?: string;
  labelWidth?: string; // 개별 지정 가능
  disabled?: boolean;
  className?: string;
};

const Select = ({
  type = 'select',
  label,
  options,
  defaultValue,
  width = '12em',
  labelWidth,
  disabled = false,
  className = '',
}: SelectProps) => {
  const [selected, setSelected] = useState(defaultValue || options[0]?.value || '');
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const { allLabelWidth } = useInputContext(); // Context에서 가져오기

  const finalLabelWidth = labelWidth ?? allLabelWidth;

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Select
  if (type === 'select') {
    return (
      <div
        className={`select-box ${className} ${isFocused ? 'focus' : ''} ${disabled ? 'disabled' : ''}`}
        style={{ '--label-width': finalLabelWidth } as React.CSSProperties}
      >
        {label && <label htmlFor={id}>{label}</label>}
        <select
          id={id}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          onFocus={() => !disabled && setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{ width }}
          disabled={disabled}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <Icon name="keyboard_arrow_down" />
      </div>
    );
  }

  // Dropdown
  return (
    <div
      className={`select-box ${className} ${isFocused ? 'focus' : ''} ${disabled ? 'disabled' : ''}`}
      ref={dropdownRef}
      style={{ '--label-width': finalLabelWidth } as React.CSSProperties}
    >
      {label && <label>{label}</label>}
      <div
        className={`select ${disabled ? 'disabled' : ''}`}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        onFocus={() => !disabled && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        tabIndex={0}
        style={{ width }}
      >
        {options.find((o) => o.value === selected)?.label}
        <Icon name="keyboard_arrow_down" />
      </div>

      {isOpen && !disabled && (
        <div className="option">
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`item ${opt.value === selected ? 'selected' : ''}`}
              onClick={() => {
                setSelected(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 그룹 컴포넌트
Select.Group = ({
  allLabelWidth,
  children,
}: {
  allLabelWidth?: string;
  children: React.ReactNode;
}) => (
  <InputContext.Provider value={allLabelWidth ? { allLabelWidth } : {}}>
    {children}
  </InputContext.Provider>
);

export default Select;
