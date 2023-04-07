import { PrizmHtmlItem } from '../html';

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
  type:
    | 'change-name'
    | 'save-as-input'
    | 'save-as-output'
    | 'save-as-content'
    | 'remove-input'
    | 'add-comment'
    | 'add-attribute'
    | 'move-to-content'
    | 'remove-output';
  value?: T;
};

/**
 * Тип задачи Prizm. Содержит имя задачи, селектор действий, входные атрибуты и выходные атрибуты.
 */
export type PrizmTask = {
  name: string;
  selector: PrizmTaskAction[];
  inputs: Record<string, PrizmTaskAction[]>;
  outputs: Record<string, PrizmTaskAction[]>;
};

/**
 * Класс для обработки узлов PrizmNode в соответствии с задачами PrizmTask.
 */
export class PrizmTaskProcessor {
  /**
   * @param {PrizmTask[]} tasks - Массив задач PrizmTask для обработки узлов.
   */
  constructor(private tasks: PrizmTask[]) {}

  /**
   * Изменяет название тега.
   *
   * @param {PrizmNode} node - Узел для изменения имени.
   * @param {string} value - Новое имя узла.
   * @returns {PrizmNode} Новый узел с измененным именем.
   */
  private changeName(node: PrizmNode, value: string): PrizmNode {
    return { ...node, name: value };
  }

  /**
   * Сохраняет атрибут узла как входное значение для задачи.
   *
   * @param {PrizmNode} node - Узел, содержащий атрибут для сохранения.
   * @param {string} oldKey - Старый ключ атрибута.
   * @param {string} newKey - Новый ключ атрибута.
   * @returns {PrizmNode} Новый узел с измененным атрибутом.
   */
  private saveAsInput(node: PrizmNode, oldKey: string, newKey: string): PrizmNode {
    const newAttrs: PrizmNode['attrs'] = { ...node.attrs };
    // eslint-disable-next-line no-prototype-builtins
    if (node.attrs.hasOwnProperty(`[${oldKey}]`)) {
      newAttrs[`[${newKey}]`] = newAttrs[`[${oldKey}]`];
      delete newAttrs[`[${oldKey}]`];
    }
    return { ...node, attrs: newAttrs };
  }

  /**
   * Сохраняет содержимое
   *
   * @param {PrizmNode} node - Узел, содержащий атрибут для сохранения.
   * @param {string} key - Старый ключ атрибута.
   * @param {string} newKey - Новый ключ атрибута.
   * @returns {PrizmNode} Новый узел с измененным атрибутом.
   */
  private moveToContent(node: PrizmNode, key: string): PrizmNode {
    const newAttrs: PrizmNode['attrs'] = { ...node.attrs };
    let content: unknown;
    const keyInBracket = `[${key}]`;
    // eslint-disable-next-line no-prototype-builtins
    if (node.attrs.hasOwnProperty(keyInBracket)) {
      const value = newAttrs[keyInBracket];
      content = `{{${value}}`;
      delete node.attrs[keyInBracket];
      // eslint-disable-next-line no-prototype-builtins
    } else if (node.attrs.hasOwnProperty(key)) {
      const value = newAttrs[`${key}`];
      content = value;
      delete node.attrs[key];
    }
    if (content) {
      node.children = [
        {
          type: 'text',
          content,
        } as any,
      ];
    }
    return { ...node };
  }

  /**
   * Сохраняет содержимое
   *
   * @param {PrizmNode} node - Узел, содержащий атрибут для сохранения.
   * @param {string} value - Comment value
   * @param {string} key - check attribute key
   * @returns {PrizmNode} Новый узел с измененным атрибутом.
   */
  private addComment(node: PrizmNode, value: string, key?: string): PrizmNode {
    if (key && !node.attrs[key] && !node.attrs[`[${key}]`]) return node;
    if (key) {
      delete node.attrs[key];
      delete node.attrs[`[${key}]`];
    }

    const children = node.children ?? [];
    children.push({
      type: 'comment',
      comment: value,
    } as any);
    node.children = children;
    return { ...node };
  }

  /**
   * Удаляет атрибут узла как входное значение для задачи.
   *
   * @param {PrizmNode} node - Узел, содержащий атрибут для сохранения.
   * @param {string} oldKey - Старый ключ атрибута.
   * @returns {PrizmNode} Новый узел с измененным атрибутом.
   */
  private removeInput(node: PrizmNode, oldKey: string): PrizmNode {
    const newAttrs: PrizmNode['attrs'] = { ...node.attrs };
    // eslint-disable-next-line no-prototype-builtins
    if (node.attrs.hasOwnProperty(`[${oldKey}]`)) {
      delete newAttrs[`[${oldKey}]`];
    }
    return { ...node, attrs: newAttrs };
  }

  /**
   * Удаляет атрибут узла как входное значение для задачи.
   *
   * @param {PrizmNode} node - Узел, содержащий атрибут для сохранения.
   * @param {string} key - Старый ключ атрибута.
   * @returns {PrizmNode} Новый узел с измененным атрибутом.
   */
  private addAttribute(node: PrizmNode, key: string): PrizmNode {
    const newAttrs: PrizmNode['attrs'] = { ...node.attrs };
    newAttrs[`${key}`] = null;
    return { ...node, attrs: newAttrs };
  }

  /**
   * Сохраняет атрибут узла как выходное значение для задачи.
   *
   * @param {PrizmNode} node - Узел, содержащий атрибут для сохранения.
   * @param {string} oldKey - Старый ключ атрибута.
   * @param {string} newKey - Новый ключ атрибута.
   * @returns {PrizmNode} Новый узел с измененным атрибутом.
   */
  private saveAsOutput(node: PrizmNode, oldKey: string, newKey: string): PrizmNode {
    const newAttrs: PrizmNode['attrs'] = { ...node.attrs };
    // eslint-disable-next-line no-prototype-builtins
    if (node.attrs.hasOwnProperty(`(${oldKey})`)) {
      newAttrs[`(${newKey})`] = newAttrs[`(${oldKey})`];
      delete newAttrs[`(${oldKey})`];
    }
    return { ...node, attrs: newAttrs };
  }

  /**
   * Удаляет атрибут узла как выходное значение для задачи.
   *
   * @param {PrizmNode} node - Узел, содержащий атрибут для сохранения.
   * @param {string} oldKey - Старый ключ атрибута.
   * @returns {PrizmNode} Новый узел с измененным атрибутом.
   */
  private removeOutput(node: PrizmNode, oldKey: string): PrizmNode {
    const newAttrs: PrizmNode['attrs'] = { ...node.attrs };
    // eslint-disable-next-line no-prototype-builtins
    if (node.attrs.hasOwnProperty(`(${oldKey})`)) {
      delete newAttrs[`(${oldKey})`];
    }
    return { ...node, attrs: newAttrs };
  }

  /**
   * Обрабатывает действия задачи для узла.
   *
   * @param {PrizmNode} node - Узел для обработки действий.
   * @param {PrizmTask} task - Задача, содержащая действия для обработки.
   * @returns {PrizmNode} Новый узел с примененными действиями задачи.
   */
  private processActions(node: PrizmNode, task: PrizmTask): PrizmNode {
    let newNode: PrizmNode = { ...node };

    // Обработка действий селектора
    task.selector.forEach(action => {
      if (action.type === 'change-name') {
        newNode = this.changeName(newNode, action.value);
      } else if (action.type === 'add-attribute') {
        newNode = this.addAttribute(newNode, action.value);
      } else if (action.type === 'add-comment') {
        newNode = this.addComment(newNode, action.value);
      }
    });

    const inputOutputTask = Object.assign({}, task.inputs, task.outputs);

    // Обработка входных-выходных атрибутов
    for (const key in inputOutputTask) {
      inputOutputTask[key].forEach(action => {
        if (action.type === 'save-as-input') {
          newNode = this.saveAsInput(newNode, key, action.value);
        } else if (action.type === 'remove-input') {
          newNode = this.removeInput(newNode, key);
        } else if (action.type === 'save-as-output') {
          newNode = this.saveAsOutput(newNode, key, action.value);
        } else if (action.type === 'remove-output') {
          newNode = this.removeOutput(newNode, key);
        } else if (action.type === 'add-attribute') {
          newNode = this.addAttribute(newNode, action.value);
        } else if (action.type === 'move-to-content') {
          newNode = this.moveToContent(newNode, key);
        } else if (action.type === 'add-comment') {
          newNode = this.addComment(newNode, action.value, key);
        }
      });
    }

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
}
