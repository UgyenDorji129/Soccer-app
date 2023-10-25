import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingMatchDetailComponent } from './betting-match-detail.component';

describe('BettingMatchDetailComponent', () => {
  let component: BettingMatchDetailComponent;
  let fixture: ComponentFixture<BettingMatchDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BettingMatchDetailComponent]
    });
    fixture = TestBed.createComponent(BettingMatchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
