import { User, Circle } from 'lucide-react';
import muhaScene from '@/assets/muha-scene.png';
import muhaLogo from '@/assets/muha-logo.png';
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
            className="w-full mb-4 cursor-pointer overflow-hidden hover:brightness-110 transition-all duration-300 rounded"
            style={{
              background: '#FFD700',
              border: '4px solid #000000',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className="py-8 px-4">
              <div className="text-center space-y-2">
                <div 
                  className="uppercase tracking-wider"
                  style={{
                    fontSize: '2.5rem',
                    fontFamily: '"Black Ops One", sans-serif',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    textShadow: '3px 3px 0px #000000, -2px -2px 0px #000000, 2px -2px 0px #000000, -2px 2px 0px #000000, 0px 3px 0px #000000, 3px 0px 0px #000000, 0px -2px 0px #000000, -2px 0px 0px #000000',
                    letterSpacing: '0.1em',
                  }}
                >
                  WATCH TRAILER NOW
                </div>
                <div 
                  className="text-black text-lg font-bold"
                  style={{
                    fontFamily: '"Black Ops One", sans-serif'
                  }}
                >
                  Click to Play
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
        <div className="text-center pb-6" style={{
          borderBottom: '3px solid #FFD700',
        }}>
          <div className="flex justify-center mb-2">
            <img src={muhaLogo} alt="MUHA" className="h-16" />
          </div>
          <p className="text-2xl text-gray-600 italic">(Fly)</p>
          <p className="text-lg mt-2 text-gray-700">By Slava Milanova</p>
        </div>

        {/* Synopsis */}
        <section>
          <h2 className="text-2xl font-bold mb-3 pb-2" style={{
            color: '#000000',
            borderBottom: '3px solid #FFD700',
            fontFamily: 'Impact, Arial Black, sans-serif',
            letterSpacing: '0.1em',
          }}>
            SYNOPSIS
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

        {/* Friends */}
        <section>
          <div className="flex items-center justify-between mb-3 pb-2" style={{
            borderBottom: '3px solid #FFD700',
          }}>
            <h2 className="text-2xl font-bold" style={{
              color: '#000000',
              fontFamily: 'Impact, Arial Black, sans-serif',
              letterSpacing: '0.1em',
            }}>
              FRIENDS
            </h2>
            <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{
              background: '#FFD700',
              color: '#000000',
            }}>
              2 Online
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Oli */}
            <div className="bg-gradient-to-b from-pink-300 to-pink-400 p-4 rounded-lg shadow-lg">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-inner">
                <div className="bg-gray-100 border-4 border-white rounded-lg p-2 flex items-center justify-center h-64 shadow-lg">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                  <Circle className="w-3 h-3 fill-green-400 text-green-400" />
                  <span className="text-xl font-semibold text-gray-700">x_oli_luv_x</span>
                  <span className="ml-auto text-pink-400 text-2xl">♀</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Location:</span> Radomir</p>
                  <p><span className="font-medium">Name:</span> Oli</p>
                  <p><span className="font-medium">Status:</span> Single</p>
                  <p><span className="font-medium">Age:</span> 21</p>
                  <p><span className="font-medium">Interests:</span> Chatting, music</p>
                  <p className="mt-2 pt-2 border-t border-gray-200 text-xs italic">
                    Looking for cool people to chat with
                  </p>
                </div>
              </div>
            </div>

            {/* Ovanes */}
            <div className="bg-gradient-to-b from-blue-300 to-blue-400 p-4 rounded-lg shadow-lg">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-inner">
                <div className="bg-gray-100 border-4 border-white rounded-lg p-2 flex items-center justify-center h-64 shadow-lg">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                  <Circle className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-semibold text-gray-700">ovanes_30</span>
                  <span className="ml-auto text-blue-400 text-2xl">♂</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Location:</span> Near Radomir</p>
                  <p><span className="font-medium">Name:</span> Ovanes</p>
                  <p><span className="font-medium">Status:</span> Single</p>
                  <p><span className="font-medium">Age:</span> 30</p>
                  <p><span className="font-medium">Interests:</span> Internet, cars, travel</p>
                  <p className="mt-2 pt-2 border-t border-gray-200 text-xs italic">
                    Working at the butcher shop, dreaming of leaving the village
                  </p>
                </div>
              </div>
            </div>

            {/* Mayor */}
            <div className="bg-gradient-to-b from-gray-300 to-gray-400 p-4 rounded-lg shadow-lg">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-inner">
                <div className="bg-gray-100 border-4 border-white rounded-lg p-2 flex items-center justify-center h-64 shadow-lg">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                  <Circle className="w-3 h-3 fill-red-500 text-red-500" />
                  <span className="text-xl font-semibold text-gray-700">mayor_radomir</span>
                  <span className="ml-auto text-gray-400 text-2xl">♂</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Location:</span> Radomir</p>
                  <p><span className="font-medium">Name:</span> The Mayor</p>
                  <p><span className="font-medium">Status:</span> Widower</p>
                  <p><span className="font-medium">Age:</span> 50</p>
                  <p><span className="font-medium">Interests:</span> Control, order, authority</p>
                  <p className="mt-2 pt-2 border-t border-gray-200 text-xs italic">
                    Keeps the computer locked with a key hidden in a piggy bank
                  </p>
                </div>
              </div>
            </div>

            {/* Butcher */}
            <div className="bg-gradient-to-b from-red-300 to-red-400 p-4 rounded-lg shadow-lg">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-inner">
                <div className="bg-gray-100 border-4 border-white rounded-lg p-2 flex items-center justify-center h-64 shadow-lg">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                  <Circle className="w-3 h-3 fill-gray-400 text-gray-400" />
                  <span className="text-xl font-semibold text-gray-700">butcher_boss</span>
                  <span className="ml-auto text-blue-400 text-2xl">♂</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Location:</span> Near Radomir</p>
                  <p><span className="font-medium">Name:</span> The Butcher</p>
                  <p><span className="font-medium">Status:</span> Married</p>
                  <p><span className="font-medium">Age:</span> 45</p>
                  <p><span className="font-medium">Interests:</span> Business, money</p>
                  <p className="mt-2 pt-2 border-t border-gray-200 text-xs italic">
                    Uses the office computer when the employee isn't watching
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 pt-6" style={{
          borderTop: '2px solid #FFD700',
        }}>
          <p>© 2005 MUHA Film. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="underline hover:text-gray-700" style={{ color: '#FFD700' }}>Contact</a> | 
            <a href="#" className="underline hover:text-gray-700 ml-2" style={{ color: '#FFD700' }}>Press Kit</a> | 
            <a href="#" className="underline hover:text-gray-700 ml-2" style={{ color: '#FFD700' }}>Festival Screenings</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MuhaFilm;
