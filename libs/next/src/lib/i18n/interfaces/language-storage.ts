import type {ZuiLanguageName} from './language-names';

export interface ZuiLanguageStorage extends Storage {
    getItem(key: string): ZuiLanguageName | null;
    setItem(key: string, value: ZuiLanguageName): void;
}
