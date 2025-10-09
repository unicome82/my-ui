import { useState } from 'react';
import Icon from '../Icon';

type RadioOption = {
  label: string;
  disabled?: boolean;
};

type RadioGroupProps = {
  name: string;
  options: RadioOption[];
  defaultSelected?: string;
  className?: string;
  groupClassName?: string;
};

const RadioGroup = ({
  name,
  options,
  defaultSelected,
  className = '',
  groupClassName = '',
}: RadioGroupProps) => {
  const [selected, setSelected] = useState(defaultSelected || '');

  return (
    <div className={`input-box-group ${groupClassName}`}>
      {options.map((opt) => {
        const isChecked = selected === opt.label;
        const isDisabled = opt.disabled;

        return (
          <label
            key={opt.label}
            className={`input-box ${className} ${isChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}`}
          >
            <input
              type="radio"
              name={name}
              checked={isChecked}
              disabled={isDisabled}
              onChange={() => !isDisabled && setSelected(opt.label)}
            />
            <Icon name={isChecked ? 'check' : ''} />
            {opt.label}
          </label>
        );
      })}
    </div>
  );
};

export default RadioGroup;
