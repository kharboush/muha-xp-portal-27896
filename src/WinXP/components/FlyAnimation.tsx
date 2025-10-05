import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const FLY_SIZE = 20;
const PROXIMITY_THRESHOLD = 120;
const FLEE_DISTANCE = 600;

type FlyState = 'idle' | 'fleeing' | 'flying-in' | 'hidden';

interface Position {
  x: number;
  y: number;
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
  $x: number;
  $y: number;
  $rotation: number;
  $isMoving: boolean;
  $duration: number;
}>`
  position: absolute;
  width: ${FLY_SIZE}px;
  height: ${FLY_SIZE}px;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  transform: rotate(${({ $rotation }) => $rotation}deg);
  transition: left ${({ $duration }) => $duration}s linear,
              top ${({ $duration }) => $duration}s linear,
              transform ${({ $duration }) => $duration}s linear,
              filter 0.1s ease-out;
  will-change: left, top, transform, filter;
  filter: ${({ $isMoving }) => $isMoving ? 'blur(3px)' : 'none'};
`;

const FlySprite = styled.div<{ $isIdle: boolean }>`
  width: ${FLY_SIZE}px;
  height: ${FLY_SIZE}px;
  background-image: url('/icons/fly.png');
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${({ $isIdle }) => $isIdle ? 'wobble 1.5s ease-in-out infinite' : 'none'};
  
  @keyframes wobble {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(0.5px, -0.5px); }
    50% { transform: translate(-0.5px, 0.5px); }
    75% { transform: translate(0.5px, 0.5px); }
  }
`;

const getRandomTopRightPosition = (): Position => {
  const x = window.innerWidth * (0.7 + Math.random() * 0.2); // 70-90% from left
  const y = window.innerHeight * (0.1 + Math.random() * 0.2); // 10-30% from top
  return { x, y };
};

const getOffScreenStartPosition = (targetPos: Position): Position => {
  // Start from outside the screen, opposite to target
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.max(window.innerWidth, window.innerHeight);
  return {
    x: targetPos.x + Math.cos(angle) * distance,
    y: targetPos.y + Math.sin(angle) * distance
  };
};

const calculateDistance = (pos1: Position, pos2: Position): number => {
  return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
};

const calculateRotation = (from: Position, to: Position): number => {
  const angle = Math.atan2(to.y - from.y, to.x - from.x);
  return (angle * 180 / Math.PI) + 90; // +90 to adjust for fly sprite orientation
};

export default function FlyAnimation() {
  const [flyState, setFlyState] = useState<FlyState>('hidden');
  const [flyPosition, setFlyPosition] = useState<Position>({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState<Position>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<number>(-135);
  const [duration, setDuration] = useState<number>(0);
  const mousePosition = useRef<Position>({ x: -1000, y: -1000 });
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Proximity detection
  useEffect(() => {
    if (flyState !== 'idle') return;

    const checkProximity = () => {
      const distance = calculateDistance(flyPosition, mousePosition.current);
      
      if (distance < PROXIMITY_THRESHOLD) {
        // Calculate flee direction (away from cursor)
        const dx = flyPosition.x - mousePosition.current.x;
        const dy = flyPosition.y - mousePosition.current.y;
        const angle = Math.atan2(dy, dx);
        
        const fleeTarget: Position = {
          x: flyPosition.x + Math.cos(angle) * FLEE_DISTANCE,
          y: flyPosition.y + Math.sin(angle) * FLEE_DISTANCE
        };

        const fleeDuration = 0.8 + Math.random() * 0.4; // 0.8-1.2s
        setDuration(fleeDuration);
        setTargetPosition(fleeTarget);
        setRotation(calculateRotation(flyPosition, fleeTarget));
        setFlyState('fleeing');

        // After fleeing, go to hidden state
        timeoutRef.current = setTimeout(() => {
          setFlyState('hidden');
          
          // After 40-50 seconds, respawn
          const respawnDelay = 40000 + Math.random() * 10000; // 40-50s
          timeoutRef.current = setTimeout(() => {
            const newTarget = getRandomTopRightPosition();
            const startPos = getOffScreenStartPosition(newTarget);
            const flyInDuration = 1.5 + Math.random() * 0.5; // 1.5-2s
            
            setFlyPosition(startPos);
            setTargetPosition(newTarget);
            setRotation(calculateRotation(startPos, newTarget));
            setDuration(flyInDuration);
            setFlyState('flying-in');
            
            // After flying in, become idle
            timeoutRef.current = setTimeout(() => {
              setFlyState('idle');
              setRotation(-135); // Default idle rotation
            }, flyInDuration * 1000);
          }, respawnDelay);
        }, fleeDuration * 1000);
      }
    };

    const interval = setInterval(checkProximity, 50);
    return () => clearInterval(interval);
  }, [flyState, flyPosition]);

  // Update position when target changes
  useEffect(() => {
    if (flyState === 'fleeing' || flyState === 'flying-in') {
      setFlyPosition(targetPosition);
    }
  }, [targetPosition, flyState]);

  // Initial spawn
  useEffect(() => {
    const initialTarget = getRandomTopRightPosition();
    const startPos = getOffScreenStartPosition(initialTarget);
    const initialDuration = 1.5 + Math.random() * 0.5;
    
    setFlyPosition(startPos);
    setTargetPosition(initialTarget);
    setRotation(calculateRotation(startPos, initialTarget));
    setDuration(initialDuration);
    setFlyState('flying-in');
    
    timeoutRef.current = setTimeout(() => {
      setFlyState('idle');
      setRotation(-135);
    }, initialDuration * 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (flyState === 'hidden') return null;

  return (
    <FlyContainer>
      <FlyWrapper
        $x={flyPosition.x}
        $y={flyPosition.y}
        $rotation={rotation}
        $isMoving={flyState === 'fleeing' || flyState === 'flying-in'}
        $duration={duration}
      >
        <FlySprite $isIdle={flyState === 'idle'} />
      </FlyWrapper>
    </FlyContainer>
  );
}
