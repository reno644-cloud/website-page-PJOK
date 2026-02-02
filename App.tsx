import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import MaterialCard from './components/MaterialCard';
import { MATERIALS_DATA } from './constants';
import { FilterType, Category } from './types';
import { Search, Info, Award, Zap } from 'lucide-react';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate counts for badges
  const counts = useMemo(() => {
    const tempCounts: Record<FilterType, number> = {
      'ALL': MATERIALS_DATA.length,
      [Category.RPP]: 0,
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
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <Header />
      
      {/* Hero / Motivation Banner (Sangar Style) */}
      <div className="bg-slate-900 text-white relative overflow-hidden border-b-4 border-orange-600">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-orange-600/20 to-transparent skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-orange-600 text-white text-xs font-black px-2 py-0.5 uppercase tracking-widest rounded-sm">Spirit</span>
                <div className="h-0.5 w-10 bg-orange-600"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-2 text-white">
                JUNJUNG TINGGI <span className="text-orange-500 underline decoration-4 decoration-white underline-offset-4">SPORTIFITAS!</span>
              </h2>
              <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mt-4 border-l-4 border-orange-500 pl-4">
                "Belajar bergerak, bergerak untuk belajar. Jadilah pendidik yang menginspirasi juara sejati."
              </p>
            </div>
            <div className="hidden md:block bg-orange-500 p-4 rounded-full shadow-[0_0_30px_rgba(234,88,12,0.6)] animate-pulse">
              <Zap className="w-12 h-12 text-white fill-white" />
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
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full bg-slate-100">
        
        {/* Search Input (Big & Bold) */}
        <div className="mb-10">
          <div className="relative max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="CARI MATERI PELAJARAN..."
              className="block w-full pl-14 pr-4 py-5 border-4 border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-0 sm:text-lg font-bold shadow-xl transition-all uppercase tracking-wider"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <div className="bg-slate-100 text-slate-400 text-xs font-bold px-2 py-1 rounded border border-slate-300">CTRL+K</div>
            </div>
          </div>
        </div>

        {/* Results Grid - 2 COLUMNS (SANGAR SIZE) */}
        {filteredMaterials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border-4 border-dashed border-slate-300 shadow-inner">
            <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Info className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-wide">Materi Tidak Ditemukan</h3>
            <p className="text-slate-500 mt-2 font-medium">
              Pastikan kata kunci pencarian sudah benar.
            </p>
            <button 
              onClick={() => { setActiveFilter('ALL'); setSearchQuery(''); }}
              className="mt-8 bg-orange-600 text-white px-8 py-3 rounded-none font-black hover:bg-orange-700 transition-colors shadow-lg uppercase tracking-widest border-2 border-orange-800"
            >
              Reset Pencarian
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t-4 border-orange-600 py-12 mt-auto text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 mb-6 opacity-80">
             <div className="bg-orange-600 p-2 rounded transform rotate-45">
               <Award className="w-6 h-6 text-white transform -rotate-45" />
             </div>
             <span className="font-black text-2xl tracking-[0.2em] text-white">PJOK EDUCATION</span>
          </div>
          <p className="text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} RA Production. <span className="text-orange-500 font-bold">"Mens sana in corpore sano"</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;