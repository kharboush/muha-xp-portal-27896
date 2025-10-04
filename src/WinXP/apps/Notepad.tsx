import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ece9d8;
`;

const MenuBar = styled.div`
  background: #f0f0f0;
  border-bottom: 1px solid #c0c0c0;
  padding: 2px;
  display: flex;
  gap: 8px;
  font-size: 11px;
`;

const MenuItem = styled.div`
  padding: 2px 8px;
  &:hover {
    background: #3168d5;
    color: white;
  }
`;

const TextArea = styled.textarea`
  flex: 1;
  border: none;
  padding: 8px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  resize: none;
  outline: none;
`;

export default function Notepad() {
  const [text, setText] = useState('');

  return (
    <Container>
      <MenuBar>
        <MenuItem>File</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Format</MenuItem>
        <MenuItem>View</MenuItem>
        <MenuItem>Help</MenuItem>
      </MenuBar>
      <TextArea 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </Container>
  );
}
