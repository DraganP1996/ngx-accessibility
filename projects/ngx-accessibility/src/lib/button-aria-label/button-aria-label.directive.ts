import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[buttonAriaLabelDirective]'
})
export class ButtonAriaLabelDirective implements OnInit {

  // The main aria label of the button
  @Input() mainAriaLabel!: string;

  // The temporary aria label to be read by the screen reader after the button is clicked
  @Input() temporaryAriaLabel?: string

  @HostListener( 'click' )
  /**
   * Temporary change the value of the button's aria label after the click event
   */
  temporaryChangeAriaLabel(): void {
      const element = this._element.nativeElement as HTMLElement;

      if (!this.temporaryAriaLabel) {
          return;
        }

      element.setAttribute('aria-label', this.temporaryAriaLabel);
      setTimeout(() => element.setAttribute('aria-label', this.mainAriaLabel), 3000);
    }

  constructor(
     private _element: ElementRef 
  ) { }

  ngOnInit(): void {
    const element = this._element.nativeElement as HTMLElement;

    element.setAttribute('aria-label', this.mainAriaLabel);
    element.setAttribute('role', 'button');
  }

}
