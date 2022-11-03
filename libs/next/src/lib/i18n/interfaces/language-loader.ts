import type { PzmLanguageName } from './language-names';

export type PzmLanguageLoader = (lang: PzmLanguageName) => Promise<unknown>;
