import {pzmIsCurrentTarget} from './is-current-target';

describe('pzmIsCurrentTarget', () => {
    it('Target is equal to currentTarget', () => {
        const event = new MouseEvent('click');

        Object.defineProperty(event, 'target', {value: '<button>'});
        Object.defineProperty(event, 'currentTarget', {value: '<button>'});

        expect(pzmIsCurrentTarget(event)).toEqual(true);
    });
});
