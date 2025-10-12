import { useState, useRef, useEffect, useId } from 'react';
import { InputContext, useInputContext } from '@/components/ui/form/Input';
import { Icon } from '@/components/ui';

type Option = { label: string; value: string };

type SelectProps = {
  type?: 'select' | 'dropdown';
  label?: string;
  options: Option[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  width?: string;
  labelWidth?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
};

const Select = ({
  type = 'select',
  label,
  options,
  defaultValue,
  value,
  onChange,
  width = '12em',
  labelWidth,
  disabled = false,
  required = false,
  className = '',
}: SelectProps) => {
  const [selected, setSelected] = useState(defaultValue || '');
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);
  const [openUp, setOpenUp] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const { allLabelWidth } = useInputContext();
  const optionRef = useRef<HTMLDivElement>(null);
  const [optionMaxHeight, setOptionMaxHeight] = useState<number | undefined>(undefined);

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

  // 옵션 방향 Auto
  // 옵션 방향 및 option max-height 자동 계산
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const optionHeight = Math.min(options.length * 36, 320); // 1 option 36px, 최대 320px
      // 아래 공간이 충분하면 아래로, 아니면 위로
      if (spaceBelow >= optionHeight || spaceBelow > spaceAbove) {
        setOpenUp(false);
        setOptionMaxHeight(spaceBelow - 8 > 100 ? spaceBelow - 8 : 100); // 최소 100px
      } else {
        setOpenUp(true);
        setOptionMaxHeight(spaceAbove - 8 > 100 ? spaceAbove - 8 : 100);
      }
    } else {
      setOptionMaxHeight(undefined);
    }
  }, [isOpen, options.length]);

  const handleChange = (val: string) => {
    setSelected(val);
    onChange?.(val);
    if (required && touched) setError(val === '');
  };

  const handleFocus = () => {
    if (!disabled) setIsFocused(true);
    if (!touched) setTouched(true);
  };

  // Select
  if (type === 'select') {
    return (
      <div
        className={`select-box ${className} ${required ? 'required' : ''} ${isFocused ? 'focus' : ''} ${disabled ? 'disabled' : ''} ${
          error ? 'error' : ''
        }`}
        style={{ '--label-width': finalLabelWidth } as React.CSSProperties}
      >
        {label && (
          <label htmlFor={id}>
            {label} {required && <span className="required-mark">*</span>}
          </label>
        )}
        <div className="inner-wrap" style={{ width }}>
          <div className="select-area">
            <select
              id={id}
              value={selected}
              onChange={(e) => handleChange(e.target.value)}
              onFocus={handleFocus}
              onBlur={() => {
                setIsFocused(false);
                if (required && touched && selected === '') setError(true);
              }}
              disabled={disabled}
            >
              <option value="">선택</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <Icon name="keyboard_arrow_down" />
          </div>
          {error && <div className="error-msg">필수 선택 항목입니다.</div>}
        </div>
      </div>
    );
  }

  // Dropdown
  return (
    <div
      className={`select-box ${className} ${required ? 'required' : ''} ${isFocused ? 'focus' : ''} ${disabled ? 'disabled' : ''}
       ${error ? 'error' : ''} ${openUp ? 'drop-up' : ''}`}
      ref={dropdownRef}
      style={{ '--label-width': finalLabelWidth } as React.CSSProperties}
    >
      {label && (
        <label htmlFor={id}>
          {label} {required && <span className="required-mark">*</span>}
        </label>
      )}
      <div className="inner-wrap" style={{ width }}>
        <div className="select-area">
          <div
            className={`select ${disabled ? 'disabled' : ''}`}
            onClick={() => {
              if (!disabled) {
                setIsOpen((prev) => !prev);
                if (!touched) setTouched(true);
              }
            }}
            onFocus={handleFocus}
            onBlur={() => {
              setIsFocused(false);
              if (required && touched && selected === '') setError(true);
            }}
            tabIndex={0}
          >
            {selected === '' ? '선택' : options.find((o) => o.value === selected)?.label}
            <Icon name="keyboard_arrow_down" />
          </div>

          {isOpen && !disabled && (
            <div
              className="option"
              ref={optionRef}
              style={optionMaxHeight ? { maxHeight: optionMaxHeight, overflowY: 'auto' } : {}}
            >
              {options.map((opt) => (
                <div
                  key={opt.value}
                  className={`item ${opt.value === selected ? 'selected' : ''}`}
                  onClick={() => {
                    handleChange(opt.value);
                    setIsOpen(false);
                  }}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          )}
        </div>
        {error && <div className="error-msg">필수 선택 항목입니다.</div>}
      </div>
    </div>
  );
};

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
