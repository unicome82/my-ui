export const themes = ['Simple', 'Colorful', 'Black', 'Joyful'] as const;
export type ThemeType = (typeof themes)[number];

// ThemeType → 소문자 문자열로 자동 매핑
export const themeMap = Object.fromEntries(themes.map((t) => [t, t.toLowerCase()])) as Record<
  ThemeType,
  Lowercase<ThemeType>
>;
