import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const FLY_SIZE = 32;
const PROXIMITY_THRESHOLD = 120;
const FLEE_DISTANCE = 900;

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

const FlySprite = styled.div`
  width: ${FLY_SIZE}px;
  height: ${FLY_SIZE}px;
  background-image: url('/icons/fly.png');
  background-size: contain;
  background-repeat: no-repeat;
`;

const getRandomTopRightPosition = (): Position => {
  const x = window.innerWidth * (0.7 + Math.random() * 0.2); // 70-90% from left
  const y = window.innerHeight * (0.1 + Math.random() * 0.2); // 10-30% from top
  return { x, y };
};

const getOffScreenStartPosition = (targetPos: Position): Position => {
  // Start from off-screen to the right
  const distance = 200 + Math.random() * 100; // 200-300px off-screen
  return {
    x: window.innerWidth + distance,
    y: targetPos.y + (Math.random() - 0.5) * 100 // Slight y variation
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
  const [rotation, setRotation] = useState<number>(180);
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
        // Continue in current direction (current rotation)
        const angle = rotation * Math.PI / 180;
        
        const fleeTarget: Position = {
          x: flyPosition.x + Math.cos(angle) * FLEE_DISTANCE,
          y: flyPosition.y + Math.sin(angle) * FLEE_DISTANCE
        };

        const fleeDuration = 0.5 + Math.random() * 0.3; // 0.5-0.8s
        setDuration(fleeDuration);
        setTargetPosition(fleeTarget);
        setFlyState('fleeing');

        // After fleeing, go to hidden state
        timeoutRef.current = setTimeout(() => {
          setFlyState('hidden');
          
          // After ~30 seconds, respawn
          const respawnDelay = 28000 + Math.random() * 4000; // 28-32s
          timeoutRef.current = setTimeout(() => {
            const newTarget = getRandomTopRightPosition();
            const startPos = getOffScreenStartPosition(newTarget);
            const flyInDuration = 1.0 + Math.random() * 0.3; // 1.0-1.3s
            
            // First, position fly off-screen
            setFlyPosition(startPos);
            setRotation(calculateRotation(startPos, newTarget));
            
            // Then animate in on next frame
            requestAnimationFrame(() => {
              setTargetPosition(newTarget);
              setDuration(flyInDuration);
              setFlyState('flying-in');
            });
            
            // After flying in, become idle
            timeoutRef.current = setTimeout(() => {
              setFlyState('idle');
              setRotation(180); // Face right for quick escape
            }, flyInDuration * 1000);
          }, respawnDelay);
        }, fleeDuration * 1000);
      }
    };

    const interval = setInterval(checkProximity, 50);
    return () => clearInterval(interval);
  }, [flyState, flyPosition]);

  // Initial spawn
  useEffect(() => {
    const initialTarget = getRandomTopRightPosition();
    const startPos = getOffScreenStartPosition(initialTarget);
    const initialDuration = 1.0 + Math.random() * 0.3;
    
    // Position off-screen first
    setFlyPosition(startPos);
    setRotation(calculateRotation(startPos, initialTarget));
    
    // Animate in on next frame
    requestAnimationFrame(() => {
      setTargetPosition(initialTarget);
      setDuration(initialDuration);
      setFlyState('flying-in');
    });
    
    timeoutRef.current = setTimeout(() => {
      setFlyState('idle');
      setRotation(180); // Face right for quick escape
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
        <FlySprite />
      </FlyWrapper>
    </FlyContainer>
  );
}
