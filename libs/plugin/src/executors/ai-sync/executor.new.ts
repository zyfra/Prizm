// import * as fs from 'fs';
// import * as path from 'path';
// import { promisify } from 'util';
// import { ExecutorContext } from '@nx/devkit';
// import * as child_process from 'child_process';
// import * as unirest from 'unirest';
// import { createWriteStream, existsSync, mkdirSync } from 'fs';
// import { format as formatDate } from 'date-fns';
//
// // Преобразуем колбэк-функции в Promise-функции
// const readdir = promisify(fs.readdir);
// const stat = promisify(fs.stat);
// const exec = promisify(child_process.exec);
// const writeFile = promisify(fs.writeFile);
// const appendFile = promisify(fs.appendFile);
//
// // Интерфейсы для типизации
// interface FileInfo {
//   path: string;         // Полный путь к файлу
//   relativePath: string; // Относительный путь от базовой директории
//   size?: number;        // Размер файла в байтах
//   extension?: string;   // Расширение файла
//   status?: string;      // Статус файла в git (для режима сравнения веток)
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
//   // Новые параметры для фильтрации
//   includePatterns?: string[];  // Регулярные выражения для включения файлов
//   excludePatterns?: string[];  // Регулярные выражения для исключения файлов
//   // Параметры для логирования
//   logLevel?: 'verbose' | 'normal' | 'minimal';    // Уровень детализации логов в консоли
//   logDirectory?: string;                          // Директория для хранения логов
//   logFormat?: 'text' | 'json' | 'both';           // Формат сохраняемого лога
//   logMode?: 'append' | 'overwrite';               // Режим записи логов
//   dryRun?: boolean;                               // Режим "сухого запуска" (без реальной отправки)
// }
//
// // Метаданные запуска для логирования
// interface ExecutionMetadata {
//   startTime: Date;
//   options: FileSyncExecutorOptions;
//   context: {
//     workspaceRoot: string;
//     projectName?: string;
//     targetName?: string;
//     configurationName?: string;
//   };
//   stats: {
//     totalFiles: number;
//     filteredFiles: number;
//     successFiles: number;
//     errorFiles: number;
//     totalSize: number;
//     processedSize: number;
//     extensionStats: Record<string, { count: number, size: number }>;
//     elapsedTimeMs: number;
//     averageSpeed: number;
//   };
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
// // Интерфейс адаптера логирования
// interface LogAdapter {
//   log(message: string, level?: string): void;
//   table(data: any[], columns?: string[]): void;
//   section(title: string): void;
//   progress(message: string): void;
//   flush(): Promise<void>;
// }
//
// // Адаптер для вывода в консоль
// class ConsoleLogAdapter implements LogAdapter {
//   private lastProgressMessage = '';
//   private isProgressActive = false;
//
//    public log(message: string, level: string = 'info'): void {
//     if (this.isProgressActive) {
//       process.stdout.write(terminal.clearLine);
//       this.isProgressActive = false;
//     }
//
//     console.log(message);
//
//     if (this.lastProgressMessage) {
//       process.stdout.write(this.lastProgressMessage);
//       this.isProgressActive = true;
//     }
//   }
//
//   public table(data: any[], columns?: string[]): void {
//     if (this.isProgressActive) {
//       process.stdout.write(terminal.clearLine);
//       this.isProgressActive = false;
//     }
//
//     console.table(data, columns);
//
//     if (this.lastProgressMessage) {
//       process.stdout.write(this.lastProgressMessage);
//       this.isProgressActive = true;
//     }
//   }
//
//   public section(title: string): void {
//     if (this.isProgressActive) {
//       process.stdout.write(terminal.clearLine);
//       this.isProgressActive = false;
//     }
//
//     console.log(`\n${colors.cyan}${colors.bright}▶ ${title}${colors.reset}`);
//     console.log(`${colors.dim}${'─'.repeat(80)}${colors.reset}`);
//
//     if (this.lastProgressMessage) {
//       process.stdout.write(this.lastProgressMessage);
//       this.isProgressActive = true;
//     }
//   }
//
//   public progress(message: string): void {
//     if (this.isProgressActive) {
//       process.stdout.write(terminal.clearLine);
//     }
//
//     process.stdout.write(message);
//     this.lastProgressMessage = message;
//     this.isProgressActive = true;
//   }
//
//   public async flush(): Promise<void> {
//     // Для консоли не требуется принудительный сброс буфера
//     return Promise.resolve();
//   }
// }
//
// // Адаптер для записи в файл
// class FileLogAdapter implements LogAdapter {
//   private stream: fs.WriteStream;
//   private filePath: string;
//   private buffer: string[] = [];
//   private readonly bufferSize = 50; // Буферизовать до 50 сообщений перед записью
//
//   constructor(filePath: string, mode: 'append' | 'overwrite' = 'overwrite') {
//     this.filePath = filePath;
//
//     // Убедимся, что директория существует
//     const dir = path.dirname(filePath);
//     if (!existsSync(dir)) {
//       mkdirSync(dir, { recursive: true });
//     }
//
//     // Создаем поток записи
//     this.stream = createWriteStream(filePath, {
//       flags: mode === 'append' ? 'a' : 'w',
//       encoding: 'utf8'
//     });
//
//     // Записываем заголовок при создании файла
//     if (mode === 'overwrite') {
//       const header = `=== File Sync Executor Log ===\nDate: ${new Date().toISOString()}\n\n`;
//       this.stream.write(header);
//     } else {
//       this.stream.write(`\n=== New Session: ${new Date().toISOString()} ===\n\n`);
//     }
//   }
//
//   // Удаляем ANSI цветовые коды из сообщения
//   private stripAnsiCodes(message: string): string {
//     // eslint-disable-next-line no-control-regex
//     return message.replace(/\x1b\[[0-9;]*m/g, '');
//   }
//
//   public log(message: string, level: string = 'info'): void {
//     const cleanMessage = this.stripAnsiCodes(message);
//     const timestamp = new Date().toISOString();
//     const formattedMessage = `[${timestamp}] [${level.toUpperCase()}] ${cleanMessage}\n`;
//
//     this.buffer.push(formattedMessage);
//
//     // Если буфер достиг предела, записываем его на диск
//     if (this.buffer.length >= this.bufferSize) {
//       this.flushBuffer();
//     }
//   }
//
//   private flushBuffer(): void {
//     if (this.buffer.length === 0) return;
//
//     const content = this.buffer.join('');
//     this.stream.write(content);
//     this.buffer = [];
//   }
//
//   public table(data: any[], columns?: string[]): void {
//     // Преобразование таблицы в текстовый формат для записи в файл
//     const columnNames = columns || Object.keys(data[0] || {});
//
//     // Расчет ширины каждой колонки
//     const columnWidths = columnNames.map(name => Math.max(
//       name.length,
//       ...data.map(row => String(row[name] || '').length)
//     ));
//
//     // Создание заголовка таблицы
//     const header = columnNames.map((name, i) =>
//       name.padEnd(columnWidths[i])
//     ).join(' | ');
//
//     const separator = columnWidths.map(width =>
//       '-'.repeat(width)
//     ).join('-+-');
//
//     // Создание строк таблицы
//     const rows = data.map(row =>
//       columnNames.map((name, i) =>
//         String(row[name] || '').padEnd(columnWidths[i])
//       ).join(' | ')
//     );
//
//     // Добавление таблицы в буфер
//     this.log(header);
//     this.log(separator);
//     rows.forEach(row => this.log(row));
//   }
//
//   public section(title: string): void {
//     this.log('\n' + '='.repeat(80));
//     this.log(title);
//     this.log('='.repeat(80) + '\n');
//   }
//
//   public progress(message: string): void {
//     // В файле храним только финальные значения прогресса
//     // Мы можем пропустить промежуточные обновления
//   }
//
//   public async flush(): Promise<void> {
//     // Записываем оставшиеся сообщения в буфере
//     this.flushBuffer();
//
//     // Закрываем поток и дожидаемся завершения записи
//     return new Promise<void>((resolve, reject) => {
//       this.stream.end(() => {
//         resolve();
//       });
//       this.stream.on('error', (err) => {
//         reject(err);
//       });
//     });
//   }
// }
//
// // Адаптер для записи в JSON-файл
// class JsonLogAdapter implements LogAdapter {
//   private filePath: string;
//   private metadata: ExecutionMetadata;
//   private logs: Array<{timestamp: string, level: string, message: string}> = [];
//   private progressState: any = null;
//
//   constructor(filePath: string, metadata: ExecutionMetadata, mode: 'append' | 'overwrite' = 'overwrite') {
//     this.filePath = filePath;
//     this.metadata = metadata;
//
//     // Убедимся, что директория существует
//     const dir = path.dirname(filePath);
//     if (!existsSync(dir)) {
//       mkdirSync(dir, { recursive: true });
//     }
//
//     // Если режим дозаписи, загружаем существующие данные
//     if (mode === 'append' && existsSync(filePath)) {
//       try {
//         const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
//         if (Array.isArray(existing.sessions)) {
//           // Файл содержит правильный формат, продолжаем его
//           this.logs = existing.logs || [];
//         }
//       } catch (e) {
//         // В случае ошибки просто начинаем с пустого файла
//         console.warn(`Could not parse existing JSON log file: ${e.message}`);
//       }
//     }
//   }
//
//   public log(message: string, level: string = 'info'): void {
//     // Удаляем ANSI цветовые коды
//     // eslint-disable-next-line no-control-regex
//     const cleanMessage = message.replace(/\x1b\[[0-9;]*m/g, '');
//
//     this.logs.push({
//       timestamp: new Date().toISOString(),
//       level: level.toUpperCase(),
//       message: cleanMessage
//     });
//   }
//
//   public table(data: any[], columns?: string[]): void {
//     // Для JSON просто добавляем данные как есть
//     this.logs.push({
//       timestamp: new Date().toISOString(),
//       level: 'TABLE',
//       message: JSON.stringify(data)
//     });
//   }
//
//   public section(title: string): void {
//     this.logs.push({
//       timestamp: new Date().toISOString(),
//       level: 'SECTION',
//       message: title
//     });
//   }
//
//   public progress(message: string): void {
//     // Извлекаем текущий прогресс из сообщения и сохраняем его состояние
//     // Пример регулярки для извлечения процента: /(\d+)%/
//     const percentMatch = message.match(/(\d+)%/);
//     if (percentMatch) {
//       const percent = parseInt(percentMatch[1], 10);
//       this.progressState = { percent, timestamp: new Date().toISOString() };
//     }
//   }
//
//   public async flush(): Promise<void> {
//     // Создаем полный JSON-документ
//     const jsonData = {
//       metadata: {
//         ...this.metadata,
//         endTime: new Date().toISOString()
//       },
//       logs: this.logs,
//       finalProgress: this.progressState
//     };
//
//     // Записываем JSON-файл
//     await writeFile(this.filePath, JSON.stringify(jsonData, null, 2), 'utf8');
//   }
// }
//
// // Композитный адаптер для одновременного вывода в несколько источников
// class CompositeLogger implements LogAdapter {
//   private adapters: LogAdapter[];
//
//   constructor(adapters: LogAdapter[]) {
//     this.adapters = adapters;
//   }
//
//   public log(message: string, level: string = 'info'): void {
//     this.adapters.forEach(adapter => adapter.log(message, level));
//   }
//
//   public table(data: any[], columns?: string[]): void {
//     this.adapters.forEach(adapter => adapter.table(data, columns));
//   }
//
//   public section(title: string): void {
//     this.adapters.forEach(adapter => adapter.section(title));
//   }
//
//   public progress(message: string): void {
//     this.adapters.forEach(adapter => adapter.progress(message));
//   }
//
//   public async flush(): Promise<void> {
//     await Promise.all(this.adapters.map(adapter => adapter.flush()));
//   }
// }
//
// // Класс для форматированного вывода логов
// class Logger {
//   public logLevel: 'verbose' | 'normal' | 'minimal';
//   private startTime: number;
//   private lastProgressUpdate: number = 0;
//   private progressBarWidth: number = 30;
//   private lastFileInfo: string = '';
//   private isProgressVisible: boolean = false;
//   public adapter: LogAdapter;
//   private metadata: ExecutionMetadata;
//
//   constructor(
//     adapter: LogAdapter,
//     level: 'verbose' | 'normal' | 'minimal' = 'normal',
//     metadata: ExecutionMetadata
//   ) {
//     this.logLevel = level;
//     this.startTime = Date.now();
//     this.adapter = adapter;
//     this.metadata = metadata;
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
//   // Префикс для отфильтрованных элементов
//   private getFilteredPrefix(): string {
//     return `${colors.cyan}🔍 FILTERED${colors.reset}`;
//   }
//
//   // Вывод информационного сообщения
//   public info(message: string): void {
//     if (this.logLevel === 'minimal') return;
//     const formattedMessage = `${this.getTimeStamp()} ${this.getInfoPrefix()} ${message}`;
//     this.adapter.log(formattedMessage, 'info');
//   }
//
//   // Вывод сообщения об успехе
//   public success(message: string): void {
//     const formattedMessage = `${this.getTimeStamp()} ${this.getSuccessPrefix()} ${message}`;
//     this.adapter.log(formattedMessage, 'success');
//   }
//
//   // Вывод предупреждения
//   public warning(message: string): void {
//     const formattedMessage = `${this.getTimeStamp()} ${this.getWarningPrefix()} ${message}`;
//     this.adapter.log(formattedMessage, 'warning');
//   }
//
//   // Вывод ошибки
//   public error(message: string, error?: any): void {
//     const formattedMessage = `${this.getTimeStamp()} ${this.getErrorPrefix()} ${message}`;
//     this.adapter.log(formattedMessage, 'error');
//
//     if (error && this.logLevel === 'verbose') {
//       this.adapter.log(`${colors.dim}   Details:${colors.reset} ${JSON.stringify(error)}`, 'error');
//     }
//   }
//
//   // Вывод сообщения о фильтрации
//   public filtered(message: string): void {
//     if (this.logLevel === 'minimal') return;
//     const formattedMessage = `${this.getTimeStamp()} ${this.getFilteredPrefix()} ${message}`;
//     this.adapter.log(formattedMessage, 'filtered');
//   }
//
//   // Вывод подробной информации (только для verbose режима)
//   public verbose(message: string): void {
//     if (this.logLevel !== 'verbose') return;
//     const formattedMessage = `${this.getTimeStamp()} ${colors.dim}VERBOSE${colors.reset} ${message}`;
//     this.adapter.log(formattedMessage, 'verbose');
//   }
//
//   // Вывод заголовка секции
//   public section(title: string): void {
//     if (this.logLevel === 'minimal') return;
//     this.adapter.section(title);
//   }
//
//   // Форматирование размера файла
//   public formatFileSize(bytes: number): string {
//     if (bytes < 1024) return `${bytes} B`;
//     if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
//     return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
//   }
//
//   // Вывод информации о файле и прогрессе одной строкой
//   public fileProgressInfo(file: FileInfo, current: number, total: number, success: number, errors: number, filtered: number, isSuccess: boolean = true): void {
//     // Обновляем не чаще чем раз в 100мс для экономии ресурсов
//     const now = Date.now();
//     if (now - this.lastProgressUpdate < 100 && current < total) return;
//     this.lastProgressUpdate = now;
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
//       `${errors > 0 ? colors.red : colors.reset}ошибок: ${errors}${colors.reset}, `,
//       `${colors.cyan}отфильтровано: ${filtered}${colors.reset})`,
//       `[${itemsPerSecond.toFixed(1)} файлов/сек, ост. ${this.formatTime(remaining)}]`
//     ].join(' ');
//
//     // Объединяем всю информацию
//     const fileInfoLine = `${this.getTimeStamp()} ${fileInfo}${fileSize}${fileExtInfo}`;
//     const progressLine = `${this.getTimeStamp()} 📊 ${progressBar} ${status}`;
//     const progressMessage = `${fileInfoLine}\n${progressLine}`;
//
//     // Выводим прогресс через адаптер
//     this.adapter.progress(progressMessage);
//
//     // Обновляем метаданные
//     this.metadata.stats.successFiles = success;
//     this.metadata.stats.errorFiles = errors;
//     this.metadata.stats.elapsedTimeMs = now - this.startTime;
//     this.metadata.stats.averageSpeed = itemsPerSecond;
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
//   public summary(totalFiles: number, filteredFiles: number, successFiles: number, errorFiles: number, startTime: number, totalSize: number): void {
//     const endTime = Date.now();
//     const totalTime = (endTime - startTime) / 1000;
//
//     // Обновляем метаданные
//     this.metadata.stats.totalFiles = totalFiles;
//     this.metadata.stats.filteredFiles = filteredFiles;
//     this.metadata.stats.successFiles = successFiles;
//     this.metadata.stats.errorFiles = errorFiles;
//     this.metadata.stats.totalSize = totalSize;
//     this.metadata.stats.elapsedTimeMs = endTime - startTime;
//     this.metadata.stats.averageSpeed = (successFiles + errorFiles) / totalTime;
//
//     this.section('Итоги синхронизации');
//
//     this.adapter.log(`${colors.bright}Общая информация:${colors.reset}`, 'summary');
//     this.adapter.log(`   - Всего файлов: ${totalFiles}`, 'summary');
//     this.adapter.log(`   - Отфильтровано: ${colors.cyan}${filteredFiles}${colors.reset}`, 'summary');
//     this.adapter.log(`   - Успешно обработано: ${colors.green}${successFiles}${colors.reset}`, 'summary');
//     this.adapter.log(`   - Ошибок: ${errorFiles > 0 ? colors.red : colors.reset}${errorFiles}${colors.reset}`, 'summary');
//
//     this.adapter.log(`\n${colors.bright}Производительность:${colors.reset}`, 'summary');
//     this.adapter.log(`   - Общее время выполнения: ${this.formatTime(totalTime)}`, 'summary');
//     this.adapter.log(`   - Средняя скорость: ${((successFiles + errorFiles) / totalTime).toFixed(2)} файлов/сек`, 'summary');
//     this.adapter.log(`   - Общий размер обработанных файлов: ${this.formatFileSize(totalSize)}`, 'summary');
//
//     const status = errorFiles === 0 ?
//       `${colors.green}${colors.bright}УСПЕШНО${colors.reset}` :
//       `${colors.red}${colors.bright}ЗАВЕРШЕНО С ОШИБКАМИ${colors.reset}`;
//
//     this.adapter.log(`\n${colors.bright}Статус: ${status}`, 'summary');
//     this.adapter.log(`${colors.dim}${'─'.repeat(80)}${colors.reset}`, 'summary');
//   }
//
//   // Завершение логирования и сброс всех буферов
//   public async flush(): Promise<void> {
//     await this.adapter.flush();
//   }
// }
//
// /**
//  * Проверяет, соответствует ли файл заданным шаблонам фильтрации
//  */
// function matchesFilters(file: FileInfo, includePatterns: RegExp[] = [], excludePatterns: RegExp[] = []): boolean {
//   // Сначала проверяем исключающие паттерны
//   for (const pattern of excludePatterns) {
//     if (pattern.test(file.relativePath)) {
//       return false;
//     }
//   }
//
//   // Если нет включающих паттернов, принимаем все файлы
//   if (includePatterns.length === 0) {
//     return true;
//   }
//
//   // Проверяем включающие паттерны
//   for (const pattern of includePatterns) {
//     if (pattern.test(file.relativePath)) {
//       return true;
//     }
//   }
//
//   // Если ни один включающий паттерн не совпал, файл не соответствует фильтрам
//   return false;
// }
//
// /**
//  * Создает имя лог-файла на основе метаданных запуска
//  */
// function generateLogFileName(options: FileSyncExecutorOptions, format: 'text' | 'json'): string {
//   const timestamp = formatDate(new Date(), 'yyyyMMdd_HHmmss');
//   const directoryName = path.basename(options.directory).replace(/[^a-zA-Z0-9]/g, '_');
//   const prefix = options.dryRun ? 'dryrun_' : '';
//
//   // Добавляем информацию о ветках, если они указаны
//   const branchInfo = options.branch && options.compareBranch
//     ? `_${options.branch.replace(/[^a-zA-Z0-9]/g, '_')}_vs_${options.compareBranch.replace(/[^a-zA-Z0-9]/g, '_')}`
//     : '';
//
//   return `${prefix}filesync_${directoryName}${branchInfo}_${timestamp}.${format}`;
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
//     // В режиме dry run просто имитируем успешную отправку
//     if (options.dryRun) {
//       logger.verbose(`[DRY RUN] Имитация отправки файла: ${file.relativePath}`);
//       setTimeout(() => {
//         logger.verbose(`[DRY RUN] Файл ${file.relativePath} "отправлен" успешно`);
//         resolve();
//       }, 50); // Небольшая задержка для имитации
//       return;
//     }
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
//   // Создаем метаданные запуска
//   const metadata: ExecutionMetadata = {
//     startTime: new Date(),
//     options,
//     context: {
//       workspaceRoot: context.root,
//       projectName: context.projectName,
//       targetName: context.targetName,
//       configurationName: context.configurationName
//     },
//     stats: {
//       totalFiles: 0,
//       filteredFiles: 0,
//       successFiles: 0,
//       errorFiles: 0,
//       totalSize: 0,
//       processedSize: 0,
//       extensionStats: {},
//       elapsedTimeMs: 0,
//       averageSpeed: 0
//     }
//   };
//
//   // Создаем адаптеры логирования
//   const adapters: LogAdapter[] = [new ConsoleLogAdapter()];
//
//   // Если указана директория для логов, добавляем файловые адаптеры
//   if (options.logDirectory) {
//     // Создаем директорию для логов, если она не существует
//     if (!existsSync(options.logDirectory)) {
//       mkdirSync(options.logDirectory, { recursive: true });
//     }
//
//     const logFormat = options.logFormat || 'text';
//     const logMode = options.logMode || 'overwrite';
//
//     if (logFormat === 'text' || logFormat === 'both') {
//       const textLogPath = path.join(
//         options.logDirectory,
//         generateLogFileName(options, 'text')
//       );
//       adapters.push(new FileLogAdapter(textLogPath, logMode));
//     }
//
//     if (logFormat === 'json' || logFormat === 'both') {
//       const jsonLogPath = path.join(
//         options.logDirectory,
//         generateLogFileName(options, 'json')
//       );
//       adapters.push(new JsonLogAdapter(jsonLogPath, metadata, logMode));
//     }
//   }
//
//   // Создаем композитный логгер
//   const logAdapter = new CompositeLogger(adapters);
//   const logger = new Logger(logAdapter, options.logLevel || 'normal', metadata);
//   const startTime = Date.now();
//
//   try {
//     logger.section('Запуск File Sync Executor');
//     logger.info(`Рабочая директория: ${colors.yellow}${options.directory}${colors.reset}`);
//     logger.info(`Сервер назначения: ${colors.yellow}${options.serverUrl}${options.endpoint}${colors.reset}`);
//
//     // Вывод режима работы
//     if (options.dryRun) {
//       logger.warning(`Режим ${colors.bright}DRY RUN${colors.reset} - файлы не будут реально отправлены`);
//     }
//
//     // Информация о ветках
//     if (options.branch && options.compareBranch) {
//       logger.info(`Режим сравнения веток: ${colors.yellow}${options.compareBranch}...${options.branch}${colors.reset}`);
//     } else {
//       logger.info(`Режим полного сканирования директории`);
//     }
//
//     // Информация о фильтрах
//     if (options.includePatterns?.length) {
//       logger.info(`Включающие фильтры: ${colors.yellow}${options.includePatterns.join(', ')}${colors.reset}`);
//     }
//
//     if (options.excludePatterns?.length) {
//       logger.info(`Исключающие фильтры: ${colors.yellow}${options.excludePatterns.join(', ')}${colors.reset}`);
//     }
//
//     // Получаем абсолютный путь к директории относительно корня рабочего пространства
//     const workspaceRoot = context.root;
//     const directoryPath = path.resolve(workspaceRoot, options.directory);
//     logger.verbose(`Абсолютный путь к директории: ${directoryPath}`);
//
//     // Компилируем регулярные выражения
//     const includeRegexes = (options.includePatterns || []).map(pattern => new RegExp(pattern));
//     const excludeRegexes = (options.excludePatterns || []).map(pattern => new RegExp(pattern));
//
//     logger.verbose(`Скомпилировано ${includeRegexes.length} включающих и ${excludeRegexes.length} исключающих регулярных выражений`);
//
//     let allFiles: FileInfo[];
//
//     // Определяем режим работы: все файлы или только измененные
//     if (options.branch && options.compareBranch) {
//       logger.section('Сравнение веток');
//       allFiles = await getChangedFiles(workspaceRoot, options.branch, options.compareBranch, logger);
//
//       // Фильтруем файлы только из указанной директории
//       const beforeCount = allFiles.length;
//       allFiles = allFiles.filter(file =>
//         file.relativePath.startsWith(options.directory + path.sep) ||
//         file.relativePath === options.directory
//       );
//
//       logger.verbose(`Отфильтровано файлов: ${beforeCount} -> ${allFiles.length} (только из ${options.directory})`);
//
//       // Корректируем относительные пути
//       if (options.directory !== '.') {
//         allFiles = allFiles.map(file => ({
//           ...file,
//           relativePath: path.relative(options.directory, file.relativePath)
//         }));
//         logger.verbose('Относительные пути файлов скорректированы');
//       }
//     } else {
//       logger.section('Сканирование файлов');
//       logger.info(`Сканирование всех файлов в директории: ${colors.yellow}${directoryPath}${colors.reset}`);
//       allFiles = await scanDirectory(directoryPath, directoryPath, logger);
//     }
//
//     logger.verbose(`Всего найдено ${allFiles.length} файлов`);
//
//     // Применяем фильтры регулярных выражений
//     const filesToSync: FileInfo[] = [];
//     const filteredFiles: FileInfo[] = [];
//
//     for (const file of allFiles) {
//       if (matchesFilters(file, includeRegexes, excludeRegexes)) {
//         filesToSync.push(file);
//       } else {
//         filteredFiles.push(file);
//         logger.verbose(`Отфильтрован файл: ${file.relativePath}`);
//       }
//     }
//
//     if (filteredFiles.length > 0) {
//       logger.info(`Отфильтровано ${filteredFiles.length} файлов на основе заданных шаблонов`);
//       if (logger.logLevel === 'verbose') {
//         // В verbose режиме выводим список отфильтрованных файлов
//         filteredFiles.forEach(file => {
//           logger.filtered(`${file.relativePath} (${file.size ? logger.formatFileSize(file.size) : 'размер неизвестен'})`);
//         });
//       }
//     }
//
//     if (filesToSync.length === 0) {
//       logger.warning('Нет файлов для синхронизации после применения фильтров');
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
//     // Обновляем метаданные
//     metadata.stats.extensionStats = extensionStats;
//     metadata.stats.totalSize = totalSize;
//
//     // Вывод статистики по файлам
//     logger.section('Статистика файлов');
//     logger.info(`Всего файлов для синхронизации: ${colors.bright}${filesToSync.length}${colors.reset}`);
//     logger.info(`Отфильтровано файлов: ${colors.bright}${filteredFiles.length}${colors.reset}`);
//     logger.info(`Общий размер: ${colors.bright}${logger.formatFileSize(totalSize)}${colors.reset}`);
//
//     if (logger.logLevel !== 'minimal') {
//       logger.adapter.log(`\n${colors.bright}Распределение по типам файлов:${colors.reset}`, 'info');
//
//       // Создаем таблицу для вывода статистики по типам файлов
//       const statsTable = Object.entries(extensionStats)
//         .sort((a, b) => b[1].count - a[1].count)
//         .map(([ext, stats]) => ({
//           'Расширение': ext || '(без расширения)',
//           'Количество': stats.count,
//           'Размер': logger.formatFileSize(stats.size)
//         }));
//
//       if (statsTable.length > 0) {
//         logger.adapter.table(statsTable);
//       }
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
//
//           // Обновляем метаданные размера обработанных файлов
//           if (file.size) {
//             metadata.stats.processedSize += file.size;
//           }
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
//             filteredFiles.length,
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
//     logger.summary(allFiles.length, filteredFiles.length, successCount, errorCount, startTime, totalSize);
//
//     // Завершаем логирование и сбрасываем буферы
//     await logger.flush();
//
//     return { success: errorCount === 0 };
//   } catch (error) {
//     logger.error('Ошибка выполнения executor', error);
//
//     // Завершаем логирование и сбрасываем буферы даже в случае ошибки
//     try {
//       await logger.flush();
//     } catch (err) {
//       console.error('Ошибка при сохранении логов:', err);
//     }
//
//     return { success: false };
//   }
// }
