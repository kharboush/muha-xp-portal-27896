import { useState } from 'react';
import styled from 'styled-components';
import MuhaFilm from './MuhaFilm';

function InternetExplorer() {
  const [url] = useState('http://www.muhafilm.com/index.html');

  return (
    <Container>
      {/* Toolbar with File/Edit menus */}
      <section className="ie__toolbar">
        <div className="ie__options">
          <div className="ie__menu">
            <span className="ie__menu__item">File</span>
            <span className="ie__menu__item">Edit</span>
            <span className="ie__menu__item">View</span>
            <span className="ie__menu__item">Favorites</span>
            <span className="ie__menu__item">Tools</span>
            <span className="ie__menu__item">Help</span>
          </div>
        </div>
      </section>

      {/* Function bar with navigation buttons */}
      <section className="ie__function_bar">
        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src="/icons/back.png" alt="Back" />
          <span className="ie__function_bar__text">Back</span>
          <div className="ie__function_bar__arrow" />
        </div>
        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src="/icons/forward.png" alt="Forward" />
          <div className="ie__function_bar__arrow" />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src="/icons/stop.png" alt="Stop" />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src="/icons/refresh.png" alt="Refresh" />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src="/icons/home.png" alt="Home" />
        </div>
      </section>

      {/* Address bar */}
      <section className="ie__address_bar">
        <div className="ie__address_bar__title">Address</div>
        <div className="ie__address_bar__content">
          <img src="/icons/ie-paper.png" alt="ie" className="ie__address_bar__content__img" />
          <div className="ie__address_bar__content__text">{url}</div>
          <img src="/icons/dropdown.png" alt="dropdown" className="ie__address_bar__content__img" />
        </div>
        <div className="ie__address_bar__go">
          <img className="ie__address_bar__go__img" src="/icons/go.png" alt="go" />
          <span className="ie__address_bar__go__text">Go</span>
        </div>
      </section>

      {/* Content area */}
      <div className="ie__content">
        <div className="ie__content__inner">
          <MuhaFilm />
        </div>
      </div>

      {/* Status bar */}
      <footer className="ie__footer">
        <div className="ie__footer__status">
          <img className="ie__footer__status__img" src="/icons/ie-paper.png" alt="" />
          <span className="ie__footer__status__text">Done</span>
        </div>
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
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
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

  .ie__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }

  .ie__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 2px;
    flex: 1;
  }

  .ie__menu {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .ie__menu__item {
    padding: 2px 8px;
    font-size: 11px;
    
    &:hover {
      background: #3168d5;
      color: white;
    }
  }

  .ie__function_bar {
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .ie__function_bar__button {
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
    }
    
    &:hover:active {
      border: 1px solid rgb(185, 185, 185);
      background-color: #dedede;
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
      color: rgba(255, 255, 255, 0.7);
      
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }

  .ie__function_bar__button--disable {
    filter: grayscale(1);
    opacity: 0.7;
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  .ie__function_bar__text {
    margin-right: 4px;
  }

  .ie__function_bar__icon {
    height: 30px;
    width: 30px;
    
    &--margin-1 {
      margin: 0 -1px;
      height: 30px;
      width: 30px;
    }
  }

  .ie__function_bar__arrow {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 4px;
    
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }

  .ie__address_bar {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 22px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px 2px;
    box-shadow: inset 0 -2px 3px -1px #2d2d2d;
  }

  .ie__address_bar__title {
    line-height: 100%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }

  .ie__address_bar__content {
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    position: relative;
    
    &__img {
      width: 14px;
      height: 14px;
    }
    
    &__img:last-child {
      width: 15px;
      height: 15px;
      right: 1px;
      position: absolute;
      
      &:hover {
        filter: brightness(1.1);
      }
    }
    
    &__text {
      position: absolute;
      white-space: nowrap;
      left: 16px;
      right: 17px;
      overflow: hidden;
      font-size: 11px;
    }
  }

  .ie__address_bar__go {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    
    &__img {
      height: 95%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-right: 3px;
    }
  }

  .ie__content {
    flex: 1;
    overflow: auto;
    border-left: 1px solid #6f6f6f;
    background-color: #f1f1f1;
    position: relative;
  }

  .ie__content__inner {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .ie__footer {
    height: 20px;
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 3px rgba(50, 50, 50, 0.8);
    background-color: rgb(236, 233, 216);
    display: flex;
    align-items: center;
    padding-top: 2px;
    flex-shrink: 0;
  }

  .ie__footer__status {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 2px;
    
    &__text {
      font-size: 11px;
    }
    
    &__img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
  }

  .ie__footer__block {
    height: 85%;
    width: 22px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: inset 1px 0 rgba(255, 255, 255, 0.7);
  }
`;

export default InternetExplorer;
