export type Size = {
  width: number;
  height: number;
};

export type Sizes = {
  small: Size;
  medium: Size;
  large: Size;
  max: Size;
};

export type Themes = {
  light: string;
  dark: string;
};

export type TestData = {
  url: string;
  topics: string[];
  sizes: Sizes;
  themes: Themes;
};

export const TEST_DATA: TestData = {
  url: 'https://dev.3snet.info/eventswidget/',
  
  topics: [
    'Affiliate',
    'Blockchain', 
    'Development',
    'Igaming',
    'Internet Marketing',
    'SEO',
    'Финтех'
  ],
  
  sizes: {
    small: { width: 240, height: 240 },
    medium: { width: 380, height: 380 },
    large: { width: 600, height: 400 },
    max: { width: 1020, height: 720 }
  },
  
  themes: {
    light: 'light',
    dark: 'dark'
  }
};

export const URL = TEST_DATA.url;
export const TOPICS = TEST_DATA.topics;
export const SIZES = TEST_DATA.sizes;
export const THEMES = TEST_DATA.themes;

export default TEST_DATA;