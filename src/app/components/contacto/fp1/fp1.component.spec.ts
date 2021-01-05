import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fp1Component } from './fp1.component';

describe('Fp1Component', () => {
  let component: Fp1Component;
  let fixture: ComponentFixture<Fp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
