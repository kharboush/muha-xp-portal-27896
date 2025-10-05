import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface Fly {
  id: string;
  edge: 'top' | 'right' | 'bottom' | 'left';
  startPosition: number;
  duration: number;
  direction: 'forward' | 'backward';
}

const crawlTop = keyframes`
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(2px); }
  75% { transform: translateY(-2px); }
`;

const crawlRight = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
`;

const crawlBottom = keyframes`
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-2px); }
  75% { transform: translateY(2px); }
`;

const crawlLeft = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
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
  $edge: string;
  $startPosition: number;
  $duration: number;
  $direction: string;
}>`
  position: absolute;
  width: 24px;
  height: 24px;
  background-image: url('/icons/fly.png');
  background-size: contain;
  background-repeat: no-repeat;
  
  ${({ $edge, $startPosition, $duration, $direction }) => {
    const getRotation = () => {
      // Fly image is at -45° (facing top-left)
      // Add 45° to target angle to compensate
      if ($edge === 'top') {
        return $direction === 'forward' ? '135deg' : '-45deg'; // right or left
      } else if ($edge === 'right') {
        return $direction === 'forward' ? '225deg' : '45deg'; // down or up
      } else if ($edge === 'bottom') {
        return $direction === 'forward' ? '-45deg' : '135deg'; // left or right
      } else { // left
        return $direction === 'forward' ? '45deg' : '225deg'; // up or down
      }
    };

    switch ($edge) {
      case 'top':
        return `
          top: 0;
          left: ${$startPosition}%;
          animation: 
            crawlTop 2s ease-in-out infinite,
            flyMoveTop ${$duration}s linear forwards;
          transform: rotate(${getRotation()});
        `;
      case 'right':
        return `
          right: 0;
          top: ${$startPosition}%;
          animation: 
            crawlRight 2s ease-in-out infinite,
            flyMoveRight ${$duration}s linear forwards;
          transform: rotate(${getRotation()});
        `;
      case 'bottom':
        return `
          bottom: 0;
          right: ${$startPosition}%;
          animation: 
            crawlBottom 2s ease-in-out infinite,
            flyMoveBottom ${$duration}s linear forwards;
          transform: rotate(${getRotation()});
        `;
      case 'left':
        return `
          left: 0;
          bottom: ${$startPosition}%;
          animation: 
            crawlLeft 2s ease-in-out infinite,
            flyMoveLeft ${$duration}s linear forwards;
          transform: rotate(${getRotation()});
        `;
      default:
        return '';
    }
  }}

  @keyframes flyMoveTop {
    from { left: ${({ $startPosition }) => $startPosition}%; }
    to { left: ${({ $startPosition }) => ($startPosition > 50 ? -10 : 110)}%; }
  }

  @keyframes flyMoveRight {
    from { top: ${({ $startPosition }) => $startPosition}%; }
    to { top: ${({ $startPosition }) => ($startPosition > 50 ? -10 : 110)}%; }
  }

  @keyframes flyMoveBottom {
    from { right: ${({ $startPosition }) => $startPosition}%; }
    to { right: ${({ $startPosition }) => ($startPosition > 50 ? -10 : 110)}%; }
  }

  @keyframes flyMoveLeft {
    from { bottom: ${({ $startPosition }) => $startPosition}%; }
    to { bottom: ${({ $startPosition }) => ($startPosition > 50 ? -10 : 110)}%; }
  }
`;

const getRandomEdge = (): 'top' | 'right' | 'bottom' | 'left' => {
  const edges = ['top', 'right', 'bottom', 'left'] as const;
  return edges[Math.floor(Math.random() * edges.length)];
};

export default function FlyAnimation() {
  const [flies, setFlies] = useState<Fly[]>([]);

  useEffect(() => {
    const spawnFly = () => {
      const startPosition = Math.random() * 80 + 10; // 10-90% to avoid corners
      const newFly: Fly = {
        id: `fly-${Date.now()}-${Math.random()}`,
        edge: getRandomEdge(),
        startPosition,
        duration: Math.random() * 12 + 8, // 8-20 seconds
        direction: startPosition > 50 ? 'backward' : 'forward',
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
          $edge={fly.edge}
          $startPosition={fly.startPosition}
          $duration={fly.duration}
          $direction={fly.direction}
        />
      ))}
    </FlyContainer>
  );
}
