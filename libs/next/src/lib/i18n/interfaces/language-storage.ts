import type { PzmLanguageName } from './language-names';

export interface PzmLanguageStorage extends Storage {
    getItem(key: string): PzmLanguageName | null;
    setItem(key: string, value: PzmLanguageName): void;
}
