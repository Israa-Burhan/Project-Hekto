import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HectoDemoComponent } from './hecto-demo.component';

describe('HectoDemoComponent', () => {
  let component: HectoDemoComponent;
  let fixture: ComponentFixture<HectoDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HectoDemoComponent]
    });
    fixture = TestBed.createComponent(HectoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
