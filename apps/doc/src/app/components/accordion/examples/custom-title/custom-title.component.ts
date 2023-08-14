import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-accordion-custom-title-example',
  templateUrl: './custom-title.component.html',
  styleUrls: ['./custom-title.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionCustomTitleComponent {
  readonly items = [
    {
      description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
      стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
      создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
      Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
      Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х
      годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых
      используется.`,
      title: 'Title 1',
      hint: 'It is 1st element',
    },
    {
      description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
      стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
      создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
      Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
      Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х
      годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых
      используется Lorem Ipsum. Не дочитали до конца - ошибка, дочитали и думали, что текст тот же, что и выше
      - фатальная ошибка.`,
      title: 'Title 2',
      hint: 'It is 2nd element',
    },
  ];
}
