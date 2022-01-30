import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAriaLabelDirective } from './button-aria-label.directive';



@NgModule({
  declarations: [
    ButtonAriaLabelDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ ButtonAriaLabelDirective ]
})
export class ButtonAriaLabelModule { }
