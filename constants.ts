import { Category, Material } from './types';

export const MATERIALS_DATA: Material[] = [
  // ==================================================================================
  // 2 KOLOM LINK UTAMA (DAPAT DI-TAUTKAN / DI-EDIT)
  // Edit bagian url: '#' dengan link tujuan Anda.
  // ==================================================================================
  {
    id: 'slot-1', 
    title: '[SLOT KOSONG 1] KLIK UNTUK EDIT',
    description: 'Slot ini disiapkan untuk link prioritas. Silahkan ganti judul, deskripsi, dan URL di file constants.ts sesuai kebutuhan.',
    category: Category.PENILAIAN, 
    subCategory: 'INFO UTAMA',
    url: '#', // GANTI DENGAN LINK ANDA
    dateAdded: '2024-02-01',
  },
  {
    id: 'slot-2', 
    title: '[SLOT KOSONG 2] KLIK UNTUK EDIT',
    description: 'Slot kedua untuk link penting lainnya. Tampilan 2 kolom membuat informasi ini lebih menonjol dan mudah diakses.',
    category: Category.RPPM,
    subCategory: 'INFO TAMBAHAN',
    url: '#', // GANTI DENGAN LINK ANDA
    dateAdded: '2024-02-01',
  },
  // ==================================================================================

  // --- RPP KELAS 1-6 ---
  {
    id: 'rpp-1',
    title: 'Modul Ajar / RPP PJOK Kelas 1',
    description: 'Rencana Pelaksanaan Pembelajaran untuk Kelas 1 SD. Fokus pada gerak dasar lokomotor dan non-lokomotor yang menyenangkan.',
    category: Category.RPP,
    subCategory: 'Kelas 1',
    url: 'https://example.com/rpp-kelas-1',
    dateAdded: '2024-01-10',
  },
  {
    id: 'rpp-2',
    title: 'Modul Ajar / RPP PJOK Kelas 2',
    description: 'Rencana Pelaksanaan Pembelajaran untuk Kelas 2 SD. Pengembangan variasi pola gerak dasar manipulatif.',
    category: Category.RPP,
    subCategory: 'Kelas 2',
    url: 'https://example.com/rpp-kelas-2',
    dateAdded: '2024-01-11',
  },
  {
    id: 'rpp-3',
    title: 'Modul Ajar / RPP PJOK Kelas 3',
    description: 'Rencana Pelaksanaan Pembelajaran untuk Kelas 3 SD. Kombinasi gerak dasar dalam berbagai permainan sederhana.',
    category: Category.RPP,
    subCategory: 'Kelas 3',
    url: 'https://example.com/rpp-kelas-3',
    dateAdded: '2024-01-12',
  },
  {
    id: 'rpp-4',
    title: 'Modul Ajar / RPP PJOK Kelas 4',
    description: 'Rencana Pelaksanaan Pembelajaran untuk Kelas 4 SD. Variasi dan kombinasi gerak dasar pada permainan bola besar.',
    category: Category.RPP,
    subCategory: 'Kelas 4',
    url: 'https://example.com/rpp-kelas-4',
    dateAdded: '2024-01-13',
  },
  {
    id: 'rpp-5',
    title: 'Modul Ajar / RPP PJOK Kelas 5',
    description: 'Rencana Pelaksanaan Pembelajaran untuk Kelas 5 SD. Penerapan gerak pada olahraga pilihan dan kebugaran jasmani.',
    category: Category.RPP,
    subCategory: 'Kelas 5',
    url: 'https://example.com/rpp-kelas-5',
    dateAdded: '2024-01-14',
  },
  {
    id: 'rpp-6',
    title: 'Modul Ajar / RPP PJOK Kelas 6',
    description: 'Rencana Pelaksanaan Pembelajaran untuk Kelas 6 SD. Evaluasi gerak dan rangkaian senam serta renang dasar.',
    category: Category.RPP,
    subCategory: 'Kelas 6',
    url: 'https://example.com/rpp-kelas-6',
    dateAdded: '2024-01-15',
  },

  // --- CAPAIAN PEMBELAJARAN (CP) ---
  {
    id: 'cp-a',
    title: 'Capaian Pembelajaran (CP) - Fase A',
    description: 'Dokumen CP Fase A (Umumnya Kelas 1-2). Peserta didik meniru gerakan, mengenali nama anggota tubuh, dan menjaga kebersihan diri.',
    category: Category.CP,
    subCategory: 'Fase A (Kls 1-2)',
    url: 'https://example.com/cp-fase-a',
    dateAdded: '2024-01-20',
  },
  {
    id: 'cp-b',
    title: 'Capaian Pembelajaran (CP) - Fase B',
    description: 'Dokumen CP Fase B (Umumnya Kelas 3-4). Peserta didik menghaluskan gerak dasar dan mengenal strategi permainan sederhana.',
    category: Category.CP,
    subCategory: 'Fase B (Kls 3-4)',
    url: 'https://example.com/cp-fase-b',
    dateAdded: '2024-01-21',
  },
  {
    id: 'cp-c',
    title: 'Capaian Pembelajaran (CP) - Fase C',
    description: 'Dokumen CP Fase C (Umumnya Kelas 5-6). Pengembangan gerak spesifik cabang olahraga dan peningkatan kebugaran jasmani.',
    category: Category.CP,
    subCategory: 'Fase C (Kls 5-6)',
    url: 'https://example.com/cp-fase-c',
    dateAdded: '2024-01-22',
  },

  // --- TUJUAN PEMBELAJARAN (TP) ---
  {
    id: 'tp-a',
    title: 'Alur Tujuan Pembelajaran (ATP) - Fase A',
    description: 'Turunan tujuan pembelajaran dari CP Fase A. Fokus pada kegembiraan bergerak dan pengenalan aturan sederhana.',
    category: Category.TP,
    subCategory: 'Fase A (Kls 1-2)',
    url: 'https://example.com/tp-fase-a',
    dateAdded: '2024-01-25',
  },
  {
    id: 'tp-b',
    title: 'Alur Tujuan Pembelajaran (ATP) - Fase B',
    description: 'Turunan tujuan pembelajaran dari CP Fase B. Fokus pada kerjasama tim dan peningkatan keterampilan gerak manipulatif.',
    category: Category.TP,
    subCategory: 'Fase B (Kls 3-4)',
    url: 'https://example.com/tp-fase-b',
    dateAdded: '2024-01-26',
  },
  {
    id: 'tp-c',
    title: 'Alur Tujuan Pembelajaran (ATP) - Fase C',
    description: 'Turunan tujuan pembelajaran dari CP Fase C. Fokus pada strategi permainan, sportivitas, dan gaya hidup aktif.',
    category: Category.TP,
    subCategory: 'Fase C (Kls 5-6)',
    url: 'https://example.com/tp-fase-c',
    dateAdded: '2024-01-27',
  },

  // --- RPPM (TEMPLATE KOSONG / CONTOH) ---
  {
    id: 'rppm-template-1',
    title: 'RPPM Minggu 1: Gerak Dasar Jalan',
    description: 'Rencana kegiatan mingguan fokus variasi gerak berjalan. Siswa diajak bermain "Jalan Kereta Api" dan "Jalan Jinjit".',
    category: Category.RPPM,
    subCategory: 'Minggu 1',
    url: '#', 
    dateAdded: '2024-02-01',
  },
  {
    id: 'rppm-template-2',
    title: 'RPPM Minggu 2: Gerak Dasar Lari',
    description: 'Rencana kegiatan mingguan fokus variasi gerak berlari. Termasuk permainan "Lari Estafet" dan "Lari Memindahkan Bola".',
    category: Category.RPPM,
    subCategory: 'Minggu 2',
    url: '#',
    dateAdded: '2024-02-01',
  },

  // --- PENILAIAN (TEMPLATE KOSONG / CONTOH) ---
  {
    id: 'nilai-template-1',
    title: 'Format Penilaian Harian (Format Excel)',
    description: 'Link download format penilaian harian siswa aspek kognitif dan psikomotor untuk semua jenjang kelas.',
    category: Category.PENILAIAN,
    subCategory: 'Format Nilai',
    url: '#', 
    dateAdded: '2024-02-01',
  },
  {
    id: 'nilai-template-2',
    title: 'Lembar Asesmen Sumatif Tengah Semester',
    description: 'Instrumen asesmen sumatif untuk evaluasi pertengahan semester. Dilengkapi rubrik penilaian yang jelas.',
    category: Category.PENILAIAN,
    subCategory: 'Asesmen',
    url: '#', 
    dateAdded: '2024-02-01',
  }
];