export enum Category {
  RPP = 'RPP',
  CP = 'Capaian Pembelajaran',
  TP = 'Tujuan Pembelajaran',
  RPPM = 'RPPM (Mingguan)',
  PENILAIAN = 'Penilaian & Asesmen'
}

export interface Material {
  id: string;
  title: string;
  description: string;
  category: Category;
  subCategory?: string; // For "Kelas 1", "Fase A", etc.
  url: string;
  thumbnailUrl?: string;
  dateAdded: string;
}

export type FilterType = Category | 'ALL';