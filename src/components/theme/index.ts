export const themes = [
  'Simple',
  'Colorful',
  'Black',
  'Joyful',
  'Simple2',
  'Colorful2',
  'Black2',
  'Joyful2',
  'Simple3',
  'Colorful3',
  'Black3',
  'Joyful3',
] as const;
export type ThemeType = (typeof themes)[number];

// ThemeType → 소문자 문자열로 자동 매핑
export const themeMap = Object.fromEntries(themes.map((t) => [t, t.toLowerCase()])) as Record<
  ThemeType,
  Lowercase<ThemeType>
>;
