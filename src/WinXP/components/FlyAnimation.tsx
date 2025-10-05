import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface Fly {
  id: string;
  corner: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  duration: number;
}

const wobble = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(1px, -1px); }
  50% { transform: translate(-1px, 1px); }
  75% { transform: translate(1px, 1px); }
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

const FlySprite = styled.div<{ 
  $corner: string;
  $duration: number;
}>`
  position: absolute;
  width: 24px;
  height: 24px;
  background-image: url('/icons/fly.png');
  background-size: contain;
  background-repeat: no-repeat;
  will-change: transform;
  
  ${({ $corner, $duration }) => {
    // Define paths for each corner (enter from one edge, exit through adjacent edge)
    switch ($corner) {
      case 'top-right':
        // Enter from top (near right), move diagonally down-right, exit right
        return `
          top: -24px;
          right: 5%;
          animation: 
            wobble 1.5s ease-in-out infinite,
            flyTopRight ${$duration}s ease-in-out forwards;
          transform: rotate(135deg);
          
          @keyframes flyTopRight {
            0% { top: -24px; right: 5%; }
            100% { top: 50%; right: -24px; }
          }
        `;
      case 'top-left':
        // Enter from top (near left), move diagonally down-left, exit left
        return `
          top: -24px;
          left: 5%;
          animation: 
            wobble 1.5s ease-in-out infinite,
            flyTopLeft ${$duration}s ease-in-out forwards;
          transform: rotate(225deg);
          
          @keyframes flyTopLeft {
            0% { top: -24px; left: 5%; }
            100% { top: 50%; left: -24px; }
          }
        `;
      case 'bottom-right':
        // Enter from right (near bottom), move diagonally down-left, exit bottom
        return `
          right: -24px;
          bottom: 5%;
          animation: 
            wobble 1.5s ease-in-out infinite,
            flyBottomRight ${$duration}s ease-in-out forwards;
          transform: rotate(225deg);
          
          @keyframes flyBottomRight {
            0% { right: -24px; bottom: 5%; }
            100% { right: 50%; bottom: -24px; }
          }
        `;
      case 'bottom-left':
        // Enter from left (near bottom), move diagonally down-right, exit bottom
        return `
          left: -24px;
          bottom: 5%;
          animation: 
            wobble 1.5s ease-in-out infinite,
            flyBottomLeft ${$duration}s ease-in-out forwards;
          transform: rotate(135deg);
          
          @keyframes flyBottomLeft {
            0% { left: -24px; bottom: 5%; }
            100% { left: 50%; bottom: -24px; }
          }
        `;
      default:
        return '';
    }
  }}
`;

const getRandomCorner = (): 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' => {
  const corners = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const;
  return corners[Math.floor(Math.random() * corners.length)];
};

export default function FlyAnimation() {
  const [flies, setFlies] = useState<Fly[]>([]);

  useEffect(() => {
    const spawnFly = () => {
      const newFly: Fly = {
        id: `fly-${Date.now()}-${Math.random()}`,
        corner: getRandomCorner(),
        duration: Math.random() * 4 + 3, // 3-7 seconds (faster, more visible)
      };

      setFlies(prev => [...prev, newFly]);

      // Remove fly after animation completes
      setTimeout(() => {
        setFlies(prev => prev.filter(f => f.id !== newFly.id));
      }, newFly.duration * 1000 + 500);
    };

    // Spawn initial fly after 5-10 seconds
    const initialTimeout = setTimeout(spawnFly, Math.random() * 5000 + 5000);

    // Spawn flies at random intervals (20-45 seconds)
    const spawnInterval = setInterval(() => {
      if (flies.length < 3) { // Max 3 flies at once
        spawnFly();
      }
    }, Math.random() * 25000 + 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(spawnInterval);
    };
  }, [flies.length]);

  return (
    <FlyContainer>
      {flies.map(fly => (
        <FlySprite
          key={fly.id}
          $corner={fly.corner}
          $duration={fly.duration}
        />
      ))}
    </FlyContainer>
  );
}
