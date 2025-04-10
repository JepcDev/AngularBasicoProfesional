import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuralComponent } from './estructural.component';

describe('EstructuralComponent', () => {
  let component: EstructuralComponent;
  let fixture: ComponentFixture<EstructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstructuralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
