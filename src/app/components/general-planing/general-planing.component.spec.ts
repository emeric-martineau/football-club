import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPlaningComponent } from './general-planing.component';

describe('GeneralPlaningComponent', () => {
  let component: GeneralPlaningComponent;
  let fixture: ComponentFixture<GeneralPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPlaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
