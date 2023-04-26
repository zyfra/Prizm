import { exec } from 'child_process';

export function formatFileWithPrettier(filePath: string) {
  exec(`npx prettier --loglevel silent --write ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      // console.error(`Prettier: Error formatting file: ${filePath}\n${stderr}`);
      return;
    }
    // console.log(`Prettier: File formatted successfully: ${filePath}\n${stdout}`);
  });
}
