import { useState } from 'react';

type RadioProps = {
  label: string;
};

type RadioGroupProps = {
  name: string;
  options: RadioProps[];
  defaultSelected?: string;
};

const RadioGroup = ({ name, options, defaultSelected }: RadioGroupProps) => {
  const [selected, setSelected] = useState(defaultSelected || '');

  return (
    <div>
      {options.map((opt) => (
        <label key={opt.label} style={{ display: 'block', marginBottom: 5 }}>
          <input
            type="radio"
            name={name}
            checked={selected === opt.label}
            onChange={() => setSelected(opt.label)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
