import { exec } from 'child_process';

export function formatFileWithPrettier(filePath: string) {
  exec(`npx prettier --loglevel silent --write ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      return;
    }
  });
}
