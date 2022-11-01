import { pzmCanScroll } from './can-scroll';

describe('zuiCanScroll', () => {
    it('works vertically', () => {
        const parent = document.createElement('div');
        const child = document.createElement('div');

        parent.appendChild(child);

        expect(pzmCanScroll(child, parent, true, true)).toEqual(false);
    });

    it('works horizontally', () => {
        const parent = document.createElement('div');
        const child = document.createElement('div');

        parent.appendChild(child);

        expect(pzmCanScroll(child, parent, false, true)).toEqual(false);
    });
});
