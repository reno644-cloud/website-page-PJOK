import React from 'react';
import { Material, Category } from '../types';
import { ExternalLink, Bookmark, Calendar, ClipboardCheck, Sparkles, BookOpen } from 'lucide-react';

interface MaterialCardProps {
  material: Material;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material }) => {
  const getCategoryTheme = (category: Category) => {
    switch (category) {
      case Category.CP_ATP:
        return {
          icon: <Sparkles className="w-4 h-4" />,
          bg: 'bg-violet-100',
          text: 'text-violet-800',
          border: 'border-violet-200',
          badge: 'bg-violet-600'
        };
      case Category.RPP:
        return {
          icon: <BookOpen className="w-4 h-4" />,
          bg: 'bg-emerald-100',
          text: 'text-emerald-800',
          border: 'border-emerald-200',
          badge: 'bg-emerald-600'
        };
      case Category.PENILAIAN:
        return {
          icon: <ClipboardCheck className="w-4 h-4" />,
          bg: 'bg-rose-100',
          text: 'text-rose-800',
          border: 'border-rose-200',
          badge: 'bg-rose-600'
        };
      default:
        return {
          icon: <Bookmark className="w-4 h-4" />,
          bg: 'bg-slate-100',
          text: 'text-slate-800',
          border: 'border-slate-200',
          badge: 'bg-slate-600'
        };
    }
  };

  const theme = getCategoryTheme(material.category);
  const isAiTool = material.subCategory === 'AI TOOLS';

  return (
    <div className={`group bg-white rounded-xl border-2 ${theme.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden relative`}>
      
      {/* Top Banner Tag */}
      <div className="absolute top-0 right-0 p-3 z-10">
         {material.subCategory && (
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-sm ${isAiTool ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse' : theme.badge}`}>
              {isAiTool && <Sparkles className="w-3 h-3" />}
              {material.subCategory}
            </span>
         )}
      </div>

      <div className="p-5 flex-1 flex flex-col pt-10">
        {/* Category Label */}
        <div className="flex items-center gap-2 mb-3">
           <div className={`p-1.5 rounded-md ${theme.bg} ${theme.text}`}>
             {theme.icon}
           </div>
           <span className={`text-xs font-bold uppercase tracking-wide ${theme.text}`}>
             {material.category}
           </span>
        </div>

        {/* Content Section */}
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-sky-700 transition-colors">
          {material.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
          {material.description}
        </p>

        {/* Meta & Action */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="flex items-center text-xs text-slate-400 font-medium">
            <Calendar className="w-3.5 h-3.5 mr-1" />
            {new Date(material.dateAdded).toLocaleDateString('id-ID', { year: 'numeric', month: 'short' })}
          </span>
          
          <a
            href={material.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-colors ${isAiTool ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            {isAiTool ? 'Buka Aplikasi' : 'Buka Materi'}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;