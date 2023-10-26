import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMatchesComponent } from './all-matches.component';

describe('AllMatchesComponent', () => {
  let component: AllMatchesComponent;
  let fixture: ComponentFixture<AllMatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMatchesComponent]
    });
    fixture = TestBed.createComponent(AllMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
