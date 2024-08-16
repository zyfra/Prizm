export function isInnerDoc() {
  return (
    window.location.host.includes('doc.prizm.site') || window.location.host.includes('doc.prizm.zyfra.com')
  );
}

export function getDocSite(innerSite: string, tempSite: string) {
  return new URL(isInnerDoc() ? innerSite : tempSite);
}
