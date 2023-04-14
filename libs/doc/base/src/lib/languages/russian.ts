import { Provider } from '@angular/core';

import {
  PRIZM_DOC_DEMO_TEXTS,
  PRIZM_DOC_DOCUMENTATION_TEXTS,
  PRIZM_DOC_EXAMPLE_TEXTS,
  PRIZM_DOC_MENU_TEXT,
  PRIZM_DOC_SEARCH_TEXT,
  PRIZM_DOC_SEE_ALSO_TEXT,
  PRIZM_DOC_SOURCE_CODE_TEXT,
} from '../tokens/i18n';

export const TUI_DOC_RUSSIAN: Provider[] = [
  {
    provide: PRIZM_DOC_DEMO_TEXTS,
    useValue: [`Сделано с помощью директивы: `, `Фон`, `Детали формы`],
  },
  {
    provide: PRIZM_DOC_DOCUMENTATION_TEXTS,
    useValue: [
      `Аргумент`,
      `Тип`,
      `Имя и описание`,
      `Значение`,
      `Для работы с динамическими шаблонами используется`,
    ],
  },
  {
    provide: PRIZM_DOC_EXAMPLE_TEXTS,
    useValue: [`Превью`, `Ссылка на пример скопирована`, `Готово`],
  },
  {
    provide: PRIZM_DOC_MENU_TEXT,
    useValue: `Меню`,
  },
  {
    provide: PRIZM_DOC_SEARCH_TEXT,
    useValue: `Поиск`,
  },
  {
    provide: PRIZM_DOC_SEE_ALSO_TEXT,
    useValue: `Смотрите также`,
  },
  {
    provide: PRIZM_DOC_SOURCE_CODE_TEXT,
    useValue: `Исходный код`,
  },
];
