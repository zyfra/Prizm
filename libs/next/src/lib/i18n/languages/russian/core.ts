import { PRIZM_RUSSIAN_LANGUAGE_COUNTRIES } from './countries';
import { PrizmLanguageCore } from '../../interfaces';

export const PRIZM_RUSSIAN_LANGUAGE_CORE: PrizmLanguageCore = {
    months: [
        `Январь`,
        `Февраль`,
        `Март`,
        `Апрель`,
        `Май`,
        `Июнь`,
        `Июль`,
        `Август`,
        `Сентябрь`,
        `Октябрь`,
        `Ноябрь`,
        `Декабрь`,
    ],
    close: `Закрыть`,
    nothingFoundMessage: `Ничего не найдено`,
    defaultErrorMessage: `Поле заполнено неверно`,
    spinTexts: [`Предыдущий`, `Следующий`],
    shortWeekDays: [`ПН`, `ВТ`, `СР`, `ЧТ`, `ПТ`, `СБ`, `ВС`],
    countries: PRIZM_RUSSIAN_LANGUAGE_COUNTRIES,
};
