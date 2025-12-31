//Более понятно сайз чего, а не абстрактный сайз
export type ViewportSize = {
  width: number;
  height: number;
};

//Здесь тоже самое
export type ViewportPresets = {
  small: ViewportSize;
  medium: ViewportSize;
  large: ViewportSize;
  max: ViewportSize;
};

export type ThemeNames = {
  light: string;
  dark: string;
};

//Здесь можно назвать конкретно какой страницы конфиг. Оставлю для простоты просто тест
export type TestPageConfig = {
  url: string;
  topics: string[];
  viewports: ViewportPresets;
  themes: ThemeNames;
};
