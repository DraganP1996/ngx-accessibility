import { ElementRef } from '@angular/core';
import { ButtonAriaLabelDirective } from './button-aria-label.directive';

describe('ButtonAriaLabelDirective', () => {
  it('should create an instance', () => {
    const directive = new ButtonAriaLabelDirective(getMockElement());
    expect(directive).toBeTruthy();
  });
});

function getMockElement(): ElementRef {
  return new MockElement();
}

class MockElement extends ElementRef {
  constructor() {
    super(null);
  }
}
