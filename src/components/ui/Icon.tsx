interface IconProps {
  name: string; // 아이콘 이름
  fill?: boolean; // true = 채움(Filled), false = 아웃라인(Outlined)
  size?: number | string; // px 또는 em 단위 모두 지원
  className?: string; // 추가 클래스
}

const Icon: React.FC<IconProps> = ({ name, fill = false, size, className = '' }) => {
  const baseClass = fill ? 'material-symbols-outlined filled' : 'material-symbols-outlined';

  // number면 px 단위 자동 추가, string이면 그대로 적용
  const fontSizeStyle =
    typeof size === 'number' ? `${size}px` : typeof size === 'string' ? size : undefined;

  return (
    <span
      className={`${baseClass} ${className}`.trim()}
      style={fontSizeStyle ? { fontSize: fontSizeStyle } : undefined}
    >
      {name}
    </span>
  );
};

export default Icon;
