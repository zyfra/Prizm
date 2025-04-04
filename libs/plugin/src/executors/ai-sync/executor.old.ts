// import * as fs from 'fs';
// import * as path from 'path';
// import { promisify } from 'util';
// import { ExecutorContext } from '@nx/devkit';
// import * as child_process from 'child_process';
// import * as unirest from 'unirest';
//
// // Преобразуем колбэк-функции в Promise-функции
// const readdir = promisify(fs.readdir);
// const stat = promisify(fs.stat);
// const exec = promisify(child_process.exec);
//
// // Интерфейсы для типизации
// interface FileInfo {
//   path: string;         // Полный путь к файлу
//   relativePath: string; // Относительный путь от базовой директории
//   size?: number;        // Размер файла в байтах
//   extension?: string;   // Расширение файла
// }
//
// export interface FileSyncExecutorOptions {
//   directory: string;
//   branch?: string;
//   compareBranch?: string;
//   serverUrl: string;
//   concurrency: number;
//   endpoint: string;
//   keyPrefix: string;
//   logLevel?: 'verbose' | 'normal' | 'minimal'; // Уровень детализации логов
// }
//
// // ANSI Цвета для консоли
// const colors = {
//   reset: '\x1b[0m',
//   bright: '\x1b[1m',
//   dim: '\x1b[2m',
//   underscore: '\x1b[4m',
//   blink: '\x1b[5m',
//   reverse: '\x1b[7m',
//   hidden: '\x1b[8m',
//
//   black: '\x1b[30m',
//   red: '\x1b[31m',
//   green: '\x1b[32m',
//   yellow: '\x1b[33m',
//   blue: '\x1b[34m',
//   magenta: '\x1b[35m',
//   cyan: '\x1b[36m',
//   white: '\x1b[37m',
//
//   bgBlack: '\x1b[40m',
//   bgRed: '\x1b[41m',
//   bgGreen: '\x1b[42m',
//   bgYellow: '\x1b[43m',
//   bgBlue: '\x1b[44m',
//   bgMagenta: '\x1b[45m',
//   bgCyan: '\x1b[46m',
//   bgWhite: '\x1b[47m'
// };
//
// // Коды для управления терминалом
// const terminal = {
//   clearLine: '\r\x1b[K',         // Очищает текущую строку
//   moveUp: (n = 1) => `\x1b[${n}A`,  // Перемещает курсор вверх на n строк
//   moveDown: (n = 1) => `\x1b[${n}B` // Перемещает курсор вниз на n строк
// };
//
// // Класс для форматированного вывода логов
// class Logger {
//   public logLevel: 'verbose' | 'normal' | 'minimal';
//   private startTime: number;
//   private lastProgressUpdate: number = 0;
//   private progressBarWidth: number = 30;
//   private lastFileInfo: string = '';
//   private isProgressVisible: boolean = false;
//
//   constructor(level: 'verbose' | 'normal' | 'minimal' = 'normal') {
//     this.logLevel = level;
//     this.startTime = Date.now();
//   }
//
//   // Форматирование времени
//   private getTimeStamp(): string {
//     const now = new Date();
//     return `${colors.dim}[${now.toISOString().split('T')[1].split('.')[0]}]${colors.reset}`;
//   }
//
//   // Префикс для информационных сообщений
//   private getInfoPrefix(): string {
//     return `${colors.blue}ℹ️ INFO${colors.reset}`;
//   }
//
//   // Префикс для сообщений об успехе
//   private getSuccessPrefix(): string {
//     return `${colors.green}✅ SUCCESS${colors.reset}`;
//   }
//
//   // Префикс для предупреждений
//   private getWarningPrefix(): string {
//     return `${colors.yellow}⚠️ WARNING${colors.reset}`;
//   }
//
//   // Префикс для ошибок
//   private getErrorPrefix(): string {
//     return `${colors.red}❌ ERROR${colors.reset}`;
//   }
//
//   // Вывод информационного сообщения
//   public info(message: string): void {
//     if (this.logLevel === 'minimal') return;
//
//     // Если прогресс-бар видим, очищаем его перед выводом
//     this.clearProgress();
//
//     console.log(`${this.getTimeStamp()} ${this.getInfoPrefix()} ${message}`);
//
//     // Восстанавливаем прогресс-бар, если он был активен
//     this.restoreProgress();
//   }
//
//   // Вывод сообщения об успехе
//   public success(message: string): void {
//     // Если прогресс-бар видим, очищаем его перед выводом
//     this.clearProgress();
//
//     console.log(`${this.getTimeStamp()} ${this.getSuccessPrefix()} ${message}`);
//
//     // Восстанавливаем прогресс-бар, если он был активен
//     this.restoreProgress();
//   }
//
//   // Вывод предупреждения
//   public warning(message: string): void {
//     // Если прогресс-бар видим, очищаем его перед выводом
//     this.clearProgress();
//
//     console.log(`${this.getTimeStamp()} ${this.getWarningPrefix()} ${message}`);
//
//     // Восстанавливаем прогресс-бар, если он был активен
//     this.restoreProgress();
//   }
//
//   // Вывод ошибки
//   public error(message: string, error?: any): void {
//     // Если прогресс-бар видим, очищаем его перед выводом
//     this.clearProgress();
//
//     console.error(`${this.getTimeStamp()} ${this.getErrorPrefix()} ${message}`);
//     if (error && this.logLevel === 'verbose') {
//       console.error(`${colors.dim}   Details:${colors.reset} `, error);
//     }
//
//     // Восстанавливаем прогресс-бар, если он был активен
//     this.restoreProgress();
//   }
//
//   // Вывод подробной информации (только для verbose режима)
//   public verbose(message: string): void {
//     if (this.logLevel !== 'verbose') return;
//
//     // Если прогресс-бар видим, очищаем его перед выводом
//     this.clearProgress();
//
//     console.log(`${this.getTimeStamp()} ${colors.dim}VERBOSE${colors.reset} ${message}`);
//
//     // Восстанавливаем прогресс-бар, если он был активен
//     this.restoreProgress();
//   }
//
//   // Вывод заголовка секции
//   public section(title: string): void {
//     if (this.logLevel === 'minimal') return;
//
//     // Если прогресс-бар видим, очищаем его перед выводом
//     this.clearProgress();
//
//     console.log(`\n${colors.cyan}${colors.bright}▶ ${title}${colors.reset}`);
//     console.log(`${colors.dim}${'─'.repeat(80)}${colors.reset}`);
//
//     // Восстанавливаем прогресс-бар, если он был активен
//     this.restoreProgress();
//   }
//
//   // Форматирование размера файла
//   public formatFileSize(bytes: number): string {
//     if (bytes < 1024) return `${bytes} B`;
//     if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
//     return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
//   }
//
//   // Очистка прогресса для вывода нового сообщения
//   private clearProgress(): void {
//     if (this.isProgressVisible) {
//       process.stdout.write(terminal.clearLine);
//       this.isProgressVisible = false;
//     }
//   }
//
//   // Восстановление отображения прогресса
//   private restoreProgress(): void {
//     if (this.lastFileInfo) {
//       process.stdout.write(this.lastFileInfo);
//       this.isProgressVisible = true;
//     }
//   }
//
//   // Вывод информации о файле и прогрессе одной строкой
//   public fileProgressInfo(file: FileInfo, current: number, total: number, success: number, errors: number, isSuccess: boolean = true): void {
//     // Обновляем не чаще чем раз в 100мс для экономии ресурсов
//     const now = Date.now();
//     if (now - this.lastProgressUpdate < 100 && current < total) return;
//     this.lastProgressUpdate = now;
//
//     // Очищаем текущую строку
//     process.stdout.write(terminal.clearLine);
//
//     // Форматируем информацию о файле
//     const fileInfo = isSuccess ?
//       `${colors.green}✅${colors.reset} ${colors.bright}${file.relativePath}${colors.reset}` :
//       `${colors.red}❌${colors.reset} ${colors.bright}${file.relativePath}${colors.reset}`;
//
//     const fileSize = file.size ? ` (${colors.dim}${this.formatFileSize(file.size)}${colors.reset})` : '';
//     const fileExt = file.extension || path.extname(file.relativePath);
//     const fileExtInfo = ` [${colors.yellow}${fileExt}${colors.reset}]`;
//
//     // Создаем и форматируем прогресс-бар
//     const percentage = Math.floor((current / total) * 100);
//     const elapsed = (now - this.startTime) / 1000;
//     const itemsPerSecond = current / elapsed;
//     const estimatedTotal = elapsed / (current / total);
//     const remaining = Math.max(0, estimatedTotal - elapsed);
//
//     const completedWidth = Math.floor((current / total) * this.progressBarWidth);
//     const progressBar = [
//       '[',
//       colors.green + '='.repeat(completedWidth) + colors.reset,
//       ' '.repeat(this.progressBarWidth - completedWidth),
//       ']'
//     ].join('');
//
//     // Форматируем статус
//     const status = [
//       `${colors.bright}${percentage}%${colors.reset}`,
//       `(${current}/${total}, `,
//       `${colors.green}успешно: ${success}${colors.reset}, `,
//       `${errors > 0 ? colors.red : colors.reset}ошибок: ${errors}${colors.reset})`,
//       `[${itemsPerSecond.toFixed(1)} файлов/сек, ост. ${this.formatTime(remaining)}]`
//     ].join(' ');
//
//     // Объединяем всю информацию
//     this.lastFileInfo = `${this.getTimeStamp()} ${fileInfo}${fileSize}${fileExtInfo}\n${this.getTimeStamp()} 📊 ${progressBar} ${status}`;
//
//     // Выводим информацию
//     process.stdout.write(this.lastFileInfo);
//     this.isProgressVisible = true;
//   }
//
//   // Форматирование времени в минуты:секунды
//   private formatTime(seconds: number): string {
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   }
//
//   // Вывод итогового отчета
//   public summary(totalFiles: number, successFiles: number, errorFiles: number, startTime: number): void {
//     // Очищаем информацию о прогрессе
//     this.clearProgress();
//     this.lastFileInfo = '';
//
//     const endTime = Date.now();
//     const totalTime = (endTime - startTime) / 1000;
//
//     this.section('Итоги синхронизации');
//
//     console.log(`${colors.bright}Общая информация:${colors.reset}`);
//     console.log(`   - Всего файлов: ${totalFiles}`);
//     console.log(`   - Успешно обработано: ${colors.green}${successFiles}${colors.reset}`);
//     console.log(`   - Ошибок: ${errorFiles > 0 ? colors.red : colors.reset}${errorFiles}${colors.reset}`);
//
//     console.log(`\n${colors.bright}Производительность:${colors.reset}`);
//     console.log(`   - Общее время выполнения: ${this.formatTime(totalTime)}`);
//     console.log(`   - Средняя скорость: ${(totalFiles / totalTime).toFixed(2)} файлов/сек`);
//
//     const status = errorFiles === 0 ?
//       `${colors.green}${colors.bright}УСПЕШНО${colors.reset}` :
//       `${colors.red}${colors.bright}ЗАВЕРШЕНО С ОШИБКАМИ${colors.reset}`;
//
//     console.log(`\n${colors.bright}Статус: ${status}`);
//     console.log(`${colors.dim}${'─'.repeat(80)}${colors.reset}\n`);
//   }
// }
//
// /**
//  * Рекурсивно сканирует директорию и возвращает список всех файлов
//  */
// async function scanDirectory(directoryPath: string, basePath: string = directoryPath, logger: Logger): Promise<FileInfo[]> {
//   const entries = await readdir(directoryPath, { withFileTypes: true });
//   const files: FileInfo[] = [];
//
//   for (const entry of entries) {
//     const fullPath = path.join(directoryPath, entry.name);
//
//     if (entry.isDirectory()) {
//       // Рекурсивно сканируем поддиректорию
//       const subDirFiles = await scanDirectory(fullPath, basePath, logger);
//       files.push(...subDirFiles);
//     } else {
//       // Это файл, добавляем его в список
//       const relativePath = path.relative(basePath, fullPath);
//       const stats = await stat(fullPath);
//       const extension = path.extname(fullPath);
//
//       files.push({
//         path: fullPath,
//         relativePath,
//         size: stats.size,
//         extension
//       });
//
//       logger.verbose(`Найден файл: ${relativePath} (${logger.formatFileSize(stats.size)})`);
//     }
//   }
//
//   return files;
// }
//
// /**
//  * Получает список измененных файлов между двумя ветками Git
//  */
// async function getChangedFiles(directoryPath: string, branch: string, compareBranch: string, logger: Logger): Promise<FileInfo[]> {
//   try {
//     // Проверяем, что мы находимся в git репозитории
//     await exec('git rev-parse --is-inside-work-tree', { cwd: directoryPath });
//     logger.verbose(`Git репозиторий обнаружен в ${directoryPath}`);
//
//     // Выполняем git команду для получения измененных файлов
//     logger.info(`Получение списка измененных файлов между ветками ${colors.yellow}${compareBranch}${colors.reset} и ${colors.yellow}${branch}${colors.reset}`);
//     const { stdout } = await exec(`git diff --name-status ${compareBranch}...${branch}`, { cwd: directoryPath });
//
//     // Парсим вывод git для получения списка измененных файлов
//     const changedFilesInfo = stdout
//       .split('\n')
//       .filter(line => line.trim() !== '')
//       .map(line => {
//         const [status, filePath] = line.split(/\s+/).filter(Boolean);
//         return {
//           status,
//           filePath
//         };
//       });
//
//     logger.verbose(`Git показал ${changedFilesInfo.length} изменений`);
//
//     // Фильтруем удаленные файлы (обозначены 'D')
//     const changedFiles = await Promise.all(
//       changedFilesInfo
//         .filter(file => file.status !== 'D')
//         .map(async file => {
//           const fullPath = path.resolve(directoryPath, file.filePath);
//           try {
//             const stats = await stat(fullPath);
//             const extension = path.extname(fullPath);
//             return {
//               path: fullPath,
//               relativePath: file.filePath,
//               size: stats.size,
//               extension,
//               status: file.status // A - добавлен, M - изменен, R - переименован
//             };
//           } catch (e) {
//             // Файл не существует или недоступен
//             logger.warning(`Не удалось получить информацию о файле: ${file.filePath}`);
//             return {
//               path: fullPath,
//               relativePath: file.filePath,
//               extension: path.extname(fullPath),
//               status: file.status
//             };
//           }
//         })
//     );
//
//     // Логируем результат
//     if (changedFiles.length > 0) {
//       logger.info(`Найдено ${changedFiles.length} измененных файлов`);
//       if (logger.logLevel === 'verbose') {
//         changedFiles.forEach(file => {
//           const statusText = file.status === 'A' ? 'добавлен' :
//             file.status === 'M' ? 'изменен' :
//               file.status === 'R' ? 'переименован' : file.status;
//
//           logger.verbose(`${file.relativePath} (${statusText}, ${file.size ? logger.formatFileSize(file.size) : 'размер неизвестен'})`);
//         });
//       }
//     } else {
//       logger.warning('Не найдено измененных файлов между указанными ветками');
//     }
//
//     return changedFiles;
//   } catch (error) {
//     logger.error('Ошибка при получении измененных файлов из Git', error);
//     throw error;
//   }
// }
//
// /**
//  * Отправляет файл на сервер используя unirest
//  */
// async function uploadFile(file: FileInfo, options: FileSyncExecutorOptions, logger: Logger): Promise<void> {
//   return new Promise((resolve, reject) => {
//     const keyPath = path.join(
//       options.directory,
//       options.keyPrefix,
//       file.relativePath
//     );
//     const url = `${options.serverUrl}${options.endpoint}?key=${encodeURIComponent(keyPath)}`;
//
//     logger.verbose(`Отправка файла: ${file.relativePath} на ${url}`);
//     const startTime = Date.now();
//
//     const req = unirest('POST', url)
//       .attach('file', file.path)
//       .end(function (res) {
//         const duration = Date.now() - startTime;
//         if (res.error) {
//           logger.error(`Ошибка при синхронизации файла ${file.relativePath} (${duration}ms)`, res.error);
//           reject(res.error);
//         } else {
//           logger.verbose(`Время отправки: ${duration}ms, статус: ${res.status}`);
//           resolve();
//         }
//       });
//   });
// }
//
// /**
//  * Реализация очереди с ограничением параллельного выполнения
//  */
// class TaskQueue {
//   private queue: (() => Promise<void>)[] = [];
//   private running = 0;
//   private readonly concurrency: number;
//   private logger: Logger;
//
//   constructor(concurrency: number, logger: Logger) {
//     this.concurrency = concurrency;
//     this.logger = logger;
//     this.logger.verbose(`Создана очередь задач с параллельностью ${concurrency}`);
//   }
//
//   public add(task: () => Promise<void>): Promise<void> {
//     return new Promise<void>((resolve, reject) => {
//       this.queue.push(async () => {
//         try {
//           await task();
//           resolve();
//         } catch (error) {
//           reject(error);
//         } finally {
//           this.running--;
//           this.runNext();
//         }
//       });
//
//       this.runNext();
//     });
//   }
//
//   private runNext(): void {
//     if (this.running < this.concurrency && this.queue.length > 0) {
//       this.running++;
//       const task = this.queue.shift();
//       if (task) {
//         // Запускаем задачу асинхронно
//         setTimeout(task, 0);
//       }
//     }
//   }
//
//   public get activeCount(): number {
//     return this.running;
//   }
//
//   public get size(): number {
//     return this.queue.length;
//   }
// }
//
// export default async function runExecutor(
//   options: FileSyncExecutorOptions,
//   context: ExecutorContext
// ): Promise<{ success: boolean }> {
//   // Создаем логгер
//   const logger = new Logger(options.logLevel || 'normal');
//   const startTime = Date.now();
//
//   try {
//     logger.section('Запуск File Sync Executor');
//     logger.info(`Рабочая директория: ${colors.yellow}${options.directory}${colors.reset}`);
//     logger.info(`Сервер назначения: ${colors.yellow}${options.serverUrl}${options.endpoint}${colors.reset}`);
//
//     if (options.branch && options.compareBranch) {
//       logger.info(`Режим сравнения веток: ${colors.yellow}${options.compareBranch}...${options.branch}${colors.reset}`);
//     } else {
//       logger.info(`Режим полного сканирования директории`);
//     }
//
//     // Получаем абсолютный путь к директории относительно корня рабочего пространства
//     const workspaceRoot = context.root;
//     const directoryPath = path.resolve(workspaceRoot, options.directory);
//     logger.verbose(`Абсолютный путь к директории: ${directoryPath}`);
//
//     let filesToSync: FileInfo[];
//
//     // Определяем режим работы: все файлы или только измененные
//     if (options.branch && options.compareBranch) {
//       logger.section('Сравнение веток');
//       filesToSync = await getChangedFiles(workspaceRoot, options.branch, options.compareBranch, logger);
//
//       // Фильтруем файлы только из указанной директории
//       const beforeCount = filesToSync.length;
//       filesToSync = filesToSync.filter(file =>
//         file.relativePath.startsWith(options.directory + path.sep) ||
//         file.relativePath === options.directory
//       );
//
//       logger.verbose(`Отфильтровано файлов: ${beforeCount} -> ${filesToSync.length} (только из ${options.directory})`);
//
//       // Корректируем относительные пути
//       if (options.directory !== '.') {
//         filesToSync = filesToSync.map(file => ({
//           ...file,
//           relativePath: path.relative(options.directory, file.relativePath)
//         }));
//         logger.verbose('Относительные пути файлов скорректированы');
//       }
//     } else {
//       logger.section('Сканирование файлов');
//       logger.info(`Сканирование всех файлов в директории: ${colors.yellow}${directoryPath}${colors.reset}`);
//       filesToSync = await scanDirectory(directoryPath, directoryPath, logger);
//     }
//
//     if (filesToSync.length === 0) {
//       logger.warning('Нет файлов для синхронизации');
//       return { success: true };
//     }
//
//     // Группировка файлов по расширениям для статистики
//     const extensionStats: Record<string, { count: number, size: number }> = {};
//     let totalSize = 0;
//
//     filesToSync.forEach(file => {
//       const ext = file.extension || path.extname(file.relativePath) || 'unknown';
//       if (!extensionStats[ext]) {
//         extensionStats[ext] = { count: 0, size: 0 };
//       }
//       extensionStats[ext].count++;
//       if (file.size) {
//         extensionStats[ext].size += file.size;
//         totalSize += file.size;
//       }
//     });
//
//     // Вывод статистики по файлам
//     logger.section('Статистика файлов');
//     logger.info(`Всего файлов для синхронизации: ${colors.bright}${filesToSync.length}${colors.reset}`);
//     logger.info(`Общий размер: ${colors.bright}${logger.formatFileSize(totalSize)}${colors.reset}`);
//
//     if (logger.logLevel !== 'minimal') {
//       console.log(`\n${colors.bright}Распределение по типам файлов:${colors.reset}`);
//       Object.entries(extensionStats)
//         .sort((a, b) => b[1].count - a[1].count)
//         .forEach(([ext, stats]) => {
//           console.log(`   ${colors.yellow}${ext || 'без расширения'}${colors.reset}: ${stats.count} файлов (${logger.formatFileSize(stats.size)})`);
//         });
//       console.log('');
//     }
//
//     // Создаем очередь с ограничением параллельных запросов
//     logger.section('Синхронизация файлов');
//     logger.info(`Начинаем синхронизацию с параллельностью: ${colors.bright}${options.concurrency}${colors.reset}`);
//
//     const queue = new TaskQueue(options.concurrency, logger);
//
//     let successCount = 0;
//     let errorCount = 0;
//     let lastProcessedFile: FileInfo | null = null;
//
//     // Помещаем все задачи в очередь
//     const promises: Promise<void>[] = [];
//
//     for (const file of filesToSync) {
//       const promise = queue.add(async () => {
//         try {
//           await uploadFile(file, options, logger);
//           lastProcessedFile = file;
//           successCount++;
//         } catch (error) {
//           lastProcessedFile = file;
//           errorCount++;
//         }
//
//         // Выводим прогресс и информацию о последнем файле
//         const total = successCount + errorCount;
//         if (lastProcessedFile) {
//           logger.fileProgressInfo(
//             lastProcessedFile,
//             total,
//             filesToSync.length,
//             successCount,
//             errorCount,
//             errorCount === 0 || successCount > errorCount
//           );
//         }
//       });
//
//       promises.push(promise);
//     }
//
//     // Ждем завершения всех задач
//     await Promise.all(promises);
//
//     // Выводим итоговую статистику
//     logger.summary(filesToSync.length, successCount, errorCount, startTime);
//
//     return { success: errorCount === 0 };
//   } catch (error) {
//     logger.error('Ошибка выполнения executor', error);
//     return { success: false };
//   }
// }
