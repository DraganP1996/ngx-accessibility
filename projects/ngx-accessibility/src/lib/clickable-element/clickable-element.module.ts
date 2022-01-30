import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickableElementDirective } from './clickable-element.directive';



@NgModule({
  declarations: [
    ClickableElementDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClickableElementDirective
  ]
})
export class ClickableElementModule { }
