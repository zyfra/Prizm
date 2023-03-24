import type { PrizmLanguageName } from './language-names';

export interface PrizmLanguageStorage extends Storage {
  getItem(key: string): PrizmLanguageName | null;
  setItem(key: string, value: PrizmLanguageName): void;
}
