import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMonthYearComponent } from './ticket-month-year.component';

describe('TicketMonthYearComponent', () => {
  let component: TicketMonthYearComponent;
  let fixture: ComponentFixture<TicketMonthYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketMonthYearComponent]
    });
    fixture = TestBed.createComponent(TicketMonthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
