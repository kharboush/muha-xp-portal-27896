import styled from 'styled-components';
import { FC } from 'react';

interface DesktopIconProps {
  icon: string;
  title: string;
  onDoubleClick: () => void;
  onFocus: () => void;
  isFocused: boolean;
}

const Container = styled.div<{ $focused: boolean }>`
  width: 75px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
  background: ${props => props.$focused ? 'rgba(49, 104, 213, 0.5)' : 'transparent'};
  border: 1px solid ${props => props.$focused ? 'rgba(49, 104, 213, 0.8)' : 'transparent'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const IconImage = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
  filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.5));
`;

const IconTitle = styled.div`
  color: white;
  font-size: 11px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  word-wrap: break-word;
  width: 100%;
`;

export default function DesktopIcon({ icon, title, onDoubleClick, onFocus, isFocused }: DesktopIconProps) {
  return (
    <Container
      $focused={isFocused}
      onMouseDown={onFocus}
      onDoubleClick={onDoubleClick}
    >
      <IconImage src={icon} alt={title} />
      <IconTitle>{title}</IconTitle>
    </Container>
  );
}
