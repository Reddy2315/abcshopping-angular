import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchallcustomersComponent } from './fetchallcustomers.component';

describe('FetchallcustomersComponent', () => {
  let component: FetchallcustomersComponent;
  let fixture: ComponentFixture<FetchallcustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchallcustomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchallcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
