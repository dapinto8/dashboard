import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWrapperComponent } from './city-wrapper.component';

describe('CityWrapperComponent', () => {
  let component: CityWrapperComponent;
  let fixture: ComponentFixture<CityWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
