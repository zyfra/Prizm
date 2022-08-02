import { zuiIsEdge } from '../is-edge';
import { zuiIsEdgeOlderThan } from '../is-edge-older-than';
import { zuiIsFirefox } from '../is-firefox';
import { zuiIsIE } from '../is-ie';

describe('Browsers', () => {
    it('isIE', () => {
        expect(zuiIsIE('trident')).toBe(true);
    });

    it('isEdge', () => {
        expect(zuiIsEdge('edge')).toBe(true);
    });

    it('isFirefox', () => {
        expect(zuiIsFirefox('firefox')).toBe(true);
        expect(zuiIsFirefox('Firefox')).toBe(true);
    });

    it('isEdgeOlderThan', () => {
        expect(zuiIsEdgeOlderThan(17, 'edge/16')).toBe(true);
        expect(zuiIsEdgeOlderThan(17, 'edge/18')).toBe(false);
    });
});
