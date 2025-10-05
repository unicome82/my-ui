import { ReactNode } from 'react';

interface ButtonProps {
  filled?: boolean; // 아이콘 fill 여부
  className?: string;
  disabled?: boolean;
  children?: ReactNode; // 버튼 텍스트
}

const Button = ({ className = '', disabled = false, children }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
