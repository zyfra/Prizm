export class PrizmOwnerDocumentException extends Error {
    constructor() {
        super('Element does not have ownerDocument');
    }
}
