import React from 'react';
import { Trophy, Medal, User, Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f172a] text-white shadow-2xl border-b-4 border-orange-600">
      {/* Top Bar Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-32 py-6 md:py-0">
          
          {/* Logo & Main Title */}
          <div className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-2xl shadow-xl border-2 border-orange-300 transform group-hover:scale-105 transition-transform duration-300">
                <Trophy className="h-10 w-10 text-white drop-shadow-md" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Star className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse" />
                <h3 className="text-sm font-black tracking-[0.3em] text-orange-400 uppercase leading-none">
                  SPORTIF & BERKARAKTER
                </h3>
                <Star className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse" />
              </div>
              
              <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter text-white uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-none mb-1">
                SALAM OLAHRAGA <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">"JUARA"</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter text-slate-300 uppercase drop-shadow-md leading-none">
                SUNGAISELAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">"JUARA"</span>
              </h2>
            </div>
          </div>

          {/* Subtitle / Badge & Credit */}
          <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end gap-3">
            
            {/* Admin Badge */}
            <div className="flex items-center gap-3 bg-slate-800/50 p-2 pr-4 rounded-xl border border-slate-700">
              <div className="hidden md:block text-right">
                <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Portal Administrasi</p>
                <p className="text-base font-black text-white">GURU PJOK</p>
              </div>
              <span className="flex items-center gap-2 text-sm bg-orange-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg border border-orange-400">
                <Medal className="w-5 h-5 text-yellow-200" />
                SD - SMP
              </span>
            </div>

            {/* Author Credit */}
            <div className="flex items-center gap-2 bg-black/40 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              <User className="w-3.5 h-3.5 text-orange-400" />
              <p className="text-xs font-medium text-slate-300">
                Aplikasi ini dibuat: <span className="text-orange-300 font-bold ml-1">Reno Aprial, S.Pd</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;