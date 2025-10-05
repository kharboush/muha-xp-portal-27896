import { User } from 'lucide-react';
import muhaScene from '@/assets/muha-scene.png';
import { useWinXP } from '../context/WinXPContext';

const MuhaFilm = () => {
  const { openApp } = useWinXP();

  return (
    <div className="h-full overflow-auto bg-white p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Watch Trailer Banner */}
        <section>
          <button
            onClick={() => openApp('MediaPlayer')}
            className="w-full mb-4 cursor-pointer border-4 overflow-hidden hover:animate-pulse transition-all"
            style={{
              background: 'repeating-linear-gradient(45deg, #ff0000, #ff0000 10px, #ffff00 10px, #ffff00 20px)',
              borderImage: 'repeating-linear-gradient(45deg, #0000ff, #0000ff 10px, #00ff00 10px, #00ff00 20px) 4',
              boxShadow: '0 0 20px rgba(255,0,0,0.8), inset 0 0 20px rgba(255,255,0,0.5)',
            }}
          >
            <div className="py-6 px-4 bg-black bg-opacity-70">
              <div className="text-center space-y-2">
                <div 
                  className="text-yellow-300 font-bold uppercase tracking-widest animate-pulse"
                  style={{
                    fontSize: '2rem',
                    textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 2px 2px 0 #000',
                    fontFamily: 'Impact, Arial Black, sans-serif',
                    WebkitTextStroke: '1px red'
                  }}
                >
                  ★ WATCH TRAILER NOW ★
                </div>
                <div 
                  className="text-lime-400 text-sm font-bold italic"
                  style={{
                    textShadow: '1px 1px 2px #000',
                    fontFamily: 'Comic Sans MS, cursive'
                  }}
                >
                  ⚡ CLICK HERE!!! ⚡
                </div>
              </div>
            </div>
          </button>
        </section>
        
        {/* Video Player */}
        <section>
          <img src={muhaScene} alt="Scene from MUHA film" className="aspect-video w-full object-cover" />
        </section>

        {/* Header */}
        <div className="text-center border-b-2 border-blue-600 pb-6">
          <h1 className="text-5xl font-bold text-blue-800 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
            MUHA
          </h1>
          <p className="text-2xl text-gray-600 italic">(Fly)</p>
          <p className="text-lg mt-2 text-gray-700">By Slava Milanova</p>
        </div>

        {/* Synopsis */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-3 pb-1 border-b border-gray-300">
            Plot Synopsis
          </h2>
          <div className="space-y-3 text-base leading-relaxed">
            <p>
              Set in rural Bulgaria in 2005, <em>MUHA</em> is a psychological drama about loneliness 
              and the search for connection in the early days of social media.
            </p>
            <p>
              Ovanеs, a 30-year-old man living in isolation in a small village, works at the local 
              butcher shop and spends his evenings waiting for his unreliable internet connection. 
              When he receives a friend request from Oli, a 21-year-old woman confined to her father's 
              house, both find solace in their online conversations—a rare window into something beyond 
              their provincial lives. As their connection deepens through glowing computer screens and 
              sporadic chat messages, Ovanеs suggests they meet in person. But when the digital world 
              collides with reality, the boundaries between longing and obsession begin to blur.
            </p>
            <p className="italic">
              <em>MUHA</em> is an intimate portrait of what happens when loneliness meets desperation 
              in the flickering light of a computer monitor.
            </p>
          </div>
        </section>

        {/* Main Characters */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-3 pb-1 border-b border-gray-300">
            Main Characters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-b from-[#E3E3E3] to-[#C5C5C5] border-2 border-[#7F7F7F] rounded-sm p-3 shadow-md">
              <div className="bg-white border border-gray-400 p-2 mb-2 flex items-center justify-center h-48">
                <User className="w-24 h-24 text-gray-400" />
              </div>
              <div className="space-y-1 text-sm">
                <div className="bg-blue-600 text-white px-2 py-1 font-bold">Ovanеs (30)</div>
                <div className="bg-white border border-gray-400 p-2">
                  <p className="text-xs leading-relaxed">
                    A solitary butcher shop worker who spends his time making fly traps and waiting for 
                    the internet to connect. He dreams of driving away from the village and seeks 
                    companionship through the screen.
                  </p>
                </div>
                <div className="flex gap-1 text-xs">
                  <span className="bg-gray-700 text-white px-2 py-0.5">Status:</span>
                  <span className="bg-yellow-400 px-2 py-0.5">Online</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#E3E3E3] to-[#C5C5C5] border-2 border-[#7F7F7F] rounded-sm p-3 shadow-md">
              <div className="bg-white border border-gray-400 p-2 mb-2 flex items-center justify-center h-48">
                <User className="w-24 h-24 text-gray-400" />
              </div>
              <div className="space-y-1 text-sm">
                <div className="bg-blue-600 text-white px-2 py-1 font-bold">Oli (21)</div>
                <div className="bg-white border border-gray-400 p-2">
                  <p className="text-xs leading-relaxed">
                    The mayor's daughter, who sneaks access to her father's computer to escape the 
                    suffocating confines of village life. Her mother is absent, and the computer room 
                    stays locked.
                  </p>
                </div>
                <div className="flex gap-1 text-xs">
                  <span className="bg-gray-700 text-white px-2 py-0.5">Status:</span>
                  <span className="bg-yellow-400 px-2 py-0.5">Online</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#E3E3E3] to-[#C5C5C5] border-2 border-[#7F7F7F] rounded-sm p-3 shadow-md">
              <div className="bg-white border border-gray-400 p-2 mb-2 flex items-center justify-center h-48">
                <User className="w-24 h-24 text-gray-400" />
              </div>
              <div className="space-y-1 text-sm">
                <div className="bg-blue-600 text-white px-2 py-1 font-bold">The Mayor (50)</div>
                <div className="bg-white border border-gray-400 p-2">
                  <p className="text-xs leading-relaxed">
                    A man who guards the computer with a key hidden in a piggy bank. He watches his 
                    daughter from a distance and keeps certain doors locked.
                  </p>
                </div>
                <div className="flex gap-1 text-xs">
                  <span className="bg-gray-700 text-white px-2 py-0.5">Status:</span>
                  <span className="bg-red-500 text-white px-2 py-0.5">Offline</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#E3E3E3] to-[#C5C5C5] border-2 border-[#7F7F7F] rounded-sm p-3 shadow-md">
              <div className="bg-white border border-gray-400 p-2 mb-2 flex items-center justify-center h-48">
                <User className="w-24 h-24 text-gray-400" />
              </div>
              <div className="space-y-1 text-sm">
                <div className="bg-blue-600 text-white px-2 py-1 font-bold">The Butcher</div>
                <div className="bg-white border border-gray-400 p-2">
                  <p className="text-xs leading-relaxed">
                    Ovanеs's employer, who uses the office computer when his employee isn't watching.
                  </p>
                </div>
                <div className="flex gap-1 text-xs">
                  <span className="bg-gray-700 text-white px-2 py-0.5">Status:</span>
                  <span className="bg-gray-400 px-2 py-0.5">Away</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Film Details */}
        <section className="bg-blue-50 p-6 rounded border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-3 pb-1 border-b border-blue-300">
            Film Details
          </h2>
          <div className="space-y-2 text-base">
            <p><strong>Genre:</strong> Psychological Drama / Thriller</p>
            <p><strong>Setting:</strong> Rural Bulgaria, 2005</p>
            <p><strong>Language:</strong> Bulgarian</p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-300">
          <p>© 2005 MUHA Film. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-blue-600 underline hover:text-blue-800">Contact</a> | 
            <a href="#" className="text-blue-600 underline hover:text-blue-800 ml-2">Press Kit</a> | 
            <a href="#" className="text-blue-600 underline hover:text-blue-800 ml-2">Festival Screenings</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MuhaFilm;
