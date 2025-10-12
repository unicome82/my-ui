interface IconProps {
  name: string; // 아이콘 이름
  fill?: boolean; // true = 채움(Filled), false = 아웃라인(Outlined)
  size?: string; // px 또는 em 단위 모두 지원
  className?: string; // 추가 클래스
}

const Icon: React.FC<IconProps> = ({ name, fill = false, size, className = '' }) => {
  const baseClass = fill ? 'material-symbols-outlined filled' : 'material-symbols-outlined';

  // Size
  const fontSizeStyle = typeof size === 'string' ? size : undefined;

  return (
    <span
      className={`ico ${baseClass} ${className}`.trim()}
      style={fontSizeStyle ? { fontSize: fontSizeStyle } : undefined}
    >
      {name}
    </span>
  );
};

export default Icon;
