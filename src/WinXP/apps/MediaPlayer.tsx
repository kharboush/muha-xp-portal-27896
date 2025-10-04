import styled from 'styled-components';

function MediaPlayer() {
  // Default YouTube video - can be changed to any video ID
  const videoId = 'dQw4w9WgXcQ';

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
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
            title="Media Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
  background: linear-gradient(to bottom, #0c59b9 0%, #1c77d4 50%, #0c59b9 100%);

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
    cursor: pointer;
    color: #000;
    
    &:hover {
      background: #3168d5;
      color: white;
    }
  }

  .mp__content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    position: relative;
  }

  .mp__video {
    width: 100%;
    height: 100%;
    background: #000;
    border: 2px solid rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
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
