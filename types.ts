export enum Category {
  RPPM = 'RPPM',
  CP = 'CP',
  TP = 'TP',
  PENILAIAN = 'Penilaian'
}

export interface Material {
  id: string;
  title: string;
  description: string;
  category: Category;
  subCategory?: string; // Added for better organization (e.g., Kelas 1, AI Tools)
  url: string;
  thumbnailUrl?: string;
  dateAdded: string;
}

export type FilterType = Category | 'ALL';