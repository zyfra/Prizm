import { PzmLanguage } from '../../interfaces/language';
import { PZM_RUSSIAN_LANGUAGE_CORE } from './core';
import { PZM_RUSSIAN_LANGUAGE_KIT } from './kit';

export const PZM_RUSSIAN_LANGUAGE = {
    name: `russian`,
    ...PZM_RUSSIAN_LANGUAGE_CORE,
    ...PZM_RUSSIAN_LANGUAGE_KIT
} as PzmLanguage;
