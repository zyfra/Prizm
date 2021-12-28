import { TranslateLoader, TranslateLoaderFactory } from '../lib/core';
import { Observable, of } from 'rxjs';

export class MockLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<any> {
    return of(null);
  }
}

export const mockLoader = new MockLoader();

export class MockLoaderData implements TranslateLoader {
  constructor(private data: any) {
  }
  public getTranslation(lang: string): Observable<any> {
    return of(this.data);
  }
}

export class MockLoaderFactory extends TranslateLoaderFactory {
  public loader(chunkId: any): TranslateLoader {
    return mockLoader;
  }
}
