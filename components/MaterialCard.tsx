import React from 'react';
import { Material, Category } from '../types';
import { ExternalLink, FileText, Target, Crosshair, Calendar, Bookmark, CalendarRange, ClipboardCheck, ArrowRight } from 'lucide-react';

interface MaterialCardProps {
  material: Material;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material }) => {
  const getCategoryTheme = (category: Category) => {
    switch (category) {
      case Category.RPP:
        return {
          icon: <FileText className="w-5 h-5" />,
          bg: 'bg-blue-900',
          text: 'text-blue-200',
          accent: 'text-blue-600',
          border: 'border-blue-900',
          badge: 'bg-blue-700',
          hoverShadow: 'group-hover:shadow-blue-900/20'
        };
      case Category.CP:
        return {
          icon: <Target className="w-5 h-5" />,
          bg: 'bg-purple-900',
          text: 'text-purple-200',
          accent: 'text-purple-600',
          border: 'border-purple-900',
          badge: 'bg-purple-700',
          hoverShadow: 'group-hover:shadow-purple-900/20'
        };
      case Category.TP:
        return {
          icon: <Crosshair className="w-5 h-5" />,
          bg: 'bg-orange-900',
          text: 'text-orange-200',
          accent: 'text-orange-600',
          border: 'border-orange-900',
          badge: 'bg-orange-700',
          hoverShadow: 'group-hover:shadow-orange-900/20'
        };
      case Category.RPPM:
        return {
          icon: <CalendarRange className="w-5 h-5" />,
          bg: 'bg-indigo-900',
          text: 'text-indigo-200',
          accent: 'text-indigo-600',
          border: 'border-indigo-900',
          badge: 'bg-indigo-700',
          hoverShadow: 'group-hover:shadow-indigo-900/20'
        };
      case Category.PENILAIAN:
        return {
          icon: <ClipboardCheck className="w-5 h-5" />,
          bg: 'bg-rose-900',
          text: 'text-rose-200',
          accent: 'text-rose-600',
          border: 'border-rose-900',
          badge: 'bg-rose-700',
          hoverShadow: 'group-hover:shadow-rose-900/20'
        };
      default:
        return {
          icon: <Bookmark className="w-5 h-5" />,
          bg: 'bg-slate-800',
          text: 'text-slate-300',
          accent: 'text-slate-600',
          border: 'border-slate-800',
          badge: 'bg-slate-600',
          hoverShadow: 'group-hover:shadow-slate-900/20'
        };
    }
  };

  const theme = getCategoryTheme(material.category);

  return (
    <div className={`
      group bg-white rounded-none border-b-[6px] ${theme.border} 
      shadow-lg hover:shadow-2xl ${theme.hoverShadow}
      hover:-translate-y-2 transition-all duration-300 
      flex flex-col h-full relative overflow-hidden
    `}>
      
      {/* Decorative Header Bar */}
      <div className={`h-2 w-full ${theme.bg}`}></div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Top Meta */}
        <div className="flex justify-between items-start mb-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-100 ${theme.text} font-bold text-xs uppercase tracking-wider`}>
             <span className={`${theme.accent}`}>{theme.icon}</span>
             <span className="text-slate-700">{material.category}</span>
          </div>
          
          {material.subCategory && (
            <span className={`inline-flex items-center px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white ${theme.badge} shadow-sm transform skew-x-[-10deg]`}>
              <span className="skew-x-[10deg]">{material.subCategory}</span>
            </span>
          )}
        </div>

        {/* Content Section */}
        <h3 className="text-xl font-black text-slate-800 mb-3 leading-tight group-hover:text-orange-600 transition-colors uppercase">
          {material.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 font-medium border-l-2 border-slate-200 pl-4">
          {material.description}
        </p>

        {/* Footer Action */}
        <div className="mt-auto pt-5 border-t-2 border-slate-100 flex items-center justify-between">
          <span className="flex items-center text-xs text-slate-400 font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-300" />
            {new Date(material.dateAdded).toLocaleDateString('id-ID', { year: 'numeric', month: 'short' })}
          </span>
          
          <a
            href={material.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 text-xs font-black uppercase tracking-widest px-4 py-2 
              bg-slate-900 text-white hover:bg-orange-600 transition-colors
              group-hover:pr-2
            `}
          >
            BUKA
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;