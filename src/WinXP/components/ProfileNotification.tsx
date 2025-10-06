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
  top: 20px;
  right: 20px;
  z-index: 9999;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '-20px'});
  transition: all 0.3s ease-out;
`;

const NotificationCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 250px;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const MessageText = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #1C1E21;
  font-weight: 400;
`;
