import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppWindow } from '../types';

interface TaskbarProps {
  windows: AppWindow[];
  focusedWindowId: number | null;
  onWindowClick: (id: number) => void;
  onStartClick: () => void;
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(180deg, #245edb 0%, #3a6dff 6%, #2555da 10%, #1941a5 14%, #1941a5 81%, #1a44ab 85%, #2453c5 90%, #3e82ff 100%);
  border-top: 2px solid #1941a5;
  display: flex;
  align-items: center;
  padding: 0 4px;
  z-index: 10000;
`;

const StartButton = styled.button`
  height: 32px;
  padding: 0 12px 0 8px;
  background: linear-gradient(180deg, #5eab5c 0%, #3d903c 50%, #2e7d2c 100%);
  border: 1px solid;
  border-color: #5eab5c #2e7d2c #2e7d2c #5eab5c;
  border-radius: 0 8px 8px 0;
  color: white;
  font-weight: bold;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  
  &:hover {
    background: linear-gradient(180deg, #6fbf6d 0%, #4da54b 50%, #3e8e3c 100%);
  }
  
  &:active {
    background: linear-gradient(180deg, #4d9a4b 0%, #347634 50%, #25632c 100%);
    border-color: #2e7d2c #5eab5c #5eab5c #2e7d2c;
  }
`;

const StartIcon = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00);
  border-radius: 2px;
`;

const WindowButtons = styled.div`
  flex: 1;
  display: flex;
  gap: 4px;
  margin-left: 8px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
`;

const WindowButton = styled.button<{ $active: boolean }>`
  min-width: 160px;
  max-width: 200px;
  height: 28px;
  padding: 0 8px;
  background: ${props => props.$active 
    ? 'linear-gradient(180deg, #3c7bff 0%, #2453c5 100%)'
    : 'linear-gradient(180deg, #1a44ab 0%, #1941a5 100%)'};
  border: 1px solid;
  border-color: ${props => props.$active
    ? '#000000 #ffffff #ffffff #000000'
    : '#ffffff #000000 #000000 #ffffff'};
  color: white;
  font-size: 11px;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    background: linear-gradient(180deg, #3c7bff 0%, #2453c5 100%);
  }
`;

const SystemTray = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  border-left: 1px solid #1941a5;
  height: 100%;
`;

const Clock = styled.div`
  color: white;
  font-size: 11px;
  padding: 4px 8px;
  background: rgba(0,0,0,0.1);
  border: 1px inset rgba(255,255,255,0.2);
`;

export default function Taskbar({ windows, focusedWindowId, onWindowClick, onStartClick }: TaskbarProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  return (
    <Container>
      <StartButton onClick={onStartClick}>
        <StartIcon />
        start
      </StartButton>
      <WindowButtons>
        {windows.filter(w => !w.minimized).map(window => (
          <WindowButton
            key={window.id}
            $active={window.id === focusedWindowId}
            onClick={() => onWindowClick(window.id)}
            title={window.title}
          >
            {window.title}
          </WindowButton>
        ))}
      </WindowButtons>
      <SystemTray>
        <Clock>{formatTime()}</Clock>
      </SystemTray>
    </Container>
  );
}
