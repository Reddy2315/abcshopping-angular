import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchcustomerComponent } from './fetchcustomer.component';

describe('FetchcustomerComponent', () => {
  let component: FetchcustomerComponent;
  let fixture: ComponentFixture<FetchcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchcustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
