import { useState } from 'react';
import Icon from '../Icon';

type CheckboxProps = {
  label?: string;
  checked?: boolean;
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

  const labelClass = [
    'input-box',
    className,
    isChecked ? 'checked' : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={labelClass}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} disabled={disabled} />
      <Icon name={isChecked ? 'check' : ''} />
      {label && label}
    </label>
  );
};

export default Checkbox;
