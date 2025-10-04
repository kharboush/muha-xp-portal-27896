import styled from 'styled-components';
import { useRef, useEffect } from 'react';

interface DesktopIconProps {
  id: string;
  icon: string;
  title: string;
  onDoubleClick: () => void;
  onFocus: () => void;
  isFocused: boolean;
  className?: string;
}

function DesktopIcon({ id, icon, title, onDoubleClick, onFocus, isFocused, className }: DesktopIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  function _onMouseDown() {
    onFocus();
  }

  function _onDoubleClick() {
    onDoubleClick();
  }

  return (
    <div
      className={className}
      onMouseDown={_onMouseDown}
      onDoubleClick={_onDoubleClick}
      ref={ref}
    >
      <div className={`${className}__img__container`}>
        <img src={icon} alt={title} className={`${className}__img`} />
      </div>
      <div className={`${className}__text__container`}>
        <div className={`${className}__text`}>{title}</div>
      </div>
    </div>
  );
}

const StyledIcon = styled(DesktopIcon)`
  width: 70px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  &__text__container {
    width: 100%;
    font-size: 11px;
    color: white;
    text-shadow: 0 1px 1px black;
    margin-top: 5px;
    display: flex;
    justify-content: center;

    &:before {
      content: '';
      display: block;
      flex-grow: 1;
    }
    
    &:after {
      content: '';
      display: block;
      flex-grow: 1;
    }
  }
  
  &__text {
    padding: 0 3px 2px;
    background-color: ${({ isFocused }) =>
      isFocused ? '#0b61ff' : 'transparent'};
    text-align: center;
    flex-shrink: 1;
  }
  
  &__img__container {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: ${({ isFocused }) =>
      isFocused ? 'drop-shadow(0 0 3px blue)' : ''};
  }
  
  &__img {
    max-width: 32px;
    max-height: 32px;
    width: auto;
    height: auto;
    opacity: ${({ isFocused }) => (isFocused ? 0.7 : 1)};
  }
`;

export default StyledIcon;
