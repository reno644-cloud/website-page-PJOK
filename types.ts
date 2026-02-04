export enum Category {
  CP_ATP = 'CP & ATP',
  RPP = 'RPP',
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