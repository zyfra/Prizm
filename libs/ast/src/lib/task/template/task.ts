import { PrizmNotSupportedTemplateTask } from './not-supported';
import { PrizmMoveToContentTemplateTask } from './move-to-content';
import { PrizmChangeNameTemplateTask } from './change-name';
import { PrizmAddCommentTemplateTask } from './add-comment';
import { prizmAstGetAttrName, prizmAstGetTypeOfAttribute, prizmAstHasAttribute } from './util';
import { PrizmAddAttributeTemplateTask } from './add-attribute';
import { PrizmAstTemplateAttributeType, PrizmAstTemplateContext } from './model';
import { PrizmRenameTemplateTask } from './rename';

/**
 * Тип узла Prizm. Содержит атрибуты, имя, тип и информацию о том, является ли элемент пустым.
 */
export type PrizmNode = {
  attrs: Record<string, unknown>;
  name: string;
  type: 'comment' | 'tag' | 'text';
  voidElement: boolean;
  content?: unknown;
  children: PrizmNode[];
};

/**
 * Тип действия задачи Prizm. Содержит тип действия и значение для применения действия.
 */
export type PrizmTaskAction<T = any> = {
  type: string;
  payload?: T;
};

/**
 * Тип задачи Prizm. Содержит имя задачи, селектор действий, входные атрибуты и выходные атрибуты.
 */
export type PrizmTask = {
  name: string;
  tasks: PrizmTaskAction[];
  inputs: Record<string, PrizmTaskAction[]>;
  outputs: Record<string, PrizmTaskAction[]>;
};

/**
 * Класс для обработки узлов PrizmNode в соответствии с задачами PrizmTask.
 */
export class PrizmTaskProcessor {
  readonly defaultTasks = [
    new PrizmAddAttributeTemplateTask(),
    new PrizmNotSupportedTemplateTask(),
    new PrizmMoveToContentTemplateTask(),
    new PrizmRenameTemplateTask(),
    new PrizmAddCommentTemplateTask(),
    new PrizmChangeNameTemplateTask(),
  ];

  /**
   * @param {PrizmTask[]} tasks - Массив задач PrizmTask для обработки узлов.
   */
  constructor(private tasks: PrizmTask[]) {}

  private processActions(node: PrizmNode, task: PrizmTask): PrizmNode {
    let newNode: PrizmNode = { ...node };
    const defaultTasks = this.defaultTasks;
    task.tasks.forEach(action => {
      const task = defaultTasks.find(task => task.type === action.type);
      if (task) newNode = task.run(newNode, action.payload, this.generateContext(null, 'tasks'));
    });

    if (task.inputs)
      Object.entries(task.inputs).forEach(([key, actions]) => {
        if (
          !prizmAstHasAttribute(key, node.attrs, [
            PrizmAstTemplateAttributeType.input,
            PrizmAstTemplateAttributeType.inputVar,
            PrizmAstTemplateAttributeType.inputOutput,
          ])
        )
          return;
        actions.forEach(action => {
          const task = defaultTasks.find(task => task.type === action.type);
          if (task) newNode = task.run(newNode, action.payload, this.generateContext(key, 'inputs'));
        });
      });

    if (task.outputs)
      Object.entries(task.outputs).forEach(([key, actions]) => {
        if (
          !prizmAstHasAttribute(key, node.attrs, [
            PrizmAstTemplateAttributeType.output,
            PrizmAstTemplateAttributeType.inputOutput,
          ])
        )
          return;

        actions.forEach(action => {
          const task = defaultTasks.find(task => task.type === action.type);
          if (task) newNode = task.run(newNode, action.payload, this.generateContext(key, 'outputs'));
        });
      });

    return newNode;
  }

  /**
   * Обрабатывает массив узлов в соответствии с задачами.
   *
   * @param {any[]} obj - Массив узлов для обработки.
   * @returns {PrizmNode[]} Массив обработанных узлов.
   */
  public processTasks(obj: any[]): PrizmNode[] {
    return obj.map(node => {
      // Обработка действий задачи для узла
      for (const task of this.tasks) {
        node = this.processActions(node, task);
      }

      return node;
    });
  }

  public generateContext(
    key: string | null,
    runIn: PrizmAstTemplateContext['runIn']
  ): PrizmAstTemplateContext {
    return {
      attrName: key && prizmAstGetAttrName(key),
      originName: key,
      runIn,
      type: key && prizmAstGetTypeOfAttribute(key),
    };
  }
}
