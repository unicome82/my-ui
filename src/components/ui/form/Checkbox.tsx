import { useState } from 'react';

type CheckboxProps = {
  label: string;
  checked?: boolean; // 부모에서 checked만 쓰면 초기 선택 상태
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
};

const Checkbox = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  className = '',
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    setIsChecked((prev) => {
      onChange?.(!prev);
      return !prev;
    });
  };

  return (
    <label style={{ display: 'block', marginBottom: 5 }} className={className}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} disabled={disabled} />
      {label}
    </label>
  );
};

export default Checkbox;
