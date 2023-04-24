import { PrizmAstTemplateContext } from '../model';
import { PrizmTemplateNode } from '../task';
import { PrizmChangeNameTemplateTask } from './change-name.task';

describe('PrizmChangeNameTemplateTask', () => {
  const changeNameTask = new PrizmChangeNameTemplateTask();

  test('should change the node name', () => {
    const node = {
      name: 'oldName',
      attrs: {
        attr: 'value',
      },
    } as unknown as PrizmTemplateNode;
    const payload = {
      name: 'newName',
    };
    const context = {} as PrizmAstTemplateContext;

    const newNode = changeNameTask.run(node, payload, context);

    expect(newNode.name).toBe('newName');
    expect(newNode.attrs).toHaveProperty('attr');
    expect(newNode.attrs['attr']).toBe('value');
  });

  test('should not change the node name when payload is missing', () => {
    const node = {
      name: 'oldName',
      attrs: {
        attr: 'value',
      },
    } as unknown as PrizmTemplateNode;
    const payload = {};
    const context = {} as unknown as PrizmAstTemplateContext;

    const newNode = changeNameTask.run(node, payload, context);

    expect(newNode.name).toBe('oldName');
    expect(newNode.attrs).toHaveProperty('attr');
    expect(newNode.attrs['attr']).toBe('value');
  });
});
