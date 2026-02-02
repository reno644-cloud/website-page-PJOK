import React from 'react';
import { FilterType, Category } from '../types';
import { LayoutGrid, FileText, Target, Crosshair, CalendarRange, ClipboardCheck } from 'lucide-react';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: Record<FilterType, number>;
}

const FilterBar: React.FC<FilterBarProps> = ({ currentFilter, onFilterChange, counts }) => {
  const filters: { type: FilterType; label: string; icon: React.ReactNode }[] = [
    { type: 'ALL', label: 'SEMUA MATERI', icon: <LayoutGrid className="w-4 h-4" /> },
    { type: Category.RPP, label: 'RPP', icon: <FileText className="w-4 h-4" /> },
    { type: Category.RPPM, label: 'RPPM (MINGGUAN)', icon: <CalendarRange className="w-4 h-4" /> },
    { type: Category.CP, label: 'CP', icon: <Target className="w-4 h-4" /> },
    { type: Category.TP, label: 'TP', icon: <Crosshair className="w-4 h-4" /> },
    { type: Category.PENILAIAN, label: 'PENILAIAN', icon: <ClipboardCheck className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full bg-slate-900 border-b border-slate-700 sticky top-0 md:top-32 z-40 shadow-xl overflow-x-auto transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-nowrap md:flex-wrap items-center gap-3 min-w-max md:min-w-0 justify-center">
          {filters.map((filter) => {
            const isActive = currentFilter === filter.type;
            return (
              <button
                key={filter.type}
                onClick={() => onFilterChange(filter.type)}
                className={`
                  relative flex items-center gap-2 px-5 py-2.5 rounded-none skew-x-[-10deg] text-xs sm:text-sm font-black transition-all duration-200 ease-in-out uppercase tracking-wider whitespace-nowrap border-2
                  ${isActive 
                    ? 'bg-orange-600 border-orange-500 text-white shadow-[0_0_15px_rgba(234,88,12,0.5)] scale-105 z-10' 
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white hover:border-slate-500'
                  }
                `}
              >
                <div className="skew-x-[10deg] flex items-center gap-2">
                  {filter.icon}
                  {filter.label}
                  <span className={`
                    ml-1.5 px-2 py-0.5 text-[10px] rounded-full font-bold
                    ${isActive ? 'bg-black/30 text-white' : 'bg-black/20 text-slate-500'}
                  `}>
                    {counts[filter.type]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;