import { X, Minus, Square } from 'lucide-react';
import { ReactNode } from 'react';

interface IEWindowProps {
  children: ReactNode;
}

const IEWindow = ({ children }: IEWindowProps) => {
  return (
    <div className="xp-window w-full max-w-4xl mx-auto flex flex-col max-h-[85vh] overflow-hidden rounded-lg">
      {/* Title Bar */}
      <div className="xp-titlebar h-[30px] flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-blue-600 text-xs font-bold shadow-sm">
            W
          </div>
          <span className="font-bold text-sm">MUHA - Web Browser</span>
        </div>
        <div className="flex items-center gap-[2px]">
          <button className="w-[21px] h-[21px] flex items-center justify-center bg-[#2D6AE1] hover:bg-[#4C8AFF] active:bg-[#1E4BA0] border border-[#1A3C7D] rounded-sm transition-colors">
            <Minus className="w-3 h-3 text-white" strokeWidth={3} />
          </button>
          <button className="w-[21px] h-[21px] flex items-center justify-center bg-[#2D6AE1] hover:bg-[#4C8AFF] active:bg-[#1E4BA0] border border-[#1A3C7D] rounded-sm transition-colors">
            <Square className="w-[10px] h-[10px] text-white" strokeWidth={3} />
          </button>
          <button className="w-[21px] h-[21px] flex items-center justify-center bg-[#E81500] hover:bg-[#FF3A14] active:bg-[#C40000] border border-[#8B0000] rounded-sm transition-colors">
            <X className="w-3 h-3 text-white" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="bg-[#ECE9D8] border-b border-[#919B9C] px-2 py-1">
        <div className="flex items-center gap-4 text-xs">
          <span className="hover:bg-blue-500 hover:text-white px-2 py-1 cursor-pointer">File</span>
          <span className="hover:bg-blue-500 hover:text-white px-2 py-1 cursor-pointer">Edit</span>
          <span className="hover:bg-blue-500 hover:text-white px-2 py-1 cursor-pointer">View</span>
          <span className="hover:bg-blue-500 hover:text-white px-2 py-1 cursor-pointer">Favorites</span>
          <span className="hover:bg-blue-500 hover:text-white px-2 py-1 cursor-pointer">Tools</span>
          <span className="hover:bg-blue-500 hover:text-white px-2 py-1 cursor-pointer">Help</span>
        </div>
      </div>

      {/* Address Bar */}
      <div className="bg-[#ECE9D8] border-b border-[#919B9C] px-2 py-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold">Address</span>
          <div className="flex-1 bg-white border border-[#7F9DB9] px-2 py-1 rounded-sm flex items-center">
            <div className="w-4 h-4 mr-2 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
            </div>
            <span className="text-xs">http://www.muhafilm.com</span>
          </div>
          <button className="xp-button">Go</button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white p-8 overflow-y-auto flex-1">
        {children}
      </div>

      {/* Status Bar */}
      <div className="bg-[#ECE9D8] border-t border-[#919B9C] px-2 py-1 flex items-center justify-between text-xs">
        <span>Done</span>
        <div className="flex items-center gap-4">
          <span>Internet</span>
          <div className="w-4 h-4 border border-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default IEWindow;
