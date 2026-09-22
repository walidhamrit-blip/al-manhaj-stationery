export type ThemeId =
  | 'emerald'
  | 'midnight'
  | 'sahara'
  | 'royal'
  | 'ocean'
  | 'rose'
  | 'forest'
  | 'slate'

export interface ThemeDef {
  id: ThemeId
  nameEn: string
  nameAr: string
  dark: boolean
  /** representative colors for the swatch preview */
  swatch: { bg: string; primary: string; accent: string }
}

export const THEMES: ThemeDef[] = [
  {
    id: 'emerald',
    nameEn: 'Emerald',
    nameAr: 'زمردي',
    dark: false,
    swatch: { bg: '#eafcf3', primary: '#059669', accent: '#f59e0b' },
  },
  {
    id: 'midnight',
    nameEn: 'Midnight',
    nameAr: 'منتصف الليل',
    dark: true,
    swatch: { bg: '#0a0f24', primary: '#6366f1', accent: '#ec4899' },
  },
  {
    id: 'sahara',
    nameEn: 'Sahara',
    nameAr: 'الصحراء',
    dark: false,
    swatch: { bg: '#fff2e0', primary: '#ea580c', accent: '#10b981' },
  },
  {
    id: 'royal',
    nameEn: 'Royal',
    nameAr: 'ملكي',
    dark: true,
    swatch: { bg: '#17092b', primary: '#a855f7', accent: '#f472b6' },
  },
  {
    id: 'ocean',
    nameEn: 'Ocean',
    nameAr: 'المحيط',
    dark: false,
    swatch: { bg: '#e2f5ff', primary: '#0284c7', accent: '#f43f5e' },
  },
  {
    id: 'rose',
    nameEn: 'Rose',
    nameAr: 'وردي',
    dark: false,
    swatch: { bg: '#ffe9f2', primary: '#e11d48', accent: '#8b5cf6' },
  },
  {
    id: 'forest',
    nameEn: 'Forest',
    nameAr: 'الغابة',
    dark: true,
    swatch: { bg: '#06160f', primary: '#22c55e', accent: '#facc15' },
  },
  {
    id: 'slate',
    nameEn: 'Slate',
    nameAr: 'رمادي',
    dark: false,
    swatch: { bg: '#f1f5f9', primary: '#7c3aed', accent: '#f97316' },
  },
]
