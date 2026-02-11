import React from 'react';
import { Trophy, Medal, User, Settings } from 'lucide-react';

interface HeaderProps {
  onOpenSettings?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSettings }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-emerald-600 text-white shadow-lg border-b-4 border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-28 py-4 md:py-0">
          
          {/* Logo & Main Title */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            <div className="bg-orange-500 p-3 rounded-xl shadow-lg border-2 border-orange-300 transform -rotate-3 hover:rotate-0 transition-transform">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-sm md:text-base font-bold italic tracking-widest text-emerald-100 uppercase leading-tight mb-1">
                Rencana Pelaksanaan Pembelajaran Mendalam
              </h3>
              <h1 className="text-2xl md:text-3xl font-black italic tracking-tight text-white uppercase drop-shadow-md leading-none">
                RPPM_PJOK_SD <span className="text-orange-300">2025</span>
              </h1>
            </div>
          </div>

          {/* Subtitle / Badge & Credit */}
          <div className="mt-4 md:mt-0 flex flex-col items-end gap-2">
            
            {/* Admin Badge & Settings */}
            <div className="flex items-center gap-2">
              <div className="hidden md:block text-right mr-2">
                <p className="text-[10px] text-emerald-100 font-medium tracking-wider uppercase">Portal Administrasi</p>
                <p className="text-sm font-bold text-white">GURU PJOK</p>
              </div>
              <span className="flex items-center gap-2 text-sm bg-emerald-800 text-emerald-100 px-4 py-2 rounded-full border border-emerald-500 font-semibold shadow-inner">
                <Medal className="w-4 h-4 text-orange-400" />
                SD - SMP
              </span>
              
              {/* Settings Button */}
              {onOpenSettings && (
                <button 
                  onClick={onOpenSettings}
                  className="bg-emerald-700 p-2 rounded-full border border-emerald-500 hover:bg-emerald-500 text-emerald-200 hover:text-white transition-all shadow-inner"
                  title="Ubah Kode Akses"
                >
                  <Settings className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Author Credit */}
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20">
              <User className="w-3 h-3 text-orange-200" />
              <p className="text-[10px] md:text-xs font-medium text-emerald-50">
                Aplikasi ini dibuat: <span className="text-white font-bold text-orange-200">Reno Aprial, S.Pd</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;