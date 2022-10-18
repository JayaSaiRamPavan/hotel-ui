import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationsPageComponent } from './user-reservations-page.component';

describe('UserReservationsPageComponent', () => {
  let component: UserReservationsPageComponent;
  let fixture: ComponentFixture<UserReservationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReservationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReservationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
