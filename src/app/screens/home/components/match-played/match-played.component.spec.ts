import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPlayedComponent } from './match-played.component';

describe('MatchPlayedComponent', () => {
  let component: MatchPlayedComponent;
  let fixture: ComponentFixture<MatchPlayedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchPlayedComponent]
    });
    fixture = TestBed.createComponent(MatchPlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
