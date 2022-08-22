import { ZuiLanguage } from '../../interfaces/language';
import { ZUI_RUSSIAN_LANGUAGE_CORE } from './core';
import { ZUI_RUSSIAN_LANGUAGE_KIT } from './kit';

export const ZUI_RUSSIAN_LANGUAGE = {
    name: `russian`,
    ...ZUI_RUSSIAN_LANGUAGE_CORE,
    ...ZUI_RUSSIAN_LANGUAGE_KIT
} as ZuiLanguage;
