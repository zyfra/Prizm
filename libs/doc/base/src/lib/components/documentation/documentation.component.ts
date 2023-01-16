import { animate, style, transition, trigger } from '@angular/animations';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Inject,
  Input,
  QueryList,
} from '@angular/core';
import {
  EMPTY_QUERY,
  tuiHexToRgb,
  tuiIsNumber,
  tuiIsString,
  tuiItemsQueryListObservable,
  tuiRgbToHex,
  tuiWatch,
} from '@taiga-ui/cdk';
import { BehaviorSubject, combineLatest, merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { PRIZM_DOC_DOCUMENTATION_TEXTS } from '../../tokens/i18n';
import { prizmInspectAny } from '../../utils/inspect';
import { PrizmDocDocumentationPropertyConnectorDirective } from './documentation-property-connector.directive';
import { PRIZM_HOST_COMPONENT_INFO_TOKEN, PrizmHostComponentInfo } from './token';
import { PrizmDocHostElementListenerService } from '../host';
import * as _ from 'lodash';
import { PrizmDocumentationPropertyType } from '../../types/pages';
// @bad TODO subscribe propertiesConnectors changes
// @bad TODO refactor to make more flexible
@Component({
  selector: `prizm-doc-documentation`,
  templateUrl: `./documentation.component.html`,
  styleUrls: [`./documentation.style.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PRIZM_HOST_COMPONENT_INFO_TOKEN,
      useFactory: (): PrizmHostComponentInfo => new BehaviorSubject({
        key: 'index'
      })
    },
  ],
  animations: [
    trigger(`emitEvent`, [transition(`:increment`, [style({ opacity: 1 }), animate(`500ms ease-in`)])]),
  ],
})
export class PrizmDocDocumentationComponent implements AfterContentInit {
  @Input()
  heading = ``;

  success$ =   combineLatest([
    this.prizmHostComponentInfo,
    this.prizmDocHostElementListenerService
      .checkInfo$
  ]).pipe(
    filter(
      ([key, event]) => event.key === key.key
    ),
    map(([, event]) => {
      return event.unnecessaryOutputs.length === 0
        && event.unnecessaryInputs.length === 0
        && event.notListenerInputs.length === 0
        && event.notListenerOutputs.length === 0;

    }),
  )
  @Input()
  public set hostComponentKey(key: string) {
    this.prizmHostComponentInfo.next({key})
  }

  public get hostComponentKey(): string {
    return this.prizmHostComponentInfo.value?.key;
  }

  @Input()
  showValues = true;

  @Input()
  isAPI = false;

  @ContentChildren(PrizmDocDocumentationPropertyConnectorDirective)
  propertiesConnectors: QueryList<PrizmDocDocumentationPropertyConnectorDirective<any>> = EMPTY_QUERY;

  activeItemIndex = 0;

  public getType(connector: PrizmDocDocumentationPropertyConnectorDirective<any>): string {
    if (connector.documentationPropertyMode === 'ng-content')
      return 'HtmlNode';
    return connector.documentationPropertyType;
  }
  constructor(
    private readonly prizmDocHostElementListenerService: PrizmDocHostElementListenerService,
    @Inject(PRIZM_HOST_COMPONENT_INFO_TOKEN) private readonly prizmHostComponentInfo: PrizmHostComponentInfo,
    @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    @Inject(PRIZM_DOC_DOCUMENTATION_TEXTS)
    readonly texts: [string, string, string, string, string]
  ) {}

  ngAfterContentInit(): void {
    tuiItemsQueryListObservable(this.propertiesConnectors)
      .pipe(
        switchMap(items => merge(...items.map(({ changed$ }) => changed$))),
        tuiWatch(this.changeDetectorRef)
      )
      .subscribe();
  }

  get type(): string {
    return this.isAPI ? this.texts[0] : this.texts[1];
  }

  public getColor(color: string): string {
    if (color.length === 4) {
      return color
        .split(``)
        .reduce<string[]>((result, current) => [...result, current, current], [])
        .join(``)
        .replace(`#`, ``);
    }

    if (color.startsWith(`#`)) {
      return color;
    }

    if (color === `transparent`) {
      return `#000000`;
    }

    const parsed = color
      .replace(`rgb(`, ``)
      .replace(`rgba(`, ``)
      .replace(`)`, ``)
      .replace(` `, ``)
      .split(`,`)
      .map(v => Number.parseInt(v, 10)) as [number, number, number];

    return tuiRgbToHex(...parsed);
  }

  public getOpacity(color: string): number {
    if (color.startsWith(`#`) || color.startsWith(`rgb(`)) {
      return 100;
    }

    if (color === `transparent`) {
      return 0;
    }

    const lastComma = color.lastIndexOf(`,`);
    const parsed = color.slice(lastComma).replace(`)`, ``).replace(` `, ``).replace(`,`, ``);

    return Math.round(Number.parseFloat(parsed) * 100);
  }

  public onColorChange(
    connector: PrizmDocDocumentationPropertyConnectorDirective<string>,
    color: string
  ): void {
    const opacity = this.getOpacity(connector.documentationPropertyValue || ``);

    if (opacity === 100) {
      connector.onValueChange(color);

      return;
    }

    const rgb = tuiHexToRgb(color).join(`, `);
    const result = `rgba(${rgb}, ${opacity / 100})`;

    connector.onValueChange(result);
  }

  public onOpacityChange(
    connector: PrizmDocDocumentationPropertyConnectorDirective<string>,
    opacity: number
  ): void {
    const hex = this.getColor(connector.documentationPropertyValue || ``);
    const rgb = tuiHexToRgb(hex);
    const result = `rgba(${rgb}, ${opacity / 100})`;

    connector.onValueChange(result);
  }

  public stripOptional(name: string): string {
    return name.replace(`?`, ``);
  }

  public isOptional(name: string): boolean {
    return name.includes(`?`);
  }

  public isPrimitivePolymorpheusContent(value: unknown): boolean {
    return tuiIsString(value) || tuiIsNumber(value);
  }

  public showCleaner(type: string): boolean {
    return type.includes(`null`);
  }

  public showContentTooltip(type: string): boolean {
    return type.includes(`PolymorpheusContent`);
  }

  public inspectAny(data: unknown): string {
    return prizmInspectAny(data, 2);
  }


  public sortConnectors(
    connectors: QueryList<PrizmDocDocumentationPropertyConnectorDirective<any>>
  ): PrizmDocDocumentationPropertyConnectorDirective<any>[] {
    const sortOrder: PrizmDocumentationPropertyType[] = [
      'ng-content',
      'css-var',
      'input',
      'input-output',
      'output',
    ];

    return _.orderBy(
      connectors.toArray(),
      [
        (a: PrizmDocDocumentationPropertyConnectorDirective<any>): number => {
          const place = sortOrder.indexOf(a.documentationPropertyMode);
          if (place === -1) {
            return 999;
          }
          return place;
        },
        'documentationPropertyMode',
        'documentationPropertyName',
        'documentationPropertyType']
      ,
    )
  }
}
