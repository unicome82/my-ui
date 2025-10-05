import React from 'react';

interface IconProps {
  name: string; // 아이콘 이름
  fill?: boolean; // true = 채움(Filled), false = 아웃라인(Outlined)
  size?: number; // 아이콘 크기 (px 단위, font-size)
  className?: string; // 추가 클래스
}

const Icon: React.FC<IconProps> = ({ name, fill = false, size, className = '' }) => {
  const baseClass = fill ? 'material-symbols-outlined filled' : 'material-symbols-outlined';

  return (
    <span
      className={`${baseClass} ${className}`.trim()}
      style={size ? { fontSize: size } : undefined}
    >
      {name}
    </span>
  );
};

export default Icon;
