import { useRef, useState, useEffect } from 'react';

interface DragScrollProps {
  children: React.ReactNode;
  className?: string;
}

const DragScroll: React.FC<DragScrollProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [scrollStart, setScrollStart] = useState({ left: 0, top: 0 });

  // 마우스/터치 시작
  const startDrag = (x: number, y: number) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartPos({ x, y });
    setScrollStart({ left: containerRef.current.scrollLeft, top: containerRef.current.scrollTop });
  };

  const onMouseDown = (e: React.MouseEvent) => startDrag(e.clientX, e.clientY);
  const onTouchStart = (e: React.TouchEvent) =>
    startDrag(e.touches[0]?.clientX || 0, e.touches[0]?.clientY || 0);

  // 이동
  const onMove = (x: number, y: number) => {
    if (!isDragging || !containerRef.current) return;
    const dx = x - startPos.x;
    const dy = y - startPos.y;
    containerRef.current.scrollLeft = scrollStart.left - dx;
    containerRef.current.scrollTop = scrollStart.top - dy;
  };

  const onMouseMove = (e: MouseEvent) => onMove(e.clientX, e.clientY);
  const onTouchMove = (e: TouchEvent) =>
    onMove(e.touches[0]?.clientX || 0, e.touches[0]?.clientY || 0);

  // 종료
  const endDrag = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      // 영역 밖에서도 계속 작동하도록 window에 이벤트 등록
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', endDrag);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', endDrag);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', endDrag);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', endDrag);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', endDrag);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', endDrag);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`drag-scroll ${className}`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {children}
    </div>
  );
};

export default DragScroll;
