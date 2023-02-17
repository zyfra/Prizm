import { test, expect } from '@playwright/test';
import { UtilPwConsole } from './util';
import { PrizmPlaywrightDemoItem } from './model';

test('consoleError', async ({ page }) => {
  const base = 'https://prizmui.web.app';
  const urls: PrizmPlaywrightDemoItem[] = [
    {
      url: '/components/accordion',
      hasLiveDemo: true,
      hasExamples: true,
    },
    {
      url: '/components/button',
      hasLiveDemo: true,
      hasExamples: true,
    },
    {
      url: '/components/breadcrumbs',
      hasLiveDemo: true,
      hasExamples: true,
    },
    {
      url: '/components/split-button',
      hasLiveDemo: true,
      hasExamples: true,
    },
    {
      url: '/components/icon-button',
      hasLiveDemo: true,
      hasExamples: true,
    },
  ];

  for (const item of urls) {
    await UtilPwConsole.getErrorsForPage(base, item, page);
  }

  expect(UtilPwConsole.commonLogs.length).toEqual(0);
});
