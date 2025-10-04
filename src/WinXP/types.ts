export interface AppWindow {
  id: number;
  component: React.ComponentType<any>;
  title: string;
  icon: string;
  width: number;
  height: number;
  x: number;
  y: number;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
  resizable: boolean;
}

export interface DesktopIcon {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType<any>;
  isFocused: boolean;
  isSelected: boolean;
}

export interface WinXPState {
  windows: AppWindow[];
  icons: DesktopIcon[];
  nextWindowId: number;
  nextZIndex: number;
  focusedWindow: number | null;
  selecting: boolean;
  powerState: 'START' | 'LOG_OFF' | 'TURN_OFF';
}
