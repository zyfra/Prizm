export function pzmGetDocumentOrShadowRoot(node: Node): DocumentOrShadowRoot {
    return `getRootNode` in node && node.isConnected
        ? (node.getRootNode() as Document)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        : node.ownerDocument!;
}
