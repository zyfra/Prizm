import type { PrizmLanguageName } from './language-names';

export type PrizmLanguageLoader = (lang: PrizmLanguageName) => Promise<unknown>;
