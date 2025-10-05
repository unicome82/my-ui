import { useState, useRef, useEffect } from 'react';

type Option = { label: string; value: string };

type SelectProps = {
  type?: 'select' | 'dropdown';
  options: Option[];
  defaultValue?: string;
  width?: string;
};

const Select = ({ type = 'select', options, defaultValue, width = '150px' }: SelectProps) => {
  const [selected, setSelected] = useState(defaultValue || options[0]?.value || '');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (type === 'select') {
    return (
      <div className="select-box">
        <select value={selected} onChange={(e) => setSelected(e.target.value)} style={{ width }}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // dropdown 타입
  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="select" onClick={() => setIsOpen((prev) => !prev)}>
        {options.find((o) => o.value === selected)?.label}
      </div>

      {isOpen && (
        <div className="option">
          {options.map((opt) => (
            <div
              key={opt.value}
              className="item"
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

export default Select;
