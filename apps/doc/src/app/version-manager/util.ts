export function isInnerDoc() {
  return window.location.host.includes('doc.prizm.site');
}

export function getDocSite(innerSite: string, tempSite: string) {
  return new URL(isInnerDoc() ? innerSite : tempSite);
}
