import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ProfileNotificationProps {
  show: boolean;
  profileImage: string;
  username: string;
  message: string;
  onDismiss: () => void;
}

export function ProfileNotification({ show, profileImage, username, message, onDismiss }: ProfileNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 50);
      
      const dismissTimer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setShouldRender(false);
          onDismiss();
        }, 300);
      }, 5000);

      return () => clearTimeout(dismissTimer);
    }
  }, [show, onDismiss]);

  if (!shouldRender) return null;

  return (
    <NotificationContainer $isVisible={isVisible}>
      <NotificationCard>
        <AvatarFrame>
          <ProfileImage src={profileImage} alt="Profile" />
        </AvatarFrame>
        <ContentArea>
          <HeaderText>
            <Username>{username}</Username> sent you a friend request
          </HeaderText>
          <MessageBox>
            Message: {message}
          </MessageBox>
        </ContentArea>
      </NotificationCard>
    </NotificationContainer>
  );
}

const NotificationContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 40px;
  right: 20px;
  left: 20px;
  z-index: 9999;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '20px'});
  transition: all 0.3s ease-out;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
  
  @media (max-width: 640px) {
    right: 10px;
    left: 10px;
  }
`;

const NotificationCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #D4D0C8;
  border-top: 2px solid #FFFFFF;
  border-left: 2px solid #FFFFFF;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  padding: 12px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);
  max-width: 380px;
  width: 100%;
  pointer-events: auto;
  
  @media (max-width: 640px) {
    max-width: 100%;
    gap: 8px;
    padding: 10px;
  }
`;

const AvatarFrame = styled.div`
  background: #FFFFFF;
  border-top: 3px solid #FFFFFF;
  border-left: 3px solid #FFFFFF;
  border-right: 3px solid #C0C0C0;
  border-bottom: 3px solid #C0C0C0;
  padding: 6px;
  flex-shrink: 0;
  box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  display: block;
  
  @media (max-width: 640px) {
    width: 60px;
    height: 60px;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HeaderText = styled.div`
  font-family: 'Tahoma', 'MS Sans Serif', sans-serif;
  font-size: 13px;
  color: #808080;
  font-weight: 400;
`;

const Username = styled.span`
  color: #4169E1;
  font-weight: 400;
`;

const MessageBox = styled.div`
  background: #FFFFFF;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  border-right: 1px solid #FFFFFF;
  border-bottom: 1px solid #FFFFFF;
  padding: 10px;
  font-family: 'Tahoma', 'MS Sans Serif', sans-serif;
  font-size: 12px;
  color: #000000;
  min-height: 50px;
`;
