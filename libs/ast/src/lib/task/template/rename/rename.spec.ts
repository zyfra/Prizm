import { PrizmTemplateNode } from '../task';
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
    const context = {
      runIn: 'inputs',
      sourceNode: node,
    } as PrizmAstTemplateContext;

    const newNode = renameTask.run(node, payload, context);

    expect(newNode.attrs).toHaveProperty('newAttr');
    expect(newNode.attrs['newAttr']).toBe('value');
    expect(newNode.attrs).not.toHaveProperty('oldAttr');
  });

  test('should rename attribute in outputs', () => {
    const node: Partial<PrizmTemplateNode> = {
      attrs: {
        '(oldAttr)': 'value',
      },
    };
    const payload = {
      newAttrName: 'newAttr',
      oldAttrName: 'oldAttr',
    };
    const context = {
      runIn: 'outputs',
      sourceNode: node,
    } as PrizmAstTemplateContext;

    const newNode = renameTask.run(node as any, payload, context);

    expect(newNode.attrs).toHaveProperty('(newAttr)');
    expect(newNode.attrs['(newAttr)']).toBe('value');
    expect(newNode.attrs).not.toHaveProperty('(oldAttr)');
  });
});
