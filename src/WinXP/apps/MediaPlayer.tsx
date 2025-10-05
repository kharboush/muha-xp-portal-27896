import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

// Declare YouTube IFrame API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

function MediaPlayer() {
  // Default YouTube video - can be changed to any video ID
  const videoId = 'dQw4w9WgXcQ';
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setApiReady(true);
      };
    } else {
      setApiReady(true);
    }
  }, []);

  useEffect(() => {
    if (apiReady && !playerRef.current) {
      playerRef.current = new window.YT.Player('youtube-player', {
        events: {
          onStateChange: (event: any) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    }
  }, [apiReady]);

  const togglePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  const toggleFullscreen = () => {
    if (iframeRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        iframeRef.current.requestFullscreen();
      }
    }
  };

  return (
    <Container>
      {/* Menu bar */}
      <section className="mp__toolbar">
        <div className="mp__menu">
          <span className="mp__menu__item">File</span>
          <span className="mp__menu__item">View</span>
          <span className="mp__menu__item">Play</span>
          <span className="mp__menu__item">Tools</span>
          <span className="mp__menu__item">Help</span>
        </div>
      </section>

      {/* Video player area */}
      <div className="mp__content">
        <div className="mp__video">
          <iframe
            ref={iframeRef}
            id="youtube-player"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoId}&enablejsapi=1`}
            title="Media Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mp__controls">
          <button className="mp__control_btn" onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button className="mp__control_btn" onClick={toggleFullscreen}>
            Full Screen
          </button>
        </div>
      </div>

      {/* Status bar */}
      <footer className="mp__footer">
        <div className="mp__footer__status">
          <span className="mp__footer__status__text">Ready</span>
        </div>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to bottom, #ece9d8 0%, #d4d0c8 100%);

  .mp__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 24px;
    background: linear-gradient(to bottom, #f1f1f1 0%, #d8d8d8 100%);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    flex-shrink: 0;
  }

  .mp__menu {
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 4px;
  }

  .mp__menu__item {
    padding: 2px 8px;
    font-size: 11px;
    color: #000;
    
    &:hover {
      background: #3168d5;
      color: white;
    }
  }

  .mp__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .mp__video {
    flex: 1;
    background: #000;
    border: 1px solid #999;
  }

  .mp__controls {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 4px;
  }

  .mp__control_btn {
    background: linear-gradient(to bottom, #f8f8f8 0%, #e0e0e0 100%);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 4px 12px;
    font-size: 16px;
    min-width: 40px;
    
    &:hover {
      background: linear-gradient(to bottom, #fff 0%, #e8e8e8 100%);
    }
    
    &:active {
      background: linear-gradient(to bottom, #e0e0e0 0%, #f8f8f8 100%);
      border: 1px solid #666;
    }
  }

  .mp__footer {
    height: 20px;
    background: linear-gradient(to bottom, #f1f1f1 0%, #d8d8d8 100%);
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    padding: 0 4px;
    flex-shrink: 0;
  }

  .mp__footer__status {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    
    &__text {
      font-size: 11px;
      color: #000;
    }
  }
`;

export default MediaPlayer;
