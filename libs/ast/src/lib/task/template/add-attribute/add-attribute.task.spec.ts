import { PrizmAstTemplateContext } from '../model';
import { PrizmTemplateNode } from '../task';
import { PrizmAddAttributeTemplateTask } from './add-attribute.task';

describe('PrizmAddAttributeTemplateTask', () => {
  const addAttributeTask = new PrizmAddAttributeTemplateTask();

  test('should add an attribute to the node', () => {
    const node = {
      name: 'testNode',
      attrs: {},
    } as unknown as PrizmTemplateNode;
    const payload = {
      attr: 'newAttr',
    };
    const context = {} as PrizmAstTemplateContext;

    const newNode = addAttributeTask.run(node, payload, context);

    expect(newNode.attrs).toBeDefined();
    expect(newNode.attrs['newAttr']).toBeNull();
  });

  test('should not add an attribute if attribute is not provided', () => {
    const node = {
      name: 'testNode',
      attrs: {},
    } as unknown as PrizmTemplateNode;
    const payload = {};
    const context = {} as PrizmAstTemplateContext;

    const newNode = addAttributeTask.run(node, payload, context);

    expect(newNode.attrs).toEqual(node.attrs);
  });
});
