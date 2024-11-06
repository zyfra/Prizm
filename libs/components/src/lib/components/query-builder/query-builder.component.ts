/* eslint-disable @typescript-eslint/member-ordering */
import { CdkDrag, CdkDragDrop, CdkDropList, DragDropModule, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  OnInit,
  booleanAttribute,
  computed,
  contentChild,
  effect,
  inject,
  viewChildren,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { PRIZM_EMPTY_FUNCTION } from '@prizm-ui/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { map } from 'rxjs';
import { prizmI18nInitWithKey } from '../../services';
import { PRIZM_QUERY_BUILDER } from '../../tokens';
import { PrizmButtonComponent } from '../button';
import { PrizmDataListComponent } from '../data-list';
import { PrizmDropdownHostComponent } from '../dropdowns/dropdown-host';
import { PrizmListingItemComponent } from '../listing-item';
import { PrizmScrollbarComponent } from '../scrollbar';
import { PrizmSwitcherComponent, PrizmSwitcherItemComponent } from '../switcher';
import { PrizmToggleComponent } from '../toggle';
import { PrizmConditionDefDirective } from './condition-def.directive';
import { ConditionModel, ConditionNodeForm, ExpressionModel, ExpressionNodeForm } from './model';

import { prizmIconsGripDotsVertical } from '@prizm-ui/icons/full/source/grip-dots-vertical';
import { prizmIconsPlusTriangleDown } from '@prizm-ui/icons/full/source/plus-triangle-down';
import { prizmIconsTrash } from '@prizm-ui/icons/full/source/trash';

interface ExpressionNode {
  type: 'exp';
  form: FormGroup<ExpressionNodeForm>;
  children: Node[];
}

interface ConditionNode {
  type: 'condition';
  form: FormGroup<ConditionNodeForm>;
  children: [];
}

type Node = ExpressionNode | ConditionNode;

@Component({
  selector: 'prizm-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PrizmQueryBuilderComponent,
      multi: true,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PrizmQueryBuilderComponent,
      multi: true,
    },
    ...prizmI18nInitWithKey(PRIZM_QUERY_BUILDER, 'queryBuilder'),
  ],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DragDropModule,
    PrizmDropdownHostComponent,
    PrizmButtonComponent,
    PrizmToggleComponent,
    PrizmSwitcherComponent,
    PrizmSwitcherItemComponent,
    PrizmDataListComponent,
    PrizmListingItemComponent,
    PrizmScrollbarComponent,
  ],
})
export class PrizmQueryBuilderComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() set expression(value: ExpressionModel) {
    this._expression = value;
    this.buildNodes();
  }
  get expression(): ExpressionModel {
    return this._expression;
  }

  @Input({ transform: booleanAttribute }) set disabled(isDisabled: boolean) {
    this.setDisabledState(isDisabled);
  }
  get disabled() {
    return this._disabled;
  }

  protected readonly i18n$ = inject(PRIZM_QUERY_BUILDER);
  protected readonly conditionNodeTemplate = contentChild.required(PrizmConditionDefDirective);

  /**
   * Natural order does not fit our need since it always match parent node
   * (i.e. mouse hovering over any children also is a hover over its parent because blocks are nested in each other).
   * While with reversed order we first match deeper nodes.
   */
  protected _orderedDropLists = computed(() => Array.from(this._dropListQuery()).reverse());
  private _dropListQuery = viewChildren<CdkDropList<Node>>(CdkDropList);
  private _dragQuery = viewChildren<CdkDrag<Node>>(CdkDrag);

  /** Represents hierarchical structure of the tree. */
  protected data: Node[] = [];

  protected onChange: (value: ExpressionModel) => void = PRIZM_EMPTY_FUNCTION;
  protected onTouched: () => void = PRIZM_EMPTY_FUNCTION;
  protected isCondition = isConditionNode;

  private _expression!: ExpressionModel;
  private _disabled = false;
  private get _root(): ExpressionNode {
    return this.data[0] as ExpressionNode;
  }

  /** Track changes in controls */
  private _formArray = new FormArray<AbstractControl<unknown>>([]);
  private _nodesParentMap = new Map<Node, Node>();

  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private registry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.registry.registerIcons(prizmIconsTrash, prizmIconsGripDotsVertical, prizmIconsPlusTriangleDown);
    effect(this._assignDragToList);
  }

  ngOnInit(): void {
    this._formArray.valueChanges
      .pipe(
        map(() => nodeToModel(this._root)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(value => {
        this._expression = value;
        this.onChange(this._expression);
      });
  }

  public writeValue(obj: ExpressionModel | null): void {
    if (!obj) return;

    this.expression = obj;
  }

  public registerOnChange(fn: (value: ExpressionModel) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this._disabled ? this._formArray.disable() : this._formArray.enable();
    this.cdr.markForCheck();
  }

  public removeNode(node: Node): void {
    const parent = this._nodesParentMap.get(node);
    if (!parent) return;

    parent.children = parent.children.filter(n => n !== node);

    this.updateViewData();
    this.updateModel();
  }

  public validate(): ValidationErrors | null {
    return this._formArray.invalid ? { invalid: true } : null;
  }

  protected createConditionNode(parent: Node): void {
    if (isConditionNode(parent)) return;

    const node = this.generateConditionNode(this.createConditionModel());
    parent.children = [node, ...parent.children];
    this._nodesParentMap.set(node, parent);

    this.updateViewData();
    this.updateModel();
  }

  protected createExpressionNode(parent: Node): void {
    if (isConditionNode(parent)) return;

    const node = this.generateExpressionNode(this.createExpressionModel());
    parent.children = [...parent.children, node];

    this.updateViewData();
    this.updateModel();
  }

  protected _onDropped(event: CdkDragDrop<Node>): void {
    const previous = event.previousContainer.data;
    const current = event.container.data;

    transferArrayItem(previous.children, current.children, event.previousIndex, event.currentIndex);

    this.updateViewData();
    this.updateModel();
  }

  private updateModel(emitEvent = true): void {
    this._formArray.clear({ emitEvent: false });
    collectFormControlsRecursively(this.data, this._formArray);

    if (emitEvent) {
      this._formArray.updateValueAndValidity({ emitEvent });
    }
  }

  private updateViewData(): void {
    this.syncNodesParentMap();
    this.cdr.markForCheck();
  }

  private createConditionModel(): ConditionModel {
    return {
      field: null,
      operator: null,
      value: null,
    };
  }

  private createExpressionModel(): ExpressionModel {
    return {
      operator: 'AND',
      exclude: false,
      conditions: [],
      children: [],
    };
  }

  private buildNodes(): void {
    this.data = [this.generateExpressionNode(this._expression)];
    this.updateViewData();
    this.updateModel(false);
  }

  private generateConditionNode = (query: ConditionModel): ConditionNode => {
    const formGroup = new FormGroup<ConditionNodeForm>({
      value: new FormControl(
        {
          value: query.value,
          disabled: this.disabled,
        },
        Validators.required
      ),
      operator: new FormControl(
        {
          value: query.operator,
          disabled: this.disabled,
        },
        Validators.required
      ),
      field: new FormControl(
        {
          value: query.field,
          disabled: this.disabled,
        },
        Validators.required
      ),
    });
    this.conditionNodeTemplate().prepare(formGroup);

    return {
      type: 'condition',
      form: formGroup,
      children: [],
    };
  };

  private generateExpressionNode = (exp: ExpressionModel): ExpressionNode => {
    return {
      type: 'exp',
      form: new FormGroup<ExpressionNodeForm>({
        exclude: new FormControl(
          { value: Boolean(exp.exclude), disabled: this.disabled },
          { nonNullable: true }
        ),
        operator: new FormControl({ value: exp.operator, disabled: this.disabled }, { nonNullable: true }),
      }),
      children: [
        ...exp.conditions.map(this.generateConditionNode),
        ...(exp.children ?? []).map(this.generateExpressionNode),
      ],
    };
  };

  private syncNodesParentMap(): void {
    this._nodesParentMap.clear();
    this.data.forEach(root => fillParentMapRecursively(root.children, root, this._nodesParentMap));
  }

  private _assignDragToList = (): void => {
    const drags = this._dragQuery();
    const dropLists = this._dropListQuery();

    const nodeToDropListMap = new Map<Node, CdkDropList>(dropLists.map(list => [list.data, list]));

    for (const drag of drags) {
      const parent = this._nodesParentMap.get(drag.data);
      if (!parent) continue;

      const dropList = nodeToDropListMap.get(parent);
      if (dropList) {
        drag.dropContainer = dropList;
        drag._dragRef._withDropContainer(dropList._dropListRef);
        dropList.addItem(drag);
      }
    }
  };
}

function fillParentMapRecursively(children: Node[], parent: Node, map: Map<Node, Node>) {
  if (children.length === 0) return;

  for (const node of children) {
    map.set(node, parent);

    fillParentMapRecursively(node.children ?? [], node, map);
  }
}

function collectFormControlsRecursively(nodes: Node[], collection: FormArray) {
  if (nodes.length === 0) return;

  for (const node of nodes) {
    collection.push(node.form, { emitEvent: false });

    collectFormControlsRecursively(node.children ?? [], collection);
  }
}

function isExpressionNode(n: Node): n is ExpressionNode {
  return n.type === 'exp';
}

function isConditionNode(n: Node): n is ConditionNode {
  return n.type === 'condition';
}

function nodeToModel(node: ExpressionNode): ExpressionModel;
function nodeToModel(node: ConditionNode): ConditionModel;
function nodeToModel(node: Node): ExpressionModel | ConditionModel {
  switch (node.type) {
    case 'exp': {
      return {
        ...node.form.getRawValue(),
        children: node.children.filter(isExpressionNode).map<ExpressionModel>(nodeToModel),
        conditions: node.children.filter(isConditionNode).map(nodeToModel),
      } satisfies ExpressionModel;
    }

    case 'condition': {
      return {
        ...node.form.getRawValue(),
      } satisfies ConditionModel;
    }
  }
}
