import InternetExplorer from './InternetExplorer';
import Notepad from './Notepad';
import MyComputer from './MyComputer';
import MediaPlayer from './MediaPlayer';

export interface AppConfig {
  component: React.ComponentType<any>;
  title: string;
  icon: string;
  headerIcon: string;
  width: number;
  height: number;
  x: number;
  y: number;
  resizable: boolean;
  multiInstance?: boolean;
}

export const appSettings: Record<string, AppConfig> = {
  InternetExplorer: {
    component: InternetExplorer,
    title: 'Internet Browser',
    icon: '/icons/ie.png',
    headerIcon: '/icons/ie-paper.png',
    width: 800,
    height: 600,
    x: 130,
    y: 20,
    resizable: true,
  },
  Notepad: {
    component: Notepad,
    title: 'Notepad',
    icon: '/icons/notepad-32.png',
    headerIcon: '/icons/notepad-16.png',
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
    icon: '/icons/computer-32.png',
    headerIcon: '/icons/computer-16.png',
    width: 660,
    height: 500,
    x: 250,
    y: 40,
    resizable: true,
  },
  MediaPlayer: {
    component: MediaPlayer,
    title: 'Media Player',
    icon: '/icons/volume.png',
    headerIcon: '/icons/volume.png',
    width: 800,
    height: 500,
    x: 200,
    y: 80,
    resizable: true,
  },
};

export const desktopIcons = [
  {
    id: 'ie',
    title: 'Internet Browser',
    icon: '/icons/ie.png',
    appKey: 'InternetExplorer',
  },
  {
    id: 'notepad',
    title: 'Notepad',
    icon: '/icons/notepad-32.png',
    appKey: 'Notepad',
  },
  {
    id: 'computer',
    title: 'My Computer',
    icon: '/icons/computer-32.png',
    appKey: 'MyComputer',
  },
  {
    id: 'mirc',
    title: 'mIRC',
    icon: '/icons/mirc-32.png',
    appKey: 'mIRC',
  },
  {
    id: 'mediaplayer',
    title: 'Media Player',
    icon: '/icons/volume.png',
    appKey: 'MediaPlayer',
  },
];
