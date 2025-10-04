import { useRef, useState, useEffect, ComponentType } from 'react';
import styled from 'styled-components';
import { X, Minimize2, Maximize2 } from 'lucide-react';

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
}

const Container = styled.div<{ $show: boolean; $maximized: boolean; $zIndex: number }>`
  position: absolute;
  display: ${props => props.$show ? 'flex' : 'none'};
  flex-direction: column;
  background: #ece9d8;
  border: 3px solid;
  border-color: ${props => props.$zIndex > 0 ? '#0054e3 #0054e3 #0a0a0a #0a0a0a' : '#808080'};
  box-shadow: ${props => props.$zIndex > 0 ? '4px 4px 10px rgba(0,0,0,0.5)' : '2px 2px 5px rgba(0,0,0,0.3)'};
  z-index: ${props => props.$zIndex};
  
  ${props => props.$maximized ? `
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: calc(100% - 40px) !important;
  ` : ''}
`;

const TitleBar = styled.div<{ $active: boolean }>`
  height: 30px;
  background: ${props => props.$active 
    ? 'linear-gradient(180deg, #0997FF 0%, #0058EE 4%, #0044DD 6%, #0040DD 92%, #0055EE 96%, #0E8BFF 100%)'
    : 'linear-gradient(180deg, #7A96DF 0%, #5A7ACE 50%, #3A5AAD 100%)'};
  display: flex;
  align-items: center;
  padding: 0 4px;
  cursor: move;
  user-select: none;
`;

const TitleIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const Title = styled.div`
  flex: 1;
  color: white;
  font-size: 11px;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
`;

const TitleButtons = styled.div`
  display: flex;
  gap: 2px;
`;

const TitleButton = styled.button`
  width: 21px;
  height: 21px;
  background: linear-gradient(180deg, #dedad2 0%, #c4c0b8 100%);
  border: 1px solid;
  border-color: #ffffff #000000 #000000 #ffffff;
  display: flex;
  align-items: center;
  justify-center;
  cursor: pointer;
  padding: 0;
  
  &:active {
    background: linear-gradient(180deg, #c4c0b8 0%, #dedad2 100%);
    border-color: #000000 #ffffff #ffffff #000000;
  }
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  overflow: hidden;
  background: white;
`;

export default function Window(props: WindowProps) {
  const {
    id,
    title,
    icon,
    width,
    height,
    x,
    y,
    zIndex,
    minimized,
    maximized,
    component: Component,
    onFocus,
    onClose,
    onMinimize,
    onMaximize,
    isFocused
  } = props;

  const [position, setPosition] = useState({ x, y });
  const [size, setSize] = useState({ width, height });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (maximized) return;
    onFocus(id);
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
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

  return (
    <Container
      ref={containerRef}
      $show={!minimized}
      $maximized={maximized}
      $zIndex={zIndex}
      style={!maximized ? {
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`
      } : undefined}
      onMouseDown={() => onFocus(id)}
    >
      <TitleBar $active={isFocused} onMouseDown={handleMouseDown}>
        {icon && <TitleIcon src={icon} alt="" />}
        <Title>{title}</Title>
        <TitleButtons>
          <TitleButton onClick={(e) => { e.stopPropagation(); onMinimize(id); }}>
            <Minimize2 />
          </TitleButton>
          <TitleButton onClick={(e) => { e.stopPropagation(); onMaximize(id); }}>
            <Maximize2 />
          </TitleButton>
          <TitleButton onClick={(e) => { e.stopPropagation(); onClose(id); }}>
            <X />
          </TitleButton>
        </TitleButtons>
      </TitleBar>
      <ContentArea>
        <Component onClose={() => onClose(id)} />
      </ContentArea>
    </Container>
  );
}
