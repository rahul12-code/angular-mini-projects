import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessnumberComponent } from './guessnumber.component';

describe('GuessnumberComponent', () => {
  let component: GuessnumberComponent;
  let fixture: ComponentFixture<GuessnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuessnumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
