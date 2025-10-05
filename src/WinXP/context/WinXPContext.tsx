import { createContext, useContext } from 'react';

interface WinXPContextType {
  openApp: (appKey: string) => void;
}

export const WinXPContext = createContext<WinXPContextType | null>(null);

export const useWinXP = () => {
  const context = useContext(WinXPContext);
  if (!context) {
    throw new Error('useWinXP must be used within WinXPContext.Provider');
  }
  return context;
};
