import { TestPageConfig } from '../models/ui-config';

/**
 * Лучше не мешать тестовую дату с моделями, а то опять каша получается.
 * Ну это мое мнение. На твое усмотрение
 */
export const TEST_DATA: TestPageConfig = {
  url: 'https://dev.3snet.info/eventswidget/',

  topics: [
    'Affiliate',
    'Blockchain',
    'Development',
    'Igaming',
    'Internet Marketing',
    'SEO',
    'Финтех',
  ],

  viewports: {
    small: { width: 240, height: 240 },
    medium: { width: 380, height: 380 },
    large: { width: 600, height: 400 },
    max: { width: 1020, height: 720 },
  },

  themes: {
    light: 'light',
    dark: 'dark',
  },
};

//Это реально нужно экспортировать каждое отдельно?
//На подумать...
//Также с именами тут лучше поменять, а то слишком абстрактно, можно потом запутаться, если будет больше страниц.
export const URL = TEST_DATA.url;
export const TOPICS = TEST_DATA.topics;
export const SIZES = TEST_DATA.viewports;
export const THEMES = TEST_DATA.themes;

export default TEST_DATA;
