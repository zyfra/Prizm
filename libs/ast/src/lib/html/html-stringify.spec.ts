import { attrToString, stringify } from './html-stringify';

describe('attrString', () => {
  it('should return an empty string when the input is an empty object', () => {
    const attrs = {};
    expect(attrToString(attrs)).toBe('');
  });

  it('should return a string with attributes when the input contains attributes', () => {
    const attrs = {
      id: 'test',
      class: 'container',
      disabled: true,
    };
    expect(attrToString(attrs)).toBe(' id="test" class="container" disabled="true"');
  });
});

describe('stringify', () => {
  it('should return an empty string when the input is an empty object', () => {
    const doc = {};
    expect(stringify('', doc as any)).toBe('');
  });

  it('should return the correct string for a text node', () => {
    const doc = {
      type: 'text',
      content: 'Hello, world!',
    };
    expect(stringify('', doc as any)).toBe('Hello, world!');
  });

  it('should return the correct string for a comment node', () => {
    const doc = {
      type: 'comment',
      comment: 'This is a comment',
    };
    expect(stringify('', doc as any)).toBe('<!--This is a comment-->');
  });

  it('should return the correct string for a void element', () => {
    const doc = {
      type: 'tag',
      name: 'input',
      attrs: {
        type: 'text',
        disabled: true,
      },
      voidElement: true,
    };
    expect(stringify('', doc as any)).toBe('<input type="text" disabled="true"/>');
  });

  it('should return the correct string for a non-void element with children', () => {
    const doc = {
      type: 'tag',
      name: 'div',
      attrs: {
        id: 'container',
      },
      children: [
        {
          type: 'text',
          content: 'Hello, world!',
        },
      ],
    };
    expect(stringify('', doc as any)).toBe('<div id="container">Hello, world!</div>');
  });
});
