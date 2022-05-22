import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalRanksComponent } from './final-ranks.component';

describe('FinalRanksComponent', () => {
  let component: FinalRanksComponent;
  let fixture: ComponentFixture<FinalRanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalRanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
