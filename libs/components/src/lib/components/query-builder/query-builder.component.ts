import { CdkDrag, CdkDragDrop, CdkDropList, DragDropModule, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkTreeModule, NestedTreeControl } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  OnInit,
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
import {
  PrizmButtonComponent,
  PrizmDataListComponent,
  PrizmDropdownHostComponent,
  PrizmListingItemComponent,
  PrizmScrollbarComponent,
  PrizmSwitcherComponent,
  PrizmSwitcherItem,
  PrizmToggleComponent,
  prizmI18nInitWithKey,
} from '@prizm-ui/components';
import { PRIZM_EMPTY_FUNCTION } from '@prizm-ui/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { Observable, map } from 'rxjs';
import { PrizmConditionTemplate } from './condition-template.directive';
import { PRIZM_QUERY_BUILDER } from './i18n/tokens';
import {
  ConditionModel,
  ConditionNodeForm,
  ExpressionModel,
  ExpressionNodeForm,
  LOGICAL_OPERATOR,
} from './model';

import { prizmIconsGripDotsVertical } from '@prizm-ui/icons/full/source/grip-dots-vertical';
import { prizmIconsPlusTriangleDown } from '@prizm-ui/icons/full/source/plus-triangle-down';
import { prizmIconsTrash } from '@prizm-ui/icons/full/source/trash';

/** Множество операторов выражения поискового запроса */
const OPERATORS: LOGICAL_OPERATOR[] = ['AND', 'OR'];

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
      useExisting: PrizmQueryBuilder,
      multi: true,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PrizmQueryBuilder,
      multi: true,
    },
    ...prizmI18nInitWithKey(PRIZM_QUERY_BUILDER, 'queryBuilder'),
  ],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CdkTreeModule,
    DragDropModule,
    PrizmDropdownHostComponent,
    PrizmButtonComponent,
    PrizmToggleComponent,
    PrizmSwitcherComponent,
    PrizmDataListComponent,
    PrizmListingItemComponent,
    PrizmScrollbarComponent,
  ],
})
export class PrizmQueryBuilder implements OnInit, ControlValueAccessor, Validator {
  /** Устанавливает выражение */
  @Input() set expression(value: ExpressionModel) {
    this._model = value;
    this.buildNodes();
  }

  @Input() disabled = false;

  get model(): ExpressionModel {
    return this._model;
  }
  private _model!: ExpressionModel;

  protected readonly i18n$ = inject(PRIZM_QUERY_BUILDER);
  protected _conditionNodeTemplate = contentChild.required(PrizmConditionTemplate);

  /**
   * Natural order does not fit our need since it always match parent node
   * (i.e. mouse hovering over any children also is a hover over its parent because blocks are nested in each other).
   * While with reversed order we first match deeper nodes.
   */
  protected _orderedDropLists = computed(() => Array.from(this._dropListQuery()).reverse());

  private _dropListQuery = viewChildren<CdkDropList<Node>>(CdkDropList);
  private _dragQuery = viewChildren<CdkDrag<Node>>(CdkDrag);

  protected readonly operatorsItems$: Observable<PrizmSwitcherItem[]> = this.i18n$.pipe(
    map(i18n =>
      OPERATORS.map(op => ({
        id: op,
        title: op === 'AND' ? i18n.and : i18n.or,
      }))
    )
  );

  protected readonly treeControl = new NestedTreeControl<Node>(node => node.children);

  protected data: Node[] = [];

  protected onChange: (value: ExpressionModel) => void = PRIZM_EMPTY_FUNCTION;
  protected onTouched: () => void = PRIZM_EMPTY_FUNCTION;

  protected _operators = OPERATORS;

  private get root(): ExpressionNode {
    return this.data[0] as ExpressionNode;
  }

  private formArray = new FormArray<AbstractControl<unknown>>([]);
  private _nodesParentMap = new Map<Node, Node>();

  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private registry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.registry.registerIcons(prizmIconsTrash, prizmIconsGripDotsVertical, prizmIconsPlusTriangleDown);
    effect(this._assignDragToList);
  }

  ngOnInit(): void {
    this.formArray.valueChanges
      .pipe(
        map(() => nodeToModel(this.root)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(model => {
        this._model = model;
        this.onChange(this._model);
      });
  }

  writeValue(obj: ExpressionModel | null): void {
    if (!obj) return;

    this.expression = obj;
  }

  registerOnChange(fn: (value: ExpressionModel) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;

    this.disabled ? this.formArray.disable() : this.formArray.enable();
  }

  removeNode(node: Node): void {
    const parent = this._nodesParentMap.get(node);
    if (!parent) return;

    parent.children = parent.children.filter(n => n !== node);

    this.updateViewData();
    this.updateModel();
  }

  validate(): ValidationErrors | null {
    return this.formArray.invalid ? { invalid: true } : null;
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

  protected _isCondition = isConditionNode;

  protected _getOperatorIndex(value: LOGICAL_OPERATOR): number {
    return OPERATORS.indexOf(value);
  }

  private updateModel(emitEvent = true): void {
    this.formArray.clear({ emitEvent: false });
    collectFormControlsRecursively(this.data, this.formArray);

    if (emitEvent) {
      this.formArray.updateValueAndValidity({ emitEvent });
    }
  }

  private updateViewData(): void {
    // Update refs to root nodes
    this.data = this.data.map(n => ({ ...n }));
    this.treeControl.dataNodes = this.data;
    this.treeControl.expandAll();
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
    this.data = [this.generateExpressionNode(this._model)];
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
    this._conditionNodeTemplate().prepare(formGroup);

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
        exclude: new FormControl({ value: exp.exclude, disabled: this.disabled }, { nonNullable: true }),
        operator: new FormControl({ value: exp.operator, disabled: this.disabled }, { nonNullable: true }),
      }),
      children: [
        ...exp.conditions.map(this.generateConditionNode),
        ...exp.children.map(this.generateExpressionNode),
      ],
    };
  };

  private syncNodesParentMap(): void {
    this._nodesParentMap.clear();
    this.data.forEach(root => fillParentMapRecursively(root.children, root, this._nodesParentMap));
  }

  protected _onDropped(event: CdkDragDrop<Node>): void {
    const previous = event.previousContainer.data;
    const current = event.container.data;

    transferArrayItem(previous.children, current.children, event.previousIndex, event.currentIndex);

    this.updateViewData();
    this.updateModel();
  }

  private _assignDragToList = (): void => {
    const drags = this._dragQuery();
    const dropLists = this._dropListQuery();

    const nodesToDropContainerMap = new Map<Node, CdkDropList>(dropLists.map(list => [list.data, list]));

    for (const drag of drags) {
      const parent = this._nodesParentMap.get(drag.data);
      if (!parent) continue;

      const dropContainer = nodesToDropContainerMap.get(parent);
      if (dropContainer) {
        drag.dropContainer = dropContainer;
        drag._dragRef._withDropContainer(dropContainer._dropListRef);
        dropContainer.addItem(drag);
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
