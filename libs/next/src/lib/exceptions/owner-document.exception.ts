export class PzmOwnerDocumentException extends Error {
    constructor() {
        super('Element does not have ownerDocument');
    }
}
