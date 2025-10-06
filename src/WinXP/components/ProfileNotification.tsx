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
            <Username>{username}</Username> ви изпрати покана за приятелство
          </HeaderText>
          <MessageBox>
            Съобщение: {message}
          </MessageBox>
          <ButtonRow>
            <StyledButton>Приеми</StyledButton>
            <StyledButton>Откажи</StyledButton>
          </ButtonRow>
        </ContentArea>
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
  align-items: flex-start;
  gap: 16px;
  background: #D4D0C8;
  border-top: 2px solid #FFFFFF;
  border-left: 2px solid #FFFFFF;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  padding: 16px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);
  min-width: 500px;
`;

const AvatarFrame = styled.div`
  background: #FFFFFF;
  border-top: 3px solid #FFFFFF;
  border-left: 3px solid #FFFFFF;
  border-right: 3px solid #C0C0C0;
  border-bottom: 3px solid #C0C0C0;
  padding: 8px;
  flex-shrink: 0;
  box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  display: block;
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
  padding: 12px;
  font-family: 'Tahoma', 'MS Sans Serif', sans-serif;
  font-size: 13px;
  color: #C0C0C0;
  min-height: 60px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 4px;
`;

const StyledButton = styled.div`
  background: #ECE9D8;
  border-top: 2px solid #FFFFFF;
  border-left: 2px solid #FFFFFF;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  padding: 8px 24px;
  font-family: 'Tahoma', 'MS Sans Serif', sans-serif;
  font-size: 13px;
  color: #000000;
  text-align: center;
  cursor: default;
  min-width: 100px;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
`;
