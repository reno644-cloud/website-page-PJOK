import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import MaterialCard from './components/MaterialCard';
import { MATERIALS_DATA } from './constants';
import { FilterType, Category } from './types';
import { Search, Info, Award } from 'lucide-react';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate counts for badges
  const counts = useMemo(() => {
    const tempCounts: Record<FilterType, number> = {
      'ALL': MATERIALS_DATA.length,
      [Category.CP]: 0,
      [Category.TP]: 0,
      [Category.RPPM]: 0,
      [Category.PENILAIAN]: 0,
    };

    MATERIALS_DATA.forEach(item => {
      if (tempCounts[item.category] !== undefined) {
        tempCounts[item.category]++;
      }
    });

    return tempCounts;
  }, []);

  // Filter Logic
  const filteredMaterials = useMemo(() => {
    return MATERIALS_DATA.filter(item => {
      const matchesCategory = activeFilter === 'ALL' || item.category === activeFilter;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-400 selection:text-white relative">
      {/* Background Layer - Sports Field Theme */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562771242-a02d909ddc3d?q=80&w=2574&auto=format&fit=crop')`, // Sports Field / Grass texture
        }}
      >
        {/* Overlay Gradients for readability and aesthetic */}
        <div className="absolute inset-0 bg-sky-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/90 via-sky-800/70 to-emerald-900/80"></div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Main Content Wrapper - Relative z-10 to sit above background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        {/* Hero / Motivation Banner */}
        <div className="bg-sky-800/50 backdrop-blur-sm text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-2 drop-shadow-lg">
                  Menuju Generasi <span className="text-orange-400">JUARA!</span>
                </h2>
                <p className="text-sky-100 text-lg max-w-xl font-medium drop-shadow-md">
                  Akses perangkat pembelajaran, modul ajar, dan aplikasi AI untuk guru PJOK yang profesional dan inovatif.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 p-4 rounded-full border-2 border-white/20">
                  <Award className="w-16 h-16 text-yellow-400 drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Section */}
        <FilterBar 
          currentFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
          counts={counts}
        />

        {/* Main Content Area */}
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          
          {/* Search Input */}
          <div className="mb-8">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-sky-600" />
              </div>
              <input
                type="text"
                placeholder="Cari CP, TP, atau Aplikasi..."
                className="block w-full pl-11 pr-4 py-4 border-4 border-white/30 rounded-2xl leading-5 bg-white/90 backdrop-blur placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/20 sm:text-lg font-bold shadow-xl transition-all text-slate-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Results Grid - Using 2 columns on medium up */}
          {filteredMaterials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/90 backdrop-blur rounded-3xl border-2 border-dashed border-sky-300 shadow-2xl">
              <div className="bg-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-orange-200">
                <Info className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-wide">Materi tidak ditemukan</h3>
              <p className="text-slate-600 mt-2 max-w-xs mx-auto font-medium">
                Coba cari kata kunci lain atau ganti kategori filter.
              </p>
              <button 
                onClick={() => { setActiveFilter('ALL'); setSearchQuery(''); }}
                className="mt-6 bg-sky-600 text-white px-8 py-3 rounded-xl font-black hover:bg-sky-700 transition-colors shadow-lg shadow-sky-600/30 uppercase tracking-wider"
              >
                Reset Filter
              </button>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-10 mt-auto text-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-orange-500 p-1.5 rounded-lg shadow-lg">
                 <Award className="w-5 h-5 text-white" />
               </div>
               <span className="font-black text-sky-100 tracking-widest text-sm drop-shadow-md">PJOK EDUCATION</span>
            </div>
            <p className="text-sky-100/70 text-sm font-medium">
              &copy; {new Date().getFullYear()} RA Production. <span className="text-white italic">"Mens sana in corpore sano"</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;