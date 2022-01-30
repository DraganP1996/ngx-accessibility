import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAccessibilityComponent } from './ngx-accessibility.component';

describe('NgxAccessibilityComponent', () => {
  let component: NgxAccessibilityComponent;
  let fixture: ComponentFixture<NgxAccessibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAccessibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
