export interface ThemeImageMap {
  logoWhite: string;
  logoBlue: string;
  backgroundImage: string;
}

export interface ThemeColorMap {
  primaryColor: string;
  blue: string;
  darkBlue: string;
  white: string;
  black: string;
  grey: string;
  halfVisibleWhite: string;
}

export interface ThemeFontMap {
  futuraLight20: string;
  futuraRegular20: string;
  futuraRegular24: string;
  futuraRegular32: string;
}

export interface ThemingInterface {
  colors: ThemeColorMap;
  fonts: ThemeFontMap;
  images: ThemeImageMap;
}
