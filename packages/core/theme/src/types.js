// @flow

export type ThemeModes = 'light' | 'dark';
export type Theme = { mode: ThemeModes };
export type ThemeProps = {
  theme: { __ATLASKIT_THEME__: Theme },
};
export type ThemedValue = (props: ?ThemeProps) => string | number;
export type colorPaletteType = '8' | '16' | '24';
