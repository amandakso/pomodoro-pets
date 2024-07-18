import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerdisplayComponent } from './timerdisplay.component';

describe('TimerdisplayComponent', () => {
  let component: TimerdisplayComponent;
  let fixture: ComponentFixture<TimerdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerdisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
