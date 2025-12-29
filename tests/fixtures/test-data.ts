interface Size {
  width: number;
  height: number;
}

interface TestData {
  url: string;
  topics: {
    affiliate: string;
    blockchain: string;
    development: string;
    igaming: string;
    internetMarketing: string;
    seo: string;
    fintech: string;
  };
  sizes: {
    small: Size;
    medium: Size;
    max: Size;
    custom: Size;
  };
  themes: {
    light: string;
    dark: string;
  };
  timeouts: {
    pageLoad: number;
    action: number;
    longAction: number;
    veryLongAction: number;
  };
}

export const testData: TestData = {
  url: 'https://dev.3snet.info/eventswidget/',
  topics: {
    affiliate: 'Affiliate',
    blockchain: 'Blockchain',
    development: 'Development',
    igaming: 'Igaming',
    internetMarketing: 'Internet Marketing',
    seo: 'SEO',
    fintech: 'Финтех',
  },
  sizes: {
    small: { width: 380, height: 380 },
    medium: { width: 600, height: 400 },
    max: { width: 1020, height: 720 },
    custom: { width: 240, height: 230 },
  },
  themes: {
    light: 'light',
    dark: 'dark',
  },
  timeouts: {
    pageLoad: 60000,
    action: 30000,
    longAction: 45000,
    veryLongAction: 60000,
  },
};
