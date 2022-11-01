import { PZM_RUSSIAN_LANGUAGE_COUNTRIES } from './countries';
import { PzmLanguageCore } from '../../interfaces';

export const PZM_RUSSIAN_LANGUAGE_CORE: PzmLanguageCore = {
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
    countries: PZM_RUSSIAN_LANGUAGE_COUNTRIES,
};
