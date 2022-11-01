import { zuiIsEdge } from '../is-edge';
import { zuiIsEdgeOlderThan } from '../is-edge-older-than';
import { pzmIsFirefox } from '../is-firefox';
import { zuiIsIE } from '../is-ie';

describe('Browsers', () => {
    it('isIE', () => {
        expect(zuiIsIE('trident')).toBe(true);
    });

    it('isEdge', () => {
        expect(zuiIsEdge('edge')).toBe(true);
    });

    it('isFirefox', () => {
        expect(pzmIsFirefox('firefox')).toBe(true);
        expect(pzmIsFirefox('Firefox')).toBe(true);
    });

    it('isEdgeOlderThan', () => {
        expect(zuiIsEdgeOlderThan(17, 'edge/16')).toBe(true);
        expect(zuiIsEdgeOlderThan(17, 'edge/18')).toBe(false);
    });
});
