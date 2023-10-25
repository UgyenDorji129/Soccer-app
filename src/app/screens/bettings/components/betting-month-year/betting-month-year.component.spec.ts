import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingMonthYearComponent } from './betting-month-year.component';

describe('BettingMonthYearComponent', () => {
  let component: BettingMonthYearComponent;
  let fixture: ComponentFixture<BettingMonthYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BettingMonthYearComponent]
    });
    fixture = TestBed.createComponent(BettingMonthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
