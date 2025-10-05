import { ReactNode, forwardRef } from 'react';

interface HeaderProps {
  left?: ReactNode; // 좌측 슬롯
  right?: ReactNode; // 우측 슬롯
  className?: string;
}

const MainHeader = forwardRef<HTMLDivElement, HeaderProps>(({ left, right, className }, ref) => {
  return (
    <header ref={ref} className={`header ${className}`}>
      <div className="left-box">{left}</div>
      <div className="right-box">{right}</div>
    </header>
  );
});

export default MainHeader;
