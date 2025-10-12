export const fonts = [
  'Pretendard',
  'Noto Sans KR',
  'Noto Serif KR',
  'Roboto',
  'Exo',
  'Courier Prime',
  'DM Serif Display',
  'Lobster',
  'Yeseva One',
  'Playfair Display',
  'Barriecito',
  'Caveat',
  'Knewave',
  'Pacifico',
] as const;

export type FontType = (typeof fonts)[number];
