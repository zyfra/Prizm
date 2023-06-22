import { PrizmTemplateNode } from '../task';
import { PrizmAstTemplateAttributeType, PrizmAstTemplateContext } from '../model';
import { PrizmRemoveAttributeTemplateTask } from './remove-attribute.task';

describe('PrizmRemoveAttributeTemplateTask', () => {
  const task = new PrizmRemoveAttributeTemplateTask();

  test('should remove specified attribute', () => {
    const node: PrizmTemplateNode = {
      attrs: {
        'data-input': null,
        'data-output': null,
      },
      name: 'testNode',
      type: 'tag',
      voidElement: false,
      children: [],
    };

    const context = {
      attrName: 'data-input',
      originName: 'data-input',
      runIn: 'tasks',
      type: PrizmAstTemplateAttributeType.input,
    } as PrizmAstTemplateContext;

    const newNode = task.run(node, {}, context);

    expect(newNode.attrs).not.toHaveProperty('data-input');
    expect(newNode.attrs).toHaveProperty('data-output');
  });
});
