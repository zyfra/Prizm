import { prizmCanScroll } from './can-scroll';

describe('prizmCanScroll', () => {
  it('works vertically', () => {
    const parent = document.createElement('div');
    const child = document.createElement('div');

    parent.appendChild(child);

    expect(prizmCanScroll(child, parent, true, true)).toEqual(false);
  });

  it('works horizontally', () => {
    const parent = document.createElement('div');
    const child = document.createElement('div');

    parent.appendChild(child);

    expect(prizmCanScroll(child, parent, false, true)).toEqual(false);
  });
});
