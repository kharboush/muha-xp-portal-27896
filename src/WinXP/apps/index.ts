import InternetExplorer from './InternetExplorer';
import Notepad from './Notepad';
import MyComputer from './MyComputer';

export interface AppConfig {
  component: React.ComponentType<any>;
  title: string;
  icon: string;
  width: number;
  height: number;
  x: number;
  y: number;
  resizable: boolean;
  multiInstance?: boolean;
}

// Placeholder icon data URLs (simple colored squares for now)
export const icons = {
  ie: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32"%3E%3Crect fill="%230078d7" width="32" height="32"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-weight="bold"%3Ee%3C/text%3E%3C/svg%3E',
  notepad: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32"%3E%3Crect fill="%23ffd700" width="32" height="32"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="20" font-weight="bold"%3EN%3C/text%3E%3C/svg%3E',
  computer: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32"%3E%3Crect fill="%2390ee90" width="32" height="32"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="20" font-weight="bold"%3EC%3C/text%3E%3C/svg%3E',
};

export const appSettings: Record<string, AppConfig> = {
  InternetExplorer: {
    component: InternetExplorer,
    title: 'Internet Explorer',
    icon: icons.ie,
    width: 800,
    height: 600,
    x: 100,
    y: 50,
    resizable: true,
  },
  Notepad: {
    component: Notepad,
    title: 'Notepad',
    icon: icons.notepad,
    width: 600,
    height: 400,
    x: 150,
    y: 100,
    resizable: true,
    multiInstance: true,
  },
  MyComputer: {
    component: MyComputer,
    title: 'My Computer',
    icon: icons.computer,
    width: 700,
    height: 500,
    x: 200,
    y: 80,
    resizable: true,
  },
};

export const desktopIcons = [
  {
    id: 'ie',
    title: 'Internet Explorer',
    icon: icons.ie,
    appKey: 'InternetExplorer',
  },
  {
    id: 'notepad',
    title: 'Notepad',
    icon: icons.notepad,
    appKey: 'Notepad',
  },
  {
    id: 'computer',
    title: 'My Computer',
    icon: icons.computer,
    appKey: 'MyComputer',
  },
];
