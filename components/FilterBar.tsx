import React from 'react';
import { FilterType, Category } from '../types';
import { LayoutGrid, Target, Crosshair, CalendarRange, ClipboardCheck } from 'lucide-react';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: Record<FilterType, number>;
}

const FilterBar: React.FC<FilterBarProps> = ({ currentFilter, onFilterChange, counts }) => {
  const filters: { type: FilterType; label: string; icon: React.ReactNode }[] = [
    { type: 'ALL', label: 'Semua', icon: <LayoutGrid className="w-4 h-4" /> },
    { type: Category.RPPM, label: 'RPPM', icon: <CalendarRange className="w-4 h-4" /> },
    { type: Category.CP, label: 'CP', icon: <Target className="w-4 h-4" /> },
    { type: Category.TP, label: 'TP', icon: <Crosshair className="w-4 h-4" /> },
    { type: Category.PENILAIAN, label: 'Penilaian', icon: <ClipboardCheck className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full bg-white border-b border-sky-100 sticky top-0 md:top-28 z-40 shadow-sm overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-nowrap md:flex-wrap items-center gap-3 min-w-max md:min-w-0">
          {filters.map((filter) => {
            const isActive = currentFilter === filter.type;
            return (
              <button
                key={filter.type}
                onClick={() => onFilterChange(filter.type)}
                className={`
                  relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ease-in-out uppercase tracking-wide whitespace-nowrap
                  ${isActive 
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/30 transform -translate-y-0.5' 
                    : 'bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-700 border border-slate-200'
                  }
                `}
              >
                {filter.icon}
                {filter.label}
                <span className={`
                  ml-1.5 px-2 py-0.5 text-[10px] rounded-full
                  ${isActive ? 'bg-white/20 text-white' : 'bg-slate-300/50 text-slate-600'}
                `}>
                  {counts[filter.type]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;