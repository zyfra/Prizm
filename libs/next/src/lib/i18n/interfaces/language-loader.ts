import type {ZuiLanguageName} from './language-names';

export type ZuiLanguageLoader = (lang: ZuiLanguageName) => Promise<unknown>;
