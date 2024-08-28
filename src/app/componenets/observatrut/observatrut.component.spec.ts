import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservatrutComponent } from './observatrut.component';

describe('ObservatrutComponent', () => {
  let component: ObservatrutComponent;
  let fixture: ComponentFixture<ObservatrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservatrutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservatrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
