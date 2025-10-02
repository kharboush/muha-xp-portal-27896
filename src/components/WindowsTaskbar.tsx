const WindowsTaskbar = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-10 flex items-center px-1 z-50"
      style={{
        background: 'linear-gradient(180deg, #245EDC 0%, #3C89D9 9%, #1C6BCC 91%, #0054E3 100%)',
        borderTop: '1px solid #2F6FDD'
      }}
    >
      {/* Start Button */}
      <button className="xp-start-button">
        <div className="w-5 h-5 rounded-sm bg-white flex items-center justify-center">
          <div className="w-3 h-3" style={{
            background: 'linear-gradient(135deg, #FF0000 0%, #FF0000 50%, #00FF00 50%, #00FF00 75%, #0000FF 75%, #0000FF 87.5%, #FFFF00 87.5%, #FFFF00 100%)'
          }} />
        </div>
        <span>start</span>
      </button>

      {/* Taskbar Items Area */}
      <div className="flex-1 flex items-center gap-1 ml-2 h-full">
        <div 
          className="h-8 px-3 flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm"
        >
          <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">
            e
          </div>
          <span className="text-white text-xs font-semibold">MUHA - Internet Explorer</span>
        </div>
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-3 px-3 h-full border-l border-blue-800/30">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded-sm" />
          <div className="w-4 h-4 bg-blue-400 rounded-sm" />
        </div>
        <div className="text-white text-xs font-semibold bg-blue-900/30 px-2 py-1 rounded-sm">
          {currentTime}
        </div>
      </div>
    </div>
  );
};

export default WindowsTaskbar;
