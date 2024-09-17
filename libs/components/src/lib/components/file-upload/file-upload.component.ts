import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';

import {
  PrizmDestroyService,
  PrizmLetDirective,
  PrizmPluckPipe,
  PrizmSanitizerPipe,
} from '@prizm-ui/helpers';
import {
  PrizmFilesMap,
  PrizmFilesProgress,
  PrizmFileUploadOptions,
  PrizmFileValidationErrors,
} from './types';
import { PRIZM_FILEUPLOAD_OPTIONS, prizmFileUploadDefaultOptions } from './file-upload-options';
import { PRIZM_FILE_UPLOAD } from '../../tokens';
import { Observable } from 'rxjs';
import { PrizmLanguageFileUpload } from '@prizm-ui/i18n';
import { prizmI18nInitWithKey } from '../../services';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { PrizmButtonComponent } from '../button';
import { PrizmProgressBarComponent } from '../progress';
import { PrizmUploadStatusPipe } from './pipes/upload-status.pipe';
import { PrizmFileNamePipe } from './pipes/file-name.pipe';
import { PrizmFileExtensionPipe } from './pipes/file-extension.pipe';
import { PrizmFileSizePipe } from './pipes/file-size.pipe';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import {
  prizmIconsFileEmpty,
  prizmIconsArrowRotateRight,
  prizmIconsTrashEmpty,
} from '@prizm-ui/icons/full/source';
import { PrizmHintDirective } from '../../directives';
import { prizmIsTextOverflow } from '../../util';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';

