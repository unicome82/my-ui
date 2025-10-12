import { ReactNode } from 'react';

interface ButtonProps {
  filled?: boolean; // 아이콘 fill 여부
  className?: string;
  disabled?: boolean;
  children?: ReactNode; // 버튼 텍스트
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [key: string]: any;
}

const Button = ({ className = '', disabled = false, children, onClick }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
