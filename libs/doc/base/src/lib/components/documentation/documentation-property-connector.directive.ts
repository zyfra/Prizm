import { Location } from '@angular/common';
import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { ActivatedRoute, Params, UrlSerializer } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

import { prizmCoerceValue } from '../../utils/coerce-value';
import { PrizmDocumentationPropertyType } from '../../types/pages';
import { PrizmDocHostElementService } from '../host';
import { PRIZM_HOST_COMPONENT_INFO_TOKEN, PrizmHostComponentInfo } from './token';
import { isEqual } from '@prizm-ui/helpers';

const SERIALIZED_SUFFIX = `$`;

// @bad TODO: refactor output and value sync
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: `ng-template[documentationPropertyName], ng-template[documentationPropertyMode]`,
  exportAs: `documentationProperty`,
})
export class PrizmDocDocumentationPropertyConnectorDirective<T> implements OnInit, OnChanges {
  @Input()
  documentationPropertyName: string | null = ``;

  @Input()
  urlUpdate = true;

  @Input()
  documentationPropertyMode: PrizmDocumentationPropertyType = null;

  @Input()
  documentationPropertyType = ``;

  @Input()
  documentationPropertyValue!: T;

  @Input()
  documentationPropertyDeprecated = false;

  @Input()
  documentationPropertyValues: readonly T[] | null = null;

  @Output()
  readonly documentationPropertyValueChange = new EventEmitter<T>();

  readonly changed$ = new Subject<void>();

  readonly emits$ = new BehaviorSubject(1);

  get host(): ElementRef<any> | null {
    return this.hostElementService?.getHostElement(this.prizmHostComponentInfo.value?.key as string) ?? null;
  }

  constructor(
    @Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>,
    @Inject(Location) private readonly locationRef: Location,
    @Inject(ActivatedRoute) private readonly activatedRoute: ActivatedRoute,
    @Inject(UrlSerializer) private readonly urlSerializer: UrlSerializer,
    @Inject(PRIZM_HOST_COMPONENT_INFO_TOKEN) private readonly prizmHostComponentInfo: PrizmHostComponentInfo,

    @Optional()
    public readonly hostElementService: PrizmDocHostElementService
  ) {}

  ngOnInit(): void {
    if (this.urlUpdate) this.parseParams(this.activatedRoute.snapshot.queryParams);
  }

  get attrName(): string {
    switch (this.documentationPropertyMode) {
      case `input`: {
        let name = this.documentationPropertyName;
        if (name && name.endsWith('.testId')) {
          name = 'testId';
        }
        return `[${name}]`;
      }
      case `output`:
        return `(${this.documentationPropertyName})`;
      case `input-output`:
        return `[(${this.documentationPropertyName})]`;
      case `css-var`:
        return `--${this.documentationPropertyName}`;
      case `form-control`:
        return `FormControl.${this.documentationPropertyName}`;
      case `ng-content`:
        return `<ng-content${
          this.documentationPropertyName ? ` select="${this.documentationPropertyName}"` : ''
        }>`;
      default:
        return this.documentationPropertyName ?? '';
    }
  }

  get hasItems(): boolean {
    return !!this.documentationPropertyValues;
  }

  get shouldShowValues(): boolean {
    return this.documentationPropertyMode !== `output`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // guard for getters/setters
    if (
      !Object.keys(changes).find(key => {
        return !isEqual(changes[key].previousValue, changes[key].currentValue);
      })
    )
      return;

    this.changed$.next();
    if (this.documentationPropertyName)
      this.hostElementService?.addListener(
        this.prizmHostComponentInfo.value?.key as string,
        this.documentationPropertyMode,
        this.documentationPropertyType,
        this.documentationPropertyName.endsWith('.testId') ? 'testId' : this.documentationPropertyName
      );
  }

  public onValueChange(value: T): void {
    this.documentationPropertyValue = value;
    this.documentationPropertyValueChange.emit(value);
    if (this.urlUpdate) this.setQueryParam(value);
  }

  public emitEvent(event: unknown): void {
    // For more convenient debugging
    // eslint-disable-next-line no-restricted-syntax
    console.info(this.attrName, event);

    this.emits$.next(this.emits$.value + 1);
  }

  private parseParams(params: Params): void {
    const propertyValue: string | undefined = params[this.documentationPropertyName as string];
    const propertyValueWithSuffix: string | number | undefined =
      params[`${this.documentationPropertyName}${SERIALIZED_SUFFIX}`];

    if (!propertyValue && !propertyValueWithSuffix) {
      return;
    }

    const value =
      !!propertyValueWithSuffix && this.documentationPropertyValues
        ? this.documentationPropertyValues[propertyValueWithSuffix as number]
        : prizmCoerceValue(propertyValue);
    this.onValueChange(value as T);
  }

  private setQueryParam(value: T | string | number | boolean | null): void {
    const tree = this.urlSerializer.parse(this.locationRef.path());

    const isValueAvailableByKey = value instanceof Object;
    const computedValue =
      isValueAvailableByKey && this.documentationPropertyValues
        ? this.documentationPropertyValues.indexOf(value as T)
        : value;

    const suffix = isValueAvailableByKey ? SERIALIZED_SUFFIX : ``;
    const propName = this.documentationPropertyName + suffix;

    tree.queryParams = {
      ...tree.queryParams,
      [propName]: computedValue,
    };

    this.locationRef.go(String(tree));
  }
}
