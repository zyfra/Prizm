import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ZyfraDynamicDialogModule, ZyfraDynamicDialogService, ZyfraDynamicDialogRef, ZyfraDynamicDialogConfig } from '.';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZyfraButtonModule } from '../button/zyfra-button.module';

@Component({
  selector: 'storybook-dynamic-dialog',
  template: `
  <zyfra-button (click)="open()"
                label="open dialog"
                icon="pi pi-check"></zyfra-button>
  `,
  providers: [ZyfraDynamicDialogService]
})
class ZyfraDynamicDialogComponent implements OnDestroy {

  @Input() set data(data: unknown) {
    this.options.data = data;
  }
  @Input() set header(header: string) {
    this.options.header = header;
  }
  @Input() set footer(footer: string) {
    this.options.footer = footer;
  }
  @Input() set width(width: string) {
    this.options.width = width;
  }
  @Input() set height(height: string) {
    this.options.height = height;
  }
  @Input() set closeOnEscape(closeOnEscape: boolean) {
    this.options.closeOnEscape = closeOnEscape;
  }
  @Input() set baseZIndex(baseZIndex: number) {
    this.options.baseZIndex = baseZIndex;
  }
  @Input() set autoZIndex(autoZIndex: boolean) {
    this.options.autoZIndex = autoZIndex;
  }
  @Input() set dismissableMask(dismissableMask: boolean) {
    this.options.dismissableMask = dismissableMask;
  }
  @Input() set rtl(rtl: boolean) {
    this.options.rtl = rtl;
  }
  @Input() set style(style: string) {
    this.options.style = style;
  }
  @Input() set contentStyle(contentStyle: string) {
    this.options.contentStyle = contentStyle;
  }
  @Input() set styleClass(styleClass: string) {
    this.options.styleClass = styleClass;
  }
  @Input() set transitionOptions(transitionOptions: string) {
    this.options.transitionOptions = transitionOptions;
  }
  @Input() set closable(closable: boolean) {
    this.options.closable = closable;
  }
  @Input() set showHeader(showHeader: boolean) {
    this.options.showHeader = showHeader;
  }

  public options: ZyfraDynamicDialogConfig = {};

  private ref: ZyfraDynamicDialogRef;

  constructor(private dynamicDialogService: ZyfraDynamicDialogService) { }

  public open(): void {
    this.ref = this.dynamicDialogService.open(
      ExampleDynamicDialogComponent, this.options
    );
  }

  public ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}

@Component({
  template: `
  <div>
    user component
  </div>`
})
class ExampleDynamicDialogComponent { }

export default {
  title: 'Dialogs/DynamicDialog',
  component: ZyfraDynamicDialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ZyfraDynamicDialogComponent,
        ExampleDynamicDialogComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        ZyfraButtonModule,
        ZyfraDynamicDialogModule
      ],
    })
  ],
  parameters: {
    docs: {
      page: require('./zyfra-dynamic-dialog.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraDynamicDialogComponent> = (args: ZyfraDynamicDialogComponent) => ({
  component: ZyfraDynamicDialogComponent,
  props: args,
});


export const Simple = Template.bind({});
Simple.args = {
  data: 'Some data',
  header: "Header",
  footer: "Footer",
  width: "500px",
  height: "200px",
  closeOnEscape: false,
  baseZIndex: 0,
  autoZIndex: false,
  dismissableMask: false,
  rtl: false,
  style: '',
  contentStyle: '',
  styleClass: '',
  transitionOptions: '400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
  closable: true,
  showHeader: true
};
