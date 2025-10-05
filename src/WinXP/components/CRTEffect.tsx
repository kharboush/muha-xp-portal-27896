import styled from 'styled-components';

const CRTContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
`;

const Scanlines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  animation: flicker 0.15s infinite;

  @keyframes flicker {
    0% {
      opacity: 0.98;
    }
    50% {
      opacity: 0.96;
    }
    100% {
      opacity: 0.98;
    }
  }
`;

const Vignette = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

const ScreenCurvature = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    transparent 50%,
    rgba(0, 0, 0, 0.05) 100%
  );
  border-radius: 2%;
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 100, 200, 0.02);
  mix-blend-mode: screen;
  animation: glow 4s ease-in-out infinite alternate;

  @keyframes glow {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const ChromaticAberration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
    opacity: 0.4;
  }
  
  &::before {
    background: radial-gradient(
      circle at center,
      transparent 0%,
      rgba(255, 0, 0, 0.03) 100%
    );
    transform: translateX(-1px);
  }
  
  &::after {
    background: radial-gradient(
      circle at center,
      transparent 0%,
      rgba(0, 255, 255, 0.03) 100%
    );
    transform: translateX(1px);
  }
`;

export default function CRTEffect() {
  return (
    <CRTContainer>
      <Scanlines />
      <Vignette />
      <ScreenCurvature />
      <GlowEffect />
      <ChromaticAberration />
    </CRTContainer>
  );
}
