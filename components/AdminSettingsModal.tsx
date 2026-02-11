import React, { useState } from 'react';
import { X, Save, Lock, RefreshCw, CheckCircle2 } from 'lucide-react';
import { ADMIN_ACCESS_CODE } from '../constants';

interface AdminSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminSettingsModal: React.FC<AdminSettingsModalProps> = ({ isOpen, onClose }) => {
  const [currentCode, setCurrentCode] = useState('');
  const [newCode, setNewCode] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    // 1. Verify Current Code
    const storedCode = localStorage.getItem('pjok_access_code') || ADMIN_ACCESS_CODE;
    if (currentCode !== storedCode) {
      setStatus('error');
      setMessage('Kode saat ini salah!');
      return;
    }

    // 2. Validate New Code
    if (!/^\d{2}$/.test(newCode)) {
      setStatus('error');
      setMessage('Kode baru harus 2 digit angka!');
      return;
    }

    // 3. Confirm New Code
    if (newCode !== confirmCode) {
      setStatus('error');
      setMessage('Konfirmasi kode tidak cocok!');
      return;
    }

    // 4. Save
    localStorage.setItem('pjok_access_code', newCode);
    setStatus('success');
    setMessage('Kode berhasil diperbarui!');
    
    // Reset form after delay
    setTimeout(() => {
      onClose();
      setCurrentCode('');
      setNewCode('');
      setConfirmCode('');
      setStatus('idle');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-emerald-600 p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5" />
            <h3 className="font-bold uppercase tracking-wide">Ubah Kode Akses</h3>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-emerald-700 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-in zoom-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">Berhasil!</h4>
              <p className="text-slate-500">{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSave} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Kode Saat Ini</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    maxLength={2}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold text-slate-800 tracking-widest"
                    placeholder="••"
                    value={currentCode}
                    onChange={(e) => setCurrentCode(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100"></div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Kode Baru (2 Angka)</label>
                <input
                  type="text"
                  maxLength={2}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 font-bold text-slate-800 tracking-widest text-center text-lg"
                  placeholder="00"
                  value={newCode}
                  onChange={(e) => setNewCode(e.target.value.replace(/\D/g, ''))}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Konfirmasi Kode Baru</label>
                <input
                  type="text"
                  maxLength={2}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 font-bold text-slate-800 tracking-widest text-center text-lg"
                  placeholder="00"
                  value={confirmCode}
                  onChange={(e) => setConfirmCode(e.target.value.replace(/\D/g, ''))}
                />
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-50 text-red-600 text-xs font-bold rounded-lg flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                   {message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all mt-4"
              >
                <Save className="w-4 h-4" />
                SIMPAN PERUBAHAN
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsModal;