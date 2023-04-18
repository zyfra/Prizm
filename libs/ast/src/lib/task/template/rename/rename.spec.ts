import { PrizmNode } from '../task';
import { PrizmAstTemplateContext } from '../model';
import { PrizmRenameTemplateTask } from './rename.task';

describe('PrizmRenameTemplateTask', () => {
  const renameTask = new PrizmRenameTemplateTask();

  test('should rename attribute in inputs', () => {
    const node: any = {
      attrs: {
        oldAttr: 'value',
      },
    };
    const payload = {
      newAttrName: 'newAttr',
      oldAttrName: 'oldAttr',
    };
    const context: PrizmAstTemplateContext = {
      runIn: 'inputs',
    };

    const newNode = renameTask.run(node, payload, context);

    expect(newNode.attrs).toHaveProperty('newAttr');
    expect(newNode.attrs['newAttr']).toBe('value');
    expect(newNode.attrs).not.toHaveProperty('oldAttr');
  });

  test('should rename attribute in outputs', () => {
    const node: Partial<PrizmNode> = {
      attrs: {
        '(oldAttr)': 'value',
      },
    };
    const payload = {
      newAttrName: 'newAttr',
      oldAttrName: 'oldAttr',
    };
    const context: PrizmAstTemplateContext = {
      runIn: 'outputs',
    };

    const newNode = renameTask.run(node as any, payload, context);

    expect(newNode.attrs).toHaveProperty('(newAttr)');
    expect(newNode.attrs['(newAttr)']).toBe('value');
    expect(newNode.attrs).not.toHaveProperty('(oldAttr)');
  });
});
