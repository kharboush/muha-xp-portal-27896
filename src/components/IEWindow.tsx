import { X, Minus, Square, ChevronUp, ChevronDown } from 'lucide-react';
import { ReactNode, useRef, useState, useEffect } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface IEWindowProps {
  children: ReactNode;
  isMinimized?: boolean;
  onMinimize?: () => void;
}

const IEWindow = ({ children, isMinimized, onMinimize }: IEWindowProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(() => !isMinimized);

  const scrollBy = (amount: number) => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop += amount;
    }
  };

  const startScrolling = (direction: 'up' | 'down') => {
    const amount = direction === 'up' ? -10 : 10;
    scrollBy(amount);
    
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    
    scrollIntervalRef.current = setInterval(() => {
      scrollBy(amount);
    }, 50);
    
    if (direction === 'up') setIsScrollingUp(true);
    else setIsScrollingDown(true);
  };

  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    setIsScrollingUp(false);
    setIsScrollingDown(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  useEffect(() => {
    if (isMinimized !== undefined) {
      if (isMinimized) {
        // Start minimize animation
        setIsAnimating(true);
        const timer = setTimeout(() => {
          setIsAnimating(false);
          setIsVisible(false); // Hide after animation
        }, 300);
        return () => clearTimeout(timer);
      } else {
        // Show immediately, then animate maximize
        setIsVisible(true);
        requestAnimationFrame(() => {
          setIsAnimating(true);
          const timer = setTimeout(() => {
            setIsAnimating(false);
          }, 300);
        });
      }
    }
  }, [isMinimized]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      ref={windowRef}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div
        className="xp-window w-full max-w-5xl mx-auto flex flex-col max-h-[92vh] h-full min-h-0 overflow-hidden rounded-lg transition-all duration-300 ease-in-out"
        style={{
          transform: `scale(${isMinimized ? 0.3 : 1}) translateY(${isMinimized ? '100px' : '0px'})`,
          opacity: isMinimized ? 0 : 1,
          transformOrigin: 'bottom left',
          filter: isMinimized ? 'blur(4px)' : 'blur(0px)',
        }}
      >
      {/* Title Bar */}
      <div 
        className="xp-titlebar flex items-center justify-between p-2 select-none"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-blue-600 text-sm font-bold shadow-sm">
            W
          </div>
          <span className="font-bold text-sm">MUHA - Web Browser</span>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={onMinimize}
            className="w-[28px] h-[28px] flex items-center justify-center bg-[#2D6AE1] hover:bg-[#4C8AFF] active:bg-[#1E4BA0] border border-[#1A3C7D] rounded-sm transition-colors"
          >
            <Minus className="w-4 h-4 text-white" strokeWidth={3} />
          </button>
          <button className="w-[28px] h-[28px] flex items-center justify-center bg-[#2D6AE1] hover:bg-[#4C8AFF] active:bg-[#1E4BA0] border border-[#1A3C7D] rounded-sm transition-colors">
            <Square className="w-[14px] h-[14px] text-white" strokeWidth={3} />
          </button>
          <button className="w-[28px] h-[28px] flex items-center justify-center bg-[#E81500] hover:bg-[#FF3A14] active:bg-[#C40000] border border-[#8B0000] rounded-sm transition-colors">
            <X className="w-4 h-4 text-white" strokeWidth={3} />
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
      <div className="flex-1 min-h-0 relative bg-white">
        <ScrollArea 
          type="always" 
          hideDefaultScrollbar 
          viewportRef={viewportRef}
          className="h-full w-full xp-scroll-area"
        >
          <div className="p-8">
            {children}
          </div>
          <ScrollBar 
            orientation="vertical" 
            className="xp-scrollbar-custom !w-[17px] !border-l !border-[#919B9C] bg-[#ECE9D8] z-10"
          />
        </ScrollArea>
        
        {/* Up Arrow Button */}
        <button
          className={`absolute top-0 right-0 w-[17px] h-[17px] bg-[#ECE9D8] border border-[#919B9C] flex items-center justify-center z-20 hover:bg-[#D8D5C8] active:bg-[#C0BDB0] ${isScrollingUp ? 'bg-[#C0BDB0]' : ''}`}
          onMouseDown={() => startScrolling('up')}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
          aria-label="Scroll up"
        >
          <ChevronUp className="w-3 h-3 text-[#000000]" />
        </button>
        
        {/* Down Arrow Button */}
        <button
          className={`absolute bottom-0 right-0 w-[17px] h-[17px] bg-[#ECE9D8] border border-[#919B9C] flex items-center justify-center z-20 hover:bg-[#D8D5C8] active:bg-[#C0BDB0] ${isScrollingDown ? 'bg-[#C0BDB0]' : ''}`}
          onMouseDown={() => startScrolling('down')}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
          aria-label="Scroll down"
        >
          <ChevronDown className="w-3 h-3 text-[#000000]" />
        </button>
      </div>

      {/* Status Bar */}
      <div className="bg-[linear-gradient(to_bottom,#ece9d8,#e3dfc5)] border-t-2 border-white flex items-center px-2 py-1 text-xs">
        <div className="flex items-center gap-2 flex-1">
          <div className="w-4 h-4 border border-[#919B9C] bg-white" />
          <span className="text-[#000000]">Done</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-600" />
          </div>
          <span className="text-[#000000]">My Computer</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default IEWindow;
