import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { PrizmCarouselContent } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-carousel',
  styleUrls: ['./carousel.component.less'],
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronCarouselComponent {
  @Input()
  public content: PrizmCarouselContent;

  @Input()
  public value: string;

  @ContentChild('content', {read: TemplateRef})
  public template: TemplateRef<undefined>;

  @Output()
  public valueChange = new EventEmitter<string>();
}
