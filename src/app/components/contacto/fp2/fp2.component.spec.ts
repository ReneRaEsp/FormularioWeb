import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fp2Component } from './fp2.component';

describe('Fp2Component', () => {
  let component: Fp2Component;
  let fixture: ComponentFixture<Fp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
