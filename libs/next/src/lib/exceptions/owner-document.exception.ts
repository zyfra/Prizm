export class ZuiOwnerDocumentException extends Error {
    constructor() {
        super('Element does not have ownerDocument');
    }
}
