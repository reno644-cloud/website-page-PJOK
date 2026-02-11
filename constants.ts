import { Category, Material } from './types';

// ==================================================================================
// KONFIGURASI KODE AKSES
// Silahkan ganti 2 angka di bawah ini untuk mengubah password aplikasi
// ==================================================================================
export const ADMIN_ACCESS_CODE = '44'; 

export const MATERIALS_DATA: Material[] = [
  // ==================================================================================
  // CP & ATP AI TOOLS (GABUNGAN)
  // ==================================================================================
  {
    id: 'cp-atp-ai-gen',
    title: 'Aplikasi CP & ATP Otomatis (AI)',
    description: 'Tools cerdas Generate AI untuk menganalisis Capaian Pembelajaran (CP) dan menyusun Alur Tujuan Pembelajaran (ATP/TP) secara otomatis.',
    category: Category.CP_ATP,
    subCategory: 'AI TOOLS',
    url: 'https://ai.studio/apps/drive/1czxHavoTubw8-8HrCq-wAIqmPvnyhVPz?fullscreenApplet=true',
    dateAdded: '2024-02-28',
  },

  // ==================================================================================
  // RPP AI TOOL
  // ==================================================================================
  {
    id: 'rpp-pjok-ai',
    title: 'Aplikasi Pembuatan RPP PJOK (AI)',
    description: 'Aplikasi cerdas untuk menyusun Rencana Pelaksanaan Pembelajaran (RPP) PJOK secara otomatis dan sistematis.',
    category: Category.RPP,
    subCategory: 'AI TOOLS',
    url: 'https://ai.studio/apps/drive/1IKMXppTP90aMUjMwXCsBbz3dkom68Ccy?fullscreenApplet=true',
    dateAdded: '2024-02-28',
  },

  // ==================================================================================
  // PENILAIAN AI TOOL
  // ==================================================================================
  {
    id: 'nilai-ai-gen',
    title: 'Aplikasi Penilaian Otomatis (AI)',
    description: 'Aplikasi Generate AI otomatis untuk membantu pengolahan nilai dan asesmen pembelajaran PJOK.',
    category: Category.PENILAIAN,
    subCategory: 'AI TOOLS',
    url: 'https://ai.studio/apps/drive/1xogj57F_oQWdjQsYR0EsQtTOJ-SZylEN?fullscreenApplet=true',
    dateAdded: '2024-02-28',
  },
];