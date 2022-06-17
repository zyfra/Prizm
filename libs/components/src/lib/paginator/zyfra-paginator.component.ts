import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

type PageOption = number | Record<string, unknown>;

export interface PageChangeEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'zyfra-paginator',
  templateUrl: './zyfra-paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraPaginatorComponent {
  /**
   * Number of total records.
   */
  @Input() totalRecords = 0;
  /**
   *  Data count to display per page.
   */
  @Input() rows = 0;
  /**
   * 	Zero-relative number of the first row to be displayed.
   */
  @Input() first = 0;
  /**
   * 	Number of page links to display.
   */
  @Input() pageLinkSize = 5;
  /**
   * Array of integer/object values to display inside rows per page dropdown.
   * A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}]
   */
  @Input() rowsPerPageOptions: PageOption[] = null;
  /**
   * 	Inline style of the component.
   */
  @Input() style: any = null;
  /**
   * 	Style class of the component.
   */
  @Input() styleClass: string = null;
  /**
   * Whether to show it even there is only one page.
   */
  @Input() alwaysShow = true;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   */
  @Input() showFirstLastIcon = true;
  /**
   * Template instance to inject into the left side of the paginator.
   */
  @Input() templateLeft: TemplateRef<any> = null;
  /**
   * Template instance to inject into the right side of the paginator.
   */
  @Input() templateRight: TemplateRef<any> = null;
  /**
   * Template instance to inject into the dropdown item inside in the paginator.
   */
  @Input() dropdownItemTemplate: TemplateRef<any> = null;
  /**
   * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element
   * (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   */
  @Input() dropdownAppendTo: any = null;
  /**
   * 	Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   */
  @Input() dropdownScrollHeight = '200px';
  /**
   * Template of the current page report element.
   * Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   */
  @Input() currentPageReportTemplate: string;
  /**
   * Whether to display current page report.
   */
  @Input() showCurrentPageReport = false;
  /**
   * 	Whether to display a dropdown to navigate to any page.
   */
  @Input() showJumpToPageDropdown = false;
  /**
   * 	Whether to show page links.
   */
  @Input() showPageLinks = true;

  @Output() pageChange = new EventEmitter<PageChangeEvent>();

  public onPageChange(event: PageChangeEvent): void {
    this.pageChange.emit(event);
  }
}
