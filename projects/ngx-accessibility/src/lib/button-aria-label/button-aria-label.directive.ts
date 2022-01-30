import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ButtonAriaLabelOptions } from './button-aria-label.model';

@Directive({
  selector: '[buttonAriaLabelDirective]'
})
export class ButtonAriaLabelDirective implements OnInit {

  @Input('buttonAriaLabelDirective') options?: ButtonAriaLabelOptions = {
    defaultAriaLabel: 'Clickable element',
    temporaryAriaLabel: `Clicked`
  };

  private readonly DEFAULT_ARIA_LABEL_DURATION = 3000;

  constructor(
     private _element: ElementRef 
  ) { }

  ngOnInit(): void {
    const element = this._element.nativeElement as HTMLElement;

    element.setAttribute('aria-label', this.options!.defaultAriaLabel);
  }

  @HostListener( 'click' )
  /**
   * Temporary change the value of the button's aria label after the click event
   */
  temporaryChangeAriaLabel(): void {
      const element = this._element.nativeElement as HTMLElement;
      const {defaultAriaLabel, temporaryAriaLabel, durationInMs} = this.options!;
      const changeDuration = this.options && durationInMs
        ? durationInMs
        : this.DEFAULT_ARIA_LABEL_DURATION;

      element.setAttribute('aria-label', temporaryAriaLabel);
      setTimeout(() => element.setAttribute('aria-label', defaultAriaLabel), changeDuration);
    }

}
