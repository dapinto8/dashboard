import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityIsometricComponent } from './city-isometric.component';

describe('CityIsometricComponent', () => {
  let component: CityIsometricComponent;
  let fixture: ComponentFixture<CityIsometricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityIsometricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityIsometricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
