import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "primeng/api";
import { SplitterExtended } from "./splitter";

@NgModule({
  imports: [CommonModule],
  exports: [SplitterExtended, SharedModule],
  declarations: [SplitterExtended]
})
export class SplitterModule { }
