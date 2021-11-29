import { TranslateLoader, TranslateLoaderFactory } from '../lib/core';
import { Observable, of } from 'rxjs';

export class MockLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(null);
  }
}

export const mockLoader = new MockLoader();

export class MockLoaderData implements TranslateLoader {
  constructor(private data: any) {
  }
  getTranslation(lang: string): Observable<any> {
    return of(this.data);
  }
}

export class MockLoaderFactory extends TranslateLoaderFactory {
  loader(chunkId: any): TranslateLoader {
    return mockLoader;
  }
}
