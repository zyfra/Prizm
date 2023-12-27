import { createStore, select, setProp, Store, withProps } from '@ngneat/elf';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { PrizmLanguageMeta } from './versions.constants';
import { Injectable } from '@angular/core';

interface LanguageProps {
  language: PrizmLanguageMeta['code'];
}

@Injectable({ providedIn: 'root' })
export class LanguageManagerService {
  public readonly store = createStore(
    {
      name: 'languages',
    },
    withProps<LanguageProps>({ language: 'ru' })
  );

  readonly code$ = this.store.pipe(select(i => i.language));
  constructor() {
    persistState(this.store, {
      key: 'languages',
      storage: localStorageStrategy,
    });
  }

  public setLanguage(language: PrizmLanguageMeta['code']): void {
    this.store.update(setProp('language', language));
  }
}
