import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitypageComponent } from './citypage.component';

describe('CitypageComponent', () => {
  let component: CitypageComponent;
  let fixture: ComponentFixture<CitypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitypageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
