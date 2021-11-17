import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ZyfraTemplateDirective } from '../../@shared/zyfra-template.directives';
import { AccordionTab } from 'primeng/accordion';

@Component({
  selector: 'zyfra-accordion-tab',
  templateUrl: './zyfra-accordion-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class ZyfraAccordionTabComponent implements AfterContentInit, AfterViewInit {
  /** Title of the tab */
  @Input() header: string;
  /** Defines whether the tab can be selected */
  @Input() disabled: boolean;
  /** Whether a lazy loaded panel should avoid getting loaded again on reselection */
  @Input() cache = true;
  /** Transition options of the animation */
  @Input() transitionOptions = '200ms cubic-bezier(0.86, 0, 0.07, 1)';
  /** Defines if the tab is active */
  @Input() selected: boolean;
  /** tab activeness */
  @Output() selectedChange: EventEmitter<boolean> = new EventEmitter();

  @ContentChildren(ZyfraTemplateDirective) tmpl: ZyfraTemplateDirective[];
  @ViewChild(AccordionTab) tab: AccordionTab;

  headerFacet: TemplateRef<any>;
  contentFacet: TemplateRef<any>;
  iconsFacet: TemplateRef<any>;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.tmpl.forEach((t) => {
      if (t.zyfraTemplate === 'header') {
        this.headerFacet = t.templateRef;
      } else if (t.zyfraTemplate === 'icons') {
        this.iconsFacet = t.templateRef;
      } else {
        this.contentFacet = t.templateRef;
      }
    });
    if (!!this.iconsFacet && !this.headerFacet) {
      throw new Error('icon template can only be used with header template');
    }
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }
}
