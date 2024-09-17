export async function getMockFile(id: string = '1'): Promise<File> {
  const res = await fetch(`https://picsum.photos/id/${id}/200/300`);
  const blob = await res.blob();
  return new File([blob], `${id}.jpg`, { type: blob.type });
}

export function getMultiMockFiles(ids: string[] = ['1', '2', '3']): Promise<File[]> {
  return Promise.all(ids.map(id => getMockFile(id)));
}
