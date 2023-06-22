import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { PrizmDestroyService } from '@prizm-ui/helpers';
import { DomSanitizer } from '@angular/platform-browser';
import { PrizmFilesProgress, PrizmFileValidationErrors } from './types';
import {
  PRIZM_FILEUPLOAD_OPTIONS,
  prizmFileUploadDefaultOptions,
  PrizmFileUploadOptions,
} from './file-upload-options';
import { PRIZM_FILE_UPLOAD } from '../../tokens';
import { Observable } from 'rxjs';
import { PrizmLanguageFileUpload } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmFileUploadComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dropzone') dropzoneElementRef!: ElementRef<HTMLDivElement>;

  options: PrizmFileUploadOptions = { ...prizmFileUploadDefaultOptions };
  constructor(
    private renderer: Renderer2,
    @Inject(PRIZM_FILE_UPLOAD) public readonly fileUpload$: Observable<PrizmLanguageFileUpload['fileUpload']>,
    @Optional() @Inject(PRIZM_FILEUPLOAD_OPTIONS) customOptions: PrizmFileUploadOptions
  ) {
    this.options = { ...this.options, ...customOptions };
  }

  private listeners: Array<() => void> = [];

  private validationErrors: { [filename: string]: PrizmFileValidationErrors } = {};

  @Input() accept = '';
  @Input() multiple = false;
  @Input() maxFileSize = Number.MAX_SAFE_INTEGER;
  @Input() maxFilesCount = Number.MAX_SAFE_INTEGER;
  @Input() disabled = false;

  @Input() set progress(progress: PrizmFilesProgress) {
    for (const key of Object.keys(progress)) {
      if (this.filesMap.has(key)) {
        this.filesMap.set(key, { ...this.filesMap.get(key), ...progress[key] });
      }
    }
  }

  @Output() beforeFilesChange = new EventEmitter<void>();
  @Output() filesChange = new EventEmitter<Array<File>>();
  @Output() filesValidationErrors = new EventEmitter<{ [filename: string]: PrizmFileValidationErrors }>();
  @Output() filesCountError = new EventEmitter<Array<string>>();
  @Output() retry = new EventEmitter<File>();

  public filesMap: Map<string, { file: File; progress: number; url?: string; error: boolean }> = new Map();

  get files(): Array<File> {
    return [...this.filesMap.entries()].map(([_, { file }]) => file);
  }

  public ngAfterViewInit(): void {
    this.listeners.push(
      this.renderer.listen(
        this.dropzoneElementRef.nativeElement,
        'dragover',
        this.dropzoneDragOverListener.bind(this)
      )
    );

    this.listeners.push(
      this.renderer.listen(
        this.dropzoneElementRef.nativeElement,
        'dragleave',
        this.dropzoneDragLeaveListener.bind(this)
      )
    );
  }

  public ngOnDestroy(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }

  public onDrop(event: DragEvent): void {
    event.preventDefault();

    if (this.disabled === false) {
      const { files } = event.dataTransfer;
      this.selectFiles(Array.from(files));
    }

    this.dropzoneElementRef.nativeElement.classList.remove('active');
  }

  public onFileInputChange(event: Event): void {
    const inputFile = event.target as HTMLInputElement;

    if (inputFile.files.length > 0) {
      this.selectFiles(Array.from(inputFile.files));
      inputFile.value = '';
    }
  }

  public getFileExtension(file: File): string {
    return '.' + file.name.split('.').pop();
  }

  public removeFile(filename: string, options: { emitEvent: boolean } = { emitEvent: true }): void {
    if (options.emitEvent) {
      this.beforeFilesChange.next();
    }
    const fileData = this.filesMap.get(filename);
    if (fileData.url) {
      URL.revokeObjectURL(fileData.url);
    }
    this.filesMap.delete(filename);

    if (options.emitEvent) {
      this.filesChange.next(this.files);
    }
  }

  public clearFiles(options: { emitEvent: boolean } = { emitEvent: true }): void {
    if (options.emitEvent) {
      this.beforeFilesChange.next();
    }

    for (const file of this.filesMap.keys()) {
      this.removeFile(file);
    }

    if (options.emitEvent) {
      this.filesChange.next([]);
    }
  }

  public getFileSize(size: number): string {
    if (size < 1024) {
      return size + 'bytes';
    } else if (size > 1024 && size < 1048576) {
      return (size / 1024).toFixed(1) + 'KB';
    } else if (size > 1048576) {
      return (size / 1048576).toFixed(1) + 'MB';
    }

    return '';
  }

  public filesTrackBy(index: number, file: { key: string; value: any }): string {
    return file.key;
  }

  public getStage(filename: string): { cssClass: keyof PrizmFileUploadOptions['statusNames']; name: string } {
    const { error, progress } = this.filesMap.get(filename);

    if (error) {
      return { cssClass: 'warning', name: this.options.statusNames.warning };
    }

    if (progress === 0) {
      return { cssClass: 'idle', name: this.options.statusNames.idle };
    }

    if (progress === 100) {
      return { cssClass: 'success', name: this.options.statusNames.success };
    }

    return { cssClass: 'progress', name: this.options.statusNames.progress };
  }

  public retryUpload(filename: string): void {
    this.retry.emit(this.filesMap.get(filename).file);
  }

  private dropzoneDragOverListener(event: DragEvent): void {
    event.preventDefault();
    if (this.disabled === false) {
      event.dataTransfer.dropEffect = 'copy';
      this.dropzoneElementRef.nativeElement.classList.add('active');
    } else {
      event.dataTransfer.dropEffect = 'none';
    }
  }

  private dropzoneDragLeaveListener(): void {
    this.dropzoneElementRef.nativeElement.classList.remove('active');
  }

  private selectFiles(files: File[]): void {
    const filteredFiles = files.filter(file => this.validate(file));

    if (filteredFiles.length === 0) {
      this.emitValidationErrors();
      return;
    }

    this.beforeFilesChange.next();

    if (filteredFiles.length > this.maxFilesCount) {
      this.filesCountError.next(filteredFiles.slice(this.maxFilesCount).map(file => file.name));
      filteredFiles.length = this.maxFilesCount;
    }

    this.emitValidationErrors();

    this.clearFiles({ emitEvent: false });

    for (const file of filteredFiles) {
      this.filesMap.set(file.name, {
        file,
        progress: 0,
        error: false,
        url: this.isImage(file) ? URL.createObjectURL(file) : null,
      });
    }

    this.filesChange.next(this.files);
  }

  private validate(file: File): boolean {
    const errors: PrizmFileValidationErrors = {};

    if (this.accept && this.isFileTypeValid(file) === false) {
      errors.accept = { expect: this.accept, current: file.type };
    }

    if (file.size > this.maxFileSize) {
      errors.size = { max: this.maxFileSize, current: file.size };
    }

    const valid = Object.keys(errors).length === 0;

    if (valid === false) {
      this.validationErrors[file.name] = errors;
    }

    return valid;
  }

  private emitValidationErrors(): void {
    if (Object.entries(this.validationErrors).length > 0) {
      this.filesValidationErrors.next(this.validationErrors);
      this.validationErrors = {};
    }
  }

  private isImage(file: File): boolean {
    return /^image\//.test(file.type);
  }

  private isFileTypeValid(file: File): boolean {
    const acceptableTypes = this.accept.split(',').map(type => type.trim());
    for (const type of acceptableTypes) {
      const acceptable = this.isWildcard(type)
        ? this.getTypeClass(file.type) === this.getTypeClass(type)
        : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();

      if (acceptable) {
        return true;
      }
    }

    return false;
  }

  private getTypeClass(fileType: string): string {
    return fileType.substring(0, fileType.indexOf('/'));
  }

  private isWildcard(fileType: string): boolean {
    return fileType.indexOf('*') !== -1;
  }
}
