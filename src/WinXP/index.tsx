import { useReducer, useCallback } from 'react';
import styled from 'styled-components';
import Window from './components/Window';
import DesktopIcon from './components/DesktopIcon';
import Taskbar from './components/Taskbar';
import { appSettings, desktopIcons } from './apps';
import { AppWindow } from './types';
import {
  ADD_APP,
  DEL_APP,
  FOCUS_APP,
  MINIMIZE_APP,
  TOGGLE_MAXIMIZE_APP,
  FOCUS_ICON,
  FOCUS_DESKTOP,
} from './constants/actions';

interface State {
  windows: AppWindow[];
  nextWindowId: number;
  nextZIndex: number;
  focusedWindowId: number | null;
  focusedIconId: string | null;
}

const initialState: State = {
  windows: [
    // Auto-open IE with MUHA content
    {
      id: 0,
      component: appSettings.InternetExplorer.component,
      title: appSettings.InternetExplorer.title,
      icon: appSettings.InternetExplorer.icon,
      width: appSettings.InternetExplorer.width,
      height: appSettings.InternetExplorer.height,
      x: appSettings.InternetExplorer.x,
      y: appSettings.InternetExplorer.y,
      zIndex: 1,
      minimized: false,
      maximized: window.innerWidth < 900,
      resizable: appSettings.InternetExplorer.resizable,
    },
  ],
  nextWindowId: 1,
  nextZIndex: 2,
  focusedWindowId: 0,
  focusedIconId: null,
};

type Action =
  | { type: typeof ADD_APP; payload: string }
  | { type: typeof DEL_APP; payload: number }
  | { type: typeof FOCUS_APP; payload: number }
  | { type: typeof MINIMIZE_APP; payload: number }
  | { type: typeof TOGGLE_MAXIMIZE_APP; payload: number }
  | { type: typeof FOCUS_ICON; payload: string }
  | { type: typeof FOCUS_DESKTOP };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ADD_APP: {
      const appConfig = appSettings[action.payload];
      if (!appConfig) return state;

      // Check if window already exists (unless multiInstance is true)
      const existingWindow = state.windows.find(
        (w) => w.title === appConfig.title
      );
      if (existingWindow && !appConfig.multiInstance) {
        // Just focus existing window
        return {
          ...state,
          windows: state.windows.map((w) =>
            w.id === existingWindow.id
              ? { ...w, minimized: false, zIndex: state.nextZIndex }
              : w
          ),
          focusedWindowId: existingWindow.id,
          nextZIndex: state.nextZIndex + 1,
        };
      }

      // Create new window
      const newWindow: AppWindow = {
        id: state.nextWindowId,
        component: appConfig.component,
        title: appConfig.title,
        icon: appConfig.icon,
        width: appConfig.width,
        height: appConfig.height,
        x: appConfig.x + (state.nextWindowId * 30), // Cascade windows
        y: appConfig.y + (state.nextWindowId * 30),
        zIndex: state.nextZIndex,
        minimized: false,
        maximized: false,
        resizable: appConfig.resizable,
      };

      return {
        ...state,
        windows: [...state.windows, newWindow],
        nextWindowId: state.nextWindowId + 1,
        nextZIndex: state.nextZIndex + 1,
        focusedWindowId: newWindow.id,
      };
    }

    case DEL_APP:
      return {
        ...state,
        windows: state.windows.filter((w) => w.id !== action.payload),
        focusedWindowId:
          state.focusedWindowId === action.payload
            ? null
            : state.focusedWindowId,
      };

    case FOCUS_APP: {
      const window = state.windows.find((w) => w.id === action.payload);
      if (!window) return state;

      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.payload
            ? { ...w, minimized: false, zIndex: state.nextZIndex }
            : w
        ),
        nextZIndex: state.nextZIndex + 1,
        focusedWindowId: action.payload,
        focusedIconId: null,
      };
    }

    case MINIMIZE_APP:
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.payload ? { ...w, minimized: true } : w
        ),
      };

    case TOGGLE_MAXIMIZE_APP:
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.payload ? { ...w, maximized: !w.maximized } : w
        ),
      };

    case FOCUS_ICON:
      return {
        ...state,
        focusedIconId: action.payload,
        focusedWindowId: null,
      };

    case FOCUS_DESKTOP:
      return {
        ...state,
        focusedIconId: null,
      };

    default:
      return state;
  }
}

const Container = styled.div`
  font-family: Tahoma, 'Noto Sans TC', sans-serif;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: url(https://i.imgur.com/Zk6TR5k.jpg) no-repeat center center fixed;
  background-size: cover;
  
  *:not(input):not(textarea) {
    user-select: none;
  }
`;

const IconsContainer = styled.div`
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
  display: grid;
  grid-template-columns: 70px;
  gap: 0;
  z-index: 1;
`;

export default function WinXP() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpenApp = useCallback((appKey: string) => {
    dispatch({ type: ADD_APP, payload: appKey });
  }, []);

  const handleCloseWindow = useCallback((id: number) => {
    dispatch({ type: DEL_APP, payload: id });
  }, []);

  const handleFocusWindow = useCallback((id: number) => {
    dispatch({ type: FOCUS_APP, payload: id });
  }, []);

  const handleMinimizeWindow = useCallback((id: number) => {
    dispatch({ type: MINIMIZE_APP, payload: id });
  }, []);

  const handleMaximizeWindow = useCallback((id: number) => {
    dispatch({ type: TOGGLE_MAXIMIZE_APP, payload: id });
  }, []);

  const handleFocusIcon = useCallback((id: string) => {
    dispatch({ type: FOCUS_ICON, payload: id });
  }, []);

  const handleDesktopClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      dispatch({ type: FOCUS_DESKTOP });
    }
  }, []);

  const handleWindowClick = useCallback((id: number) => {
    if (state.focusedWindowId === id) {
      // If already focused, minimize
      handleMinimizeWindow(id);
    } else {
      // Otherwise focus
      handleFocusWindow(id);
    }
  }, [state.focusedWindowId, handleMinimizeWindow, handleFocusWindow]);

  return (
    <Container onMouseDown={handleDesktopClick}>
      <IconsContainer>
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            icon={icon.icon}
            title={icon.title}
            isFocused={state.focusedIconId === icon.id}
            onFocus={() => handleFocusIcon(icon.id)}
            onDoubleClick={() => handleOpenApp(icon.appKey)}
          />
        ))}
      </IconsContainer>

      {state.windows.map((window) => (
        <Window
          key={window.id}
          {...window}
          isFocused={state.focusedWindowId === window.id}
          onFocus={handleFocusWindow}
          onClose={handleCloseWindow}
          onMinimize={handleMinimizeWindow}
          onMaximize={handleMaximizeWindow}
        />
      ))}

      <Taskbar
        windows={state.windows}
        focusedWindowId={state.focusedWindowId}
        onWindowClick={handleWindowClick}
        onStartClick={() => {}}
      />
    </Container>
  );
}
