import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ClickableElementOptions, ClickKeyboardKeys, ClickKeyboardKeysIndecies } from '.';

@Directive({
  selector: '[clickableElementAccessibility]'
})
export class ClickableElementDirective implements OnInit{

  @Input('clickableElementAccessibility') options?: ClickableElementOptions;

  private readonly clickKeyboardKeys: string[] = [ClickKeyboardKeys.enter, ClickKeyboardKeys.space];

  constructor(
    private _element: ElementRef
  ) { }

  ngOnInit(): void {
    const element = this._element.nativeElement as HTMLElement;

    this._setKeyboardKeysForClick();
    this._setRoleAriaAttribute(element);
    this._setTabIndex(element);
  }

  @HostListener('keydown', ['$event'])
  /**
   * Simulate a click on enter o space
   */
  handleKeywoardAccessibility(event: KeyboardEvent): void {
    const { key } = event;
    const element = this._element.nativeElement as HTMLElement;

    if (this.clickKeyboardKeys.includes(key))
      element.click();
  }

  /**
   * Check for which keys to make click events.
   */
  private _setKeyboardKeysForClick(): void {
    if (!this.options)
      return;
    
    const { skipEnterKey, skipSpaceKey, customCharaters} = this.options;

    if (skipEnterKey)
      delete this.clickKeyboardKeys[ClickKeyboardKeysIndecies.enter];
    if (skipSpaceKey)
      delete this.clickKeyboardKeys[ClickKeyboardKeysIndecies.space];
    if (customCharaters)
      customCharaters.forEach((customCharacter: string) => this.clickKeyboardKeys.push(customCharacter))
  }
  
  /**
   * Set the role="button" attribute
   * @param element 
   */
  private _setRoleAriaAttribute(element: HTMLElement): void {
    const isThereRoleAttribute = element.getAttribute('role');

    if (this.options?.skipRoleAttribute || isThereRoleAttribute)
      return;

    element.setAttribute('role', 'button');
  }

  /**
   * Set the tabindex="0" attribute
   * @param element 
   */
  private _setTabIndex(element: HTMLElement): void {
    const isThereTabIndexAttribute = element.getAttribute('tabindex') !== null || element.getAttribute('tabindex') === '-1';

    if (this.options?.skipTabIndex || isThereTabIndexAttribute)
      return;

    element.setAttribute('tabindex', '0');
  }
}
