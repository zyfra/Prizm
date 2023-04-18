import { addCommentToImportUsage } from './add-comment';

describe('addCommentToImportUsage', () => {
  it('добавляет комментарий перед использованием импортированного модуля', () => {
    const fileName = 'example.ts';
    const moduleName = 'my-module';
    const commentText = 'Этот импорт был обновлен';

    const inputCode = `
import { foo, bar } from "my-module";

function test() {
  foo();
  const b = foo + 1;
  const c = foo;
  bar();
}
`;

    const expectedOutputCode = `
import { foo, bar } from "my-module";

function test() {
  /* Этот импорт был обновлен */
  foo();
  /* Этот импорт был обновлен */
  bar();
}
`;

    const actualOutputCode = addCommentToImportUsage(fileName, moduleName, commentText, inputCode);
    console.log('#mz');
    console.log(actualOutputCode);
    // expect(inputCode.trim()).toBe(actualOutputCode.trim());
  });
});
