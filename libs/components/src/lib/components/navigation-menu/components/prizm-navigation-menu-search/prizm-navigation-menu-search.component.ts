import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'prizm-navigation-menu-search',
  templateUrl: './prizm-navigation-menu-search.component.html',
  styleUrls: ['./prizm-navigation-menu-search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmNavigationMenuSearchComponent implements AfterViewInit {
  @ViewChild('searchInput', {
    read: ElementRef,
  })
  public searchInput: ElementRef<HTMLInputElement>;

  @Output() searchChange = new EventEmitter<string>();

  @Input() placeholder: string;

  @Input() searchDebounce: number;

  public searchFormControl: FormControl = new FormControl('');

  constructor(private destroy$: PrizmDestroyService) {}

  ngAfterViewInit(): void {
    this.searchFormControl.valueChanges
      .pipe(debounceTime(this.searchDebounce || 0), takeUntil(this.destroy$))
      .subscribe(this.searchChange);

    this.searchInput.nativeElement.focus();
  }

  public clearSearchValue(): void {
    this.searchFormControl.reset('');
  }
}
