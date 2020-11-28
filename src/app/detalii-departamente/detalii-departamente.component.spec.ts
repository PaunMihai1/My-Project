import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliiDepartamenteComponent } from './detalii-departamente.component';

describe('DetaliiDepartamenteComponent', () => {
  let component: DetaliiDepartamenteComponent;
  let fixture: ComponentFixture<DetaliiDepartamenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaliiDepartamenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaliiDepartamenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
