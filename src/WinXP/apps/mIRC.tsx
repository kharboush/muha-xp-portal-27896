import styled from 'styled-components';
import mircChatImage from '@/assets/mirc-chat.jpg';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #ede9dd 0%, #ebe5d5 100%);
  font-family: Tahoma, sans-serif;
`;

const MenuBar = styled.div`
  display: flex;
  gap: 12px;
  padding: 4px 8px;
  background: #f0f0f0;
  border-bottom: 1px solid #c0c0c0;
  font-size: 11px;
  height: 24px;
  align-items: center;
`;

const MenuItem = styled.div`
  padding: 2px 6px;
  cursor: pointer;
  &:hover {
    background: #3168d5;
    color: white;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background: #DDE2E9;
`;

const ChatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 8px;
  background: #ece9d8;
  border-top: 1px solid #fff;
  font-size: 11px;
  height: 20px;
  color: #000;
`;

export default function mIRC() {
  return (
    <Container>
      <MenuBar>
        <MenuItem>File</MenuItem>
        <MenuItem>View</MenuItem>
        <MenuItem>Tools</MenuItem>
        <MenuItem>Help</MenuItem>
      </MenuBar>
      <ContentArea>
        <ChatImage src={mircChatImage} alt="mIRC Chat" />
      </ContentArea>
      <Footer>
        Connected to server
      </Footer>
    </Container>
  );
}
