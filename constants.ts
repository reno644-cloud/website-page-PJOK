import { Category, Material } from './types';

export const MATERIALS_DATA: Material[] = [
  // ==================================================================================
  // LINK UTAMA & TOOLS (AI)
  // ==================================================================================
  {
    id: 'rppm-ai-gen',
    title: 'Aplikasi Pembuatan RPPM Otomatis (AI)',
    description: 'Tools cerdas Generate AI untuk menyusun Rencana Pelaksanaan Pembelajaran Mingguan (RPPM) secara otomatis.',
    category: Category.RPPM,
    subCategory: 'AI TOOLS',
    url: 'https://ai.studio/apps/drive/1B6ixptfPDxyBEv9fC-QO7FeeL4g6d18f?fullscreenApplet=true',
    dateAdded: '2024-02-28',
  },
  {
    id: 'nilai-ai-gen',
    title: 'Aplikasi Penilaian Otomatis (AI)',
    description: 'Aplikasi Generate AI otomatis untuk membantu pengolahan nilai dan asesmen pembelajaran PJOK.',
    category: Category.PENILAIAN,
    subCategory: 'AI TOOLS',
    url: 'https://ai.studio/apps/drive/1xogj57F_oQWdjQsYR0EsQtTOJ-SZylEN',
    dateAdded: '2024-02-28',
  },

  // --- CP & TP ---
  {
    id: 'cp-a',
    title: 'Capaian Pembelajaran (CP) - Fase A',
    description: 'Dokumen CP Fase A (Kelas 1-2). Meniru gerakan, mengenali tubuh, dan kebersihan diri.',
    category: Category.CP,
    subCategory: 'Fase A',
    url: '#',
    dateAdded: '2024-01-20',
  },
  {
    id: 'tp-b',
    title: 'Alur Tujuan Pembelajaran (ATP) - Fase B',
    description: 'Turunan tujuan pembelajaran dari CP Fase B (Kelas 3-4). Fokus kerjasama tim.',
    category: Category.TP,
    subCategory: 'Fase B',
    url: '#',
    dateAdded: '2024-01-26',
  },
];