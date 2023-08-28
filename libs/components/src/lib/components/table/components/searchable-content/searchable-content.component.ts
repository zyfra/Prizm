import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'prizm-searchable-content',
  templateUrl: './searchable-content.component.html',
  styleUrls: ['./searchable-content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchableContentComponent {
  @Input() public searchString: string | null = null;
  @Input() public contentString: string | null = null;
  @HostBinding('attr.focused') @Input() public focused = false;

  get content(): { substr: string; marked: boolean }[] {
    const markedString: { substr: string; marked: boolean }[] = [];

    if (this.searchString && this.contentString) {
      let pos = 0;
      const contentStringLower = this.contentString.toLowerCase();
      const searchStringLower = this.searchString.toLowerCase();

      let prevFoundPosEnd = 0;
      let foundPos = -2;

      while (foundPos !== -1) {
        foundPos = contentStringLower.indexOf(searchStringLower, pos);
        if (foundPos == -1) {
          const sliceStartIdx = pos > prevFoundPosEnd ? pos : prevFoundPosEnd;
          markedString.push({ substr: this.contentString.slice(sliceStartIdx), marked: false });
          break;
        } else {
          if (prevFoundPosEnd === foundPos) {
            const slice = this.contentString.slice(pos, pos + this.searchString.length);
            markedString.push({ substr: slice, marked: true });
          } else {
            const slice1 = this.contentString.slice(prevFoundPosEnd, foundPos);
            const slice2 = this.contentString.slice(foundPos, foundPos + this.searchString.length);

            markedString.push({ substr: slice1, marked: false }, { substr: slice2, marked: true });
          }
          prevFoundPosEnd = foundPos + this.searchString.length;
        }
        pos = foundPos + 1;
      }
    }
    return markedString.length > 0 ? markedString : [{ substr: this.contentString as string, marked: false }];
  }
}
