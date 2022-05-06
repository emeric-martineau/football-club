import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPlaningComponent } from './category-planing.component';

describe('CategoryPlaningComponent', () => {
  let component: CategoryPlaningComponent;
  let fixture: ComponentFixture<CategoryPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPlaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
