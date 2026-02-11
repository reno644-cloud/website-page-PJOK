import React, { useState, useEffect, useRef } from 'react';
import { Lock, ShieldCheck, AlertCircle, ArrowRight, Trophy } from 'lucide-react';
import { ADMIN_ACCESS_CODE } from '../constants';

interface AccessGateProps {
  onUnlock: () => void;
}

const AccessGate: React.FC<AccessGateProps> = ({ onUnlock }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input on load
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    // Limit to 2 digits
    if (value.length <= 2) {
      setCode(value);
      setError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check LocalStorage first, fall back to constant
    const currentPasscode = localStorage.getItem('pjok_access_code') || ADMIN_ACCESS_CODE;
    
    if (code === currentPasscode) {
      onUnlock();
    } else {
      setError(true);
      setCode('');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900">
      {/* Background with blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562771242-a02d909ddc3d?q=80&w=2574&auto=format&fit=crop')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-emerald-900/90"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-6 mx-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center">
          
          <div className="bg-emerald-500 p-4 rounded-full mb-6 shadow-lg shadow-emerald-500/30">
            <Lock className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-2">
            Portal Guru PJOK
          </h2>
          <p className="text-emerald-100 text-sm mb-8 font-medium">
            Masukkan kode akses admin untuk melanjutkan
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="relative mb-6">
              <input
                ref={inputRef}
                type="text"
                value={code}
                onChange={handleInputChange}
                className={`
                  w-full bg-slate-900/50 border-2 rounded-xl py-4 text-center text-4xl font-black tracking-[1em] text-white placeholder-white/20 outline-none transition-all duration-300
                  ${error ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse' : 'border-white/20 focus:border-emerald-400 focus:shadow-[0_0_20px_rgba(52,211,153,0.3)]'}
                `}
                placeholder="00"
                maxLength={2}
              />
              {error && (
                <div className="absolute -bottom-6 left-0 right-0 flex justify-center items-center gap-1 text-red-400 text-xs font-bold animate-bounce">
                  <AlertCircle className="w-3 h-3" />
                  Kode salah, silahkan coba lagi
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={code.length !== 2}
              className={`
                w-full group flex items-center justify-center gap-2 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300
                ${code.length === 2 
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg hover:shadow-emerald-500/40 transform hover:-translate-y-1' 
                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'}
              `}
            >
              <span>Buka Akses</span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${code.length === 2 ? 'group-hover:translate-x-1' : ''}`} />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 w-full flex items-center justify-center gap-2 text-white/40 text-xs">
            <ShieldCheck className="w-3 h-3" />
            <span>Sistem Keamanan Terproteksi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessGate;