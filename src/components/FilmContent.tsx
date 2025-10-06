import { User } from 'lucide-react';
import muhaLogo from '@/assets/muha-logo.png';
import trailerBanner from '@/assets/trailer-banner.png';

const FilmContent = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Trailer Banner */}
      <section>
        <a 
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block cursor-pointer hover:opacity-90 transition-opacity"
        >
          <img 
            src={trailerBanner} 
            alt="Trailer Available Now - Click to Watch" 
            className="w-full rounded-sm shadow-lg"
          />
        </a>
      </section>

      {/* Header */}
      <div className="text-center border-b-2 border-blue-600 pb-6">
        <div className="flex justify-center mb-2">
          <img src={muhaLogo} alt="MUHA" className="h-16" />
        </div>
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
          {/* Ovanes */}
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

          {/* Oli */}
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

          {/* Mayor */}
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

          {/* Butcher */}
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
  );
};

export default FilmContent;
