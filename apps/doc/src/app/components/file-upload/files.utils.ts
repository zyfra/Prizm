export async function getMockFile(id: string = '1'): Promise<File> {
  const res = await fetch(`/assets/images/fileuploader/${id}.jpeg`);
  const blob = await res.blob();
  return new File([blob], `${id}.jpeg`, { type: blob.type });
}

export function getMultiMockFiles(ids: string[] = ['1', '2', '3']): Promise<File[]> {
  return Promise.all(ids.map(id => getMockFile(id)));
}
