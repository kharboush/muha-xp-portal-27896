import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const FLY_SIZE = 20;

interface Fly {
  id: string;
  corner: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  duration: number;
}

const wobble = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(0.5px, -0.5px); }
  50% { transform: translate(-0.5px, 0.5px); }
  75% { transform: translate(0.5px, 0.5px); }
`;

const FlyContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10001;
`;

const FlyWrapper = styled.div<{ 
  $corner: string;
  $duration: number;
}>`
  position: absolute;
  width: ${FLY_SIZE}px;
  height: ${FLY_SIZE}px;
  will-change: top, left, right, bottom;
  
  ${({ $corner, $duration }) => {
    const rotationByCorner = {
      'top-right': 180,
      'bottom-left': 180,
      'top-left': -90,
      'bottom-right': -90
    };
    
    const rotation = rotationByCorner[$corner as keyof typeof rotationByCorner] || 0;
    
    switch ($corner) {
      case 'top-right':
        return `
          top: -${FLY_SIZE}px;
          right: 5%;
          transform: rotate(${rotation}deg);
          animation: flyTopRight ${$duration}s linear forwards;
          
          @keyframes flyTopRight {
            0% { top: -${FLY_SIZE}px; right: 5%; }
            100% { top: 50%; right: -${FLY_SIZE}px; }
          }
        `;
      case 'top-left':
        return `
          top: -${FLY_SIZE}px;
          left: 5%;
          transform: rotate(${rotation}deg);
          animation: flyTopLeft ${$duration}s linear forwards;
          
          @keyframes flyTopLeft {
            0% { top: -${FLY_SIZE}px; left: 5%; }
            100% { top: 50%; left: -${FLY_SIZE}px; }
          }
        `;
      case 'bottom-right':
        return `
          right: -${FLY_SIZE}px;
          bottom: 5%;
          transform: rotate(${rotation}deg);
          animation: flyBottomRight ${$duration}s linear forwards;
          
          @keyframes flyBottomRight {
            0% { right: -${FLY_SIZE}px; bottom: 5%; }
            100% { right: 50%; bottom: -${FLY_SIZE}px; }
          }
        `;
      case 'bottom-left':
        return `
          left: -${FLY_SIZE}px;
          bottom: 5%;
          transform: rotate(${rotation}deg);
          animation: flyBottomLeft ${$duration}s linear forwards;
          
          @keyframes flyBottomLeft {
            0% { left: -${FLY_SIZE}px; bottom: 5%; }
            100% { left: 50%; bottom: -${FLY_SIZE}px; }
          }
        `;
      default:
        return '';
    }
  }}
`;

const FlySprite = styled.div`
  width: ${FLY_SIZE}px;
  height: ${FLY_SIZE}px;
  background-image: url('/icons/fly.png');
  background-size: contain;
  background-repeat: no-repeat;
  animation: wobble 1.5s ease-in-out infinite;
`;

const getRandomCorner = (): 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' => {
  const corners = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const;
  return corners[Math.floor(Math.random() * corners.length)];
};

export default function FlyAnimation() {
  const [flies, setFlies] = useState<Fly[]>([]);

  useEffect(() => {
    const spawnFly = () => {
      if (flies.length >= 2) return; // Max 2 flies at once

      const newFly: Fly = {
        id: `fly-${Date.now()}-${Math.random()}`,
        corner: getRandomCorner(),
        duration: Math.random() * 1.0 + 1.2, // 1.2-2.2 seconds (quick corner traversal)
      };

      setFlies(prev => [...prev, newFly]);

      // Remove fly after animation completes
      setTimeout(() => {
        setFlies(prev => prev.filter(f => f.id !== newFly.id));
      }, newFly.duration * 1000 + 100);

      // Schedule next fly with random delay (12-28 seconds)
      const nextDelay = Math.random() * 16000 + 12000;
      setTimeout(spawnFly, nextDelay);
    };

    // Start the spawn cycle after initial delay (5-10 seconds)
    const initialTimeout = setTimeout(spawnFly, Math.random() * 5000 + 5000);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <FlyContainer>
      {flies.map(fly => (
        <FlyWrapper
          key={fly.id}
          $corner={fly.corner}
          $duration={fly.duration}
        >
          <FlySprite />
        </FlyWrapper>
      ))}
    </FlyContainer>
  );
}
