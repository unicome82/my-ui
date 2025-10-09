import { useState, useRef, useEffect } from 'react';

type TooltipPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom';

type TooltipPositionProps = {
  [K in TooltipPosition]?: boolean;
};

interface TooltipProps extends TooltipPositionProps {
  button: string;
  children: React.ReactNode;
  hover?: boolean;
  click?: boolean;
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const { button, children, hover, click, ...positions } = props;

  // 위치 prop 자동 감지
  const position =
    (Object.keys(positions).find(
      (key) => positions[key as keyof typeof positions]
    ) as TooltipPosition) || 'top-center';

  const trigger = click ? 'click' : 'hover';

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const toggle = () => setVisible((prev) => !prev);

  // 외부 클릭 시 닫기
  useEffect(() => {
    if (trigger !== 'click') return;
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) hide();
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [trigger]);

  return (
    <div
      className={`tooltip-wrap ${visible ? 'show' : ''}`}
      ref={wrapRef}
      onMouseEnter={trigger === 'hover' ? show : undefined}
      onMouseLeave={trigger === 'hover' ? hide : undefined}
    >
      <button className="btn-tooltip" onClick={trigger === 'click' ? toggle : undefined}>
        {button}
      </button>

      <div className={`tooltip-box ${position} `}>{children}</div>
    </div>
  );
};

export default Tooltip;
