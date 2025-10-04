import { useRef, useState, useEffect, ComponentType, memo } from 'react';
import styled from 'styled-components';
import HeaderButtons from './HeaderButtons';

interface WindowProps {
  id: number;
  title: string;
  icon?: string;
  width: number;
  height: number;
  x: number;
  y: number;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
  resizable: boolean;
  component: ComponentType<any>;
  onFocus: (id: number) => void;
  onClose: (id: number) => void;
  onMinimize: (id: number) => void;
  onMaximize: (id: number) => void;
  isFocused: boolean;
  className?: string;
}

const Window = memo(function Window(props: WindowProps) {
  const {
    id,
    title,
    icon,
    width,
    height,
    x,
    y,
    maximized,
    resizable,
    component: Component,
    onFocus,
    onClose,
    onMinimize,
    onMaximize,
    isFocused,
    className
  } = props;

  const [position, setPosition] = useState({ x, y });
  const [size, setSize] = useState({ width, height });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const dragRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (maximized) return;
    onFocus(id);
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleDoubleClickHeader = (e: React.MouseEvent) => {
    if (e.target !== dragRef.current) return;
    if (resizable) onMaximize(id);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || maximized) return;
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart, maximized]);

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  let finalWidth, finalHeight, finalX, finalY;
  if (maximized) {
    finalWidth = windowWidth + 6;
    finalHeight = windowHeight - 24;
    finalX = -3;
    finalY = -3;
  } else {
    finalWidth = size.width;
    finalHeight = size.height;
    finalX = position.x;
    finalY = position.y;
  }

  return (
    <div
      className={className}
      onMouseDown={() => onFocus(id)}
      style={{
        transform: `translate(${finalX}px,${finalY}px)`,
        width: finalWidth ? `${finalWidth}px` : 'auto',
        height: finalHeight ? `${finalHeight}px` : 'auto',
        zIndex: props.zIndex,
      }}
    >
      <div className="header__bg" />
      <header
        className="app__header"
        ref={dragRef}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClickHeader}
      >
        <img
          onDoubleClick={() => onClose(id)}
          src={icon}
          alt={title}
          className="app__header__icon"
          draggable={false}
        />
        <div className="app__header__title">{title}</div>
        <HeaderButtons
          onMaximize={() => onMaximize(id)}
          onMinimize={() => onMinimize(id)}
          onClose={() => onClose(id)}
          maximized={maximized}
          resizable={resizable}
          isFocus={isFocused}
        />
      </header>
      <div className="app__content">
        <Component onClose={() => onClose(id)} />
      </div>
    </div>
  );
});

const StyledWindow = styled(Window)`
  display: flex;
  position: absolute;
  padding: 3px;
  background-color: ${({ isFocused }) => (isFocused ? '#0831d9' : '#6582f5')};
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  
  .header__bg {
    background: ${({ isFocused }) =>
      isFocused
        ? 'linear-gradient(to bottom,#0058ee 0%,#3593ff 4%,#288eff 6%,#127dff 8%,#036ffc 10%,#0262ee 14%,#0057e5 20%,#0054e3 24%,#0055eb 56%,#005bf5 66%,#026afe 76%,#0062ef 86%,#0052d6 92%,#0040ab 94%,#003092 100%)'
        : 'linear-gradient(to bottom, #7697e7 0%,#7e9ee3 3%,#94afe8 6%,#97b4e9 8%,#82a5e4 14%,#7c9fe2 17%,#7996de 25%,#7b99e1 56%,#82a9e9 81%,#80a5e7 89%,#7b96e1 94%,#7a93df 97%,#abbae3 100%)'};
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 28px;
    pointer-events: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
  }
  
  .header__bg:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    opacity: ${({ isFocused }) => (isFocused ? 1 : 0.3)};
    background: linear-gradient(to right, #1638e6 0%, transparent 100%);
    top: 0;
    bottom: 0;
    width: 15px;
  }
  
  .header__bg:after {
    content: '';
    opacity: ${({ isFocused }) => (isFocused ? 1 : 0.4)};
    display: block;
    position: absolute;
    right: 0;
    background: linear-gradient(to left, #1638e6 0%, transparent 100%);
    top: 0;
    bottom: 0;
    width: 15px;
  }
  
  .app__header {
    display: flex;
    height: 25px;
    line-height: 25px;
    font-weight: 700;
    font-size: 12px;
    font-family: 'Noto Sans';
    text-shadow: 1px 1px #000;
    color: white;
    position: absolute;
    left: 3px;
    right: 3px;
    align-items: center;
    cursor: move;
  }
  
  .app__header__icon {
    width: 15px;
    height: 15px;
    margin-left: 1px;
    margin-right: 3px;
  }
  
  .app__header__title {
    flex: 1;
    pointer-events: none;
    padding-right: 5px;
    letter-spacing: 0.5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  
  .app__content {
    flex: 1;
    position: relative;
    margin-top: 25px;
    height: calc(100% - 25px);
  }
`;

export default StyledWindow;
