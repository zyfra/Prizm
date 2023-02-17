import { PrizmPlaywrightDemoItem } from './model';

export class UtilPwConsole {
  static readonly commonLogs: string[] = [];
  readonly logs: string[] = [];

  public static async getErrorsForPage(
    baseUrl: string,
    item: PrizmPlaywrightDemoItem,
    page: any
  ): Promise<string[]> {
    if (!item.hasExamples && !item.hasLiveDemo) return;
    const url = `${baseUrl}${item.url}`;
    console.log('LOG:open-page', url);
    const obj = new UtilPwConsole();
    await obj.start(page);
    await page.goto(url);
    if (item.hasExamples) await page.getByRole('link', { name: 'Examples' }).click();
    if (item.hasLiveDemo) await page.getByRole('link', { name: 'Live demo' }).click();
    if (obj.logs.length) {
      console.error('ERROR:url', 'find [', obj.logs.length, '] errors', 'on page', url);
      console.error('ERROR:messages', obj.logs, 'on page', url);
      this.commonLogs.push(...obj.logs);
    } else {
      console.log('LOG:SUCCESS', url);
    }
    return obj.logs;
  }
  public async start(page) {
    page.on('console', message => {
      if (['assert', 'error'].includes(message.type())) {
        this.logs.push(message.text());
      }
    });
  }
}
