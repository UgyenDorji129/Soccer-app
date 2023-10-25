import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniFixtureComponent } from './mini-fixture.component';

describe('MiniFixtureComponent', () => {
  let component: MiniFixtureComponent;
  let fixture: ComponentFixture<MiniFixtureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniFixtureComponent]
    });
    fixture = TestBed.createComponent(MiniFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
