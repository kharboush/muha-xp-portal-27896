import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ProfileNotificationProps {
  show: boolean;
  profileImage: string;
  message: string;
  onDismiss: () => void;
}

export function ProfileNotification({ show, profileImage, message, onDismiss }: ProfileNotificationProps) {
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
        <ProfileImage src={profileImage} alt="Profile" />
        <MessageText>{message}</MessageText>
      </NotificationCard>
    </NotificationContainer>
  );
}

const NotificationContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 40px;
  right: 20px;
  z-index: 9999;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '20px'});
  transition: all 0.3s ease-out;
`;

const NotificationCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ECE9D8;
  border-top: 2px solid #FFFFFF;
  border-left: 2px solid #FFFFFF;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;
  padding: 8px 12px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
  min-width: 280px;
`;

const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  flex-shrink: 0;
  border-top: 1px solid #404040;
  border-left: 1px solid #404040;
  border-right: 1px solid #FFFFFF;
  border-bottom: 1px solid #FFFFFF;
  box-shadow: inset 1px 1px 0px rgba(0, 0, 0, 0.2);
`;

const MessageText = styled.div`
  font-family: 'Tahoma', 'MS Sans Serif', sans-serif;
  font-size: 13px;
  color: #000000;
  font-weight: 400;
`;
