import WindowsTaskbar from "@/components/WindowsTaskbar";
import IEWindow from "@/components/IEWindow";
import FilmContent from "@/components/FilmContent";
import { useState } from "react";

const Index = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-[#5A9FD4] via-[#7BB4E6] to-[#78A9D8] flex flex-col">
      {/* Desktop Icons (optional decoration) */}
      <div className="absolute top-4 left-4 space-y-4 z-0">
        <div className="flex flex-col items-center gap-1 p-2 rounded hover:bg-blue-400/20 cursor-pointer transition-colors">
          <div className="w-12 h-12 bg-yellow-400 rounded border-2 border-yellow-600 flex items-center justify-center">
            <span className="text-2xl">📁</span>
          </div>
          <span className="text-white text-xs font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            My Documents
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 rounded hover:bg-blue-400/20 cursor-pointer transition-colors">
          <div className="w-12 h-12 bg-gray-300 rounded border-2 border-gray-500 flex items-center justify-center">
            <span className="text-2xl">💻</span>
          </div>
          <span className="text-white text-xs font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            My Computer
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 rounded hover:bg-blue-400/20 cursor-pointer transition-colors">
          <div className="w-12 h-12 bg-blue-300 rounded border-2 border-blue-500 flex items-center justify-center">
            <span className="text-2xl">🌐</span>
          </div>
          <span className="text-white text-xs font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Internet
          </span>
        </div>
      </div>

      {/* Main Window */}
      <div className="flex-1 relative z-10 flex items-center justify-center overflow-hidden pb-12">
        <IEWindow 
          isMinimized={isMinimized}
          onMinimize={() => setIsMinimized(true)}
        >
          <FilmContent />
        </IEWindow>
      </div>

      {/* Taskbar */}
      <WindowsTaskbar 
        onTaskbarClick={() => setIsMinimized(!isMinimized)}
        isMinimized={isMinimized}
      />
    </div>
  );
};

export default Index;