@Component({
  selector: 'prizm-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PrizmUploadStatusPipe,
    PrizmFileNamePipe,
    PrizmFileExtensionPipe,
    PrizmFileSizePipe,
    PrizmSanitizerPipe,
    PrizmPluckPipe,
    PrizmLetDirective,
    PrizmProgressBarComponent,
    PrizmButtonComponent,
    PrizmIconsFullComponent,
    PrizmHintDirective,
  ],
  standalone: true,
  providers: [PrizmDestroyService, ...prizmI18nInitWithKey(PRIZM_FILE_UPLOAD, 'fileUpload')],
})
export class PrizmFileUploadComponent
  extends PrizmAbstractTestId
  implements OnChanges, AfterViewInit, OnDestroy
{
  @ViewChild('dropzone') dropzoneElementRef!: ElementRef<HTMLDivElement>;

  override readonly testId_ = 'ui_file_upload';
  readonly icon = prizmIconsFileEmpty;
  readonly prizmIsTextOverflow = prizmIsTextOverflow;
  public calculatedMaxFilesCount = Number.MAX_SAFE_INTEGER;
  public filesMap: PrizmFilesMap = new Map();

  options: PrizmFileUploadOptions = { ...prizmFileUploadDefaultOptions };

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  private listeners: Array<() => void> = [];
  private validationErrors: { [filename: string]: PrizmFileValidationErrors } = {};
  private _maxFilesCount = Number.MAX_SAFE_INTEGER;
  private _disabled = false;

  constructor(
    private renderer: Renderer2,
    @Inject(PRIZM_FILE_UPLOAD) public readonly fileUpload$: Observable<PrizmLanguageFileUpload['fileUpload']>,
    @Optional() @Inject(PRIZM_FILEUPLOAD_OPTIONS) customOptions: PrizmFileUploadOptions
  ) {
    super();
    this.options = { ...this.options, ...customOptions };

    this.iconsFullRegistry.registerIcons(
      prizmIconsArrowRotateRight,
      prizmIconsTrashEmpty,
      prizmIconsFileEmpty
    );
  }

  @Input() accept = '';
  @Input() multiple = false;
  @Input() maxFileSize = Number.MAX_SAFE_INTEGER;
  @Input() set maxFilesCount(value: number) {
    this._maxFilesCount = value ?? Number.MAX_SAFE_INTEGER;
    this.calculatedMaxFilesCount = this.multiple ? this._maxFilesCount : 1;
  }

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  @Input() set progress(progress: PrizmFilesProgress) {
    for (const key of Object.keys(progress)) {
      if (this.filesMap.has(key)) {
        this.filesMap.set(key, { ...this.filesMap.get(key), ...progress[key] } as any);
      }
    }
  }

  @Input() set files(files: File[] | undefined) {
    if (!files || (Array.isArray(files) && files.length === 0)) return;
    this.clearFiles({ emitEvent: false });
    for (const file of files) {
      this.filesMap.set(file.name, {
        file,
        progress: 100,
        error: false,
        url: this.isImage(file) ? URL.createObjectURL(file) : '',
      });
    }
  }

  @Output() beforeFilesChange = new EventEmitter<void>();
  @Output() filesChange = new EventEmitter<Array<File>>();
  @Output() fileRemoved = new EventEmitter<string>();
  @Output() fileAdded = new EventEmitter<string>();
  @Output() filesValidationErrors = new EventEmitter<{ [filename: string]: PrizmFileValidationErrors }>();
  @Output() filesCountError = new EventEmitter<Array<string>>();
  @Output() retry = new EventEmitter<File>();

  get files(): Array<File> {
    return [...this.filesMap.entries()].map(([_, { file }]) => file);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.multiple || changes.maxFilesCount) {
      this.calculatedMaxFilesCount = this.multiple ? this._maxFilesCount : 1;
    }

    if (this.files.length > this.calculatedMaxFilesCount) {
      this.filesCountError.next(this.files.slice(this.calculatedMaxFilesCount).map(file => file.name));
    }
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
      const { files } = event.dataTransfer as any;
      this.selectFiles(Array.from(files));
    }

    this.dropzoneElementRef.nativeElement.classList.remove('active');
  }

  public onFileInputChange(event: Event): void {
    const inputFile = event.target as HTMLInputElement as any;

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
    const fileData = this.filesMap.get(filename) as any;
    if (fileData.url) {
      URL.revokeObjectURL(fileData.url);
    }
    this.filesMap.delete(filename);
    this.fileRemoved.emit(filename);

    if (options.emitEvent) {
      this.filesChange.next(this.files);
    }
  }

  public clearFiles(options: { emitEvent: boolean } = { emitEvent: true }): void {
    if (options.emitEvent) {
      this.beforeFilesChange.next();
    }

    for (const file of this.filesMap.keys()) {
      this.removeFile(file, { emitEvent: options.emitEvent });
    }

    if (options.emitEvent) {
      this.filesChange.next([]);
    }
  }

  public filesTrackBy(index: number, file: { key: string; value: any }): string {
    return file.key;
  }

  public retryUpload(filename: string): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.retry.emit(this.filesMap.get(filename).file) as any;
  }

  private dropzoneDragOverListener(event: DragEvent): void {
    event.preventDefault();
    if (this.disabled === false) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      event.dataTransfer.dropEffect = 'copy';
      this.dropzoneElementRef.nativeElement.classList.add('active');
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
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

    if (this.multiple) {
      const filesCountDelta = this.calculatedMaxFilesCount - this.files.length;

      if (filteredFiles.length + this.files.length > this.calculatedMaxFilesCount) {
        this.filesCountError.next(filteredFiles.slice(filesCountDelta).map(file => file.name));
        filteredFiles.length = filesCountDelta;
      }
    }

    if (!this.multiple) {
      if (filteredFiles.length > 1) {
        this.filesCountError.next(filteredFiles.slice(1).map(file => file.name));
        filteredFiles.length = 1;
      }

      this.clearFiles({ emitEvent: false });
    }

    this.emitValidationErrors();

    for (const file of filteredFiles) {
      this.filesMap.set(file.name, {
        file,
        progress: 0,
        error: false,
        url: this.isImage(file) ? URL.createObjectURL(file) : (null as any),
      });
      this.fileAdded.emit(file.name);
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
