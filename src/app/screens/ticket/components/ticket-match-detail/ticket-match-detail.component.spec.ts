import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMatchDetailComponent } from './ticket-match-detail.component';

describe('TicketMatchDetailComponent', () => {
  let component: TicketMatchDetailComponent;
  let fixture: ComponentFixture<TicketMatchDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketMatchDetailComponent]
    });
    fixture = TestBed.createComponent(TicketMatchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
